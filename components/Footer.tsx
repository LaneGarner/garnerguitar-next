import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import { Social } from "./";

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

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-nav {
    display: flex;
    gap: 1.5rem;

    a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;

      &:hover {
        color: #fff;
      }
    }
  }
`;
