import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const CagedChordTones = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[10];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <CagedChordTonesStyled>
        <p>Now to analyze. Knowing the location of chord tones within each CAGED shape is helpful for improvising, understanding the guitar neck, and grasping music theory knowledge in general. Since a major chord is constructed with the root, third, and fifth of a key, each chord shape contains these notes. A chord tone is sometimes skipped in one or more octaves to make the chord playable on guitar. The skipped notes are marked in grey for each chord shape. Memorize the location of each chord tone.</p>

        <h2>C shape</h2>
        <p>Begin with the C major scale: C D E F G A B. The root is C, the 3rd is E, and the 5th is G. Find these notes in the C shape. The location of each chord tone translates to a C shape played in any other key or location on the neck.</p>
        <Image src={`${course.imgPath}/c-shape-chord-tones.jpg`} width={600} height={305} alt="C shape chord tones" />

        <h2>A shape</h2>
        <p>Begin with the A major scale: A B C# D E F# G#. The root is A, the 3rd is C#, and the 5th is E. Find these notes in the A shape. The location of each chord tone translates to an A shape played in any other key or location on the neck.</p>
        <Image src={`${course.imgPath}/a-shape-chord-tones.jpg`} width={600} height={280} alt="A shape chord tones" />

        <h2>G shape</h2>
        <p>Begin with the G major scale: G A B C D E F#. The root is G, the 3rd is B, and the 5th is D. Find these notes in the G shape. The location of each chord tone translates to a G shape played in any other key or location on the neck.</p>
        <Image src={`${course.imgPath}/g-shape-chord-tones.jpg`} width={600} height={260} alt="G shape chord tones" />

        <h2>E shape</h2>
        <p>Begin with the E major scale: E F# G# A B C# D#. The root is E, the 3rd is G#, and the 5th is B. Find these notes in the E shape. The location of each chord tone translates to an E shape played in any other key or location on the neck.</p>
        <Image src={`${course.imgPath}/e-shape-chord-tones.jpg`} width={600} height={268} alt="E shape chord tones" />

        <h2>D shape</h2>
        <p>Begin with the D major scale: D E F# G A B C#. The root is D, the 3rd is F#, and the 5th is A. Find these notes in the D shape. The location of each chord tone translates to a D shape played in any other key or location on the neck.</p>
        <Image src={`${course.imgPath}/d-shape-chord-tones.jpg`} width={600} height={320} alt="D shape chord tones" />

        <h2>Minor CAGED</h2>
        <p>Now you can apply these shapes to any chord type. Many of the full minor shapes are impractical to play, but the partial shapes and arpeggios from these shapes are very useful.</p>
        <p>To make any chord shape minor, simply flat the 3rd (down one half step). Move these shapes anywhere on the fretboard just like the major shapes. To find any other chord type, change or add the necessary chord tones.</p>

        <h2>C minor</h2>
        <h3>R:C b3:Eb 5:G</h3>
        <Image src={`${course.imgPath}/c-minor-shape-chord-tones.jpg`} width={600} height={289} alt="C minor shape chord tones" />

        <h2>A minor</h2>
        <h3>R:A b3:C 5:E</h3>
        <Image src={`${course.imgPath}/a-minor-shape-chord-tones.jpg`} width={600} height={266} alt="A minor shape chord tones" />

        <h2>G minor</h2>
        <h3>R:G b3:Bb 5:D</h3>
        <Image src={`${course.imgPath}/g-minor-shape-chord-tones.jpg`} width={600} height={266} alt="G minor shape chord tones" />

        <h2>E minor</h2>
        <h3>R:E b3:G 5:B</h3>
        <Image src={`${course.imgPath}/e-minor-shape-chord-tones.jpg`} width={600} height={266} alt="E minor shape chord tones" />

        <h2>D minor</h2>
        <h3>R:D b3:F 5:A</h3>
        <Image src={`${course.imgPath}/d-minor-shape-chord-tones.jpg`} width={600} height={266} alt="D minor shape chord tones" />
      </CagedChordTonesStyled>
    </CourseContainer>
  );
};

export default CagedChordTones;

const CagedChordTonesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-bottom: 0.5em;
    font-family: monospace;
  }
  p {
    margin-bottom: 1em;
  }
`;
