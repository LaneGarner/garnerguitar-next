import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const SecondString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[13];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <SecondStringStyled>
        <p>Play C on the first fret with the first finger and D on the third fret with the third finger.</p>
        <Image src={`${course.imgPath}/second-string-notes.jpg`} width={600} height={239} alt="Second string notes" />

        <h2>Second string melodies</h2>
        <Image src={`${course.imgPath}/second-string-exercise-1.jpg`} width={600} height={106} alt="Second string exercise 1" />
        <Image src={`${course.imgPath}/second-string-exercise-2.jpg`} width={600} height={117} alt="Second string exercise 2" />
        <Image src={`${course.imgPath}/second-string-exercise-3.jpg`} width={600} height={181} alt="Second string exercise 3" />

        <h2>First and second string melodies</h2>
        <Image src={`${course.imgPath}/first-and-second-string-exercise-1.jpg`} width={600} height={83} alt="First and second string melodies exercise 1" />

        <h3>Mary Had a Little Lamb</h3>
        <Image src={`${course.imgPath}/first-and-second-string-exercise-2.jpg`} width={600} height={171} alt="Mary Had a Little Lamb" />

        <h3>Jingle Bells</h3>
        <Image src={`${course.imgPath}/first-and-second-string-exercise-3.jpg`} width={600} height={191} alt="Jingle Bells" />
      </SecondStringStyled>
    </CourseContainer>
  );
};

export default SecondString;

const SecondStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
