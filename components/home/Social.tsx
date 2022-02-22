import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook, FaItunesNote } from "react-icons/fa";

import { theme } from '../../utils'

const Social = (): JSX.Element => {
  const [ hoveredIcon, setHoveredIcon ] = useState<string | null>(null);

  const SIZE: number = 40;
  const ICON_COLOR: string = "#111";
  const HOVER_COLOR: string = theme.colors.neutral[9];

  
  const handleMouseEnter = (e: React.MouseEvent) => {
    setHoveredIcon(e.currentTarget.getAttribute('data-link'))
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  return (
    <SocialStyled>
      <h2>Social</h2>
      <a data-link="youtube" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.youtube.com/c/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaYoutube  color={hoveredIcon === "youtube" ? HOVER_COLOR : ICON_COLOR} size={SIZE} />
      </a>
      <a data-link="instagram" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.instagram.com/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaInstagram  color={hoveredIcon === "instagram" ? HOVER_COLOR : ICON_COLOR} size={SIZE} />
      </a>
      <a data-link="facebook" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.facebook.com/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaFacebook color={hoveredIcon === "facebook" ? HOVER_COLOR : ICON_COLOR} size={SIZE} />
      </a>
      <a data-link="music" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://lanegarner.com" target="_blank" rel="noopener noreferrer">
        <FaItunesNote color={hoveredIcon === "music" ? HOVER_COLOR : ICON_COLOR} size={SIZE} />
      </a>
    </SocialStyled>
  );
};

export default Social;

const SocialStyled = styled.div`
  background-color: #565b5e;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 155.5px;
  h2 {
    color: #eee;
    font-family: Bebas Neue, sans-serif;
    font-size: 40px;
    font-weight: 100;
    margin: 1em;
    /* margin-right: em; */
  }
  svg {
    margin: 1em;
    transition: all linear 150ms;
  }
`;
