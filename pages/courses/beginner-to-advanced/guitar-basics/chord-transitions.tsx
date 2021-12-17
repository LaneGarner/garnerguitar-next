import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const ChordTransitions = (): JSX.Element => {
  const page = courses[0].courses[0].pages[15];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <ChordTransitionsStyled>{page.title}</ChordTransitionsStyled>
    </CourseContainer>
  );
};

export default ChordTransitions;

const ChordTransitionsStyled = styled.div`
  //
`;
