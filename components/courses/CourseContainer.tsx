import Head from "next/head";
import styled from "styled-components";
import { Layout } from "..";

import { courses } from "../../data";
import { PagesInterface, CourseInterface } from "../../data/courseData";
import Menu from "./Menu";

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

  const currentPageIndex = courseType.pages.findIndex(
    (p) => p.title === page.title
  );

  return (
    <Layout course>
      <Head>
        <title>{courseType.title}</title>
      </Head>
      <CourseContainerStyled>
        <Menu course={courseType} currentPageIndex={currentPageIndex} />
        <section className="container">
          <h1>{page.title}</h1>
          {children}
        </section>
      </CourseContainerStyled>
    </Layout>
  );
};

export default CourseContainer;

const CourseContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
    margin-top: 0;
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
  }
  .container {
    padding: 1em;
    max-width: 720px;
  }
`;
