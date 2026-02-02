import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const BluesCagedPentatonicsIntro = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[0];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesCagedPentatonicsIntroStyled>
        <p>All American popular music is deeply rooted in the blues. From jazz to rock to country to rap, the blues is an essential influence on most styles of music. Because guitar has been so widely used in blues, no guitar method would be complete without diving into the blues. This style of music, like any other style, could be studied in-depth for many years. What is presented here is an introduction to some basic aspects of the blues.</p>

        <h2>Recommended listening</h2>
        <p>Listening is the most important aspect of learning a new style of music. Use this list of suggested blues and blues-influenced guitarists as a starting point. Find some artists that you like and listen to them non-stop. Figure out who their influences were and listen to them nonstop. Find musicians influenced by them and listen to them nonstop. Plummet down the rabbit hole.</p>
        <ul>
          <li>Albert Collins</li>
          <li>Albert King</li>
          <li>BB King</li>
          <li>Blake Mills</li>
          <li>Buddy Guy</li>
          <li>Derek Trucks</li>
          <li>Doyle Bramhall Jr</li>
          <li>Earl Hooker</li>
          <li>Elizabeth "Libba" Cotton</li>
          <li>Eric Clapton</li>
          <li>Eric Gales</li>
          <li>Etta Baker</li>
          <li>Freddie King</li>
          <li>Grant Green</li>
          <li>Howlin' Wolf</li>
          <li>Joanna Connor</li>
          <li>John Lee Hooker</li>
          <li>Joe Bonnamassa</li>
          <li>Jimi Hendrix</li>
          <li>Jimmy Herring</li>
          <li>Jimmy Page</li>
          <li>Lonnie Johnson</li>
          <li>Luther Allison</li>
          <li>Matt Schofield</li>
          <li>Mississippi Fred McDowell</li>
          <li>Muddy Waters</li>
          <li>Robert Johnson</li>
          <li>Robben Ford</li>
          <li>Rory Block</li>
          <li>Shannon Curfman</li>
          <li>Stevie Ray Vaughan</li>
          <li>Taj Mahal</li>
          <li>T-Bone Walker</li>
          <li>Warren Haynes</li>
        </ul>

        <h2>Blues shuffle patterns in A</h2>
        <p>We covered the basic blues shuffle patterns and it may be helpful to review them now.</p>
        <Image src={`${course.imgPath}/blues-shuffle-a.jpg`} width={600} height={155} alt="Blues shuffle patterns in A" />

        <h2>Blues shuffle patterns in E</h2>
        <p>Keep the 6th string open while moving notes on the 5th string.</p>
        <Image src={`${course.imgPath}/blues-shuffle-e.jpg`} width={600} height={150} alt="Blues shuffle patterns in E" />

        <h2>Blues shuffle patterns in D</h2>
        <p>Keep the 4th string open while moving notes on the 3rd string.</p>
        <Image src={`${course.imgPath}/blues-shuffle-d.jpg`} width={600} height={138} alt="Blues shuffle patterns in D" />

        <h2>Blues shuffle patterns in B</h2>
        <p>The key of B is more difficult to play than the other keys because the root is not based on an open string. Option one requires large stretches while option two requires muting the fourth string. Transpose by treating any other fret as the root.</p>
        <Image src={`${course.imgPath}/blues-shuffle-b-1.jpg`} width={600} height={150} alt="Blues shuffle patterns in B option 1" />
        <Image src={`${course.imgPath}/blues-shuffle-b-2.jpg`} width={600} height={125} alt="Blues shuffle patterns in B option 2" />
      </BluesCagedPentatonicsIntroStyled>
    </CourseContainer>
  );
};

export default BluesCagedPentatonicsIntro;

const BluesCagedPentatonicsIntroStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    margin-bottom: 1em;
    columns: 2;
  }
  li {
    margin-bottom: 0.25em;
  }
`;
