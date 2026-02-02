import Head from "next/head";
import styled from "styled-components";
import { Layout } from "..";
import LessonCompleteButton from "./LessonCompleteButton";

import { courses } from "../../data";
import { PagesInterface, CourseInterface } from "../../data/courseData";
import { useLessonProgress } from "../../hooks";
import { useCourseNavigation } from "../../context";
import { toKebabCase } from "../../utils";

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
          <h1>{page.title}</h1>
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
  h1 {
    font-size: 2em;
    margin-bottom: 0;
    margin-top: 0;
    position: sticky;
    top: 90px;
    background: white;
    padding: 0.5em 0 0 0;
    margin-top: -50px;
    padding-top: 50px;
    z-index: 100;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      height: 8px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.75) 25%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
    }
  }
  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    margin-top: 1.5em;
  }
  h3 {
    font-size: 1.6em;
    margin-bottom: 0.7em;
    margin-top: 0.7em;
  }
  p {
    margin-bottom: 1em;
  }
  img {
    margin: 0.5em 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .container {
    padding: 1em;
    padding-left: 2em;
    max-width: 720px;
  }
`;
