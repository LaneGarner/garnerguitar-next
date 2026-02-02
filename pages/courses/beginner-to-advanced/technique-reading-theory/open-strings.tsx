import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const OpenStrings = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[11];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <OpenStringsStyled>
        <p>The first notes to learn on the staff are the open strings. Think of these open strings as "guide posts" that other notes will relate to.</p>

        <h2>Exercises using open strings</h2>
        <p>Practice playing each open string while reading the corresponding note on the staff. This will help build the connection between what you see on the page and what you play on the guitar.</p>
      </OpenStringsStyled>
    </CourseContainer>
  );
};

export default OpenStrings;

const OpenStringsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
