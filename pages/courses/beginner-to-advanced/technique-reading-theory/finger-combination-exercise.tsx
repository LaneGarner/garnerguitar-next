import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FingerCombination = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[1];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FingerCombinationStyled>
        <p>The matrix on this page contains all possible combinations of the numbers 1-4. It is a study in the one-finger-per-fret rule. Each number represents a left-hand finger. Start off with the first finger at the fifth fret. In the fifth position, the frets are not too far apart or too close together. Later, practice this exercise starting at the first fret then walk up to each fret/position and back down. These exercises prepare you for position playing.</p>

        <p>This finger exercise should be practiced in many ways: all combinations on one string, one combination on all strings, as an arpeggio with each combination on a set of four strings, as an arpeggio with string skips, and so on. Practice using different subdivisions with a metronome and pay close attention to coordinating the left and right hands. If you want to get crazy, apply these combinations to the spider exercise. Within the spider, you will not always be able to leave each finger down. When you must lift a finger to play a lower-sounding note, lift as minimally as possible while remaining in the ready position.</p>

        <Image src={`${course.imgPath}/finger-combinations.jpg`} width={600} height={533} alt="Finger combinations chart showing all permutations of 1-2-3-4" />
      </FingerCombinationStyled>
    </CourseContainer>
  );
};

export default FingerCombination;

const FingerCombinationStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
