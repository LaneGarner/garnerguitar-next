import Head from "next/head";
import styled from "styled-components";

import { Header, Footer, CourseHeader } from "./";
import { useCourseNavigation } from "../context";
import { theme } from "../utils/styles/theme";

export const siteTag = "Garner Guitar - take your playing to the next level";

interface Props {
  children?: React.ReactNode;
  home?: boolean;
  course?: boolean;
}

const Layout = ({ children, home, course }: Props): JSX.Element => {
  const courseNav = useCourseNavigation();

  // Show menu when we're on a course page and have valid course data
  const showCourseLayout = Boolean(course && courseNav?.course);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn guitar. Improve your skills. Take your playing to the next level." />
        <meta property="og:image" content="/../public/images/logo.png" />
        <meta name="og:title" content={siteTag} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTag}</title>
      </Head>
      {!course ? <Header /> : <CourseHeader />}
      <LayoutStyled $isCourse={showCourseLayout}>
        {/* Sidebar space - Menu is rendered persistently in _app.tsx */}
        {showCourseLayout && <aside className="course-sidebar" />}
        <main>{children}</main>
        {!showCourseLayout && <Footer />}
      </LayoutStyled>
    </>
  );
};

export default Layout;

interface LayoutStyledProps {
  $isCourse?: boolean;
}

const LayoutStyled = styled.div<LayoutStyledProps>`
  margin-top: ${theme.sizes.header};
  display: grid;
  min-height: calc(100vh - ${theme.sizes.header});
  grid-template-columns: ${({ $isCourse }) => ($isCourse ? `${theme.sizes.sidebarWidth} 1fr` : "1fr")};
  grid-template-rows: 1fr;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: ${({ $isCourse }) => ($isCourse ? theme.sizes.headerMobile : theme.sizes.header)};
    min-height: ${({ $isCourse }) => ($isCourse ? `calc(100vh - ${theme.sizes.headerMobile})` : `calc(100vh - ${theme.sizes.header})`)};
    grid-template-columns: 1fr;
  }

  .course-sidebar {
    position: sticky;
    top: ${theme.sizes.header};
    height: calc(100vh - ${theme.sizes.header});
    overflow: hidden;

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }

  main {
    ${({ $isCourse }) => !$isCourse && `
      display: flex;
      flex-direction: column;
    `}
  }
`;
