import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const CircleOf4ths5ths = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[23];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <CircleOf4ths5thsStyled>
        <p>Now that you have played single-string major scales for each key, it is time to memorize each key signature. The circle of fourths/fifths contains all twelve chromatic notes. Following the circle counter-clockwise will give the interval of a perfect fourth between notes, while clockwise will give a perfect fifth.</p>

        <h2>Sharp Keys</h2>
        <p>Follow the circle clockwise in fifths. You will first come to the key of G. The key of G has one sharp and it is the note F#. F# is the seventh scale degree in the key of G. Each note along the circle of fifths adds one sharp each time. This added sharp is always the seventh scale degree of each new key (RED).</p>
        <p>For example, in the key of D, keep the F# and add C# (the seventh scale degree in D). Next comes the key of A. Keep the F# and C# and add G# (the seventh scale degree in A). Continue in the same way all around the circle of fifths.</p>

        <h2>Flat Keys</h2>
        <p>Follow the circle counterclockwise in fourths. This side works similarly to the sharp side, but rather than raising the seventh scale degree, we will lower the fourth scale degree (GREEN). Tip: the fourth scale degree also happens to be the next key in the circle of fourths.</p>
        <p>For example: the key of F has one flat, B-flat, which is the fourth scale degree in F (or the next key on the circle). For the key of B-flat, keep B-flat, and add the fourth degree (or next key) of E-flat. Continue similarly around the circle of fourths.</p>
        <Image src={`${course.imgPath}/circle-of-fourths-fifths.jpg`} width={600} height={600} alt="Circle of fourths and fifths" />

        <p><em>*G-flat and F-sharp are enharmonically the same.</em></p>

        <p><em>Note: Since the key of C has no sharps and no flats, the keys of C sharp and C flat have seven sharps and seven flats respectively.</em></p>

        <h2>Key signatures on the staff</h2>
        <p>The key signature is placed between the clef and time signature at the beginning of a piece of music. Sharps or flats are placed on the lines and spaces of the staff to tell you which notes are raised or lowered in a given key. When a key signature indicates raising or lowering a pitch, that pitch remains altered throughout the entire piece.</p>
        <Image src={`${course.imgPath}/key-sigs.jpg`} width={600} height={400} alt="Key signatures" />
      </CircleOf4ths5thsStyled>
    </CourseContainer>
  );
};

export default CircleOf4ths5ths;

const CircleOf4ths5thsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
