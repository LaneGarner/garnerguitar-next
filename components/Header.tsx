import { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { FaAngleDown } from "react-icons/fa";
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
  const headerHeight = interpolate(scrollY, [0, 200], [140, 70]);
  const logoSize = interpolate(scrollY, [0, 200], [54, 40]);
  const titleSize = interpolate(scrollY, [0, 200], [4, 2.5]);
  const navOffset = interpolate(scrollY, [0, 200], [0, -12]);

  interface HeaderLinkInterface {
    name: string;
    url: string;
  }

  const headerLinks: HeaderLinkInterface[] = [
    { name: "Home", url: "" },
    { name: "Courses", url: "courses" },
    { name: "Method Book", url: "book" },
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
      <nav style={{ transform: `translateY(${navOffset}px)` }}>
        {headerLinks.map((link, i) =>
          link.name !== "Resources" ? (
            <Link key={i} href={`/${link.url}`}>
              <a className={`header-link ${link.url === currentRoute && "header-link-active"}`}>{link.name}</a>
            </Link>
          ) : (
            <Link key={i} href={`/${link.url}`}>
              <a className={`header-link ${link.url === currentRoute && "header-link-active"}`}>
                {link.name}
                <FaAngleDown />
              </a>
            </Link>
          )
        )}
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
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
  background: #eee;

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 500px;
    margin: auto;
  }

  .title {
    margin: 0 0 0 10px;
    transform: translateY(2px);
  }

  nav {
    display: flex;
    gap: 2em;
    justify-content: center;

    .header-link {
      padding: 0 0.1em;
      margin: 0;
      font-size: 1em;

      &:last-of-type {
        display: flex;
        align-items: center;
      }
      svg {
        color: #333;
        margin-left: 3px;
      }
    }

    .header-link-active {
      font-weight: bold;
      border-bottom: 1px ${theme.colors.neutral[2]} dashed;
    }
  }
`;
