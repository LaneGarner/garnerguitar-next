import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const BluesShuffle = (): JSX.Element => {
  const page = courses[0].courses[0].pages[18];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <BluesShuffleStyled>{page.title}</BluesShuffleStyled>
    </CourseContainer>
  );
};

export default BluesShuffle;

const BluesShuffleStyled = styled.div`
  //
`;
