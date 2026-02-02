import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Scales = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[8];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <ScalesStyled>
        <p>Practice scales on their own or along with another technique. As you learn more theory, apply these same methods to new scales. Don't worry about the theory for now; just focus on playing the scale. Try to recognize the notes by saying the note name out loud. Don't just think it. Say it out loud! Scales are also a great way to practice technique in a slightly more musical context.</p>

        <h2>C major scale - open position</h2>
        <Image src={`${course.imgPath}/c-major-open.jpg`} width={600} height={300} alt="C major scale open position" />

        <h2>Natural notes in the open position</h2>
        <Image src={`${course.imgPath}/natural-notes-open.jpg`} width={600} height={300} alt="Natural notes in open position" />

        <h2>Chromatic scale: open position</h2>
        <p>The chromatic scale contains all twelve notes of the octave. Start by playing it in the open position and eventually progress to other positions up the neck.</p>
        <Image src={`${course.imgPath}/chromatic-scale-open.jpg`} width={600} height={300} alt="Chromatic scale in open position" />
      </ScalesStyled>
    </CourseContainer>
  );
};

export default Scales;

const ScalesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
