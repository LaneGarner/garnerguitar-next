import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Notation = (): JSX.Element => {
  const page = courses[0].courses[0].pages[11];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <NotationStyled>{page.title}</NotationStyled>
    </CourseContainer>
  );
};

export default Notation;

const NotationStyled = styled.div`
  //
`;
