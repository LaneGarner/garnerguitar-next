import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const CagedCommonProgressions = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[11];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <CagedCommonProgressionsStyled>
        <p>Now apply the CAGED shapes to an I-vi-IV-V progression in the key of C. Remember, these four chords can be reorganized to give you the chords of many (if not most) songs. Once you feel comfortable with the notated progressions, change the order and/or the key. Refer to the common chord-progression song list from Course 2. Remember, in the key of C: C is I, Am is vi, F is IV, and G is V. Practice these shapes as chords and as arpeggios.</p>

        <h2>Open C</h2>
        <Image src={`${course.imgPath}/caged-progression-open-c.jpg`} width={600} height={200} alt="CAGED progression open C" />

        <h2>Key of C, A position</h2>
        <Image src={`${course.imgPath}/caged-progression-a-position.jpg`} width={600} height={200} alt="CAGED progression A position" />

        <h2>Key of C, G position</h2>
        <Image src={`${course.imgPath}/caged-progression-g-position.jpg`} width={600} height={200} alt="CAGED progression G position" />

        <h2>Key of C, E position</h2>
        <Image src={`${course.imgPath}/caged-progression-e-position.jpg`} width={600} height={200} alt="CAGED progression E position" />

        <h2>Key of C, D position</h2>
        <Image src={`${course.imgPath}/caged-progression-d-position.jpg`} width={600} height={200} alt="CAGED progression D position" />

        <h2>Key of C, C position</h2>
        <Image src={`${course.imgPath}/caged-progression-c-position.jpg`} width={600} height={200} alt="CAGED progression C position" />
      </CagedCommonProgressionsStyled>
    </CourseContainer>
  );
};

export default CagedCommonProgressions;

const CagedCommonProgressionsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
