import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const PentatonicShifting = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[14];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PentatonicShiftingStyled>
        <p>Another way to practice connecting pentatonic positions is to shift positions on each string.</p>

        <h2>Box one to two</h2>
        <Image src={`${course.imgPath}/pent-shift-1-2.jpg`} width={600} height={150} alt="Pentatonic shifting box 1 to 2" />

        <h2>Box two to three</h2>
        <Image src={`${course.imgPath}/pent-shift-2-3.jpg`} width={600} height={150} alt="Pentatonic shifting box 2 to 3" />

        <h2>Box three to four</h2>
        <Image src={`${course.imgPath}/pent-shift-3-4.jpg`} width={600} height={150} alt="Pentatonic shifting box 3 to 4" />

        <h2>Box four to five</h2>
        <Image src={`${course.imgPath}/pent-shift-4-5.jpg`} width={600} height={150} alt="Pentatonic shifting box 4 to 5" />

        <h2>Box five to one</h2>
        <Image src={`${course.imgPath}/pent-shift-5-1.jpg`} width={600} height={150} alt="Pentatonic shifting box 5 to 1" />

        <h2>Shifting on every string</h2>
        <p>This final shifting exercise is a bit more difficult than the previous ones but looks really impressive since it covers such a large range of the instrument - from a low G on the 6th string to a high C on the 1st string. This covers all five pentatonic boxes - starting with box five, then box one, two, three, four, five, and finally one again.</p>
        <Image src={`${course.imgPath}/pent-shift-all-strings.jpg`} width={600} height={200} alt="Pentatonic shifting all strings" />
      </PentatonicShiftingStyled>
    </CourseContainer>
  );
};

export default PentatonicShifting;

const PentatonicShiftingStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
