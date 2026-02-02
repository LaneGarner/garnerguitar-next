import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BluesShuffle = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[18];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesShuffleStyled>

        <h2>Blues shuffle pattern one</h2>
        <p>This is a common blues rhythm guitar cliché. Play with even timing and no breaks between notes. Keep the 5th string open while moving notes on the 4th string.</p>
        <Image src={`${course.imgPath}/blues-shuffle-1.jpg`} width={600} height={150} alt="Blues shuffle pattern one" />

        <h2>Blues shuffle pattern two</h2>
        <p>This is similar to pattern one but adds the fifth fret (G) on beat three.</p>
        <Image src={`${course.imgPath}/blues-shuffle-2.jpg`} width={600} height={150} alt="Blues shuffle pattern two" />

        <h2>Blues shuffle pattern three</h2>
        <p>This pattern is commonly used in blues and country music. It begins the same as the first two patterns but deviates on beat two with a new bass note.</p>
        <Image src={`${course.imgPath}/blues-shuffle-3.jpg`} width={600} height={150} alt="Blues shuffle pattern three" />

        <h2>Blues shuffle in E</h2>
        <p>For the patterns we've used so far, the root is the open A string (key of A). To transpose the key, move the pattern to other string groups.</p>
        <Image src={`${course.imgPath}/blues-shuffle-e.jpg`} width={600} height={150} alt="Blues shuffle in E" />

        <h2>Blues shuffle in D</h2>
        <Image src={`${course.imgPath}/blues-shuffle-d.jpg`} width={600} height={150} alt="Blues shuffle in D" />

        <h2>Blues shuffle songs to learn</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHyjW_PUXxkrLNNOXMu29GClB5Joo1_w5"
            title="Blues shuffle songs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <ul>
          <li>"Before You Accuse Me" - Bo Diddley/Eric Clapton</li>
          <li>"Johnny B. Goode" - Chuck Berry</li>
          <li>"Kansas City" - Little Willie Littlefield</li>
          <li>"Kind Hearted Woman" - Robert Johnson</li>
          <li>"Life By The Drop" - Stevie Ray Vaughan</li>
          <li>"Love Struck Baby" - Stevie Ray Vaughan</li>
          <li>"Pride and Joy" - Stevie Ray Vaughan</li>
          <li>"Sweet Home Chicago" - Robert Johnson (also Blues Brothers)</li>
          <li>"Take Out Some Insurance" - Jimmy Reed</li>
          <li>"That'll Be The Day" - Buddy Holly</li>
        </ul>
      </BluesShuffleStyled>
    </CourseContainer>
  );
};

export default BluesShuffle;

const BluesShuffleStyled = styled.div`
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
`;
