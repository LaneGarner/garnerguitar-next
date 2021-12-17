import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Practicing = (): JSX.Element => {
  const page = courses[0].courses[0].pages[3];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <PracticingStyled></PracticingStyled>
    </CourseContainer>
  );
};

export default Practicing;

const PracticingStyled = styled.div`
  //
`;
