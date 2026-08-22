import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout";
import styled from "styled-components";
import { theme } from "../../../utils/styles/theme";

const YoungBeginnerCourseHome = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Young Beginner Guitar Courses - Garner Guitar</title>
      </Head>
      <ContainerStyled>
        <h2 className="heading-style">Young Beginner Guitar Courses</h2>
        <div className="coming-soon">
          <p className="coming-soon-text">Courses in development</p>
          <p>
            These lessons will introduce students ages 6 to 12 to basic technique, rhythm, notation, chords, and familiar songs through short, manageable exercises.
          </p>
          <Link href="/courses/beginner-to-advanced/guitar-basics" className="course-link">
            Start with the free Guitar Basics course
          </Link>
          <Link href="/courses" className="back-link">
            ← Back to all courses
          </Link>
        </div>
      </ContainerStyled>
    </Layout>
  );
};

export default YoungBeginnerCourseHome;

const ContainerStyled = styled.div`
  margin-top: ${theme.sizes.s};
  margin-bottom: ${theme.sizes.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;

  .heading-style {
    font-size: 2.25rem;
    font-family: monospace;
    text-align: center;
    margin-bottom: 1em;
    padding: 0 1rem;
  }

  .coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 500px;
    padding: ${theme.sizes.xl} ${theme.sizes.m};

    p {
      margin-bottom: ${theme.sizes.m};
    }
  }

  .coming-soon-text {
    font-size: ${theme.sizes.l};
    font-weight: bold;
    color: ${theme.colors.gold};
  }

  .back-link {
    color: ${theme.colors.navy};
    text-decoration: none;
    margin-top: ${theme.sizes.m};

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.navy};
      outline-offset: 2px;
    }
  }

  .course-link {
    color: ${theme.colors.green};
  }
`;
