import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BluesShuffleEtudes = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[2];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesShuffleEtudesStyled>

        <h2>Blues shuffle etude one</h2>
        <p>Shuffle pattern one in the key of A. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-1.jpg`} width={600} height={200} alt="Blues shuffle etude 1" />

        <h2>Blues shuffle etude two</h2>
        <p>Shuffle pattern two in the key of A. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-2.jpg`} width={600} height={200} alt="Blues shuffle etude 2" />

        <h2>Blues shuffle etude three</h2>
        <p>Shuffle pattern three in the key of A. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-3.jpg`} width={600} height={200} alt="Blues shuffle etude 3" />

        <h2>Blues shuffle etude four</h2>
        <p>Shuffle pattern one in the key of E. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-4.jpg`} width={600} height={200} alt="Blues shuffle etude 4" />

        <h2>Blues shuffle etude five</h2>
        <p>Shuffle pattern two in the key of E. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-5.jpg`} width={600} height={200} alt="Blues shuffle etude 5" />

        <h2>Blues shuffle etude six</h2>
        <p>Shuffle pattern three in the key of E. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-6.jpg`} width={600} height={200} alt="Blues shuffle etude 6" />

        <h2>Blues shuffle etude seven</h2>
        <p>All three patterns combined in the key of A. Practice slowly with smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-7.jpg`} width={600} height={250} alt="Blues shuffle etude 7" />

        <h2>Blues shuffle etude eight</h2>
        <p>Etude seven in the key of E. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-8.jpg`} width={600} height={250} alt="Blues shuffle etude 8" />

        <h2>Blues shuffle etude nine</h2>
        <p>All three patterns combined in the key of A. Practice slowly with smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-9.jpg`} width={600} height={250} alt="Blues shuffle etude 9" />

        <h2>Blues shuffle etude ten</h2>
        <p>Etude nine in the key of E. Practice slowly and aim for smooth transitions between chords.</p>
        <Image src={`${course.imgPath}/blues-shuffle-etude-10.jpg`} width={600} height={250} alt="Blues shuffle etude 10" />
      </BluesShuffleEtudesStyled>
    </CourseContainer>
  );
};

export default BluesShuffleEtudes;

const BluesShuffleEtudesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
