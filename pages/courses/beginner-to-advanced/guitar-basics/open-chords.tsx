import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const OpenChords = (): JSX.Element => {
  const page = courses[0].courses[0].pages[20];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <OpenChordsStyled>{page.title}</OpenChordsStyled>
    </CourseContainer>
  );
};

export default OpenChords;

const OpenChordsStyled = styled.div`
  //
`;
