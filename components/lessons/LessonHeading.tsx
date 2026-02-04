import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface LessonHeadingProps {
  level?: 2 | 3 | 4;
  children: ReactNode;
  id?: string;
}

const LessonHeading = ({
  level = 2,
  children,
  id,
}: LessonHeadingProps): JSX.Element => {
  // Generate an ID from the text content if not provided
  const headingId = id || (typeof children === "string"
    ? children.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    : undefined);

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingWrapper as={HeadingTag} id={headingId}>
      {children}
    </HeadingWrapper>
  );
};

export default LessonHeading;

const HeadingWrapper = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
  color: ${theme.colors.neutral[2]};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1.3em;
  }

  &:first-child {
    margin-top: 0;
  }
`;
