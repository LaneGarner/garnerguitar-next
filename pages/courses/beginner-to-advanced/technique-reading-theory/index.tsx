import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const TechniqueReadingTheoryIntro = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[0];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <IntroStyled>
        <Image src={`${course.imgPath}/jm-closeup.jpg`} width={500} height={360} alt="Jazzmaster headstock closeup" />

        <p>Guitar technique comes down to two primary factors: left-hand finger independence and coordinating the left and right hands. Finger independence allows you to execute chord transitions, melody lines, scales, solos, etc. One of my guitar teachers used to repeat the quote, "The left hand is the brain, the right hand is the muscle." Coordinating the hands allows you to play in time and is one of the biggest challenges for many beginning guitarists. Any technical aspect of guitar playing can be summed up by both, one, or part of these two factors.</p>

        <p>When performing any physical activity, it is important to first warm up your muscles. Playing a musical instrument is no exception. The motions necessary to play guitar are tiny compared to many physical activities, but they are precise and repetitive, which can lead to injury if you're not careful. To avoid injury while improving your dexterity on the instrument, warm up every day before playing. Even a quick warm-up limbers your fingers and mind and allows you to practice and/or play to your full potential. Warm-up is a great time to focus on technique. Technical exercises can be adapted to any playing level and might include finger exercises, chords, scales, arpeggios, picking exercises, ear-training, and more. As new topics are presented throughout this book, your warm-ups will evolve along with your playing. Think of warming up before practice as doing cardio before weightlifting to prepare for performance.</p>
      </IntroStyled>
    </CourseContainer>
  );
};

export default TechniqueReadingTheoryIntro;

const IntroStyled = styled.div`
  p {
    margin-bottom: 1em;
  }
`;
