import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MinorBluesScalePositions = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[15];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MinorBluesScalePositionsStyled>
        <p>Next, analyze the blues scale fingering that you learned in Lesson Eight. Similar to the pentatonic scale, this analysis will allow you to play the blues scale up and down the neck. Remember, the blues scale is the same as the pentatonic scale with one added note: the #4/b5 chromatic note between the fourth and fifth scale degrees. This note is called the <strong>blue note</strong>.</p>

        <h2>A minor blues scale box one</h2>
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-1.jpg`} width={600} height={200} alt="A minor blues scale box 1" />
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-1-notation.jpg`} width={600} height={100} alt="A minor blues scale box 1 notation" />

        <h2>A minor blues scale box two</h2>
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-2.jpg`} width={600} height={200} alt="A minor blues scale box 2" />
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-2-notation.jpg`} width={600} height={100} alt="A minor blues scale box 2 notation" />

        <h2>A minor blues scale box three</h2>
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-3.jpg`} width={600} height={200} alt="A minor blues scale box 3" />
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-3-notation.jpg`} width={600} height={100} alt="A minor blues scale box 3 notation" />

        <h2>A minor blues scale box four</h2>
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-4.jpg`} width={600} height={200} alt="A minor blues scale box 4" />
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-4-notation.jpg`} width={600} height={100} alt="A minor blues scale box 4 notation" />

        <h2>A minor blues scale box five</h2>
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-5.jpg`} width={600} height={200} alt="A minor blues scale box 5" />
        <Image src={`${course.imgPath}/a-minor-blues-scale-positions-5-notation.jpg`} width={600} height={100} alt="A minor blues scale box 5 notation" />
      </MinorBluesScalePositionsStyled>
    </CourseContainer>
  );
};

export default MinorBluesScalePositions;

const MinorBluesScalePositionsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
