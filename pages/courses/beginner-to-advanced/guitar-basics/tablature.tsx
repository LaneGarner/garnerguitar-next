import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Tablature = (): JSX.Element => {
  const page = courses[0].courses[0].pages[13];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <TablatureStyled></TablatureStyled>
    </CourseContainer>
  );
};

export default Tablature;

const TablatureStyled = styled.div`
  //
`;
