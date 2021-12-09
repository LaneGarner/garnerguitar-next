import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../utils/styles/theme";

const About = (): JSX.Element => {
  return (
    <AboutStyled>
      <h2 className="heading-style">About Me</h2>
      <div className="img">
        <Image src="/images/lane-garner-guitar-lessons-online-austin-texas.jpg" width={400} height={400} />
      </div>
      <div className="text">
        <p>
          <strong>Hi, I'm Lane Garner.</strong> I’ve been teaching guitar lessons for over ten years and have experience with students of all ages and experience levels. Whether
          you just started playing guitar or you’ve played for years there is always something new to learn about music.
        </p>
        <p>
          My primary goal as a teacher is to focus intently on specific aspects of each student's musicianship-technique, harmonic concepts, ear-training, theory, etc while making
          each lesson fun for the student. It is my goal to improve the student’s playing by the end of each and every lesson. I find it important to teach fundamentals of music as
          well as any additional material the student is interested in learning. In my 10+ years of teaching guitar I’ve worked with students of all levels and ages 5 to 65. I’ve
          taught total beginners, intermediate players, college music majors, and even working professional musicians.
        </p>
        <p>
          I have Masters and Bachelors degrees in Jazz Studies from the University of North Texas and as a performer I have traveled all over the country/world playing various
          styles ranging from jazz, rock, and pop to classical, country, worship music, and more. I am not currently taking students.
        </p>
      </div>
    </AboutStyled>
  );
};

export default About;

const AboutStyled = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  grid-column-gap: ${theme.sizes.l};
  grid-row-gap: 0px;
  margin: 0 ${theme.sizes.xl} ${theme.sizes.xl} ${theme.sizes.xl};
  h2 {
    font-size: ${theme.sizes.xl};
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
  }
  img {
    border-radius: 50%;
  }
  .img {
    grid-area: 2 / 1 / 3 / 2;
    justify-self: center;
  }
  .text {
    margin-top: ${theme.sizes.l};
    margin-left: ${theme.sizes.m};
    grid-area: 1 / 2 / 3 / 3;
    width: 95%;
  }
  p {
    margin-bottom: ${theme.sizes.m};
  }
`;
