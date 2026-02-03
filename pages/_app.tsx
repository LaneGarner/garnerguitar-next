import { useEffect, useCallback } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../utils/styles/global.scss";
import { CourseNavigationProvider, useCourseNavigation } from "../context";
import Menu from "../components/courses/Menu";
import { theme } from "../utils/styles/theme";

const PersistentMenu = () => {
  const router = useRouter();
  const courseNav = useCourseNavigation();

  // Show menu on course lesson pages (not the /courses index)
  const isCourseRoute =
    router.pathname.startsWith("/courses/") &&
    router.pathname.split("/").length > 2;
  const showMenu = isCourseRoute && courseNav?.course;

  const isOpen = courseNav?.isMobileMenuOpen ?? false;

  // Close menu on route change
  useEffect(() => {
    if (courseNav?.setMobileMenuOpen) {
      courseNav.setMobileMenuOpen(false);
    }
  }, [router.asPath]);

  // Handle Escape key to close menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen && courseNav?.setMobileMenuOpen) {
      courseNav.setMobileMenuOpen(false);
    }
  }, [isOpen, courseNav]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    courseNav?.setMobileMenuOpen(false);
  };

  if (!showMenu) return null;

  return (
    <>
      <MenuOverlay $isOpen={isOpen} onClick={handleOverlayClick} aria-hidden="true" />
      <PersistentMenuWrapper $isOpen={isOpen}>
        <Menu />
      </PersistentMenuWrapper>
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CourseNavigationProvider>
      <PersistentMenu />
      <Component {...pageProps} />
    </CourseNavigationProvider>
  );
};

export default App;

interface MenuWrapperProps {
  $isOpen: boolean;
}

const MenuOverlay = styled.div<MenuWrapperProps>`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 150;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: opacity 200ms ease, visibility 200ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

const PersistentMenuWrapper = styled.div<MenuWrapperProps>`
  position: fixed;
  top: 135px;
  left: 0;
  width: ${theme.sizes.sidebarWidth};
  height: calc(100vh - 135px);
  z-index: 100;

  @media (max-width: ${theme.breakpoints.md}) {
    top: 0;
    height: 100vh;
    z-index: 200;
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 200ms ease;
    box-shadow: ${({ $isOpen }) => ($isOpen ? theme.utils.shadows.dark : "none")};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;
