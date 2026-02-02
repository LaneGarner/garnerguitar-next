import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BeginningMusicTheory = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[7];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <TheoryStyled>
        <p>Music theory should not be a frightening term. Understanding the building blocks of music will help take your playing to the next level. Think of music as a language. While the best way to learn a language is through immersion, it is also helpful to study grammar. Music theory is the grammar of music. The musical alphabet contains the first seven letters of the English alphabet.</p>

        <h3>Think of the musical alphabet as a circle that returns to A after G</h3>
        <p className="alphabet">A-B-C-D-E-F-G-A-B-C-D-E-F-G-A-B-C-D-E-F-G ...</p>
        <Image src={`${course.imgPath}/musical-alphabet-2.jpg`} width={400} height={402} alt="Musical alphabet circle" />

        <h2>String names</h2>
        <p>An open string is a string plucked without fretting a note with the left-hand. The open guitar strings are named in two ways: letters and numbers. The thinnest string is the first string and the thickest is the sixth string. The letter names are notes from the musical alphabet. Use this mnemonic device to memorize the letter name of each string:</p>

        <h3>Eddie Ate Dynamite Good Bye Eddie</h3>
        <Image src={`${course.imgPath}/eddie.jpg`} width={400} height={400} alt="Cartoon of Eddie eating dynamite" />

        <table className="string-table">
          <tbody>
            <tr className="label-row">
              <td colSpan={3}><strong>Thickest string</strong></td>
              <td colSpan={3} style={{ textAlign: 'right' }}>Thinnest string</td>
            </tr>
            <tr className="number-row">
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr className="mnemonic-row">
              <td>Eddie</td>
              <td>Ate</td>
              <td>Dynamite</td>
              <td>Good</td>
              <td>Bye</td>
              <td>Eddie</td>
            </tr>
            <tr className="note-row">
              <td><strong>E</strong></td>
              <td><strong>A</strong></td>
              <td><strong>D</strong></td>
              <td><strong>G</strong></td>
              <td><strong>B</strong></td>
              <td><strong>E</strong></td>
            </tr>
          </tbody>
        </table>
      </TheoryStyled>
    </CourseContainer>
  );
};

export default BeginningMusicTheory;

const TheoryStyled = styled.div`
  h2, h3 {
    margin-top: 1.5em;
  }
  .alphabet {
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 0.1em;
  }
  .string-table {
    margin: 1.5em 0;
    border-collapse: collapse;
    td {
      padding: 0.75em 1.5em;
      text-align: center;
      font-size: 1.2em;
    }
    .label-row td {
      font-size: 0.9em;
      font-style: italic;
    }
    .number-row td {
      font-size: 1.5em;
      font-weight: bold;
    }
    .note-row td {
      font-size: 1.5em;
    }
  }
`;
