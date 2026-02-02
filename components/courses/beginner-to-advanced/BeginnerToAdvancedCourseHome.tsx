import Head from "next/head";
import styled from "styled-components";
import { TbGuitarPick, TbMusic } from "react-icons/tb";
import { PiGuitarLight } from "react-icons/pi";
import { CourseCard, Layout } from "../../../components";
import { theme } from "../../../utils/styles/theme";
import { courses } from "../../../data/courseData";

const courseIcons = [
  <TbGuitarPick key="pick" />,
  <TbMusic key="music" />,
  <PiGuitarLight key="guitar" />,
];

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
        <h2 className="heading-style">Beginner to Advanced Guitar Courses</h2>
        <p className="course-description">{courseData.description}</p>
        <div className="course-cards">
          {courseData.courses.map((course, i) => (
            <CourseCard
              key={i}
              title={course.title}
              part={course.part}
              description={course.description}
              skills={course.skills}
              url={course.url}
              lessonCount={course.pages.filter((p) => p.title.trim()).length}
              isFree={i === 0}
              icon={courseIcons[i]}
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
    font-size: 2.25rem;
    font-family: monospace;
    text-align: center;
    margin-bottom: 0.25em;
  }

  .course-description {
    margin-bottom: ${theme.sizes.l};
    max-width: 900px;
    padding: 0 ${theme.sizes.m};
    text-align: center;
  }

  .course-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.xl};
  }
`;
