import {useState, useEffect} from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const VideoLessons = (): JSX.Element => {
  const [videos, setVideos] = useState<string[] | null>(null);

  const YOUTUBE_PLAYLIST_API = "https://www.googleapis.com/youtube/v3/playlistItems";
  const PLAYLIST_ID = "PLHyjW_PUXxkoVT16HUbVkJFHIRa9oW4XP";


  const getVideos = async (): Promise<void> => {
    const videosArr: string[] = [];
    const res = await fetch(`${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=20&&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
    const data = await res.json();
    data.items.forEach((item: any)=> videosArr.push(item.snippet.resourceId.videoId))
    setVideos(videosArr);
  };

  useEffect(() => getVideos(), []);
  useEffect(() => console.log(videos), [videos]);

  return (
    <VideoLessonsStyled>
      <h2 id="free-video-lessons" className="heading-style">
        Free Video Lessons
      </h2>
      <div className="grid">
        {videos && videos.map((video, i) => <ReactPlayer controls width={400} height={226} key={i} url={`https://www.youtube.com/watch?v=${video}`} />)}
        {/* {videos && videos.map((video, i) => <video width={400} height={226} key={i} src={`https://www.youtube.com/watch?v=${video}`} />)} */}
      </div>
    </VideoLessonsStyled>
  );
};

export default VideoLessons;

const VideoLessonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.sizes.xxl};
  h2 {
    font-size: 5em;
    margin-bottom: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
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
