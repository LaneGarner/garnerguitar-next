import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const PracticeLog = (): JSX.Element => {
  const page = courses[0].courses[0].pages[4];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <PracticeLogStyled></PracticeLogStyled>
    </CourseContainer>
  );
};

export default PracticeLog;

const PracticeLogStyled = styled.div`
  //
`;
