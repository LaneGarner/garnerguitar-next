import styled from "styled-components";
import Link from "next/link";
import { theme } from "../utils/styles/theme";

interface Props {
  children?: React.ReactNode;
  link: string;
  title?: string;
}

const Button = ({ title, link, children }: Props): JSX.Element => {
  return (
    <Link href={link}>
      <ButtonStyled>
        {title && title} {children && children}
      </ButtonStyled>
    </Link>
  );
};

export default Button;

const ButtonStyled = styled.a`
  background-color: ${theme.colors.gold};
  width: 300px;
  padding: ${theme.sizes.s};
  cursor: pointer;
  border-radius: ${theme.sizes.m};
  display: flex;
  justify-content: center;
`;
