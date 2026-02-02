import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Tuning = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[7];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <TuningStyled>
        <p><strong>Always tune your guitar before playing.</strong> It is not uncommon to tune your guitar many times while playing, even sometimes in the middle of a song or between songs when playing live. If you are not tuned properly, nothing you play will sound right. Two ways to tune a guitar are using an electronic tuner and tuning the guitar to itself.</p>

        <h2>Steps for tuning with an electronic tuner:</h2>
        <ol>
          <li>Play an open string and look at your tuner to decide if the note needs to be tuned up or down.</li>
          <li>Repeat the note every few seconds to give a consistent sound for the tuner to pick up.</li>
          <li>While playing a note and looking at the tuner (steps one and two), turn the tuning peg until the string is in tune.</li>
        </ol>

        <p>If a note is <strong><em>flat</em></strong>, it must be tuned up to pitch. If a note is sharp, it must be tuned down to pitch. It is best to always tune up to pitch so the tuning will hold. A beginner may find that it takes a long time to tune at first, but it will eventually become second nature.</p>

        <div className="tuning-directions">
          <div className="direction-group">
            <h3>Bass Strings</h3>
            <ul>
              <li>Counter-clockwise to tune up</li>
              <li>Clockwise to tune down</li>
            </ul>
          </div>

          <div className="direction-group">
            <h3>Treble Strings*</h3>
            <ul>
              <li>Clockwise to tune up</li>
              <li>Counter-clockwise to tune down</li>
            </ul>
          </div>
        </div>

        <p><em>*Use bass string tuning directions for all strings on guitars with six-in-line tuners like a Stratocaster or Telecaster.</em></p>

        <h2>Tuning a guitar to itself</h2>
        <p>When tuning a guitar to itself, it is helpful to use a reference pitch. A reference pitch may be available from another guitar, a piano or keyboard, or another instrument. If it is not possible to get a reference pitch, such as when picking up a neglected dusty guitar at a friend's house, it is acceptable to approximate the sixth string (E) and tune the rest of the guitar using this reference pitch. If playing with another musician, make sure that both instruments are tuned to the same reference pitch. To tune a guitar to itself, play the sixth-string fifth-fret and tune the open fifth string to match this pitch. Follow the guide below to tune the remaining strings.</p>

        <Image src={`${course.imgPath}/tuning.jpg`} width={600} height={234} alt="Tuning a guitar to itself diagram" />
      </TuningStyled>
    </CourseContainer>
  );
};

export default Tuning;

const TuningStyled = styled.div`
  h2 {
    margin-top: 1.5em;
  }
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  ol, ul {
    margin: 1em 0;
  }
  li {
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  .tuning-directions {
    display: flex;
    gap: 3em;
    margin: 1.5em 0;
  }
  .direction-group ul {
    margin-top: 0.5em;
  }
`;
