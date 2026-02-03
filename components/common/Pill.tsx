import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface PillProps {
  children: React.ReactNode;
}

const Pill = ({ children }: PillProps): JSX.Element => {
  return <PillStyled>{children}</PillStyled>;
};

export default Pill;

const PillStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${theme.colors.neutral[12]};
  border: 1px solid ${theme.colors.neutral[6]};
  padding: 0.3em 0.75em;
  border-radius: 1em;
  font-size: 0.7rem;
  line-height: 1;
`;
