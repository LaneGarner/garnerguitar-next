import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const EasySongs = (): JSX.Element => {
  const page = courses[0].courses[0].pages[16];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <EasySongsStyled></EasySongsStyled>
    </CourseContainer>
  );
};

export default EasySongs;

const EasySongsStyled = styled.div`
  //
`;
