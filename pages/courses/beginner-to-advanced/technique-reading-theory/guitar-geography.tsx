import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const GuitarGeography = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[20];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <GuitarGeographyStyled>
        <p>Learning the note names all over the guitar neck is extremely important but often overlooked. This vital step will guide you toward gaining a full understanding of the instrument. An interval is the distance from one note to the next. The first two intervals to learn are the half-step and the whole-step.</p>

        <p><strong>Half-step:</strong> one fret<br />Open string to first fret<br />First fret to second fret etc.</p>

        <p><strong>Whole-step:</strong> two frets<br />First fret to third fret<br />Third fret to fifth fret<br />etc.</p>

        <p>The interval between most notes in the musical alphabet is a whole-step. For instance, A to B and C to D are both whole-steps. The two special cases of half-steps are between the notes E to F and B to C.</p>

        <Image src={`${course.imgPath}/musical-alphabet-with-text.jpg`} width={600} height={200} alt="The musical alphabet with half steps and whole steps" />

        <p><em>**A useful trick to remember the half-steps is to use the names of the first and second open strings: E and B. Half-steps occur from these two notes.</em></p>

        <p>The notes you have learned so far are called <em><strong>natural notes</strong></em>. Use the open string names you already know (E-A-D-G-B-E) to learn the natural notes up and down each string. Begin with the open-string letter and continue around the musical-alphabet circle.</p>

        <p>Be sure to remember the half-steps (one fret) from E to F and B to C.</p>

        <p>The interval between all other notes is a whole-step (two frets).</p>

        <p>Use the fret markers to help orient which fret you are on.</p>

        <p>The twelfth fret of each string is the same note name as that open string.</p>

        <p>Going around the circle and through the entire musical alphabet will bring you back to the original note. This interval is called an octave.</p>

        <Image src={`${course.imgPath}/neck-natural-notes.jpg`} width={600} height={300} alt="Natural notes on guitar neck" />

        <p>The notes you have learned so far are called <strong>"natural notes"</strong></p>

        <h3>There are two ways to alter a natural note:</h3>
        <ul>
          <li><strong>Sharp:</strong> Raise the note 1/2 step</li>
          <li><strong>Flat:</strong> Lower the note 1/2 step</li>
        </ul>

        <h3>Practice tips</h3>
        <ul>
          <li>Practice "playing and saying" the natural notes up and down each string.</li>
          <li>Once you feel comfortable with natural notes, add sharps and flats.</li>
          <li>As a test, put your finger down randomly on the fretboard and ask yourself which note you are playing.</li>
        </ul>

        <Image src={`${course.imgPath}/neck-all-notes.jpg`} width={600} height={300} alt="All notes on guitar neck" />
      </GuitarGeographyStyled>
    </CourseContainer>
  );
};

export default GuitarGeography;

const GuitarGeographyStyled = styled.div`
  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    margin-bottom: 1em;
  }
  li {
    margin-bottom: 0.5em;
  }
`;
