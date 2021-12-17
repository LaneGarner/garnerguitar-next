import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Theory = (): JSX.Element => {
  const page = courses[0].courses[0].pages[7];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <TheoryStyled></TheoryStyled>
    </CourseContainer>
  );
};

export default Theory;

const TheoryStyled = styled.div`
  //
`;
