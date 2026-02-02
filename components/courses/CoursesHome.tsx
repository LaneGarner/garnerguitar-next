import { CourseCard, Layout } from "../../components";
import styled from "styled-components";
import Head from "next/head";
import { CourseTitleCard } from "../../components/courses";
import { theme } from "../../utils/styles/theme";
import Image from "next/image";

import { courses } from "../../data/courseData";

const CoursesHome = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>Online Guitar Courses - Garner Guitar</title>
        </Head>
        <CoursesPageStyled>
          <h2 className="heading-style">Online Guitar Courses</h2>
          <p>
            Whether you're picking up the guitar for the first time or looking to refine your technique, these courses provide a structured path to help you grow as a player. Each lesson builds on the last, covering essential skills like chord shapes, strumming patterns, music theory, and fretboard navigation. Work through video lessons at your own pace, practice with guided exercises, and develop the musicianship needed to play the songs you love.
          </p>
          <div className="course-title-cards">
            {courses.map((course) => (
              <CourseTitleCard key={course.shortName} title={course.title} img={course.img} shortName={`/courses#${course.shortName}`} />
            ))}
          </div>
          {courses.map((courseType) => (
            courseType.shortName === "beginner-to-advanced" && (<section key={courseType.shortName}>
              <h3 className="course-name-heading" id={courseType.shortName}>
                {courseType.title}
                {courseType.title.split(" ").length > 1 ? <br /> : " "}
                Guitar Courses
              </h3>
              <div className="course-description-container">
                <div>
                  <Image src={courseType.img} width={174} height={225} layout="fixed" alt="Garner Guitar book cover" />
                </div>
                <p>{courseType.description}</p>
              </div>
              <div className="course-cards">
                {courseType.courses.map((part, i) => (
                  <CourseCard
                    key={i}
                    title={part.title}
                    part={part.part}
                    courseName={courseType.title}
                    img={part.img}
                    description={part.description}
                    description2={part.description2}
                    skills={part.skills}
                    url={part.url}
                  />
                ))}
              </div>
            </section>)
          ))}
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

  .course-name-heading {
    font-size: ${theme.sizes.l};
    text-align: center;
    margin: 0 ${theme.sizes.l} ${theme.sizes.xs};
    scroll-margin: ${theme.sizes.header};
  }

  .course-description-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.l};
    /* margin: 0 5% ${theme.sizes.l} 5%; */
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

  .course-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.xl};
  }
`;
