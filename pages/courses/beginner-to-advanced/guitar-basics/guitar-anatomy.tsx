import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const GuitarAnatomy = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[1];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <GuitarAnatomyStyled>
        <Image src={`${course.imgPath}/guitar-anatomy.jpg`} width={700} height={540} alt="Guitar anatomy diagram" />
        <Image src={`${course.imgPath}/guitar-anatomy-2.jpg`} width={700} height={540} alt="Guitar anatomy diagram two" />
        <ul>
          <li><strong>Body:</strong> The large part of the guitar where the strings connect to the bridge.</li>
          <li><strong>Bridge:</strong> Where the strings attach to the body.</li>
          <li><strong>Bridge Pins:</strong> Pins on an acoustic guitar bridge to hold the strings in.</li>
          <li><strong>Fret Markers:</strong> Markers on the fretboard for certain fret numbers.</li>
          <li><strong>Fretboard:</strong> Front of the neck.</li>
          <li><strong>Frets:</strong> Horizontal metal wires on the neck.</li>
          <li><strong>Headstock:</strong> The top of the guitar where the strings attach to the tuning pegs.</li>
          <li><strong>Neck:</strong> The thin area between the headstock and body.</li>
          <li><strong>Nut:</strong> Plastic or bone piece on the headstock where the strings pass over.</li>
          <li><strong>Output Jack:</strong> Where you plug a cable in from an electric guitar to an amp.</li>
          <li><strong>Pickguard:</strong> Plastic plate on the body of the guitar to protect against "pick rash".</li>
          <li><strong>Pickups:</strong> Magnetic parts that are used to amplify the signal of an electric guitar.</li>
          <li><strong>Sound Hole:</strong> Hole in the center of an acoustic guitar body.</li>
          <li><strong>Strings:</strong> The metal or nylon parts that you play.</li>
          <li><strong>Tuning Pegs or Tuners:</strong> Gears at the top of the headstock used to tune the guitar.</li>
          <li><strong>Whammy Bar or Tremolo:</strong> A removable metal bar connected to the bridge on some electric guitars (like the Stratocaster) used to alter the pitch.</li>
        </ul>
      </GuitarAnatomyStyled>
    </CourseContainer>
  );
};

export default GuitarAnatomy;

const GuitarAnatomyStyled = styled.div`
  ul {
    margin-top: 1.5em;
  }
  li {
    margin-bottom: 0.75em;
  }
`;
