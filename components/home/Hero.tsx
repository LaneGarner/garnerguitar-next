import { ReactElement } from "react";

import { FaGuitar, FaThumbsUp } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const Hero = (): JSX.Element => {
  interface HeroInterface {
    name: string;
    icon: ReactElement;
  }

  const skills: HeroInterface[] = [
    { name: "Learn guitar.", icon: <FaGuitar /> },
    { name: "Improve your skills.", icon: <FaThumbsUp /> },
    { name: "Take your playing to the next level.", icon: <AiFillCheckCircle /> },
  ];

  return (
    <HeroStyled>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>
            <span>{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled.div`
  background: url(images/online-guitar-lessons.jpg);
  min-height: 500px;
  background-size: cover;
  background-position: center;
  margin: 0 2em ${theme.sizes.xl} 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.utils.shadows.primary};
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 350px;
    margin: 0 ${theme.sizes.s} ${theme.sizes.l} ${theme.sizes.s};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 280px;
    margin: 0 ${theme.sizes.xs} ${theme.sizes.m} ${theme.sizes.xs};
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    background: #111111bb;
    color: white;
    margin: 1.5em;
    list-style-type: none;
    padding: 1em;
    font-size: 1.4em;
    font-weight: bold;
    border-radius: 0.3em;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: ${theme.breakpoints.md}) {
      margin: 0.75em 1em;
      font-size: 1.2em;
      padding: 0.75em 1em;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      margin: 0.5em;
      font-size: 1em;
      padding: 0.75em;
      width: calc(100% - 1em);
      max-width: 280px;
    }
  }

  span {
    margin-right: 0.6em;
    transform: translateY(3px);
    font-size: 1.1em;
    flex-shrink: 0;
  }
`;
