import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const ChromaticScale = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[21];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <ChromaticScaleStyled>
        <p>While the musical alphabet contains seven letters, the musical language contains twelve notes. We find these twelve notes from the seven letters of the musical alphabet and their respective sharps and flats. An <em>enharmonic</em> is when a note can be called more than one name, such as F-sharp and G-flat. The chromatic scale contains all twelve notes of the musical language and can start from any note. Try playing it from each open string.</p>

        <h2>Sixth string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-6.jpg`} width={600} height={152} alt="Chromatic scale on sixth string notation" />

        <h2>Fifth string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-5.jpg`} width={600} height={139} alt="Chromatic scale on fifth string notation" />

        <h2>Fourth string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-4.jpg`} width={600} height={128} alt="Chromatic scale on fourth string notation" />

        <h2>Third string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-3.jpg`} width={600} height={152} alt="Chromatic scale on third string notation" />

        <h2>Second string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-2.jpg`} width={600} height={128} alt="Chromatic scale on second string notation" />

        <h2>First string</h2>
        <Image src={`${course.imgPath}/chromatic-scale-1.jpg`} width={600} height={139} alt="Chromatic scale on first string notation" />

        <h2>Open position</h2>
        <p>The chromatic scale can also be played in each position. Here it is in the open position:</p>
        <Image src={`${course.imgPath}/chromatic-scale-open-position.jpg`} width={600} height={398} alt="Chromatic scale in open position" />
      </ChromaticScaleStyled>
    </CourseContainer>
  );
};

export default ChromaticScale;

const ChromaticScaleStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
