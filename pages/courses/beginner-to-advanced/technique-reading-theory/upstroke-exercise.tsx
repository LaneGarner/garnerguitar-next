import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const UpstrokeExercise = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[5];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <UpstrokeExerciseStyled>
        <p>Upstrokes tend to be weaker than downstrokes for many players. Not only is the motion slightly awkward, but it requires a literal fight against gravity. Therefore, practicing with upstrokes only is a useful challenge. This example applies upstrokes to open strings in quarter notes, though the concept can (and should) be played in any rhythmic or melodic context.</p>

        <Image src={`${course.imgPath}/upstroke-exercise.jpg`} width={600} height={200} alt="Upstroke exercise" />
      </UpstrokeExerciseStyled>
    </CourseContainer>
  );
};

export default UpstrokeExercise;

const UpstrokeExerciseStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
