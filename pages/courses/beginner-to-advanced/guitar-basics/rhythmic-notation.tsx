import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const RhythmicNotation = (): JSX.Element => {
  const page = courses[0].courses[0].pages[17];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <RhythmicNotationStyled>{page.title}</RhythmicNotationStyled>
    </CourseContainer>
  );
};

export default RhythmicNotation;

const RhythmicNotationStyled = styled.div`
  //
`;
