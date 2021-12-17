import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const IntroToBarreChords = (): JSX.Element => {
  const page = courses[0].courses[0].pages[21];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <IntroToBarreChordsStyled>{page.title}</IntroToBarreChordsStyled>
    </CourseContainer>
  );
};

export default IntroToBarreChords;

const IntroToBarreChordsStyled = styled.div`
  //
`;
