import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Tablature = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[12];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <TablatureStyled>

        <Image src={`${course.imgPath}/ag-fence.jpg`} width={400} height={163} alt="Acoustic guitar against fence" />

        <p>Tablature, or "tab", is one of the most common ways to notate guitar music. Tablature is sometimes looked down upon by purists but has actually been around longer than standard notation. A combination of tab and standard staff notation can often be the best way to specify where to play a note.</p>

        <p>Tablature uses six lines which each represent one of the six guitar strings. The low (sounding!) E string is the bottom line and the high E string is the top line. Numbers placed on the line indicate which fret to play. The string is specified by which line the number is on. Tabs may also use beams for rhythmic notation. It is good to become familiar with standard notation and tablature.</p>

        <Image src={`${course.imgPath}/tab-strings.jpg`} width={500} height={73} alt="Tab strings diagram" />
        <Image src={`${course.imgPath}/tab-notes.jpg`} width={500} height={164} alt="Tab notes diagram" />

        <h2>Tablature etudes</h2>
        <p>An <em><strong>etude</strong></em> is a short musical composition used as an exercise to focus on a specific skill. Use these etudes to practice reading tablature notation.</p>

        <h3>Tablature etude one</h3>
        <p>This etude is played all on the first string. Use the fret markers at the 3rd, 5th, 7th, 9th, and 12th frets to help you find your way around the guitar neck.</p>
        <Image src={`${course.imgPath}/tab-etude-1.jpg`} width={600} height={77} alt="Tablature etude one" />

        <h3>Tablature etude two</h3>
        <p>The first part of this etude uses all open strings. Pay close attention to skipping your pick over the fifth string and up to the fourth string then back down. The last six notes of this etude come from a scale you will learn later in this book called the E minor pentatonic scale.</p>
        <Image src={`${course.imgPath}/tab-etude-2.jpg`} width={600} height={77} alt="Tablature etude two" />

        <h3>Tablature etude three</h3>
        <p>The final tablature etude is "Mary Had a Little Lamb." You will later learn to read this same song with standard notation. Singing the song in your head while playing will help you play the correct rhythms.</p>
        <Image src={`${course.imgPath}/tab-etude-3.jpg`} width={600} height={183} alt="Tablature etude three - Mary Had a Little Lamb" />

        <p className="tip"><em><strong>Tip:</strong> while there are numerous websites with TABs, many of them are incorrect because they are user submitted. Two of my favorite sites for finding accurate TABs are <a href="http://www.songsterr.com/" target="_blank" rel="noopener noreferrer">Songsterr</a> and <a href="https://www.ultimate-guitar.com/" target="_blank" rel="noopener noreferrer">Ultimate Guitar</a>.</em></p>
      </TablatureStyled>
    </CourseContainer>
  );
};

export default Tablature;

const TablatureStyled = styled.div`
  h2 {
    margin-top: 1.5em;
  }
  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  .tip {
    margin-top: 2em;
    padding: 1em;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  a {
    color: #83e7cb;
  }
`;
