import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const BluesSongs = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 2;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[7];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <BluesSongsStyled>
        <p>The etudes in this book are a great starting point for your adventure into blues. That said, blues is a huge genre of music and there are so many subtleties involved. Here's a list of some more blues songs you might want to learn. While you dive into the music this list will grow but these are excellent to start with.</p>

        <ul>
          <li>"Boogie Chillun" - John Lee Hooker</li>
          <li>"Boom Boom" - John Lee Hooker</li>
          <li>"Born Under A Bad Sign" - Albert King</li>
          <li>"Cross Road Blues" - Robert Johnson</li>
          <li>"Folsom Prison Blues" - Johnny Cash</li>
          <li>"I Can't Quit You Babe" - Led Zeppelin</li>
          <li>"Mustang Sally" - Wilson Pickett</li>
          <li>"Red House" - Jimi Hendrix</li>
          <li>"Scuttle Buttin'" - Stevie Ray Vaughan</li>
          <li>"Stormy Monday" - T-Bone Walker</li>
          <li>"Smokestack Lightnin'" - Howlin' Wolf</li>
          <li>"Sweet Sixteen" - B.B. King</li>
          <li>"T-Bone Shuffle" - T-Bone Walker</li>
          <li>"Texas Flood" - Stevie Ray Vaughan</li>
          <li>"The Thrill Is Gone" - B.B. King</li>
          <li>"Three O'Clock Blues" - B.B. King</li>
        </ul>
      </BluesSongsStyled>
    </CourseContainer>
  );
};

export default BluesSongs;

const BluesSongsStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
  ul {
    margin-bottom: 1em;
  }
  li {
    margin-bottom: 0.5em;
  }
`;
