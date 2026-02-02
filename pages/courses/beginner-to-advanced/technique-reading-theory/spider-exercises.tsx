import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const SpiderExercises = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[6];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <SpiderExercisesStyled>
        <p>Spider exercises are named for the appearance of the fingers crawling across the fretboard. Most of these exercises sound a bit dissonant and spooky but are great tools for building technique. Many beginners have trouble keeping their left-hand fingers in a ready position. These exercises help get your fingers accustomed to the feel of a good hand position.</p>

        <h2>Spider exercise one</h2>
        <p>One-finger-per-fret with the first finger at the fifth fret. Once you play a note, leave the finger down on the string until it is needed again—even when changing strings. Like always, start off slowly and intentionally.</p>
        <Image src={`${course.imgPath}/spider-1.jpg`} width={600} height={300} alt="Spider exercise one" />

        <h2>Spider exercise two</h2>
        <p>One-finger-per-fret at the fifth fret. See and feel the fingers walking across the strings. Keep each finger down after a note is played.</p>

        <h3>Descending</h3>
        <Image src={`${course.imgPath}/spider-2-descending.jpg`} width={600} height={300} alt="Spider exercise two descending" />

        <h3>Ascending</h3>
        <Image src={`${course.imgPath}/spider-2-ascending.jpg`} width={600} height={300} alt="Spider exercise two ascending" />
      </SpiderExercisesStyled>
    </CourseContainer>
  );
};

export default SpiderExercises;

const SpiderExercisesStyled = styled.div`
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
