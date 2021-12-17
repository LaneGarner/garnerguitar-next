import styled from "styled-components";
import { CourseContainer, Introduction } from "../../../../components";
const GuitarBasicsCourse = () => {
  return (
    <CourseContainer title="Beginner to Advanced Guitar Courses" courseTypeIndex={0} courseIndex={0}>
      <div>index</div>
      <Introduction />
    </CourseContainer>
  );
};

export default GuitarBasicsCourse;

const ContainerStyled = styled.div`
  ///
`;
