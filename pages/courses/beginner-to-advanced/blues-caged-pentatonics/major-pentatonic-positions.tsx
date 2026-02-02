import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MajorPentatonicPositions = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[16];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MajorPentatonicPositionsStyled>
        <p>So far we have focused on the minor pentatonic and minor blues scales. These same positions and shapes can also be used to play major pentatonic and major blues scales. In a major key, use the relative minor pentatonic scale to find the major pentatonic scale. (Shortcut: relative major and minor are a minor third, or three frets, apart). Analyzing the notes of the pentatonic scale from the major root (C, D, E, G, A) gives you the root, second, third, fifth, and sixth scale degrees. The names of each position are the same as the minor pentatonic positions with box one starting with the root of the minor pentatonic on the sixth string.</p>

        <h2>Box two (C major / A minor pentatonic)</h2>
        <Image src={`${course.imgPath}/c-major-pentatonic-box-2.jpg`} width={600} height={200} alt="C major pentatonic box 2" />

        <h2>Box three</h2>
        <Image src={`${course.imgPath}/c-major-pentatonic-box-3.jpg`} width={600} height={200} alt="C major pentatonic box 3" />

        <h2>Box four</h2>
        <Image src={`${course.imgPath}/c-major-pentatonic-box-4.jpg`} width={600} height={200} alt="C major pentatonic box 4" />

        <h2>Box five</h2>
        <Image src={`${course.imgPath}/c-major-pentatonic-box-5.jpg`} width={600} height={200} alt="C major pentatonic box 5" />

        <h2>Box one</h2>
        <Image src={`${course.imgPath}/c-major-pentatonic-box-1.jpg`} width={600} height={200} alt="C major pentatonic box 1" />
      </MajorPentatonicPositionsStyled>
    </CourseContainer>
  );
};

export default MajorPentatonicPositions;

const MajorPentatonicPositionsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
