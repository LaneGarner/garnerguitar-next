import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BuildingTriads = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[26];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BuildingTriadsStyled>

        <h2>Building triads with intervals</h2>
        <p>The triad is the most common type of chord. A triad is a three-note chord built in thirds. There are four types of triads: major, minor, augmented, and diminished. Each has a particular pattern of major and minor thirds.</p>

        <p><strong>Major triad:</strong> major 3rd, minor 3rd</p>
        <p><strong>Minor triad:</strong> minor 3rd, major 3rd</p>
        <p><strong>Augmented triad:</strong> major 3rd, major 3rd</p>
        <p><strong>Diminished triad:</strong> minor 3rd, minor 3rd</p>

        <Image src={`${course.imgPath}/major-triad.jpg`} width={600} height={166} alt="Major triad" />
        <Image src={`${course.imgPath}/minor-triad.jpg`} width={600} height={161} alt="Minor triad" />
        <Image src={`${course.imgPath}/augmented-triad.jpg`} width={600} height={160} alt="Augmented triad" />
        <Image src={`${course.imgPath}/diminished-triad.jpg`} width={600} height={159} alt="Diminished triad" />

        <h2>Building triads with scale degrees</h2>
        <Image src={`${course.imgPath}/triad-scale-degrees.jpg`} width={600} height={240} alt="Building triads with scale degrees" />
        <p>On the previous page we built triads by stacking thirds. Another way to build triads is by scale degree. This method is based on the degrees of the major scale. These are also referred to as "chord tones."</p>

        <h2>Chord notation</h2>
        <p>There are several ways to refer to each chord type. Here are some common methods:</p>
        <Image src={`${course.imgPath}/chord-notation.jpg`} width={600} height={194} alt="Chord notation" />
      </BuildingTriadsStyled>
    </CourseContainer>
  );
};

export default BuildingTriads;

const BuildingTriadsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
