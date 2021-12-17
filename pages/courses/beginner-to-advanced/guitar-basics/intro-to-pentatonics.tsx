import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const IntroToPentatonics = (): JSX.Element => {
  const page = courses[0].courses[0].pages[19];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <IntroToPentatonicsStyled>{page.title}</IntroToPentatonicsStyled>
    </CourseContainer>
  );
};

export default IntroToPentatonics;

const IntroToPentatonicsStyled = styled.div`
  //
`;
