import { useState, useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    setCurrentRoute(router.route.slice(1));
  }, []);

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
    <HeaderStyled style={{ height: headerHeight }}>
      <Link href="/">
        <a className="heading">
          <Logo size={logoSize} />
          <h1 className="heading-style title" style={{ fontSize: `${titleSize}rem` }}>GarnerGuitar.com</h1>
        </a>
      </Link>
      <nav style={{ transform: `translateY(${navOffset}px)`, paddingTop: navPadding, paddingBottom: navPadding }}>
        {headerLinks.map((link, i) => (
          <Link key={i} href={`/${link.url}`}>
            <a className={`header-link ${link.url === currentRoute && "header-link-active"}`}>{link.name}</a>
          </Link>
        ))}
      </nav>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  border-bottom: 1px solid ${theme.colors.neutral[12]};
  background: ${theme.colors.neutral[14]};

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 500px;
    margin: auto;
    border-radius: 4px;

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .title {
    margin: 0 0 0 10px;
    transform: translateY(2px);
  }

  nav {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin-top: 0.25rem;

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
      text-underline-offset: 4px;
    }
  }
`;
