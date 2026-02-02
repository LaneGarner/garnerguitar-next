import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const IntroToBarreChords = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[21];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <IntroToBarreChordsStyled>

        <p>Like power chords, barre-chords can be moved to any fret on the guitar. We will dig deeper into barre-chords via the CAGED system in Part 3. These two useful shapes will get you started. Barre-chords use different finger muscles than open chords and take time to feel comfortable playing. Practice slowly and patiently. Use more of the thumb-side edge of your first finger close to the fret to barre. Play each note of the chord to make sure there is no unintentional muting. Adjust the angle of the barred fingers to avoid muting important notes from the chord with your digital pulp (the fleshy part of your finger-tip).</p>

        <h2>E shape</h2>
        <p>Start with the familiar open E chord. *Re-finger with the third, fourth, and second fingers. Move this shape up one fret and barre your first finger across the first fret. The barre frets the strings that were previously open. This shape can be moved anywhere on the neck. Find the root of this barre-chord by the note on the sixth string.</p>
        <Image src={`${course.imgPath}/e-shape-barrechord.jpg`} width={600} height={229} alt="E shape barre chord" />

        <h2>E minor shape</h2>
        <p>*Re-finger E minor with the third and fourth fingers. Move this shape up one fret and barre your first finger to play the strings that were previously open. Find the root of this barre-chord with the note on the sixth, fourth, or third string. Notice how similar this shape is to the E-shape. The only difference is that the note on the third string is now barred. Adjust your first finger accordingly to ensure sufficient pressure on the third string.</p>
        <Image src={`${course.imgPath}/e-minor-shape-barrechord.jpg`} width={600} height={219} alt="E minor shape barre chord" />

        <h2>A shape</h2>
        <p>There are two ways to finger an A-shape barre-chord. One option is to use the original 2, 3, and 4 fingering. Another option is to re-finger with a third finger barre. Move this shape up one fret and use your first finger to play the previously open fifth string. Find the root on the fifth string.</p>
        <Image src={`${course.imgPath}/a-shape-barrechord.jpg`} width={600} height={254} alt="A shape barre chord" />

        <h2>A minor shape</h2>
        <p>*Re-finger A minor with the third and fourth fingers. Move this shape up one fret and barre your first finger to play the strings that were previously open. Find the root on the sixth, fourth, or third string. Note that A and A minor are the same except for one note. Also note the similarity between the A-minor and E shapes.</p>
        <Image src={`${course.imgPath}/a-minor-shape-barrechord.jpg`} width={600} height={229} alt="A minor shape barre chord" />

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHyjW_PUXxkrcYCz-mN0SUBt2d89JZkw5"
            title="Barre chord songs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="tip"><em>Tip: Click the playlist icon to access the full YouTube playlist.</em></p>

        <ul>
          <li>"Another Brick In The Wall" - Pink Floyd</li>
          <li>"Are You Gonna Be My Girl?" - Jet</li>
          <li>"Creep" - Radiohead</li>
          <li>"Dani California" - Red Hot Chili Peppers</li>
          <li>"Last Dance With Mary Jane" - Tom Petty</li>
          <li>"Lose Yourself To Dance" - Daft Punk</li>
          <li>"Purple Haze" - Jimi Hendrix</li>
          <li>"Say It Ain't So" - Weezer</li>
          <li>"Sittin' On The Dock of The Bay" - Otis Redding</li>
          <li>"Sitting Waiting Wishing" - Jack Johnson</li>
          <li>"Snow (Hey Oh)" - Red Hot Chili Peppers</li>
          <li>"Sultans Of Swing" - Dire Straits</li>
          <li>"Under The Bridge" - Red Hot Chili Peppers</li>
        </ul>
      </IntroToBarreChordsStyled>
    </CourseContainer>
  );
};

export default IntroToBarreChords;

const IntroToBarreChordsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    margin: 1em 0;
  }
  li {
    margin-bottom: 0.5em;
  }
  .video-container {
    margin: 1em 0;
    iframe {
      max-width: 100%;
      border: none;
    }
  }
  .tip {
    font-size: 0.9em;
    color: #666;
  }
`;
