import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const RhythmicNotation = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[17];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <RhythmicNotationStyled>

        <p>Note duration is represented by writing notes in different ways.</p>

        <h2>Whole note: 4 beats</h2>
        <Image src={`${course.imgPath}/whole-note.jpg`} width={500} height={52} alt="Whole note on staff" />

        <h2>Half note: 2 beats</h2>
        <Image src={`${course.imgPath}/half-note.jpg`} width={500} height={80} alt="Half note on staff" />

        <h2>Quarter note: 1 beat</h2>
        <Image src={`${course.imgPath}/quarter-note.jpg`} width={500} height={90} alt="Quarter note on staff" />

        <h2>Eighth note: 1/2 beat</h2>
        <Image src={`${course.imgPath}/eighth-note.jpg`} width={500} height={82} alt="Eighth note on staff" />

        <h2>Sixteenth note: 1/4 beat</h2>
        <Image src={`${course.imgPath}/sixteenth-note.jpg`} width={500} height={79} alt="Sixteenth note on staff" />

        <p>The basic rhythmic values can be extended with dotted and tied notes. A tied note connects the value of two or more notes. A dotted note increases the value of the note by one half of the original value.</p>

        <h3>Half note tied to quarter note = dotted half note = 3 beats</h3>
        <Image src={`${course.imgPath}/dotted-half.jpg`} width={500} height={52} alt="Dotted half note on staff" />

        <h3>Quarter note tied to eighth note = dotted quarter note = 1.5 beats</h3>
        <Image src={`${course.imgPath}/dotted-quarter.jpg`} width={500} height={56} alt="Dotted quarter note on staff" />

        <p>A rest is a silence with the same rhythmic value as a note with the same duration. Mute the strings to "play" a rest.</p>
        <Image src={`${course.imgPath}/rests.jpg`} width={600} height={244} alt="Rest symbols" />

        <p>Practice reading the following rhythms by playing any note. Use a metronome to keep good time.</p>

        <div className="rhythm-examples">
          <Image src={`${course.imgPath}/reading-rhythms-1.jpg`} width={600} height={73} alt="Rhythm practice 1" />
          <Image src={`${course.imgPath}/reading-rhythms-2.jpg`} width={600} height={67} alt="Rhythm practice 2" />
          <Image src={`${course.imgPath}/reading-rhythms-3.jpg`} width={600} height={67} alt="Rhythm practice 3" />
          <Image src={`${course.imgPath}/reading-rhythms-4.jpg`} width={600} height={67} alt="Rhythm practice 4" />
          <Image src={`${course.imgPath}/reading-rhythms-5.jpg`} width={600} height={67} alt="Rhythm practice 5" />
        </div>


        <p>This YouTube video discusses much of the same material as the lesson:</p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0D0UDSUqQ9I"
            title="Strum patterns video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p>Learning to strum evenly is an essential skill for every beginning guitarist. <strong>Keep your right arm and pick in constant motion.</strong> This helps you to feel the beat. Practice these strum patterns with a metronome (or drum beat) at varying tempos to develop a good time feel. These examples are a starting point. Come up with your own strum patterns by adding or omitting eighth-note strums.</p>

        <p>First, you must learn two symbols: the downstroke symbol resembles a top hat; the upstroke symbol is a V.</p>
        <div className="stroke-symbols">
          <Image src={`${course.imgPath}/downstroke.jpg`} width={80} height={67} alt="Downstroke symbol" />
          <Image src={`${course.imgPath}/upstroke.jpg`} width={80} height={92} alt="Upstroke symbol" />
        </div>

        <h2>Example 1</h2>
        <p>Play even quarter notes with downstrokes. This is the basis for all other strum patterns.</p>
        <Image src={`${course.imgPath}/strum-1.jpg`} width={500} height={77} alt="Strum pattern 1" />

        <h2>Example 2</h2>
        <p>No additional motion is necessary to play eighth notes; simply play an upstroke on your way back up.</p>
        <Image src={`${course.imgPath}/strum-2.jpg`} width={500} height={89} alt="Strum pattern 2" />

        <h2>Example 3</h2>
        <p>To connect the and-of-two and beat three with a tie, play a "silent downstroke" on beat three. Make the downstroke motion without actually touching the strings.</p>
        <Image src={`${course.imgPath}/strum-3.jpg`} width={500} height={81} alt="Strum pattern 3" />

        <h2>Example 4</h2>
        <p>This example is similar to example three but with no upstroke on the and-of-four.</p>
        <Image src={`${course.imgPath}/strum-4.jpg`} width={500} height={79} alt="Strum pattern 4" />

        <h2>Example 5</h2>
        <p>This example is similar to example four but with no upstroke on the and-of-one.</p>
        <Image src={`${course.imgPath}/strum-5.jpg`} width={500} height={82} alt="Strum pattern 5" />
      </RhythmicNotationStyled>
    </CourseContainer>
  );
};

export default RhythmicNotation;

const RhythmicNotationStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  .rhythm-examples {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 1em 0;
  }
  .video-container {
    margin: 1em 0;
    iframe {
      max-width: 100%;
      border: none;
    }
  }
  .stroke-symbols {
    display: flex;
    gap: 1em;
    margin: 1em 0;
  }
`;
