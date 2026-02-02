import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const SubdivisionStudies = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[4];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <SubdivisionStudiesStyled>
        <p>Subdivision practice is a useful way to work on technique, time, and reading. Apply these subdivisions to single notes, scales, chords, exercises, or really anything. Practice slowly and intentionally with a metronome. Try to "bury" the beat so that you almost don't hear the click of the metronome. Use all possible picking patterns.</p>

        <Image src={`${course.imgPath}/subdivision-studies.jpg`} width={600} height={400} alt="Subdivision studies exercise" />
      </SubdivisionStudiesStyled>
    </CourseContainer>
  );
};

export default SubdivisionStudies;

const SubdivisionStudiesStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
