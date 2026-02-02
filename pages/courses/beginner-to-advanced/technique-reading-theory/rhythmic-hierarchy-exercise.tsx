import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const RhythmicHierarchy = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[7];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <RhythmicHierarchyStyled>
        <p>Play a measure of each subdivision from long to short and back down.</p>
        <Image src={`${course.imgPath}/rhythmic-heirarchy.jpg`} width={600} height={133} alt="The rhythmic hierarchy exercise" />

        <h2>Triplets</h2>
        <p>Another common subdivision is the triplet. A triplet fits three beats in the space of two. It is indicated by the number 3 within a bracket over three notes. To feel a triplet, think of the next largest subdivision and break it into three beats. For instance, feel a quarter-note triplet by placing three beats in the space of a half note. Likewise, feel an eighth-note triplet by placing three beats in the space of a quarter note. While there are smaller/larger triplet subdivisions, these are the most common, so focus on them first.</p>
        <Image src={`${course.imgPath}/triplets.jpg`} width={600} height={134} alt="Triplets" />

        <p>Practice triplets by themselves and within the rhythmic hierarchy exercise. Once you have mastered the following, try adding in half-note triplets (three beats in the space of a whole note) or sixteenth-note triplets (three beats in the space of an eighth note).</p>
        <Image src={`${course.imgPath}/rhythmic-heirarchy-triplets.jpg`} width={600} height={317} alt="The rhythmic hierarchy exercise with triplets" />
      </RhythmicHierarchyStyled>
    </CourseContainer>
  );
};

export default RhythmicHierarchy;

const RhythmicHierarchyStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
