import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import { Social } from "./";
import { theme } from "../utils/styles/theme";

const Footer = (): JSX.Element => {
  return (
    <>
      <Social />
      <FooterStyled>
        <div className="footer-content">
          <Logo size={150} />
          <nav className="footer-nav">
            <Link href="/courses">Courses</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111;
  color: #fff;
  height: 278.5px;
  padding: ${theme.sizes.m};

  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    min-height: 200px;
    padding: ${theme.sizes.l} ${theme.sizes.m};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.sizes.m} ${theme.sizes.s};
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${theme.breakpoints.sm}) {
      transform: scale(0.85);
    }
  }

  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    @media (max-width: ${theme.breakpoints.sm}) {
      gap: 1rem;
    }

    a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      min-height: 44px;
      display: flex;
      align-items: center;
      padding: 0.5rem;

      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: 1rem;
      }

      &:hover {
        color: #fff;
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.green};
        outline-offset: 2px;
        border-radius: 4px;
      }
    }
  }
`;
