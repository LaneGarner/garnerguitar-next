import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../utils/styles/theme";

const About = (): JSX.Element => {
  return (
    <AboutStyled>
      <h2 className="heading-style">About Me</h2>
      <div className="img">
        <Image
          src="/images/lane-garner-guitar-lessons-online-austin-texas.jpg"
          width={400}
          height={400}
          alt="Lane Garner, guitar instructor"
          sizes="(max-width: 480px) 200px, (max-width: 768px) 250px, 400px"
        />
      </div>
      <div className="text">
        <p>
          <strong>Hi, I'm Lane Garner.</strong> I’ve been teaching guitar lessons for over ten years and have experience with students of all ages and experience levels. Whether
          you just started playing guitar or you’ve played for years there is always something new to learn about music.
        </p>
        <p>
          My primary goal as a teacher is to focus intently on specific aspects of each student's musicianship-technique, harmonic concepts, ear-training, theory, etc while making
          each lesson fun for the student. It is my goal to improve the student’s playing by the end of each and every lesson. I find it important to teach fundamentals of music as
          well as any additional material the student is interested in learning. In my decade plus of teaching guitar I’ve worked with students of all levels and ages 5 to 65. I’ve
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
  grid-template-rows: auto 1fr;
  grid-column-gap: ${theme.sizes.l};
  grid-row-gap: 0px;
  margin: 0 ${theme.sizes.xl} ${theme.sizes.xl} ${theme.sizes.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin: 0 ${theme.sizes.m} ${theme.sizes.l} ${theme.sizes.m};
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 0 ${theme.sizes.s} ${theme.sizes.m} ${theme.sizes.s};
  }

  h2 {
    font-size: ${theme.sizes.xl};
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.sizes.l};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 2.5em;
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
    max-width: 400px;

    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 250px;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      max-width: 200px;
    }
  }

  .img {
    grid-area: 2 / 1 / 3 / 2;
    justify-self: center;

    @media (max-width: ${theme.breakpoints.md}) {
      margin-bottom: ${theme.sizes.m};
    }
  }

  .text {
    margin-top: ${theme.sizes.l};
    margin-left: ${theme.sizes.m};
    grid-area: 1 / 2 / 3 / 3;
    width: 95%;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-area: 3 / 1 / 4 / 2;
      margin: 0;
      width: 100%;
      text-align: left;
    }
  }

  p {
    margin-bottom: ${theme.sizes.m};

    @media (max-width: ${theme.breakpoints.md}) {
      margin-bottom: ${theme.sizes.s};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.1em;
    }
  }

  strong {
    font-family: monospace;
  }
`;
