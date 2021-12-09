import styled from "styled-components";
import { theme } from "../../utils/styles/theme";
import Video from "./Video";

const VideoLessons = (): JSX.Element => {
  return (
    <VideoLessonsStyled>
      <h2 id="free-video-lessons" className="heading-style">
        Free Video Lessons
      </h2>
      <div className="grid">
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
        <Video title={"title"} />
      </div>
    </VideoLessonsStyled>
  );
};

export default VideoLessons;

const VideoLessonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.sizes.l};
  h2 {
    font-size: 5em;
    margin-bottom: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2em;
    /* grid-column-gap: 0px; */
    /* grid-row-gap: 0px; */
  }
  div:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  div:nth-of-type(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  div:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 2;
  }
  div:nth-of-type(4) {
    grid-area: 2 / 2 / 3 / 3;
  }
  div:nth-of-type(5) {
    grid-area: 3 / 1 / 4 / 2;
  }
  div:nth-of-type(6) {
    grid-area: 3 / 2 / 4 / 3;
  }
  div:nth-of-type(7) {
    grid-area: 4 / 1 / 5 / 2;
  }
  div:nth-of-type(8) {
    grid-area: 4 / 2 / 5 / 3;
  }
  div:nth-of-type(9) {
    grid-area: 5 / 1 / 6 / 2;
  }
  div:nth-of-type(10) {
    grid-area: 5 / 2 / 6 / 3;
  }
`;
