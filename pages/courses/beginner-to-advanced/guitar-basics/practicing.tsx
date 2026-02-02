import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Practicing = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[3];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <PracticingStyled>
        <h2>Practicing vs playing</h2>
        <Image src={`${course.imgPath}/perfect-practice.jpg`} width={700} height={319} alt="Practice makes perfect" />
        <p>A beginning guitarist fresh out of his first lesson might think he practiced for thirty minutes by playing "Twinkle Twinkle Little Star" over and over. Likewise, a more advanced student may think she practiced for three hours by reviewing her repertoire, scales, and improvising a bit. Both students are on the right track but could do more to make the most of their practice time.</p>
        <p>The beginning student may have played "Twinkle" ten times but with poor rhythm or without memorizing each phrase separately and then putting them all together. His focus should be on the sections that are giving him trouble rather than tackling the entire song each time. Focusing on difficult sections would allow him to master the current material and advance more quickly and efficiently.</p>
        <p>The advanced student in our example is similarly not making the most of her practice time. While repertoire review is important for retaining and memorization, it is best approached by reviewing material that she has forgotten rather than playing material that she knows best. A more productive approach to her scale practice would be to play a scale she knows well but at a faster tempo, in a new position, in a new harmonic context, or with another new approach. Running scales can be a good warm-up but would not push a student to improve as much as practicing something unfamiliar.</p>
        <p>In a nutshell, playing focuses on what you know and practicing focuses what you don't know. Your goal for practicing is to retain your current skills and obtain new skills by ingraining them to memory. Developing an effective practice routine is the number one thing you can do to take your playing to the next level.</p>
        <h2>Develop a practice routine</h2>
        <p>Good intentions for practicing can often go awry, quickly turning into a noodling session. Focusing on one topic for an entire practice session can feel monotonous and your mind might wander off. Rather than practicing one topic, aim to fit multiple concepts into one practice session. Use a timer and divide your practice session into blocks. As soon as you complete one block, move directly to the next. Don't look back. If you don't feel you have fully grasped a topic, you can always revisit it later—even later that day. For this practice session, move on. A one-hour session is much more productive if you focus intently on four topics for fifteen minutes each. Topics may vary widely, but a typical hour-long practice session might look something like this:</p>
        <ul>
          <li>Warm-up/Technique: 15 min</li>
          <li>Review old repertoire: 15 min</li>
          <li>Learn new repertoire: 15 min</li>
          <li>Practice new scale: 15 min</li>
        </ul>
        <p>Make a list of areas in which you would like to improve. Use this list to create your unique practice routine. Adopt good practice habits early on and draw on them throughout your development as a musician. Some musicians reach a certain level of proficiency and stop practicing. The truly dedicated musician keeps up a regular practice routine.</p>
        <h2>Warm-ups</h2>
        <p>Like any physical activity, warming up is key to a productive practice routine. Can you imagine an athlete not stretching, running, and practicing before a big game? They would not perform at their top level. Find warm-ups you like, do them regularly, and allow them to evolve over time while you progress as a musician. More on warm-ups and technique in Part Two.</p>
        <h2>Create a practice space</h2>
        <p>Dedicate a space to practice. This might be an entire room or simply a corner. Set up a music stand, amp, guitar stand, computer, speakers, metronome, and/or anything else you will need for practicing. This space will help you avoid distraction, and you may be inspired to practice when passing by. If you don't have enough space or you are practicing while traveling, keep all of your practice materials together in a folder, notebook, or bag. Wherever your practice space is, view it as a place of escape. This is where you will go to learn about music and your instrument. This is both a place of work and a place of play. It is where you will make musical discoveries.</p>
        <h2>Keep a practice log</h2>
        <p>Along with timed practice sessions, journaling is a great way to develop your practice routine. Keep a detailed journal documenting the date, start and end times, topics covered/time spent on each topic, and future goals. Writing goals down will make them seem more tangible and will provide you concepts to practice in the future. Practice logs are also astonishingly revealing to look back on months or years later. You will see what you were practicing at the time and how much you have progressed. You might remember how much you struggled to play concepts that are now second-nature, which can be inspiring when working on material that seems difficult in the future. This difficult material will eventually be easy. Practice is the key.</p>
        <p>Use the practice logs on the following pages to document your progress. If you run out of space, photocopy the extra practice log pages in the resources section at the end of this book or access the digital and print version at garnerguitar.com/practice-log</p>
      </PracticingStyled>
    </CourseContainer>
  );
};

export default Practicing;

const PracticingStyled = styled.div`
  h2 {
    margin-top: 1.5em;
  }
  ul {
    margin: 1em 0;
  }
  li {
    margin-bottom: 0.5em;
  }
`;
