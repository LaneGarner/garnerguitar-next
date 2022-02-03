import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import debounce from "lodash.debounce";

import { FaAngleDown } from "react-icons/fa";
import { theme } from "../utils/styles/theme";

const ANIMATION_SPEED: string = "150ms";

const Header = (): JSX.Element => {
  const [small, setSmall] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentRoute(router.route.slice(1));
  }, []);

  useEffect(() => {
    console.log(currentRoute);
  }, [currentRoute]); 

  //resize header on scroll
  const handleScroll = () => {
    if (window.pageYOffset >= 200) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  };

  useEffect(() => {
    const debounceScroll = debounce(handleScroll, 5);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", debounceScroll);
    }

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  interface HeaderLinkInterface {
    name: string;
    url: string;
  }

  const headerLinks: HeaderLinkInterface[] = [
    { name: "Home", url: "" },
    { name: "Courses", url: "courses" },
    { name: "Method Book", url: "book" },
    { name: "Lessons", url: "lessons" },
    { name: "Resources", url: "resources" },
  ];

  return (
    <HeaderStyled style={small ? { height: theme.sizes.headerSmall } : { height: theme.sizes.header }}>
      <Link href="/">
        <a className="heading">
          <Logo size={!small ? 54 : 45} />
          <h1 className={`heading-style title ${small && "title-small"}`}>GarnerGuitar.com</h1>
        </a>
      </Link>
      <nav className={small ? "nav-small" : "nav"}>
        {headerLinks.map((link, i) =>
          link.name !== "Resources" ? (
            <Link key={i} href={`/${link.url}`}>
              <a className={`header-link ${small && "header-link-small"} ${link.url === currentRoute && "header-link-active"}`}>{link.name}</a>
            </Link>
          ) : (
            <Link key={i} href={`/${link.url}`}>
              <a className={`header-link ${small && "header-link-small"} ${link.url === currentRoute && "header-link-active"}`}>
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
  transition: height 100ms ease;

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 500px;
    margin: auto;
  }

  .logo {
    width: 60;
    height: 60;
  }

  .title {
    font-size: 4rem;
    margin: 0 0 0 10px;
    transform: translateY(2px);
    transition: font-size ${ANIMATION_SPEED} ease;
  }

  .title-small {
    font-size: 3rem;
  }

  nav {
    display: flex;
    justify-content: center;
    /* padding-bottom: 1em; */
    transition: all ${ANIMATION_SPEED} linear;

    .header-link {
      padding: 0 0.5em 0.5em 0.5em;
      margin: 0 0.5em;
      font-size: 1em;
      /* padding: 0.5em; */

      &:last-of-type {
        display: flex;
        align-items: center;
      }
      svg {
        color: #333;
        margin-left: 3px;
        transition: all ${ANIMATION_SPEED} linear;
      }
    }

    .header-link-active {
      font-weight: bold;
    }

    .header-link-small {
      margin-bottom: 0;
      transform: translateY(-0.5em);
      padding: 0.5em;
    }
  }

  .nav-small {
    padding-bottom: 0;
  }
`;
