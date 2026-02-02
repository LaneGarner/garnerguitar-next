import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout";
import styled from "styled-components";
import { theme } from "../../../utils/styles/theme";

const JazzCourseHome = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Jazz Guitar Courses - Garner Guitar</title>
      </Head>
      <ContainerStyled>
        <h2 className="heading-style">
          Jazz
          <br />
          Guitar Courses
        </h2>
        <div className="coming-soon">
          <p className="coming-soon-text">Coming Soon</p>
          <p>
            Jazz guitar courses are currently in development. Check back soon for lessons on jazz harmony, chord voicings, improvisation, and more.
          </p>
          <Link href="/courses">
            <a className="back-link">← Back to all courses</a>
          </Link>
        </div>
      </ContainerStyled>
    </Layout>
  );
};

export default JazzCourseHome;

const ContainerStyled = styled.div`
  margin-top: ${theme.sizes.s};
  margin-bottom: ${theme.sizes.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;

  .heading-style {
    font-size: ${theme.sizes.xl};
    font-family: monospace;
    text-align: center;
    margin-bottom: 0.25em;
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
    color: ${theme.colors.green};
    text-decoration: none;
    margin-top: ${theme.sizes.m};

    &:hover {
      text-decoration: underline;
    }
  }
`;
