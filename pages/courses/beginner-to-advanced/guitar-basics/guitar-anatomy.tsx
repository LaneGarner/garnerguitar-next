import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const GuitarAnatomy = (): JSX.Element => {
  const page = courses[0].courses[0].pages[1];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <GuitarAnatomyStyled>{page.title}</GuitarAnatomyStyled>
    </CourseContainer>
  );
};

export default GuitarAnatomy;

const GuitarAnatomyStyled = styled.div`
  //
`;
