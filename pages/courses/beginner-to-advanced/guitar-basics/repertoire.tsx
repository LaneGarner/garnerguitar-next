import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Repertoire = (): JSX.Element => {
  const page = courses[0].courses[0].pages[5];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <RepertoireStyled>{page.title}</RepertoireStyled>
    </CourseContainer>
  );
};

export default Repertoire;

const RepertoireStyled = styled.div`
  //
`;
