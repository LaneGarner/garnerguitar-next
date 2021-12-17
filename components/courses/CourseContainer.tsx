import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "..";

import { courses } from "../../data";
import { PagesInterface } from "../../data/courseData";
import { theme } from "../../utils/styles/theme";
import Menu from "./Menu";

interface Props {
  children: React.ReactNode;
  title: string;
  courseTypeIndex: number;
  courseIndex: number;
  page: PagesInterface;
}

const CourseContainer = (props: Props): JSX.Element => {
  const { children, title, courseTypeIndex, courseIndex, page } = props;
  const courseType = courses[courseIndex].courses[courseTypeIndex];
  return (
    <Layout course>
      <Head>
        <title>{courseType.title}</title>
      </Head>
      <CourseContainerStyled>
        <Menu course={courseType} />
        {/* <aside className="menu">
          <h2>{course.title}</h2>
          <ul>
            {course.pages.map((page, i) => (
              <li>
                <Link href={`/beginner-to-advanced/1`}>
                  <a>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </aside> */}
        <section>
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
`;
