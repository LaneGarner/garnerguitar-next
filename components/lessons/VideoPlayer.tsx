import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps): JSX.Element => {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/video/${videoId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load video");
        }

        setSignedUrl(data.url);
      } catch (err) {
        console.error("Failed to load video:", err);
        setError(err instanceof Error ? err.message : "Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchSignedUrl();
    }
  }, [videoId]);

  if (loading) {
    return (
      <VideoWrapper>
        <VideoPlaceholder>
          <span>Loading video...</span>
        </VideoPlaceholder>
      </VideoWrapper>
    );
  }

  if (error) {
    return (
      <VideoWrapper>
        <VideoPlaceholder $error>
          <span>{error}</span>
        </VideoPlaceholder>
      </VideoWrapper>
    );
  }

  if (!signedUrl) {
    return (
      <VideoWrapper>
        <VideoPlaceholder $error>
          <span>Video unavailable</span>
        </VideoPlaceholder>
      </VideoWrapper>
    );
  }

  return (
    <VideoWrapper>
      <VideoContainer>
        <iframe
          src={signedUrl}
          title={title || "Lesson video"}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </VideoWrapper>
  );
};

export default VideoPlayer;

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

const VideoPlaceholder = styled.div<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $error }) => ($error ? "#ffeaea" : theme.colors.neutral[14])};
  border-radius: 8px;
  min-height: 300px;
  color: ${({ $error }) => ($error ? "#c00" : theme.colors.neutral[5])};

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 200px;
  }
`;
