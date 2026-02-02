import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const TwelveBarBlues = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[1];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <TwelveBarBluesStyled>
        <p>The 12 bar blues is one of the most common song forms in music. Famous songs that use this form include "Johnny B. Goode" by Chuck Berry, "Folsom Prison Blues" by Johnny Cash, "Hound Dog" by Elvis Presley, "Rock and Roll" by Led Zeppelin, "Pride and Joy" by Stevie Ray Vaughan, "Wipe Out" by The Safaris, the Batman Theme, and many more.</p>

        <p>We will learn the most basic versions of the 12 bar blues, which can later be altered in many ways. The basic 12 bar blues uses only three chords: the I, IV, and V chords of a key. Let's begin with the key of A. You already learned how to find these chords in Part Two, but to review:</p>

        <p>Begin with the A major scale. Assign a Roman numeral to each scale degree. Remember the I, IV, and V are major, ii, iii and vi are minor, and vii is diminished.</p>
        <Image src={`${course.imgPath}/a-functional-harmony.jpg`} width={600} height={188} alt="A major functional harmony" />

        <p>This means that in the key of A: I is A, IV is D, and V is E. These are the three chords we need to play an A blues.</p>

        <p>Let's also look at the key of E. Begin with the E major scale. Assign a Roman numeral to each scale degree remembering that I, IV, and V are major, ii, iii and vi are minor and vii is diminished.</p>
        <Image src={`${course.imgPath}/e-functional-harmony.jpg`} width={600} height={150} alt="E major functional harmony" />

        <p>This means that in the key of E, E is I, A is IV, and B is V. These are the three chords we need to play an E blues. Notice that the I, IV, and V chords in the keys of A and E are the walking patterns we have already learned. Now let's apply them to the 12-bar blues form.</p>

        <h2>The 12 bar blues form</h2>
        <p>Think of the 12-bar blues form as three four-bar phrases in which the harmonic rhythm is cut in half for each phrase. The first four-bar phrase has a harmonic rhythm of four bars per chord. The second four-bar phrase has a <strong>harmonic rhythm</strong> of two bars per chord. The third and final four-bar phrase has a harmonic rhythm of one bar per chord.</p>
        <Image src={`${course.imgPath}/12-bar-blues-form.jpg`} width={600} height={200} alt="12 bar blues form" />
      </TwelveBarBluesStyled>
    </CourseContainer>
  );
};

export default TwelveBarBlues;

const TwelveBarBluesStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
