import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FourthString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[15];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FourthStringStyled>
        <p>Play E on the second fret with the second finger and F on the third fret with the third finger.</p>
        <Image src={`${course.imgPath}/fourth-string-notes.jpg`} width={600} height={249} alt="Fourth string notes" />

        <Image src={`${course.imgPath}/fourth-string-exercise-1.jpg`} width={600} height={131} alt="Fourth string exercise 1" />
        <Image src={`${course.imgPath}/fourth-string-exercise-2.jpg`} width={600} height={127} alt="Fourth string exercise 2" />
        <Image src={`${course.imgPath}/fourth-string-exercise-3.jpg`} width={600} height={182} alt="Fourth string exercise 3" />

        <h2>Frere Jacques</h2>
        <Image src={`${course.imgPath}/fourth-string-exercise-4.jpg`} width={600} height={167} alt="Frere Jacques notation" />

        <h2>Flats and repeats</h2>
        <Image src={`${course.imgPath}/flats-and-repeats.jpg`} width={600} height={145} alt="Flats and repeats" />
        <p>The next example uses two new devices: the flat accidental and the repeat sign. The flat sign resembles a lowercase b and is placed before a note on the staff. To flat a note, drop the note by one half-step (one fret). In this case we will play B-flat at the third-string third-fret (one fret lower than the B tuning note at the fourth-string fourth-fret).</p>
        <p>A repeat sign is a double bar line with two dots on either the left or the right. If the dots are on the right, it is a forward-facing repeat, and if they are on the left, it is a backward-facing repeat. Repeat signs sometimes have brackets which, for our purposes, make it more clear which section is to be repeated. To play a repeat, simply repeat the music between the two repeat signs.</p>

        <h2>Deck the Halls</h2>
        <Image src={`${course.imgPath}/fourth-string-exercise-5.jpg`} width={600} height={300} alt="Deck the Halls notation" />

        <h2>Sharps & pickup measures</h2>
        <p>A sharp looks like a number sign or hashtag. Think of a sharp as the opposite of a flat. To play a sharp, raise the note one half-step (one fret). In this example, play F# at the fourth-string fourth-fret (one fret higher than F). A pickup measure is an incomplete measure that comes at the beginning of a song. It may be helpful to count backwards to find which beat to start on. "The Dreidel Song" begins on the and-of-four and "O Christmas Tree" begins on beat three.</p>

        <h2>The Dreidel Song</h2>
        <Image src={`${course.imgPath}/dreidel.jpg`} width={600} height={208} alt="The Dreidel Song notation" />

        <h2>O Christmas Tree</h2>
        <Image src={`${course.imgPath}/christmas-tree.jpg`} width={600} height={314} alt="O Christmas Tree notation" />

        <h2>Take Me Out to the Ballgame</h2>
        <Image src={`${course.imgPath}/ballgame.jpg`} width={600} height={723} alt="Take Me Out to the Ballgame notation" />
      </FourthStringStyled>
    </CourseContainer>
  );
};

export default FourthString;

const FourthStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
