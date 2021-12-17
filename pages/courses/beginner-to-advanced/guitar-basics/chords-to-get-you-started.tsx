import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const ChordsToGetYouStarted = (): JSX.Element => {
  const page = courses[0].courses[0].pages[12];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <ChordsToGetYouStartedStyled></ChordsToGetYouStartedStyled>
    </CourseContainer>
  );
};

export default ChordsToGetYouStarted;

const ChordsToGetYouStartedStyled = styled.div`
  //
`;
