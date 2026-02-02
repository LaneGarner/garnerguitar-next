import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const DominantSeventhChords = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[3];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <DominantSeventhChordsStyled>
        <p>Now that you've learned to play a 12 bar blues with shuffle patterns, let's try it with seventh chords. To build a seventh chord start with a major triad (if you need a refresher on building triads revisit part two).</p>

        <h2>First, let's look at the key of A:</h2>
        <Image src={`${course.imgPath}/a-maj-scale-degrees.jpg`} width={600} height={146} alt="A major scale degrees" />

        <p>A major triad contains the root, third, and fifth scale degree; a dominant seventh chord adds the flat seven scale degree. To find the flatted seven, lower the seventh scale degree by a half step. In the key of A, the seventh scale degree is G#, so the flat seven is G. The notes in an A7 chord are as follows:</p>
        <Image src={`${course.imgPath}/a-7-chord-spelling.jpg`} width={600} height={154} alt="A7 chord spelling" />

        <p>Now let's play an A7 chord on the guitar. Begin with the familiar open A chord and add the flat seven (G). Which notes of the A chord could easily be traded for a G? This note is located in two convenient places: the open third string or the first string third fret.</p>
        <Image src={`${course.imgPath}/a7-chord-diagrams.jpg`} width={600} height={200} alt="A7 chord diagrams" />

        <h3>Apply these 7th chord voicings to the 12 bar blues in A and E:</h3>
        <Image src={`${course.imgPath}/blues-seventh-chord-voicings.jpg`} width={600} height={712} alt="Seventh chord voicings for blues" />
      </DominantSeventhChordsStyled>
    </CourseContainer>
  );
};

export default DominantSeventhChords;

const DominantSeventhChordsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
