import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Repertoire = (): JSX.Element => {
  const page = courses[0].courses[0].pages[5];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <RepertoireStyled></RepertoireStyled>
    </CourseContainer>
  );
};

export default Repertoire;

const RepertoireStyled = styled.div`
  //
`;
