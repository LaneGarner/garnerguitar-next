import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Tuning = (): JSX.Element => {
  const page = courses[0].courses[0].pages[8];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <TuningStyled>{page.title}</TuningStyled>
    </CourseContainer>
  );
};

export default Tuning;

const TuningStyled = styled.div`
  //
`;
