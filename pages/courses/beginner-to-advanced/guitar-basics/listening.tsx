import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const Listening = (): JSX.Element => {
  const page = courses[0].courses[0].pages[6];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <ListeningStyled>{page.title}</ListeningStyled>
    </CourseContainer>
  );
};

export default Listening;

const ListeningStyled = styled.div`
  //
`;
