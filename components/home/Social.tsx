import React from "react";
import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook, FaItunesNote } from "react-icons/fa";

import { theme } from '../../utils'

const Social = (): JSX.Element => {
  const SIZE: number = 40;
  const ICON_COLOR: string = "#b0b5b8";

  return (
    <SocialStyled>
      <h2>Social</h2>
      <a href="https://www.youtube.com/c/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaYoutube color={ICON_COLOR} size={SIZE - 4} />
      </a>
      <a href="https://www.instagram.com/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaInstagram color={ICON_COLOR} size={SIZE} />
      </a>
      <a href="https://www.facebook.com/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaFacebook color={ICON_COLOR} size={SIZE - 4} />
      </a>
      <a href="https://lanegarner.com" target="_blank" rel="noopener noreferrer">
        <FaItunesNote color={ICON_COLOR} size={SIZE} />
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
  flex-wrap: wrap;
  height: 155.5px;
  padding: ${theme.sizes.s} ${theme.sizes.m};

  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    min-height: 120px;
    padding: ${theme.sizes.m};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.sizes.s};
    justify-content: space-evenly;
    width: 100%;
  }

  h2 {
    color: #eee;
    font-family: Bebas Neue, sans-serif;
    font-size: 40px;
    font-weight: 100;
    margin: 0.75em;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 32px;
      margin: 0.5em;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 28px;
      margin: 0.5em;
      width: 100%;
      text-align: center;
    }
  }

  a {
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  svg {
    margin: 0 2em;
    transition: all linear 150ms;

    @media (max-width: ${theme.breakpoints.md}) {
      margin: 0 1.5em;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      margin: 0 0.75em;
    }
  }
`;
