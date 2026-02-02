import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { CourseCard, Layout } from "../../../components";
import { theme } from "../../../utils/styles/theme";
import { courses } from "../../../data/courseData";

const BeginnerToAdvancedCoursesHome = (): JSX.Element => {
  const courseData = courses.find((c) => c.shortName === "beginner-to-advanced");

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <Layout>
      <Head>
        <title>Beginner to Advanced Guitar Courses - Garner Guitar</title>
      </Head>
      <ContainerStyled>
        <h2 className="heading-style">
          Beginner to Advanced
          <br />
          Guitar Courses
        </h2>
        <div className="course-description-container">
          <div>
            <Image
              src={courseData.img}
              width={174}
              height={225}
              layout="fixed"
              alt="Garner Guitar book cover"
            />
          </div>
          <p>{courseData.description}</p>
        </div>
        <div className="course-cards">
          {courseData.courses.map((course, i) => (
            <CourseCard
              key={i}
              title={course.title}
              part={course.part}
              courseName={courseData.title}
              img={course.img}
              description={course.description}
              description2={course.description2}
              skills={course.skills}
              url={course.url}
            />
          ))}
        </div>
      </ContainerStyled>
    </Layout>
  );
};

export default BeginnerToAdvancedCoursesHome;

const ContainerStyled = styled.div`
  margin-top: ${theme.sizes.s};
  margin-bottom: ${theme.sizes.xl};
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading-style {
    font-size: ${theme.sizes.xl};
    font-family: monospace;
    text-align: center;
    margin-bottom: 0.25em;
  }

  .course-description-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.l};
    max-width: 900px;
    padding: 0 ${theme.sizes.m};

    p {
      max-width: 600px;
    }
  }

  .course-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.xl};
  }
`;
