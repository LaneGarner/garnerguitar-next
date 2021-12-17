import React from "react";
import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const GuitarAccessories = (): JSX.Element => {
  const page = courses[0].courses[0].pages[2];
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0} page={page}>
      <GuitarAccessoriesStyled>{page.title}</GuitarAccessoriesStyled>
    </CourseContainer>
  );
};

export default GuitarAccessories;

const GuitarAccessoriesStyled = styled.div`
  //
`;
