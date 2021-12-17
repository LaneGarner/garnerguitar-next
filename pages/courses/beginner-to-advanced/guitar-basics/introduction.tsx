import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Introduction = (): JSX.Element => {
  const page = courses[0].courses[0].pages[0];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <IntroductionStyled>{page.title}</IntroductionStyled>
    </CourseContainer>
  );
};

export default Introduction;

const IntroductionStyled = styled.div`
  //
`;
