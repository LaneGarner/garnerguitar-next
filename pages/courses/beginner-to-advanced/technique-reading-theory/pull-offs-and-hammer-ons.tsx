import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const PullOffsHammerOns = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[3];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PullOffsHammerOnsStyled>

        <h2>Pull-offs</h2>
        <p>A <strong><em>pull-off</em></strong> is used when moving from a higher note to a lower note. Hammer-ons and pull-offs allow you to play smoothly connected legato notes and are useful for fast passages. Use the left-hand finger to pluck the string. A pull-off is usually indicated by a tied note and a P (or sometimes PO).</p>
        <Image src={`${course.imgPath}/pull-offs.jpg`} width={600} height={195} alt="Pull-offs exercise one" />

        <h2>Hammer-ons</h2>
        <p>A <strong><em>hammer-on</em></strong> is used when moving from a lower note to a higher note. It is called a hammer-on for a reason. Imagine hammering a nail into a wall. It is not enough to simply whack the hammer and hope for the best. With this method you would end up with many holes in the wall. Like a hammer, it is important to precisely aim the tip of the finger at the fret and drive it in (i.e. keep pressure down). A good hammer-on will also have a bit of a wind-up in the left-hand finger just like you might do with a hammer.</p>
        <Image src={`${course.imgPath}/hammer-ons.jpg`} width={600} height={195} alt="Hammer-ons exercise" />

        <h2>Fretted pull-offs & hammer-ons</h2>
        <p>The previous examples utilized open string hammer-ons and pull-offs. These techniques are also possible between fretted notes. The following examples are similar to the finger combination warm-up with only two fingers.</p>
        <Image src={`${course.imgPath}/pull-offs-2.jpg`} width={600} height={224} alt="Pull-offs exercise two" />
        <Image src={`${course.imgPath}/hammer-ons-2.jpg`} width={600} height={217} alt="Hammer-ons exercise two" />
      </PullOffsHammerOnsStyled>
    </CourseContainer>
  );
};

export default PullOffsHammerOns;

const PullOffsHammerOnsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
