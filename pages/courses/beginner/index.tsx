import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../../components/layout";
import styled from "styled-components";

const BeginnerCourseHome = (): JSX.Element => {
  const imageSize = 400;
  return (
    <Layout course>
      <Head>
        <title>Beginner to Intermediate Guitar Course</title>
      </Head>
      <ContainerStyled>
        <h1>Beginner to Intermediate Guitar Course</h1>
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

export default BeginnerCourseHome;

const ContainerStyled = styled.div`
  ///
`;
