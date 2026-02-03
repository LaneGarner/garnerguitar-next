import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { TbGuitarPick, TbMusic } from "react-icons/tb";
import { PiGuitarLight } from "react-icons/pi";
import { FaGuitar } from "react-icons/fa";
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
        <div className="description-card">
          <FaGuitar className="card-icon" aria-hidden="true" />
          <h3 className="card-title">About This Series</h3>
          <div className="description-box">
            <p>{courseData.description}</p>
          </div>
        </div>
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
    margin-bottom: 1em;
  }

  .coming-soon-banner {
    font-size: ${theme.sizes.l};
    font-weight: bold;
    color: ${theme.colors.gold};
    margin-bottom: ${theme.sizes.s};
  }

  .description-card {
    background-color: ${theme.colors.neutral[3]};
    border-radius: ${theme.sizes.s};
    padding: 1.5rem 2rem;
    box-shadow: ${theme.utils.shadows.primary};
    margin-bottom: ${theme.sizes.l};
    max-width: 900px;
    width: 90%;
    text-align: center;

    .card-icon {
      font-size: 2.25rem;
      color: ${theme.colors.gold};
      margin-bottom: 0.75rem;
      opacity: 0.9;
    }

    .card-title {
      font-size: 1.2rem;
      color: white;
      margin: 0;

      &::after {
        content: "";
        display: block;
        width: 60%;
        height: 2px;
        background-color: ${theme.colors.gold};
        margin: 0.5rem auto 0;
      }
    }

    .description-box {
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 0.5em;
      padding: 1rem 1.25rem;
      margin-top: 1rem;

      p {
        margin: 0;
        line-height: 1.6;
        color: ${theme.colors.neutral[13]};
        font-size: 0.95rem;
        text-align: left;
      }
    }
  }

  .course-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.xl};

    > *:nth-child(1),
    > *:nth-child(3) {
      margin-top: 1.5rem;
    }
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
