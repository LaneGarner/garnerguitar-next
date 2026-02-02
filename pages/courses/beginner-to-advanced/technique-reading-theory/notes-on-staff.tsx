import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const NotesOnStaff = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[10];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <NotesOnStaffStyled>
        <p>Staff notation is read from left to right and top to bottom just like English. Each line or space represents a note in the musical alphabet A-G. Think of the musical alphabet as a circle that returns to A after G.</p>
        <p>Pitch is indicated by placement of notes on the staff (sometimes modified with accidentals sharp or flat), and duration is shown with different note values and additional symbols such as dots and ties. Lower-sounding notes appear lower on the staff starting with E on the bottom line. Notice that the stem direction changes from up on the right side to down on the left side halfway through the staff. Work through the musical alphabet (E-F-G-A-B-C-D-E-F) in the order of LINE-SPACE.</p>
        <Image src={`${course.imgPath}/notes-on-staff.jpg`} width={600} height={200} alt="Notes on the staff" />

        <h2>Line notes</h2>
        <p>Line notes begin at the bottom of the staff with the note E then skip up one letter for each line up the staff. A good mnemonic device to remember line notes is: Every Guitar Beginner Does Fine.</p>
        <Image src={`${course.imgPath}/line-notes.jpg`} width={600} height={150} alt="Line notes" />

        <h2>Space notes</h2>
        <p>Begin on the bottom space with F and then skip one letter in the musical alphabet to the next space for A, C, and E. A good mnemonic device to remember these notes is the word face (F-A-C-E).</p>
        <Image src={`${course.imgPath}/space-notes.jpg`} width={600} height={150} alt="Space notes" />

        <h2>Ledger lines</h2>
        <p>Ledger lines are short horizontal lines used to extend the range of the staff up or down. Simply continue up or down the musical alphabet to determine which pitch is being represented by a note on a ledger line. The typical range of natural notes on the guitar is shown below.</p>
        <Image src={`${course.imgPath}/ledger-lines.jpg`} width={600} height={200} alt="Ledger line notes" />
        <p>Notice again that the stem direction changes from up on the right side to down on the left side halfway through the staff.</p>

        <h2>Practice identifying notes</h2>
        <p>Identify the following notes:</p>
        <Image src={`${course.imgPath}/practice-identifying-notes.jpg`} width={600} height={150} alt="Practice identifying notes" />
        <Image src={`${course.imgPath}/practice-identifying-notes-2.jpg`} width={600} height={150} alt="Practice identifying notes 2" />

        <h2>Practice writing notes</h2>
        <p>Try writing the following notes:</p>
        <Image src={`${course.imgPath}/practice-writing-notes-2.jpg`} width={600} height={150} alt="Practice writing notes" />
      </NotesOnStaffStyled>
    </CourseContainer>
  );
};

export default NotesOnStaff;

const NotesOnStaffStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
