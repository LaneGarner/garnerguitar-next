import { Layout } from "../../components";
import styled from "styled-components";
import Head from "next/head";
import { CourseTitleCard } from "../../components/courses";
import { theme } from "../../utils/styles/theme";

import { courses } from "../../data/courseData";

const CoursesHome = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>Online Guitar Courses - Garner Guitar</title>
        </Head>
        <CoursesPageStyled>
          <h2 className="heading-style">Guitar Courses</h2>
          <p>
            Whether you're picking up the guitar for the first time or looking to refine your technique, these courses provide a structured path to help you grow as a player. Each lesson builds on the last, covering essential skills like chord shapes, strumming patterns, music theory, and fretboard navigation. Work through video lessons at your own pace, practice with guided exercises, and develop the musicianship needed to play the songs you love.
          </p>
          <div className="course-title-cards">
            {courses.map((course) => (
              <CourseTitleCard key={course.shortName} title={course.title} img={course.img} shortName={`/courses/${course.shortName}`} />
            ))}
          </div>
        </CoursesPageStyled>
      </Layout>
    </>
  );
};

export default CoursesHome;

const CoursesPageStyled = styled.div`
  margin-top: ${theme.sizes.s};
  margin-bottom: ${theme.sizes.xl};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${theme.sizes.xl};
    font-family: monospace;
  }

  .heading-style {
    margin-bottom: 0.25em;
  }

  p {
    margin-bottom: ${theme.sizes.m};
    width: 80%;
    max-width: 800px;
  }

  .course-title-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.l};
  }
`;
