import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MinorBluesScales = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[4];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MinorBluesScalesStyled>
        <p>The minor blues scale is nearly identical to the minor pentatonic scale with one additional note called the blue note. Add this note to the same pentatonic "box" you have already learned in two places: the second finger on the fifth-string sixth-fret and the third finger (one fret out of position) on the third-string eighth-fret. Practice ascending and descending, then try mixing up the notes to solo on an A blues.</p>

        <h2>A minor blues scale</h2>
        <Image src={`${course.imgPath}/a-minor-blues.jpg`} width={600} height={617} alt="A minor blues scale" />
        <Image src={`${course.imgPath}/a-minor-blues-notation.jpg`} width={600} height={142} alt="A minor blues scale notation" />

        <h2>Triplets</h2>
        <p>The strings with blue notes are notated with a bracketed 3 above them. This rhythm is called a triplet. In this case it is an eighth-note triplet. Three eighth-note triplets fit into the same space as two eighth notes (one beat). You could also have sixteenth-note triplets, quarter-note triplets, half-note triplets, etc. Eighth-note triplets give music a gentle "swinging" feel and are commonly used in blues and jazz.</p>

        <h2>E minor blues scale</h2>
        <p>This scale is played in both the twelfth and open positions. Practice ascending and descending, then try mixing up the notes to solo on an E blues.</p>
        <Image src={`${course.imgPath}/e-minor-blues.jpg`} width={600} height={580} alt="E minor blues scale" />
        <Image src={`${course.imgPath}/e-minor-blues-notation.jpg`} width={600} height={133} alt="E minor blues scale notation" />
      </MinorBluesScalesStyled>
    </CourseContainer>
  );
};

export default MinorBluesScales;

const MinorBluesScalesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
