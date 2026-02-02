import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const TabAndStandardNotation = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[18];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <TabAndStandardNotationStyled>
        <Image src={`${course.imgPath}/jazz-man.jpg`} width={600} height={271} alt="Close up of jazz guitarist" />

        <p>Occasionally it may be helpful to notate music in tab and standard notation at the same time. This is especially useful to show where to play a note that can be played in many places on the neck. The next few examples use two staves (tab and standard notation) which consist of the exact same written music. Pay attention to the bracket on the left to know which system to move your eyes to next.</p>

        <h2>Rock and Roll Arpeggios</h2>
        <Image src={`${course.imgPath}/rock-arpeggios.jpg`} width={600} height={436} alt="Rock and roll arpeggios notation" />

        <h2>Pentatonic Blues</h2>
        <Image src={`${course.imgPath}/pentatonic-blues.jpg`} width={600} height={412} alt="Pentatonic blues notation" />

        <h2>Power Chords</h2>
        <Image src={`${course.imgPath}/power-chords.jpg`} width={600} height={320} alt="Power chords notation" />
      </TabAndStandardNotationStyled>
    </CourseContainer>
  );
};

export default TabAndStandardNotation;

const TabAndStandardNotationStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
