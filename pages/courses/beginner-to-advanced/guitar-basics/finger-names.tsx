import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const FingerNames = (): JSX.Element => {
  const page = courses[0].courses[0].pages[9];
  return (
    <CourseContainer courseTypeIndex={0} courseIndex={0} page={page}>
      <FingerNamesStyled></FingerNamesStyled>
    </CourseContainer>
  );
};

export default FingerNames;

const FingerNamesStyled = styled.div`
  //
`;
