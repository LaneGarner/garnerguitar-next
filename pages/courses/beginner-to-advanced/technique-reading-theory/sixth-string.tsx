import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const SixthString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[17];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <SixthStringStyled>
        <p>Play F on the first fret with the first finger and G on the third fret with the third finger.</p>
        <Image src={`${course.imgPath}/sixth-string.jpg`} width={600} height={250} alt="Sixth string notes" />
        <Image src={`${course.imgPath}/sixth-string-exercise-1.jpg`} width={600} height={134} alt="Sixth string exercise 1" />
        <Image src={`${course.imgPath}/sixth-string-2.jpg`} width={600} height={140} alt="Sixth string exercise 2" />
        <Image src={`${course.imgPath}/sixth-string-exercise-3.jpg`} width={600} height={197} alt="Sixth string exercise 3" />

        <h2>Row Row Row Your Boat</h2>
        <Image src={`${course.imgPath}/row-boat.jpg`} width={600} height={95} alt="Row Row Row Your Boat notation" />

        <h2>Yankee Doodle</h2>
        <Image src={`${course.imgPath}/yankee-doodle.jpg`} width={600} height={323} alt="Yankee Doodle notation" />

        <h2>Hush Little Baby</h2>
        <Image src={`${course.imgPath}/hush-baby.jpg`} width={600} height={162} alt="Hush Little Baby notation" />
      </SixthStringStyled>
    </CourseContainer>
  );
};

export default SixthString;

const SixthStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
