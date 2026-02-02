import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MajorBluesScalePositions = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[17];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MajorBluesScalePositionsStyled>
        <p>The major blues scale follows the same pattern as the minor blues scale, but starts from the major root. Like the major pentatonic, use the relative minor blues scale positions to find the major blues scale. Add the blue note (the #2/b3) between the second and third scale degrees.</p>

        <h2>Box two (C major blues / A minor blues)</h2>
        <Image src={`${course.imgPath}/c-major-blues-box-2.jpg`} width={600} height={200} alt="C major blues scale box 2" />

        <h2>Box three</h2>
        <Image src={`${course.imgPath}/c-major-blues-box-3.jpg`} width={600} height={200} alt="C major blues scale box 3" />

        <h2>Box four</h2>
        <Image src={`${course.imgPath}/c-major-blues-box-4.jpg`} width={600} height={200} alt="C major blues scale box 4" />

        <h2>Box five</h2>
        <Image src={`${course.imgPath}/c-major-blues-box-5.jpg`} width={600} height={200} alt="C major blues scale box 5" />

        <h2>Box one</h2>
        <Image src={`${course.imgPath}/c-major-blues-box-1.jpg`} width={600} height={200} alt="C major blues scale box 1" />
      </MajorBluesScalePositionsStyled>
    </CourseContainer>
  );
};

export default MajorBluesScalePositions;

const MajorBluesScalePositionsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
