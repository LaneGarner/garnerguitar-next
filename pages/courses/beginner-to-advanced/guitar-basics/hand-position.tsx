import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const HandPosition = (): JSX.Element => {
  const page = courses[0].courses[0].pages[10];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <HandPositionStyled></HandPositionStyled>
    </CourseContainer>
  );
};

export default HandPosition;

const HandPositionStyled = styled.div`
  //
`;
