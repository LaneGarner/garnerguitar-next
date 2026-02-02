import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Notation = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[10];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <NotationStyled>

        <h2>Types of notation</h2>
        <p>Guitar music is notated in three common ways: Chord Diagrams, Tablature (or TAB), and Standard Notation. Each method of notation is useful on its own and when combined with the other methods.</p>

        <h2>Tablature</h2>
        <Image src={`${course.imgPath}/tab-example.jpg`} width={500} height={158} alt="Tablature example" />
        <p>Tablature, or "tab", is one of the most common ways to notate guitar music. More on tabs later in this section.</p>

        <h2>Standard notation</h2>
        <Image src={`${course.imgPath}/standard-notation-example.jpg`} width={500} height={105} alt="Standard notation example" />
        <p>Standard notation is the most common way to write music for most instruments. While many guitar players never learn standard notation, it is valuable to learn the basics at the very least. More on standard notation in Part 2 of this course.</p>

        <h2>Chord diagrams</h2>
        <Image src={`${course.imgPath}/chord-diagram-example-1.jpg`} width={150} height={236} alt="Simple chord diagram example" />

        <p>For our purposes, a chord is when more than one note or string is played at the same time. Chord diagrams are a common and convenient way to notate chord shapes. Chord diagrams are easier to decipher than staff or TAB notation due to their visual layout.</p>

        <p>A chord diagram is an image of a guitar neck with six vertical lines representing the strings and horizontal lines representing the frets. The left-most vertical line is the sixth string and the right-most vertical line is the first string. Solid dots show where to fret each string. Open circles above a string indicate open strings while an "x" above a string means do not play that string. In this book, the left-hand fingering is shown within the fretted dots. You will likely come across other methods of notating fingering such as numbers under each fretted string. If a chord is not played in the open position, a number (or roman numeral) indicates at which position to play it. Above each chord diagram is the chord name.</p>

        <div className="diagram-examples">
          <Image src={`${course.imgPath}/chord-diagram-example-2.jpg`} width={400} height={233} alt="Chord diagram with open strings" />
          <Image src={`${course.imgPath}/chord-diagram-example-3.jpg`} width={400} height={224} alt="Chord diagram with muted strings" />
          <Image src={`${course.imgPath}/chord-diagram-example-4.jpg`} width={400} height={258} alt="Chord diagram at different position" />
        </div>
      </NotationStyled>
    </CourseContainer>
  );
};

export default Notation;

const NotationStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  .diagram-examples {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1.5em;
  }
`;
