import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BluesEtudes = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[6];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesEtudesStyled>

        <h2>Blues etude 1</h2>
        <p>This etude makes use of walking blues patterns, seventh chords, and some of the blues licks you have learned. Start off playing slowly and as cleanly as possible and gradually increase the tempo. Aim for a smooth transition between measures and play with good time.</p>
        <Image src={`${course.imgPath}/blues-etude-1.jpg`} width={600} height={300} alt="Blues etude 1" />

        <h2>Blues etude 2</h2>
        <p>Etude one in the key of E.</p>
        <Image src={`${course.imgPath}/blues-etude-2.jpg`} width={600} height={552} alt="Blues etude 2" />

        <h2>Blues etude 3</h2>
        <p>This etude makes use of a first and second ending. Play the measure under the first bracket the first time, repeat back to the forward-facing repeat sign, then jump to the second bracket when you get there. Start off playing slowly and as cleanly as possible and gradually increase the tempo. Aim for a smooth transition between measures and play with good time.</p>
        <Image src={`${course.imgPath}/blues-etude-3.jpg`} width={600} height={902} alt="Blues etude 3" />

        <h2>Blues etude 4</h2>
        <p>Etude three in the key of E.</p>
        <Image src={`${course.imgPath}/blues-etude-4.jpg`} width={600} height={919} alt="Blues etude 4" />
      </BluesEtudesStyled>
    </CourseContainer>
  );
};

export default BluesEtudes;

const BluesEtudesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
