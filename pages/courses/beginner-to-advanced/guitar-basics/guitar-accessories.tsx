import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const GuitarAccessories = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[2];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <GuitarAccessoriesStyled>
        <Image src={`${course.imgPath}/guitar-accessories.jpg`} width={700} height={467} alt="Guitar accessories" />
        <Image src={`${course.imgPath}/guitar-accessories-2.jpg`} width={700} height={467} alt="Guitar accessories" />
        <ul>
          <li><strong>Amplifier or "Amp":</strong> Device used to amplify the signal of an electric guitar.</li>
          <li><strong>Cable:</strong> Connects and sends electric signal between the guitar and amplifier (and through pedals).</li>
          <li><strong>Capo:</strong> A clamp used to change the key of a song. Place the capo over the strings and directly behind the fret. If your capo is adjustable (which I recommend), tighten it only enough for the notes to sound without buzzing. This will help avoid tuning problems.</li>
          <li><strong>Effects Pedals:</strong> Also referred to simply as "pedals", these devices are used between guitar and amplifier to alter the sound of the guitar. Some common types of effects pedals are overdrive/distortion/fuzz, delay, reverb, and modulation.</li>
          <li><strong>Metronome:</strong> Device that plays a click in perfect time at adjustable intervals. This is an essential tool for learning to play in time. Use a website, app, or physical metronome.</li>
          <li><strong>Pick:</strong> Small piece of plastic used to pluck the strings of the guitar with the right-hand. Also called plectrum or flatpick.</li>
          <li><strong>Slide:</strong> Metal or glass tube used to play "slide guitar" where you move the slide up and down the strings.</li>
          <li><strong>Strap:</strong> Cloth or leather material used to hold the guitar up.</li>
          <li><strong>Tuner:</strong> Device used to tune the guitar. This is another essential tool. Use a website, app, or physical tuner.</li>
        </ul>
      </GuitarAccessoriesStyled>
    </CourseContainer>
  );
};

export default GuitarAccessories;

const GuitarAccessoriesStyled = styled.div`
  ul {
    margin-top: 1.5em;
  }
  li {
    margin-bottom: 0.75em;
  }
`;
