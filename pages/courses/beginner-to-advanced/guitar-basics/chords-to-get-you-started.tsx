import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const ChordsToGetYouStarted = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[12];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <ChordsToGetYouStartedStyled>
        <p>Playing guitar comes down to two main techniques: chords and single-note melodies. A chord is played by sounding multiple notes at the same time. Think of each note of the chord as a voice in a choir singing different notes and creating harmony. Some of the most commonly used chords are called open chords because of their use of open strings.</p>

        <p>Take your time learning and memorizing these eight chords. Many of the chords presented later in this course are based on these same chords. While some might be difficult to play at first, stick with it, and they will become easier with time. You might have to adjust the position of your wrist and the angle of certain fingers to avoid unintentionally muting strings. To check that all the notes are ringing clearly, play each string of a chord individually. Next, strum all strings of the chord at once. Try downstrokes and upstrokes. Take note of similarities between each chord shape and be sure to memorize all eight chords.</p>

        <Image src={`${course.imgPath}/starting-chords.jpg`} width={700} height={500} alt="Eight starting chords: C, A, G, E, D, Am, Em, Dm" />

        <p>The first five chords spell out the word 'CAGED' and the last three are minor chords. Think of major as happy sounding and minor as sad sounding. With these eight chords and a capo you could play almost any song.</p>
      </ChordsToGetYouStartedStyled>
    </CourseContainer>
  );
};

export default ChordsToGetYouStarted;

const ChordsToGetYouStartedStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
