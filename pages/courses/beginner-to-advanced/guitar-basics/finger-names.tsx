import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FingerNames = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[9];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FingerNamesStyled>

        <p>Left hand fingers are named with the numbers 1-4 beginning with the index finger. Students who have previously studied piano are often initially confused by guitar fingerings because piano finger numbers begin with the thumb. The lesser used left thumb is typically notated as "T."</p>

        <p>Classical guitar music uses a system of right-hand fingerings. Each finger is assigned a letter derived from the Spanish word for each finger: P for pulgar (thumb), I for indice (index), M for medio (middle), and A for anular (ring).</p>

        <Image src={`${course.imgPath}/finger-names.jpg`} width={500} height={350} alt="Finger names diagram showing left and right hand fingerings" />

        <h2>On guitar directions</h2>

        <p>Referring to directions on guitar can be confusing. As a rule of thumb, always refer to direction in terms of pitch rather than physical directions. For instance: up the neck means playing a higher-sounding fret. Likewise, the high E string is the first string because it is the highest-pitched string.</p>

        <Image src={`${course.imgPath}/directions.jpg`} width={600} height={400} alt="Guitar directions diagram showing up/down the neck and high/low strings" />
      </FingerNamesStyled>
    </CourseContainer>
  );
};

export default FingerNames;

const FingerNamesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
