import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const PentatonicsCaged = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[18];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PentatonicsCagedStyled>
        <p>Connecting pentatonic positions with CAGED shapes is useful for soloing, playing fills within chords, and accompanying your solos with chords. Associating pentatonic and CAGED shapes will also help your overall knowledge of the neck.</p>

        <h2>Minor pentatonic & CAGED</h2>
        <p>Each minor pentatonic position aligns with a CAGED chord shape. Learning these relationships helps you see the fretboard as an interconnected system rather than isolated positions.</p>

        <h3>A minor pentatonic with E shape</h3>
        <Image src={`${course.imgPath}/am-pent-e-shape.jpg`} width={600} height={200} alt="A minor pentatonic with E shape" />

        <h3>A minor pentatonic with D shape</h3>
        <Image src={`${course.imgPath}/am-pent-d-shape.jpg`} width={600} height={200} alt="A minor pentatonic with D shape" />

        <h3>A minor pentatonic with C shape</h3>
        <Image src={`${course.imgPath}/am-pent-c-shape.jpg`} width={600} height={200} alt="A minor pentatonic with C shape" />

        <h3>A minor pentatonic with A shape</h3>
        <Image src={`${course.imgPath}/am-pent-a-shape.jpg`} width={600} height={200} alt="A minor pentatonic with A shape" />

        <h3>A minor pentatonic with G shape</h3>
        <Image src={`${course.imgPath}/am-pent-g-shape.jpg`} width={600} height={200} alt="A minor pentatonic with G shape" />

        <h2>Major pentatonic & CAGED</h2>
        <p>The major pentatonic positions align with CAGED shapes in the same way as the minor pentatonic. Use the relative minor relationship to find these shapes.</p>

        <h3>C major pentatonic with C shape</h3>
        <Image src={`${course.imgPath}/c-maj-pent-c-shape.jpg`} width={600} height={200} alt="C major pentatonic with C shape" />

        <h3>C major pentatonic with A shape</h3>
        <Image src={`${course.imgPath}/c-maj-pent-a-shape.jpg`} width={600} height={200} alt="C major pentatonic with A shape" />

        <h3>C major pentatonic with G shape</h3>
        <Image src={`${course.imgPath}/c-maj-pent-g-shape.jpg`} width={600} height={200} alt="C major pentatonic with G shape" />

        <h3>C major pentatonic with E shape</h3>
        <Image src={`${course.imgPath}/c-maj-pent-e-shape.jpg`} width={600} height={200} alt="C major pentatonic with E shape" />

        <h3>C major pentatonic with D shape</h3>
        <Image src={`${course.imgPath}/c-maj-pent-d-shape.jpg`} width={600} height={200} alt="C major pentatonic with D shape" />
      </PentatonicsCagedStyled>
    </CourseContainer>
  );
};

export default PentatonicsCaged;

const PentatonicsCagedStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
