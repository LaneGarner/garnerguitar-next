import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const PowerChords = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[14];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PowerChordsStyled>
        <p>Power chords are moveable chord shapes that will not only prepare you for barre-chords but also allow you to rock out. We will learn open and fretted power chords with sixth and fifth string roots. A power chord is the interval of a "perfect fifth." The power chord shape can be played with or without a second root note on top. Power chords are notated by the root note followed by a 5. Use power chords to play rock (especially punk rock) styles.</p>

        <h2>Open power chords</h2>
        <p>Like 'open chords', these power chords utilize open strings. Practice open power chords with different finger combinations. These fingering options will be useful later. The root of the chord is the lowest-sounding open string and is marked red below.</p>
        <Image src={`${course.imgPath}/sixth-root-open-power-chords.jpg`} width={600} height={332} alt="Sixth string root open power chords" />
        <Image src={`${course.imgPath}/fifth-root-open-power-chords.jpg`} width={600} height={320} alt="Fifth string root open power chords" />

        <h2>Fretted power chords</h2>
        <p>Fretted power chords use the same shape as open power chords but are moved up the neck. Shift the shape up the neck and use the first finger to play the previously open strings. Like the open power chord, the fretted power chord has both a two and a three note fingering. The root is notated in red.</p>
        <Image src={`${course.imgPath}/sixth-root-power-chords.jpg`} width={600} height={280} alt="Sixth string root fretted power chords" />
        <Image src={`${course.imgPath}/fifth-root-power-chords.jpg`} width={600} height={271} alt="Fifth string root fretted power chords" />

        <div className="hand-images">
          <Image src={`${course.imgPath}/power-chord-hand-1.jpg`} width={300} height={200} alt="Power chord hand position front view" />
          <Image src={`${course.imgPath}/power-chord-hand-2.jpg`} width={300} height={200} alt="Power chord hand position side view" />
        </div>
      </PowerChordsStyled>
    </CourseContainer>
  );
};

export default PowerChords;

const PowerChordsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  .hand-images {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1.5em;
  }
`;
