import { useState, useEffect, useRef, useCallback } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { theme } from "../utils";

// Interpolate a value based on scroll position
const interpolate = (
  scrollY: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number => {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  const progress = Math.min(Math.max((scrollY - inputMin) / (inputMax - inputMin), 0), 1);
  return outputMin + progress * (outputMax - outputMin);
};

const Header = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const [currentRoute, setCurrentRoute] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentRoute(router.route.slice(1));
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.route]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Escape key and click outside
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      isMenuOpen &&
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, handleKeyDown, handleClickOutside]);

  // Interpolate values based on scroll position (0 to 200px)
  const headerHeight = interpolate(scrollY, [0, 200], [140, 105]);
  const logoSize = interpolate(scrollY, [0, 200], [54, 40]);
  const titleSize = interpolate(scrollY, [0, 200], [4, 2.5]);
  const navOffset = interpolate(scrollY, [0, 200], [-14, -20]);
  const navPadding = interpolate(scrollY, [0, 200], [0, 8]);

  interface HeaderLinkInterface {
    name: string;
    url: string;
  }

  const headerLinks: HeaderLinkInterface[] = [
    { name: "Home", url: "" },
    { name: "Courses", url: "courses" },
    { name: "Resources", url: "resources" },
  ];

  return (
    <HeaderStyled style={{ height: headerHeight, '--title-size': `${titleSize}rem` } as React.CSSProperties}>
      <div className="header-content">
        <Link href="/" className="heading">
          <Logo size={logoSize} />
          <h1 className="heading-style title">GarnerGuitar.com</h1>
        </Link>
        <BurgerButton
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          $isOpen={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </div>
      <nav className="desktop-nav" style={{ transform: `translateY(${navOffset}px)`, paddingTop: navPadding, paddingBottom: navPadding }}>
        {headerLinks.map((link, i) => (
          <Link key={i} href={`/${link.url}`} className={`header-link ${link.url === currentRoute && "header-link-active"}`}>
            {link.name}
          </Link>
        ))}
      </nav>
      <MobileNav ref={menuRef} id="mobile-nav" $isOpen={isMenuOpen}>
        {headerLinks.map((link, i) => (
          <Link
            key={i}
            href={`/${link.url}`}
            className={`mobile-link ${link.url === currentRoute && "mobile-link-active"}`}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </MobileNav>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid ${theme.colors.neutral[12]};
  background: ${theme.colors.neutral[14]};

  @media (max-width: 900px) {
    height: auto !important;
  }

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      justify-content: space-between;
      padding: 0.75rem 1rem;
    }
  }

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 500px;
    border-radius: 4px;

    @media (max-width: 900px) {
      width: auto;
      justify-content: flex-start;
      min-width: 0;
    }

    svg {
      flex-shrink: 0;
    }


    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .title {
    margin: 0 0 0 10px;
    transform: translateY(2px);
    font-size: var(--title-size);

    @media (max-width: 900px) {
      font-size: clamp(2rem, 16vw - 1.5rem, 4rem);
    }

    @media (max-width: 350px) {
      display: none;
    }
  }

  .desktop-nav {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin-top: 0.25rem;

    @media (max-width: 900px) {
      display: none;
    }

    .header-link {
      padding: 0.5rem 1rem;
      min-height: 44px;
      display: flex;
      align-items: center;
      font-size: 1em;
      border-radius: 4px;
      transition: background-color 150ms ease;

      &:hover {
        background-color: ${theme.colors.neutral[13]};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.green};
        outline-offset: 2px;
      }
    }

    .header-link-active {
      font-weight: bold;
      text-decoration: underline dashed;
      text-decoration-color: ${theme.colors.neutral[2]};
      text-underline-offset: 8px;
    }
  }
`;

const BurgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  border-radius: 4px;

  @media (max-width: 900px) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.green};
    outline-offset: 2px;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${theme.colors.neutral[2]};
    border-radius: 2px;
    transition: transform 200ms ease, opacity 200ms ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateY(8px) rotate(45deg)" : "translateY(0) rotate(0)"};
    }

    &:nth-child(2) {
      margin: 6px 0;
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateY(-8px) rotate(-45deg)" : "translateY(0) rotate(0)"};
    }
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${theme.colors.neutral[14]};
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: max-height 200ms ease, opacity 200ms ease;
    border-top: ${({ $isOpen }) => ($isOpen ? `1px solid ${theme.colors.neutral[12]}` : "none")};
  }

  .mobile-link {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 0.75rem 1.5rem;
    font-size: 1.1em;
    border-left: 3px solid transparent;
    transition: background-color 150ms ease, border-color 150ms ease;

    &:hover {
      background-color: ${theme.colors.neutral[13]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: -2px;
    }
  }

  .mobile-link-active {
    font-weight: bold;
    border-left-color: ${theme.colors.green};
    background-color: ${theme.colors.neutral[13]};
  }
`;
