import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { createClient } from "../../lib/supabase/client";

interface LessonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  courseSlug?: string;
  isFree?: boolean;
}

const LessonImage = ({
  src,
  alt,
  width = 700,
  height = 500,
  courseSlug,
  isFree = false,
}: LessonImageProps): JSX.Element => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      // If src is already a full URL or starts with /, use directly
      if (src.startsWith("http") || src.startsWith("/")) {
        setImageSrc(src);
        return;
      }

      // For free courses, images are in /public
      if (isFree) {
        setImageSrc(src);
        return;
      }

      // For paid courses, get signed URL from Supabase Storage
      try {
        const supabase = createClient();
        // Build storage path: courseSlug/filename
        const storagePath = courseSlug ? `${courseSlug}/${src}` : src;
        const { data, error } = await supabase.storage
          .from("lesson-images")
          .createSignedUrl(storagePath, 3600); // 1 hour expiry

        if (error) throw error;
        if (data?.signedUrl) {
          setImageSrc(data.signedUrl);
        }
      } catch (err) {
        console.error("Failed to load image:", err);
        setError(true);
      }
    };

    loadImage();
  }, [src, isFree]);

  if (error) {
    return (
      <ImagePlaceholder>
        <span>Image unavailable</span>
      </ImagePlaceholder>
    );
  }

  if (!imageSrc) {
    return (
      <ImagePlaceholder>
        <span>Loading...</span>
      </ImagePlaceholder>
    );
  }

  return (
    <ImageWrapper>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </ImageWrapper>
  );
};

export default LessonImage;

const ImageWrapper = styled.span`
  display: block;
  margin: 1em 0;

  img {
    border-radius: 4px;
  }
`;

const ImagePlaceholder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  min-height: 200px;
  margin: 1em 0;
  color: #666;
`;
