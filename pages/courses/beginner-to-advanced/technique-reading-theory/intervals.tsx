import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Intervals = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[24];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <IntervalsStyled>
        <p>An interval is the distance between two notes. In this book you will learn perfect, major, and minor intervals up to an octave. Intervals are named by the number of steps between letters in the musical alphabet and qualified by the number of half steps between two notes. You already know two intervals: the half step and the whole step. When counting half steps, do not count the first note.</p>
        <Image src={`${course.imgPath}/intervals.jpg`} width={600} height={688} alt="Intervals" />

        <p><em>*The tritone is both an augmented fourth and a diminished fifth. In this context, <strong>augmented</strong> means "raised" and <strong>diminished</strong> means "lowered."</em></p>

        <h2>Interval inversions</h2>
        <p>To invert an interval, move the lower note up one octave. When inverting intervals, perfect intervals remain perfect, major intervals become minor, minor intervals become major, augmented intervals become diminished, and diminished intervals become augmented.</p>
        <Image src={`${course.imgPath}/interval-inversions.jpg`} width={600} height={224} alt="Interval inversions" />

        <h2>The rule of nine</h2>
        <p>Notice that the original interval and inverted interval add up to nine. Why is this? There are eight notes in an octave. There is an octave between the bottom note of the original interval and the top note of the inverted interval; the note in the middle is counted twice as shown below.</p>
        <Image src={`${course.imgPath}/rule-of-nine-1.jpg`} width={600} height={373} alt="Rule of nine" />
        <Image src={`${course.imgPath}/rule-of-nine-2.jpg`} width={600} height={337} alt="Rule of nine 2" />
        <Image src={`${course.imgPath}/jm-closeup.jpg`} width={500} height={360} alt="Jazzmaster closeup" />
      </IntervalsStyled>
    </CourseContainer>
  );
};

export default Intervals;

const IntervalsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
