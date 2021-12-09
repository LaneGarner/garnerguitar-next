import React from "react";

import { FaGuitar, FaThumbsUp } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const Hero = (): JSX.Element => {
  interface HeroInterface {
    name: string;
    icon: React.ReactElement;
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
  background-attachment: fixed;
  background-size: cover;
  margin: 0 2em ${theme.sizes.xl} 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  li {
    background: #111111bb;
    color: white;
    margin: 2em;
    list-style-type: none;
    padding: 1em;
    font-size: 1.4em;
    font-weight: bold;
    border-radius: 0.3em;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    margin-right: 0.6em;
    transform: translateY(3px);
    font-size: 1.1em;
  }
`;
