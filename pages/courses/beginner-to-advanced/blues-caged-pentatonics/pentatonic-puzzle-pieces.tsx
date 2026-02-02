import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const PentatonicPuzzlePieces = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[13];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PentatonicPuzzlePiecesStyled>
        <p>Connecting pentatonic positions allows you to play up and down the neck. The top notes of each pentatonic position are the same as the bottom notes of the next pentatonic position. Use these "puzzle-piece" shapes to connect pentatonic positions together visually. The marked frets are for the key of A minor, but this concept can be used in any key.</p>

        <h2>Box 1 to Box 2</h2>
        <Image src={`${course.imgPath}/pent-puzzle-1-2.jpg`} width={600} height={200} alt="Pentatonic puzzle pieces box 1 to 2" />

        <h2>Box 2 to Box 3</h2>
        <Image src={`${course.imgPath}/pent-puzzle-2-3.jpg`} width={600} height={200} alt="Pentatonic puzzle pieces box 2 to 3" />

        <h2>Box 3 to Box 4</h2>
        <Image src={`${course.imgPath}/pent-puzzle-3-4.jpg`} width={600} height={200} alt="Pentatonic puzzle pieces box 3 to 4" />

        <h2>Box 4 to Box 5</h2>
        <Image src={`${course.imgPath}/pent-puzzle-4-5.jpg`} width={600} height={200} alt="Pentatonic puzzle pieces box 4 to 5" />

        <h2>Box 5 to Box 1</h2>
        <Image src={`${course.imgPath}/pent-puzzle-5-1.jpg`} width={600} height={200} alt="Pentatonic puzzle pieces box 5 to 1" />
      </PentatonicPuzzlePiecesStyled>
    </CourseContainer>
  );
};

export default PentatonicPuzzlePieces;

const PentatonicPuzzlePiecesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
