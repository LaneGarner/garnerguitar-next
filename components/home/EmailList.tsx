import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const EmailList = (): JSX.Element => {
  return (
    <EmailListStyled>
      <div>
        <Image
          src="/images/black-strat.png"
          width={400}
          height={400}
          alt="black and white stratocaster guitar"
          sizes="(max-width: 480px) 200px, (max-width: 768px) 300px, 400px"
        />
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

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    padding: ${theme.sizes.l} ${theme.sizes.s};
    margin-bottom: ${theme.sizes.l};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.sizes.m} ${theme.sizes.xs};
    margin-bottom: ${theme.sizes.m};
  }

  label {
    font-weight: bold;
    color: white;
  }

  input {
    margin-bottom: 1em;
    padding: 0.75em;
    width: 50%;
    border-radius: ${theme.sizes.xs};
    border-width: 1px;
    outline-color: ${theme.colors.navy};
    outline-width: 1px;
    font-size: 16px;
    min-height: 44px;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 80%;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
      max-width: 280px;
    }

    &:nth-of-type(2) {
      margin-bottom: 2em;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  div:nth-of-type(1) {
    width: 500px;
    transform: translateY(30px);

    @media (max-width: ${theme.breakpoints.md}) {
      width: 300px;
      transform: translateY(0);
      margin-bottom: ${theme.sizes.m};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 200px;
      margin-bottom: ${theme.sizes.s};
    }
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
      padding: 0 ${theme.sizes.s};
    }
  }

  h2 {
    font-size: 6em;
    color: white;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 4em;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 2.5em;
    }
  }

  p {
    background-color: #000000bb;
    color: white;
    padding: 10px;
    border-radius: 4px;
    max-width: 500px;
    text-align: center;
    margin: 0 2em 2em 2em;

    @media (max-width: ${theme.breakpoints.sm}) {
      margin: 0 0 1.5em 0;
      padding: 0.75em;
      font-size: 1em;
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
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
    min-height: 44px;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 80%;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
      max-width: 280px;
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.navy};
      outline-offset: 2px;
    }
  }
`;
