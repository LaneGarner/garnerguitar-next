import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const PracticeLog = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[4];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PracticeLogStyled>
        <p>Use a practice log to track your progress and stay motivated. Document the date, start and end times, topics covered, time spent on each topic, and future goals.</p>
        <p>Writing goals down will make them seem more tangible and will provide you concepts to practice in the future. Practice logs are also astonishingly revealing to look back on months or years later.</p>
        <p><em>Interactive practice log and timer coming soon.</em></p>
      </PracticeLogStyled>
    </CourseContainer>
  );
};

export default PracticeLog;

const PracticeLogStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
