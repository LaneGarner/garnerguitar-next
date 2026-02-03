import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps): JSX.Element => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoWrapper>
      <VideoContainer>
        <iframe
          src={embedUrl}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </VideoWrapper>
  );
};

export default YouTubeEmbed;

const VideoWrapper = styled.div`
  margin: 1.5em 0;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${theme.colors.neutral[14]};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
