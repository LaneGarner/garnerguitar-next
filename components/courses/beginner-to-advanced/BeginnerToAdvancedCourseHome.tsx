import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { TbGuitarPick, TbMusic } from "react-icons/tb";
import { PiGuitarLight } from "react-icons/pi";
import { CourseCard, Layout } from "../../../components";
import { theme } from "../../../utils/styles/theme";
import { getCourseByShortName, isBeginnerToAdvancedRestricted } from "../../../utils/getCourseData";

const courseIcons = [
  <TbGuitarPick key="pick" />,
  <TbMusic key="music" />,
  <PiGuitarLight key="guitar" />,
];

const BeginnerToAdvancedCoursesHome = (): JSX.Element => {
  const courseData = getCourseByShortName("beginner-to-advanced");

  if (!courseData) {
    return <div>Course not found</div>;
  }

  const isComingSoon = isBeginnerToAdvancedRestricted();

  return (
    <Layout>
      <Head>
        <title>
          Beginner to Advanced Guitar Courses{isComingSoon ? " - Coming Soon" : ""} - Garner Guitar
        </title>
      </Head>
      <ContainerStyled>
        <h2 className="heading-style">Beginner to Advanced Guitar Courses</h2>
        {isComingSoon && <div className="coming-soon-banner">Coming Soon</div>}
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
              isComingSoon={isComingSoon}
              icon={courseIcons[i]}
            />
          ))}
        </div>
        <Link href="/courses" className="back-link">
          &larr; Back to all courses
        </Link>
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

  .coming-soon-banner {
    font-size: ${theme.sizes.l};
    font-weight: bold;
    color: ${theme.colors.gold};
    margin-bottom: ${theme.sizes.s};
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

  .back-link {
    color: ${theme.colors.navy};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.navy};
      outline-offset: 2px;
    }
  }
`;
