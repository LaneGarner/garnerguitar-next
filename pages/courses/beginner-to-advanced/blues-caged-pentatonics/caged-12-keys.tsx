import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const CagedTwelveKeys = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[9];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <CagedTwelveKeysStyled>
        <p>Now that you know all five shapes and some useful voicings from each shape, we can apply them to any key. The sequence of these shapes always goes in the order of C, A, G, E, D. For example, in C the sequence is C, A, G, E, and D. Start the pattern over for any of the other five keys. For example, in G the sequence is G, E, D, C, A.</p>

        <h2>CAGED in C</h2>
        <h3>C-A-G-E-D</h3>
        <Image src={`${course.imgPath}/caged-in-c.jpg`} width={600} height={150} alt="CAGED in C" />

        <h2>CAGED in A</h2>
        <h3>A-G-E-D-C</h3>
        <Image src={`${course.imgPath}/caged-in-a.jpg`} width={600} height={150} alt="CAGED in A" />

        <h2>CAGED in G</h2>
        <h3>G-E-D-C-A</h3>
        <Image src={`${course.imgPath}/caged-in-g.jpg`} width={600} height={150} alt="CAGED in G" />

        <h2>CAGED in E</h2>
        <h3>E-D-C-A-G</h3>
        <Image src={`${course.imgPath}/caged-in-e.jpg`} width={600} height={150} alt="CAGED in E" />

        <h2>CAGED in D</h2>
        <h3>D-C-A-G-E</h3>
        <Image src={`${course.imgPath}/caged-in-d.jpg`} width={600} height={150} alt="CAGED in D" />

        <h2>CAGED in B</h2>
        <h3>Same sequence as A: A-G-E-D-C</h3>
        <Image src={`${course.imgPath}/caged-in-b.jpg`} width={600} height={150} alt="CAGED in B" />

        <h2>CAGED in F</h2>
        <h3>Same sequence as E: E-D-C-A-G</h3>
        <Image src={`${course.imgPath}/caged-in-f.jpg`} width={600} height={150} alt="CAGED in F" />

        <h2>CAGED in F#/Gb</h2>
        <h3>Same sequence as E: E-D-C-A-G</h3>
        <Image src={`${course.imgPath}/caged-in-fsharp.jpg`} width={600} height={150} alt="CAGED in F#/Gb" />

        <h2>CAGED in G#/Ab</h2>
        <h3>Same sequence as G: G-E-D-C-A</h3>
        <Image src={`${course.imgPath}/caged-in-gsharp.jpg`} width={600} height={150} alt="CAGED in G#/Ab" />

        <h2>CAGED in A#/Bb</h2>
        <h3>Same sequence as A: A-G-E-D-C</h3>
        <Image src={`${course.imgPath}/caged-in-asharp.jpg`} width={600} height={150} alt="CAGED in A#/Bb" />

        <h2>CAGED in C#/Db</h2>
        <h3>Same sequence as C: C-A-G-E-D</h3>
        <Image src={`${course.imgPath}/caged-in-csharp.jpg`} width={600} height={150} alt="CAGED in C#/Db" />

        <h2>CAGED in D#/Eb</h2>
        <h3>Same sequence as D: D-C-A-G-E</h3>
        <Image src={`${course.imgPath}/caged-in-dsharp.jpg`} width={600} height={150} alt="CAGED in D#/Eb" />
      </CagedTwelveKeysStyled>
    </CourseContainer>
  );
};

export default CagedTwelveKeys;

const CagedTwelveKeysStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.25em;
  }
  h3 {
    margin-bottom: 0.5em;
    font-weight: normal;
    font-style: italic;
  }
  p {
    margin-bottom: 1em;
  }
`;
