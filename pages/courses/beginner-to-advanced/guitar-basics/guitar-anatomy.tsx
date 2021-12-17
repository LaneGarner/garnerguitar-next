import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const GuitarAnatomy = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const page = courses[0].courses[0].pages[1];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} courseIndex={courseIndex} page={page}>
      <GuitarAnatomyStyled></GuitarAnatomyStyled>
    </CourseContainer>
  );
};

export default GuitarAnatomy;

const GuitarAnatomyStyled = styled.div`
  //
`;
