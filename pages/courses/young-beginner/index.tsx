import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../../components/layout";
import styled from "styled-components";

const YoungBeginnerCourseHome = (): JSX.Element => {
  const imageSize = 400;
  return (
    <Layout course>
      <Head>
        <title>Young Beginner Guitar Course</title>
      </Head>
      <ContainerStyled>
        <h1>Young Beginner Guitar Course</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Image src="/images/profile.jpg" height={imageSize} width={imageSize} alt="Your Name" />
      </ContainerStyled>
    </Layout>
  );
};

export default YoungBeginnerCourseHome;

const ContainerStyled = styled.div`
  ///
`;
