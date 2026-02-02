import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const ThirdString = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[14];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <ThirdStringStyled>
        <p>Play A on the second fret with the second finger.</p>
        <Image src={`${course.imgPath}/third-string-notes.jpg`} width={600} height={200} alt="Notes on the third string" />

        <Image src={`${course.imgPath}/third-string-exercise-1.jpg`} width={600} height={150} alt="Third string exercise 1" />
        <Image src={`${course.imgPath}/third-string-exercise-2.jpg`} width={600} height={150} alt="Third string exercise 2" />
        <Image src={`${course.imgPath}/third-string-exercise-3.jpg`} width={600} height={150} alt="Third string exercise 3" />

        <h2>Mary Had a Little Lamb</h2>
        <Image src={`${course.imgPath}/third-string-exercise-4.jpg`} width={600} height={150} alt="Mary Had a Little Lamb" />

        <h2>Old MacDonald</h2>
        <Image src={`${course.imgPath}/third-string-exercise-5.jpg`} width={600} height={200} alt="Old MacDonald" />

        <h2>Twinkle, Twinkle Little Star / Baa Baa Black Sheep / ABCs</h2>
        <Image src={`${course.imgPath}/third-string-exercise-6.jpg`} width={600} height={200} alt="Twinkle Twinkle Little Star" />
      </ThirdStringStyled>
    </CourseContainer>
  );
};

export default ThirdString;

const ThirdStringStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
