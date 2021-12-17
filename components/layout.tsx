import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

import { Header, Footer, CourseHeader } from "./";

export const siteTag = "Garner Guitar - take your playing to the next level";

interface Props {
  children?: React.ReactNode;
  home?: boolean;
  course?: boolean;
}

const Layout = ({ children, home, course }: Props): JSX.Element => {
  const pathname = useRouter().pathname;
  // const router = useRouter();
  // useEffect(() => console.log(router), []);

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
      {!course ? <Header /> : <CourseHeader route={pathname} />}
      <LayoutStyled>
        <main>{children}</main>
        <Footer />
      </LayoutStyled>
    </>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  margin-top: 135px;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    /* "header" */ "main";
  /* "footer"; */
  main {
    /* grid-area: main; */
    /* overflow: auto; */
  }
`;
