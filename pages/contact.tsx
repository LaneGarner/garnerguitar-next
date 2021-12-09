import styled from "styled-components";

const Contact = (): JSX.Element => {
  return (
    <ContactStyled>
      <h1>Contact</h1>
    </ContactStyled>
  );
};

export default Contact;

const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
