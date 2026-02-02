import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const MusicTheory = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[19];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <MusicTheoryStyled>
        <Image src={`${course.imgPath}/music-theory-image.jpg`} width={600} height={770} alt="Music theory cover photo" />

        <p>If music is a language, then music theory is grammar and sentence structure. Theory aims to explain how and why music works as it does. Understanding theory will make you a better musician. That said, don't forget to put emotion and feeling into your music. Many beginning guitarists gloss over or have a limited understanding of music theory which can hold them back as players. Learning a language strictly through immersion leaves you illiterate. Learning to read a new language is a start, but studying the inner workings of sentence structure is the only way to write a story or a poem. Music theory teaches you to analyze the music of other musicians so that you can then intelligently create music of your own. Simply understanding the intervals used to build a particular chord will allow you to manipulate that chord into many other chords. In this section, you will learn how to construct scales, key signatures, intervals, and chords.</p>

        <p>Ear training is another sometimes overlooked skill. It is also important to train your ears to hear the theory you learn. Good ears can make the difference between a good musician and a great musician. The ability to hear the inner workings of a song and understand how it functions will teach you more than any book ever could. Like most topics in this book, this is a starting point. We will focus on hearing ascending and descending intervals within one octave.</p>

        <p>The end of this section uses what you learned about functional harmony to analyze more than fifty songs using only four chords. Familiarity with these common chord progressions will prepare you to study harmonic ear training.</p>
      </MusicTheoryStyled>
    </CourseContainer>
  );
};

export default MusicTheory;

const MusicTheoryStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
