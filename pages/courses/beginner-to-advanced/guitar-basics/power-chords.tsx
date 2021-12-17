import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const PowerChords = (): JSX.Element => {
  const page = courses[0].courses[0].pages[14];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <PowerChordsStyled></PowerChordsStyled>
    </CourseContainer>
  );
};

export default PowerChords;

const PowerChordsStyled = styled.div`
  //
`;
