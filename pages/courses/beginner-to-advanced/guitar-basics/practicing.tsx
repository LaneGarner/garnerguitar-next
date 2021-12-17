import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Practicing = (): JSX.Element => {
  const page = courses[0].courses[0].pages[3];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <PracticingStyled>{page.title}</PracticingStyled>
    </CourseContainer>
  );
};

export default Practicing;

const PracticingStyled = styled.div`
  //
`;
