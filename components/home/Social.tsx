import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook, FaItunesNote } from "react-icons/fa";

const Social = (): JSX.Element => {
  const size: number = 55;
  const iconColor: string = "#111";

  return (
    <SocialStyled>
      <h2>Social</h2>
      <a href="https://www.youtube.com/c/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaYoutube color={iconColor} size={size} />
      </a>
      <a href="https://www.instagram.com/garnerguitar" target="_blank" rel="noopener noreferrer">
        <FaInstagram color={iconColor} size={size} />
      </a>
      <a href="https://www.facebook.com/GarnerGuitar" target="_blank" rel="noopener noreferrer">
        <FaFacebook color={iconColor} size={size} />
      </a>
      <a href="https://lanegarner.com" target="_blank" rel="noopener noreferrer">
        <FaItunesNote color={iconColor} size={size} />
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
    margin-right: em;
  }
  svg {
    margin: 1em;
  }
`;
