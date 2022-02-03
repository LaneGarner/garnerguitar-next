import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const EmailList = (): JSX.Element => {
  return (
    <EmailListStyled>
      <div>
        <Image src="/images/black-strat.png" width={400} height={400} alt="black and white stratocaster guitar" />
      </div>
      <div>
        <h2>Email List</h2>
        <p>Sign up to receive occasional notifications about new content, updates to online courses, free lessons, and more!</p>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <button>Sign up</button>
      </div>
    </EmailListStyled>
  );
};

export default EmailList;

const EmailListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${theme.sizes.xl};
  padding-bottom: ${theme.sizes.xxl};
  margin-bottom: ${theme.sizes.xl};
  background-color: ${theme.colors.neutral[2]};
  label {
    font-weight: bold;
    color: white;
  }
  input {
    margin-bottom: 1em;
    padding: 0.4em;
    width: 50%;
    border-radius: ${theme.sizes.xs};
    border-width: 1px;
    outline-color: ${theme.colors.navy};
    outline-width: 1px;
    &:nth-of-type(2) {
      margin-bottom: 2em;
    }
  }
  div:nth-of-type(1) {
    width: 500px;
    transform: translateY(30px);
  }
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 6em;
    color: white;
  }
  p {
    background-color: #000000bb;
    color: white;
    padding: 10px;
    border-radius: 4px;
    max-width: 500px;
    text-align: center;
    margin: 0 2em 2em 2em;
  }
  img {
    border-radius: 50%;
    width: 40%;
  }
  button {
    background-color: ${theme.colors.gold};
    border: none;
    padding: 1em;
    border-radius: 2em;
    width: 50%;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
  }
`;
