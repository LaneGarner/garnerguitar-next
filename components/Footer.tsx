import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import { Social } from "./";
import { FaEnvelope } from "react-icons/fa";

const Footer = (): JSX.Element => {
  interface FooterLinkInterface {
    name: string;
    url: string;
  }

  const footerLinks: FooterLinkInterface[] = [
    { name: "Courses", url: "courses" },
    { name: "Method Book", url: "book" },
    { name: "Lessons", url: "lessons" },
    { name: "Printables", url: "printables" },
    { name: "Contact", url: "contact" },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <FooterContainerStyled>
      <Social />
      <FooterStyled>
        <Logo size={150} />
        <section className="footer-links">
          {footerLinks.map((link, i) => (
            <Link key={i} href={link.url}>
              <a>{link.name}</a>
            </Link>
          ))}
        </section>
        <section>
          <a id="mailto" href="mailto:Lane@GarnerGuitar.com">
            <FaEnvelope /> Lane@GarnerGuitar.com
          </a>
          <a href="https://lanegarner.dev/" target="_blank">
            <p className="copyright-text">
              <em>Copyright &copy; {currentYear} Lane Garner</em>
            </p>
          </a>
        </section>
      </FooterStyled>
    </FooterContainerStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  display: flex;
  background-color: #111;
  color: #fff;
  height: 278.5px;
  align-self: end;
  grid-area: main;

  .footer-links {
    display: flex;
    flex-direction: column;
  }
  .copyright-text {
    color: #565b5e;
    padding: 5px;
  }
`;

const FooterContainerStyled = styled.div``;
