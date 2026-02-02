import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BuildingMajorScales = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[22];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BuildingMajorScalesStyled>
        <p>You might recognize the major scale from the song "Do-Re-Mi" from The Sound of Music. Most Western music is based on the major scale. We will first learn all twelve major scales on single strings starting with the E major scale. Play on the first or sixth string at these frets:</p>
        <Image src={`${course.imgPath}/major-ascending.jpg`} width={600} height={92} alt="Major scale ascending frets" />

        <p>Going up in pitch is called <em><strong>ascending</strong></em>. Also play the scale <em><strong>descending</strong></em>, or going down.</p>
        <Image src={`${course.imgPath}/major-descending.jpg`} width={600} height={92} alt="Major scale descending frets" />

        <p>An <em><strong>interval</strong></em> is the distance between two notes. The first two intervals to learn are the <em><strong>half-step</strong></em> and the <em><strong>whole-step</strong></em>. On the guitar, a half step is one fret and a whole step is two frets. Analyzing the notes of the E major scale will reveal a pattern of half-steps and whole-steps.</p>
        <Image src={`${course.imgPath}/major-intervals.jpg`} width={600} height={156} alt="Major scale intervals" />

        <p>All major scales always contain all seven letters of the musical alphabet (A-G). These letters go in order and start on the same letter name as the major scale name. For example, the C major scale starts with the note C.</p>

        <p>What notes are in the C major scale you just played?</p>

        <ul>
          <li>1st fret - C</li>
          <li>3rd fret - D</li>
          <li>5th fret - E</li>
          <li>6th fret - F</li>
          <li>8th fret - G</li>
          <li>10th fret - A</li>
          <li>12th fret - B</li>
          <li>13th fret - C</li>
        </ul>

        <p>A <strong><em>key signature</em></strong> indicates which notes are sharp or flat in a particular key. The key of C major has only natural notes—no sharps or flats.</p>

        <p>Start from any note and use W-W-H-W-W-W-H and all seven letters of the musical alphabet to find each key signature.</p>

        <h2>Single string major scales</h2>
        <Image src={`${course.imgPath}/c-major.jpg`} width={600} height={323} alt="C major scale" />

        <h2>Sharp keys</h2>
        <Image src={`${course.imgPath}/sharp-keys.jpg`} width={600} height={1631} alt="Sharp keys" />

        <h2>Flat keys</h2>
        <Image src={`${course.imgPath}/flat-keys.jpg`} width={600} height={1866} alt="Flat keys" />
      </BuildingMajorScalesStyled>
    </CourseContainer>
  );
};

export default BuildingMajorScales;

const BuildingMajorScalesStyled = styled.div`
  h2 {
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
    margin-bottom: 0.25em;
  }
`;
