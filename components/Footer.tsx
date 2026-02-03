import styled from "styled-components";
import Logo from "./Logo";
import { Social } from "./";

const Footer = (): JSX.Element => {
  return (
    <>
      <Social />
      <FooterStyled>
        <Logo size={150} />
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
`;
