import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const HandPosition = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[10];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <HandPositionStyled>
        <p>Playing with proper hand position is important to avoid injury and to play as efficiently as possible. As a general rule, place your thumb in the center of the back of the neck in line with your second finger. Imagine holding a tennis ball in your left hand with curved fingers. Play on the tips of your fingers and aim to keep a gap between your palm and the side of the neck. Notice the angle of the fingers in the images: the index finger points slightly to the thumb side, the middle finger slightly less to the thumb side, and the ring finger and pinky point in the opposite direction.</p>

        <div className="hand-images">
          <Image src={`${course.imgPath}/Hand-position-1.jpg`} width={300} height={225} alt="Hand position front view" />
          <Image src={`${course.imgPath}/Hand-position-2.jpg`} width={300} height={225} alt="Hand position back view" />
          <Image src={`${course.imgPath}/Hand-position-3.jpg`} width={300} height={225} alt="Hand position side view" />
        </div>
      </HandPositionStyled>
    </CourseContainer>
  );
};

export default HandPosition;

const HandPositionStyled = styled.div`
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
