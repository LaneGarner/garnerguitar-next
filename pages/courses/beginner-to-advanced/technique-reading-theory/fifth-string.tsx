import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FifthString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[16];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FifthStringStyled>
        <p>Play B on the second fret with the second finger and C on the third fret with the third finger.</p>
        <Image src={`${course.imgPath}/fifth-string-notes.jpg`} width={600} height={200} alt="Fifth string notes" />
        <Image src={`${course.imgPath}/fifth-string-exercise-1.jpg`} width={600} height={150} alt="Fifth string exercise 1" />
        <Image src={`${course.imgPath}/fifth-string-exercise-2.jpg`} width={600} height={150} alt="Fifth string exercise 2" />
        <Image src={`${course.imgPath}/fifth-string-exercise-3.jpg`} width={600} height={150} alt="Fifth string exercise 3" />

        <h2>Alouette</h2>
        <Image src={`${course.imgPath}/alouette.jpg`} width={600} height={200} alt="Alouette notation" />

        <h2>America the Beautiful</h2>
        <Image src={`${course.imgPath}/america-beautiful.jpg`} width={600} height={250} alt="America the Beautiful notation" />

        <h2>The Star Spangled Banner</h2>
        <Image src={`${course.imgPath}/star-spang.jpg`} width={600} height={300} alt="Star Spangled Banner notation" />

        <h2>O Canada</h2>
        <Image src={`${course.imgPath}/o-canada.jpg`} width={600} height={250} alt="O Canada notation" />
      </FifthStringStyled>
    </CourseContainer>
  );
};

export default FifthString;

const FifthStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
