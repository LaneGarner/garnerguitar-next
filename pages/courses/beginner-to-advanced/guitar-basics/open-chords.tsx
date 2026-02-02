import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const OpenChords = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[19];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <OpenChordsStyled>

        <p>These pages expand on the eight most common chords presented earlier in the book with some additional chord shapes that every beginning to intermediate guitarist should memorize. Open chords are one of the most common and basic chord types. These "cowboy chords" use a combination of fretted notes and open strings. <strong>Practice playing each string separately to ensure that each note sounds clearly.</strong> Play through each chord, memorize as many as you can, and use these pages as a reference when learning songs. While there is a nearly endless number of chord voicings, these will get you started.</p>

        <div className="chord-charts">
          <Image src={`${course.imgPath}/open-chords-1.jpg`} width={700} height={221} alt="Open chords chart 1" />
          <Image src={`${course.imgPath}/open-chords-2.jpg`} width={700} height={220} alt="Open chords chart 2" />
          <Image src={`${course.imgPath}/open-chords-3.jpg`} width={700} height={242} alt="Open chords chart 3" />
          <Image src={`${course.imgPath}/open-chords-4.jpg`} width={700} height={220} alt="Open chords chart 4" />
          <Image src={`${course.imgPath}/open-chords-5.jpg`} width={700} height={244} alt="Open chords chart 5" />
          <Image src={`${course.imgPath}/open-chords-6.jpg`} width={700} height={226} alt="Open chords chart 6" />
          <Image src={`${course.imgPath}/open-chords-7.jpg`} width={700} height={234} alt="Open chords chart 7" />
        </div>
      </OpenChordsStyled>
    </CourseContainer>
  );
};

export default OpenChords;

const OpenChordsStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
  .chord-charts {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1.5em;
  }
`;
