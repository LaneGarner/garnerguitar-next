import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Caged = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[8];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <CagedStyled>
        <p>The CAGED system is a useful way to learn more advanced chords even if your understanding of music theory is not quite there yet. If you already know theory, then CAGED is a great way to view the instrument from an alternative perspective. Use CAGED to find chords, arpeggios, and scales in all keys and positions on the guitar neck. Along with a basic knowledge of the notes on the neck, CAGED will guide your playing up the neck and to new levels.</p>

        <p>CAGED is an acronym for some of the most common chord shapes on guitar: C, A, G, E, and D. Each of these shapes can be played as a barre chord by moving the shape up and fretting the previously open strings. Playing these barre chords may require alternate fingerings, and some have extra notes which can be added to the basic shape.</p>

        <h2>C shape</h2>
        <p>To play the C shape as a barre chord, first re-finger the chord with your fourth, third, and second fingers.</p>
        <p>Next, move all fingers up one fret and barre the third and first-strings first-fret with your first finger. The root note is notated in red throughout this lesson. Determine the root by the position where a chord shape is played on the neck.</p>
        <p>The full version of the C shape uses all four fingers and a barre and it can be kind of difficult to play. Try playing smaller parts of the chord to find some more useful voicings like these:</p>
        <Image src={`${course.imgPath}/c-shape-caged.jpg`} width={600} height={200} alt="C shape CAGED" />
        <h3>Useful voicings</h3>
        <Image src={`${course.imgPath}/c-shape-voicings.jpg`} width={600} height={150} alt="C shape voicings" />

        <h2>A shape</h2>
        <p>You will recognize the A shape from Part One. This shape can be fingered with a third finger barre or alternatively with fingers two, three, and four.</p>
        <Image src={`${course.imgPath}/a-shape-caged.jpg`} width={600} height={200} alt="A shape CAGED" />
        <h3>Useful voicings</h3>
        <Image src={`${course.imgPath}/a-shape-voicings.jpg`} width={600} height={150} alt="A shape voicings" />

        <h2>G shape</h2>
        <p>The G shape is particularly tricky to play as a barre chord. Playing parts of the full shape is considerably more useful than the full shape.</p>
        <Image src={`${course.imgPath}/g-shape-caged.jpg`} width={600} height={200} alt="G shape CAGED" />
        <h3>Useful voicings</h3>
        <Image src={`${course.imgPath}/g-shape-voicings.jpg`} width={600} height={150} alt="G shape voicings" />

        <h2>E shape</h2>
        <p>You will also recognize the E shape from Part One. This shape has many useful voicings.</p>
        <Image src={`${course.imgPath}/e-shape-caged.jpg`} width={600} height={200} alt="E shape CAGED" />
        <h3>Useful voicings</h3>
        <Image src={`${course.imgPath}/e-shape-voicings.jpg`} width={600} height={150} alt="E shape voicings" />

        <h2>D shape</h2>
        <p>Many beginners will struggle to play the full version of the D shape. Don't let this discourage you. There are some useful voicings that you can derive from this shape.</p>
        <Image src={`${course.imgPath}/d-shape-caged.jpg`} width={600} height={200} alt="D shape CAGED" />
        <h3>Useful voicings</h3>
        <Image src={`${course.imgPath}/d-shape-voicings.jpg`} width={600} height={150} alt="D shape voicings" />
      </CagedStyled>
    </CourseContainer>
  );
};

export default Caged;

const CagedStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
