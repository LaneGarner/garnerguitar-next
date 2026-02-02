import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FirstString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[12];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FirstStringStyled>
        <p>Play F on the first fret with the first finger and G on the third fret with the third finger.</p>
        <Image src={`${course.imgPath}/first-string-notes.jpg`} width={600} height={239} alt="First string notes" />

        <h2>Simple melodies using first string</h2>
        <p>Use these simple melodies to practice reading standard notation on the first string in the open position.</p>
        <p><em>(*Note: the letters above the staff are chord changes that can be played along to these melodies).</em></p>
        <Image src={`${course.imgPath}/first-string-exercise-1.jpg`} width={600} height={113} alt="First string exercise 1" />
        <Image src={`${course.imgPath}/first-string-exercise-2.jpg`} width={600} height={94} alt="First string exercise 2" />
        <Image src={`${course.imgPath}/first-string-exercise-3.jpg`} width={600} height={114} alt="First string exercise 3" />
        <Image src={`${course.imgPath}/first-string-exercise-4.jpg`} width={600} height={77} alt="First string exercise 4" />
      </FirstStringStyled>
    </CourseContainer>
  );
};

export default FirstString;

const FirstStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
