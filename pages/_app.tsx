import { useEffect, useCallback, useRef } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../utils/styles/global.scss";
import { CourseNavigationProvider, useCourseNavigation, SupabaseCourseProvider, useSupabaseCourse } from "../context";
import Menu from "../components/courses/Menu";
import { theme } from "../utils/styles/theme";
import { createClient } from "../lib/supabase/client";

const PersistentMenu = () => {
  const router = useRouter();
  const courseNav = useCourseNavigation();
  const supabaseCourse = useSupabaseCourse();

  // Show menu on course lesson pages (not the /courses index or category landing pages)
  // /courses = index, /courses/[category] = landing, /courses/[category]/[course] = course page
  const pathParts = router.pathname.split("/").filter(Boolean);
  const isCourseRoute = pathParts[0] === "courses" && pathParts.length >= 3;
  // Check both static and Supabase course contexts
  const showMenu = isCourseRoute && (courseNav?.course || supabaseCourse?.course);

  const isOpen = courseNav?.isMobileMenuOpen || supabaseCourse?.isMobileMenuOpen || false;
  const setMenuOpen = courseNav?.setMobileMenuOpen || supabaseCourse?.setMobileMenuOpen;

  // Close menu on route change
  useEffect(() => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  }, [router.asPath]);

  // Handle Escape key to close menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen && setMenuOpen) {
      setMenuOpen(false);
    }
  }, [isOpen, setMenuOpen]);

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
    setMenuOpen?.(false);
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
  const hasLinkedPurchases = useRef(false);

  // Link guest purchases when user signs in
  useEffect(() => {
    const supabase = createClient();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event) => {
        // Link purchases on sign in or initial session (email confirmation redirect)
        if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && !hasLinkedPurchases.current) {
          hasLinkedPurchases.current = true;
          try {
            await fetch("/api/link-purchases", { method: "POST" });
          } catch {
            // Non-critical - silently ignore failures
          }
        }

        // Reset flag on sign out so we can link again on next sign in
        if (event === "SIGNED_OUT") {
          hasLinkedPurchases.current = false;
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <CourseNavigationProvider>
      <SupabaseCourseProvider>
        <PersistentMenu />
        <Component {...pageProps} />
      </SupabaseCourseProvider>
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
