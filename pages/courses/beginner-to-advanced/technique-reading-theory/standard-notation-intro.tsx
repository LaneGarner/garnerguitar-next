import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const StandardNotationIntro = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[9];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <StandardNotationIntroStyled>
        <Image src={`${course.imgPath}/standard-notation-guitars.jpg`} width={600} height={300} alt="Strat and Jazzmaster close up" />


        <h2>Rhythm review</h2>
        <Image src={`${course.imgPath}/rhythm-review.jpg`} width={600} height={200} alt="Rhythm review" />

        <h2>Standard notation</h2>
        <p>While chord diagrams and tablature may be the most common way to write music for guitar, it is also valuable to learn standard notation as well. A basic understanding of standard notation will help to broaden your understanding of music as a whole because it is the most common way to write music for any instrument. Many guitar players never learn standard notation, so learning even the basics will set you apart.</p>
        <Image src={`${course.imgPath}/staff-example.jpg`} width={600} height={200} alt="Staff elements" />

        <h3>A. Staff</h3>
        <p>The staff is made up of five lines and four spaces. Notes and symbols are placed on the staff.</p>

        <h3>B. Treble clef</h3>
        <p>The clef determines which lines and spaces correspond with each note. It is the left-most symbol on the staff. Guitar music typically uses the treble clef (also known as the G clef). The bottom curl of the treble clef spirals around the second line from the bottom- indicating the note G. Notated guitar music is technically transposed down one octave. Guitar music will typically be transposed for you, but you may need to play notes up one octave when reading music written for another instrument.</p>

        <h3>C. Time signature</h3>
        <p>The time signature is a symbol placed on the staff to the right of the clef. It consists of two numbers stacked on top of one another. The top number indicates the number of beats per measure while the bottom number indicates what type of note gets one beat. The most common time signature, 4/4, is so common that it is sometimes referred to as "common time." Some other commonly used time signatures are 3/4, 2/4, and 6/8. See the below for some time signature examples.</p>
        <Image src={`${course.imgPath}/time-signatures.jpg`} width={600} height={150} alt="Time signature examples" />

        <h3>D. Bar lines & bars/measures</h3>
        <p>Bar lines are used to divide the staff into sections called bars or measures. The length of each measure is determined by the time signature.</p>

        <h3>Key signature</h3>
        <Image src={`${course.imgPath}/key-signature.jpg`} width={600} height={150} alt="Key signature examples" />
        <p>The key signature is placed between the clef and the time signature. It tells the key of a song by showing which notes are sharp or flat. More on keys in the theory section.</p>

        <h3>Accidentals</h3>
        <Image src={`${course.imgPath}/accidentals.jpg`} width={600} height={100} alt="Accidental examples" />
        <p>An accidental alters a note so that it is outside of the key signature. Once an accidental is used, that note remains altered for the remainder of the measure. There are three types of accidentals: sharp, flat, and natural. A sharp looks like a number sign (or hashtag) and raises the note by a half-step. A flat looks like a lowercase b and lowers the note by a half-step. A natural symbol looks like a box with the left line extended up and right line extended down; it cancels out any sharps or flats from the key signature and/or accidentals used earlier in a measure.</p>

        <h3>Metronome mark</h3>
        <Image src={`${course.imgPath}/metronome-mark.jpg`} width={300} height={80} alt="Metronome mark example" />
        <p>The metronome mark indicates the tempo. The number represents beats per minute (BPM). 60 BPM is equal to one second. Use a metronome to ensure that you are playing with good time. After all, time is the most important aspect of music.</p>

        <h3>Dynamics</h3>
        <p>Dynamics indicate how loud or soft to play. Always make a mental note of dynamics in written music as they can make the music come to life.</p>
        <Image src={`${course.imgPath}/dynamics.jpg`} width={600} height={150} alt="Dynamics examples" />

        <h3>Double and final bar lines</h3>
        <Image src={`${course.imgPath}/double-final-barlines.jpg`} width={400} height={100} alt="Double and final bar line examples" />

        <h3>Repeats</h3>
        <p>Repeat signs enclose a passage of music to be played more than once. A repeat sign is a double bar line with two dots on either side of the middle line of the staff. For our purposes, optional brackets at the top and bottom of the repeat sign (shown below) help make the repeats more visible. If there is no forward-facing repeat, then repeat back to the very beginning of the piece.</p>
        <Image src={`${course.imgPath}/repeats.jpg`} width={600} height={150} alt="Repeats example" />

        <h3>Endings</h3>
        <p>Endings may be used within repeated sections. In the example above, play the first measure, the first ending, repeat back to the first measure, then play the second ending in place of the first ending.</p>

        <h3>The musical roadmap</h3>
        <p>To avoid repeatedly writing and reading notated material, symbols are used to create a "musical roadmap." Repeats and endings are an element of the musical roadmap that you already know. Here are some additional symbols that you might see in sheet music:</p>
        <Image src={`${course.imgPath}/roadmap-items.jpg`} width={600} height={200} alt="Musical roadmap items" />

        <h3>Following the musical roadmap</h3>
        <p>Now that you know the basic system of the musical roadmap, let's apply it to a piece of music.</p>
        <ol>
          <li className="red">Start at top left and play until the first repeat sign</li>
          <li className="green">Repeat section. When you reach the first ending jump to the second ending. Continue playing until "DS Al Coda"</li>
          <li className="blue">At "DS Al Coda" return to sign. Continue playing until "To Coda" Then jump to the coda and play to the end</li>
        </ol>
        <Image src={`${course.imgPath}/roadmap.jpg`} width={600} height={300} alt="Following the musical roadmap" />
      </StandardNotationIntroStyled>
    </CourseContainer>
  );
};

export default StandardNotationIntro;

const StandardNotationIntroStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ol {
    margin: 1em 0;
    padding-left: 1.5em;
  }
  li {
    margin-bottom: 0.5em;
  }
  .red {
    color: #c00;
  }
  .green {
    color: #060;
  }
  .blue {
    color: #006;
  }
`;
