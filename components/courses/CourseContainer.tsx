import Head from "next/head";
import styled from "styled-components";
import { Layout } from "..";
import LessonCompleteButton from "./LessonCompleteButton";

import { courses } from "../../data";
import { PagesInterface, CourseInterface } from "../../data/courseData";
import { useLessonProgress } from "../../hooks";
import { useCourseNavigation } from "../../context";
import { toKebabCase } from "../../utils";
import { theme } from "../../utils/styles/theme";

interface Props {
  children: React.ReactNode;
  courseTypeIndex: number;
  course?: CourseInterface;
  courseIndex: number;
  page: PagesInterface;
}

const CourseContainer = (props: Props): JSX.Element => {
  const { children, courseTypeIndex, courseIndex, page } = props;
  const courseType = courses[courseIndex].courses[courseTypeIndex];
  const courseNav = useCourseNavigation();

  const lessonKey = courseNav
    ? `${courses[courseNav.courseIndex].shortName}:${toKebabCase(courseNav.course?.title || "")}:${toKebabCase(page.title)}`
    : null;
  const { isComplete, toggleComplete } = useLessonProgress(lessonKey);

  return (
    <Layout course>
      <Head>
        <title>{courseType.title}</title>
      </Head>
      <CourseContainerStyled>
        <section className="container">
          {children}
          <LessonCompleteButton
            isComplete={isComplete}
            onToggle={toggleComplete}
          />
        </section>
      </CourseContainerStyled>
    </Layout>
  );
};

export default CourseContainer;

const CourseContainerStyled = styled.div`
  overflow-x: hidden;

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    margin-top: 1.5em;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.3em;
    }
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 0.7em;
    margin-top: 0.7em;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.25em;
    }
  }

  p {
    margin-bottom: 1em;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1em;
    }
  }

  img {
    margin: 0.5em 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  /* Ensure Next.js Image components scale properly */
  span[style*="display: inline-block"],
  div[style*="display: inline-block"] {
    max-width: 100% !important;
  }

  /* Handle any iframes or embeds */
  iframe,
  video,
  embed,
  object {
    max-width: 100%;
    height: auto;
  }

  /* Responsive wrapper for video embeds */
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;

    iframe,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .container {
    padding: 1em;
    padding-left: 2em;
    max-width: 720px;
    overflow-x: hidden;

    @media (max-width: ${theme.breakpoints.md}) {
      padding-left: 1em;
      max-width: 100%;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0.75em;
    }

    > :first-child > h2:first-child,
    > :first-child > h3:first-child {
      margin-top: 0;
    }
  }
`;
