import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "..";

import { courses } from "../../data";
import { PagesInterface, CourseInterface } from "../../data/courseData";
import { theme } from "../../utils/styles/theme";
import Menu from "./Menu";
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
  const maxIndex = courseType.pages.length - 1;
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(0);

  const handlePageIndex = (pageIndex: number) => {
    setPrevIndex(pageIndex - 1);
    setNextIndex(pageIndex + 1);
  };

  useEffect(() => {
    courseType.pages.forEach((p, i) => {
      p.title === page.title && handlePageIndex(i);
    });
  }, []);

  console.log(`page headings: ${page.headings}`);

  return (
    <Layout course>
      <Head>
        <title>{courseType.title}</title>
      </Head>
      <CourseContainerStyled>
        <Menu course={courseType} />
        <section className="container">
          <div>
            {page !== courseType.pages[0] && (
              <Link href={page === courseType.pages[1] ? courseType.url : `${courseType.url}/${toKebabCase(courseType.pages[prevIndex].title)}`}>Back</Link>
            )}
            {page !== courseType.pages[maxIndex] && <Link href={`${courseType.url}/${toKebabCase(courseType.pages[nextIndex].title)}`}>Next</Link>}
          </div>
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
  }
  .container {
    padding: 1em;
  }
`;
