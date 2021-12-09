import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../components";

const Lessons = (): JSX.Element => {
  return (
    <Layout>
      <h1>Lessons</h1>
      <LessonsContainerStyled>
        <Image src="/images/logo.jpg" height={250} width={375} />
        <div className="text">
          <Link href="/#free-video-lessons">
            <a>Free video lessons</a>
          </Link>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
          <Link href="/#free-video-lessons">
            <a>Method Book</a>
          </Link>
        </div>
      </LessonsContainerStyled>
    </Layout>
  );
};

export default Lessons;

const LessonsContainerStyled = styled.div`
  display: flex;

  .text {
    display: flex;
    flex-direction: column;
  }
`;
