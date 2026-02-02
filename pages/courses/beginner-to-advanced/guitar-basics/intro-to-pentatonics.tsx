import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const IntroToPentatonics = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[19];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <IntroToPentatonicsStyled>

        <h2>Pentatonic scales</h2>
        <p>Pentatonic scales are one of the most commonly used scales for soloing. Break down the word <strong>pentatonic</strong> and you get <em>penta</em> (five) and <em>tonic</em> (tones/notes). Technically speaking, any five-note scale is a pentatonic scale. The pentatonic scale we will focus on is called the minor pentatonic scale. In Part 3 you will learn the theory behind this scale and how to play it in all positions.</p>

        <h2>The A minor pentatonic</h2>
        <p>The first pentatonic scale to learn is A minor pentatonic. Start with your first finger on A at the sixth-string fifth-fret using the one-finger-per-fret rule. Practice ascending and descending, then try mixing up the notes to solo on an A blues.</p>

        <Image src={`${course.imgPath}/a-minor-pent-1.jpg`} width={200} height={250} alt="A minor pentatonic scale on neck diagram" />
        <Image src={`${course.imgPath}/a-minor-pent-2.jpg`} width={600} height={150} alt="A minor pentatonic scale staff and tab" />

        <h2>E minor pentatonic</h2>
        <p>Start with your first finger on E at the sixth-string twelfth-fret using the one-finger-per-fret rule. This is the same fingering as the A-minor pentatonic scale you have already learned. E minor pentatonic can also be played in the open position. Practice ascending and descending in each position, then try mixing up the notes to solo on an E blues.</p>

        <Image src={`${course.imgPath}/e-minor-pent-1.jpg`} width={200} height={250} alt="E minor pentatonic fretted position on neck" />
        <Image src={`${course.imgPath}/e-minor-pent-2.jpg`} width={600} height={150} alt="E minor pentatonic fretted staff and tab" />
        <Image src={`${course.imgPath}/e-minor-pent-3.jpg`} width={200} height={250} alt="E minor pentatonic open position on neck" />
        <Image src={`${course.imgPath}/e-minor-pent-4.jpg`} width={600} height={150} alt="E minor pentatonic open position staff and tab" />
      </IntroToPentatonicsStyled>
    </CourseContainer>
  );
};

export default IntroToPentatonics;

const IntroToPentatonicsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
