import styled from "styled-components";

interface Props {
  title: string;
}

const Video = ({ title }: Props): JSX.Element => {
  return (
    <VideoStyled>
      <h3>{title}</h3>
    </VideoStyled>
  );
};

export default Video;

const VideoStyled = styled.div`
  background-color: #333;
  width: 300px;
  height: 200px;
  border-radius: 0.5em;
`;
