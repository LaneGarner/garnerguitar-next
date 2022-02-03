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
    { name: "Courses", url: "/courses" },
    { name: "Method Book", url: "/book" },
    { name: "Lessons", url: "/lessons" },
    { name: "Printables", url: "/printables" },
    { name: "Contact", url: "/contact" },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <Social />
      <FooterStyled>
        <section className="footer-links-container">
          <div className="footer-links">
            {footerLinks.map((link, i) => (
              <Link key={i} href={link.url}>
                <a>{link.name}</a>
              </Link>
            ))}
          </div>
          <Logo size={150} />
        </section>
        <a href="https://lanegarner.dev/" target="_blank" className="copyright-text">
            <em>Copyright &copy; {currentYear} Lane Garner</em>
        </a>
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
  gap: 2em;

  .footer-links-container {
    display: flex;
    align-items: flex-end;
    gap: 3.5em;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .copyright-text {
    color: #565b5e;
    padding: 5px;
    font-size: 0.9em;
  }
`;
