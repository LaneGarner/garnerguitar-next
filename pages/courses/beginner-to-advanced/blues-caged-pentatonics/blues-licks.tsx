import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BluesLicks = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[5];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesLicksStyled>
        <p>Learning licks is helpful when first grasping a new style of music. Aim to memorize and apply a lick then alter it to make it your own. Plan to eventually learn these licks in all twelve keys and positions. Here they are presented in the key of A (5th position) and E (12th position and open).</p>

        <h2>Blues lick 1</h2>
        <p>A simple but useful pentatonic lick.</p>
        <Image src={`${course.imgPath}/blues-lick-1.jpg`} width={600} height={150} alt="Blues lick 1" />

        <h2>Blues lick 2</h2>
        <p>This familiar lick is in the style of Eric Clapton.</p>
        <Image src={`${course.imgPath}/blues-lick-2.jpg`} width={600} height={150} alt="Blues lick 2" />

        <h2>Blues lick 3</h2>
        <p>Another common blues lick. This is useful for rhythm playing and lead playing.</p>
        <Image src={`${course.imgPath}/blues-lick-3.jpg`} width={600} height={150} alt="Blues lick 3" />

        <h2>Blues lick 4</h2>
        <p>This rock and blues lick sounds great when played fast. Play with picking and pulloffs.</p>
        <Image src={`${course.imgPath}/blues-lick-4.jpg`} width={600} height={150} alt="Blues lick 4" />

        <h2>Blues lick 5</h2>
        <p>This lick is in the style of Chuck Berry. Use one finger of the left hand to barre the strings and slide into the note.</p>
        <Image src={`${course.imgPath}/blues-lick-5.jpg`} width={600} height={150} alt="Blues lick 5" />

        <h2>Blues lick 6</h2>
        <p>Descending blues lick. Try sliding from the first note to the second note with the third finger.</p>
        <Image src={`${course.imgPath}/blues-lick-6.jpg`} width={600} height={150} alt="Blues lick 6" />

        <h2>Blues lick 7</h2>
        <p>Same as lick six but utilizing a bend. The bend should match the first note in the previous lick.</p>
        <Image src={`${course.imgPath}/blues-lick-7.jpg`} width={600} height={150} alt="Blues lick 7" />

        <h2>Blues lick 8</h2>
        <p>Descending blues scale lick. Try sliding from the first note to the second note with the third finger.</p>
        <Image src={`${course.imgPath}/blues-lick-8.jpg`} width={600} height={150} alt="Blues lick 8" />

        <h2>Blues lick 9</h2>
        <p>This lick utilizes the tension of going from the minor third to the major third.</p>
        <Image src={`${course.imgPath}/blues-lick-9.jpg`} width={600} height={150} alt="Blues lick 9" />

        <h2>Blues lick 10</h2>
        <p>Same as lick eight with a bend. The bend should match the first note in the previous lick.</p>
        <Image src={`${course.imgPath}/blues-lick-10.jpg`} width={600} height={150} alt="Blues lick 10" />

        <h2>Blues lick 11</h2>
        <p>This bending lick is in the style of Stevie Ray Vaughan and Freddie King. Hold the bent notes over to match the pitch of the next note.</p>
        <Image src={`${course.imgPath}/blues-lick-11.jpg`} width={600} height={150} alt="Blues lick 11" />

        <h2>Blues lick 12</h2>
        <p>A nice blues lick. Try bending from the second to third note as you did in lick ten.</p>
        <Image src={`${course.imgPath}/blues-lick-12.jpg`} width={600} height={150} alt="Blues lick 12" />

        <h2>Blues lick 13</h2>
        <p>This is a <strong>turnaround</strong> lick. Play it over measures nine and ten of the twelve bar blues form.</p>
        <Image src={`${course.imgPath}/blues-lick-13.jpg`} width={600} height={150} alt="Blues lick 13" />

        <h2>Blues lick 14</h2>
        <p>Another great turnaround lick in the style of Stevie Ray Vaughan.</p>
        <Image src={`${course.imgPath}/blues-lick-14.jpg`} width={600} height={150} alt="Blues lick 14" />
      </BluesLicksStyled>
    </CourseContainer>
  );
};

export default BluesLicks;

const BluesLicksStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
