import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MinorPentatonicPositions = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[12];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MinorPentatonicPositionsStyled>
        <p>The minor pentatonic scale is one of the most-used scales in music and lays nicely on the guitar neck. You already know one position (or "box") of the pentatonic scale. This fingering of the pentatonic scale is typically the first scale most guitarists learn. To play the pentatonic scale up and down the neck, we must first analyze the notes played. Once you feel comfortable with this key, try transposing the pentatonic scale positions to all twelve keys. We will begin with A-minor pentatonic.</p>

        <p>Play the familiar pentatonic box at the fifth fret. Next, analyze the notes played in this fingering: A, C, D, E, and G. This sequence of notes repeats in each octave. These five notes are the source of this scale's name with penta meaning five and tonic meaning tones or notes. The pentatonic scale is a five-note scale.</p>
        <Image src={`${course.imgPath}/a-minor-pent-spelling-1.jpg`} width={600} height={297} alt="A minor pentatonic spelling" />

        <p>Next, analyze each scale degree using the A-major scale. The minor pentatonic scale is built with the root, b3, 4, 5, and b7 scale degrees. Memorizing these scale degrees will be helpful when improvising and soloing with the minor pentatonic scale.</p>
        <Image src={`${course.imgPath}/a-minor-pent-spelling-2.jpg`} width={600} height={244} alt="A minor pentatonic scale degrees" />

        <h2>A minor pentatonic box one</h2>
        <p>The pentatonic scale has five positions on the neck starting from each of the five notes of the scale. Learning these five positions will allow you to play the pentatonic scale up and down the neck without getting stuck in a box. Box one of the pentatonic scale starts with the root on the sixth string. The root is also located on the third and first strings. Being aware of the location of the root in each position will make it easier to transpose.</p>
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-1.jpg`} width={600} height={281} alt="A minor pentatonic box 1" />
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-1-notation.jpg`} width={600} height={146} alt="A minor pentatonic box 1 notation" />

        <h2>A minor pentatonic box two</h2>
        <p>Box two of the pentatonic scale starts with the flat third scale degree on the sixth string. The root is on the fourth and second strings. A-minor pentatonic box two starts at the eighth fret.</p>
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-2.jpg`} width={600} height={325} alt="A minor pentatonic box 2" />
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-2-notation.jpg`} width={600} height={131} alt="A minor pentatonic box 2 notation" />

        <h2>A minor pentatonic box three</h2>
        <p>Box three of the pentatonic scale starts with the fourth scale degree on the sixth string. The root is on the fifth and second strings. A-minor pentatonic box three starts at the tenth fret.</p>
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-3.jpg`} width={600} height={345} alt="A minor pentatonic box 3" />
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-3-notation.jpg`} width={600} height={131} alt="A minor pentatonic box 3 notation" />

        <h2>A minor pentatonic box four</h2>
        <p>Box four of the pentatonic scale starts with the fifth scale degree on the sixth string. The root is on the fifth and third strings. A-minor pentatonic box four starts at the twelfth fret.</p>
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-4.jpg`} width={600} height={269} alt="A minor pentatonic box 4" />
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-4-notation.jpg`} width={600} height={131} alt="A minor pentatonic box 4 notation" />

        <h2>A minor pentatonic box five</h2>
        <p>Box five of the pentatonic scale starts with the flat seven scale degree on the sixth string. The root is on the sixth, third, and first strings. A-minor pentatonic box five starts at the fifteenth or third fret.</p>
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-5.jpg`} width={600} height={220} alt="A minor pentatonic box 5" />
        <Image src={`${course.imgPath}/a-minor-pentatonic-box-5-notation.jpg`} width={600} height={383} alt="A minor pentatonic box 5 notation" />
      </MinorPentatonicPositionsStyled>
    </CourseContainer>
  );
};

export default MinorPentatonicPositions;

const MinorPentatonicPositionsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
