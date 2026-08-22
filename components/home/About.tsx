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
          <strong>Hi, I&apos;m Lane Garner.</strong> I&apos;ve taught guitar for more than a decade, working with complete beginners, college music majors, professional musicians, and students ranging in age from five to 65.
        </p>
        <p>
          I teach the fundamentals because they make everything else easier. Good technique helps playing feel more natural. Rhythm, ear training, theory, and fretboard knowledge help you understand what you are playing and learn new music more confidently. Experience with different styles and instruments gives you more ways to hear and approach an idea.
        </p>
        <p>
          My approach is simple: practice carefully, repeat the material, give it time, and keep chipping away. If another musician can play something, you can learn it too. Progress takes patience, but music does not need to feel overly serious.
        </p>
        <p>
          I hold bachelor&apos;s and master&apos;s degrees in Jazz Studies from the University of North Texas. As a performer, I&apos;ve traveled throughout the United States and abroad, playing jazz, rock, pop, classical, country, worship music, and more. That range of experience shapes my courses. They focus on strong fundamentals while leaving room for different styles, goals, and ways of understanding music.
        </p>
        <p>
          I&apos;m not currently accepting private students. My online courses are based on the curriculum I&apos;ve developed through years of teaching. You can work at your own pace, revisit lessons whenever you need to, and <a href="/courses/beginner-to-advanced/guitar-basics">start with the free Guitar Basics course</a>.
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

  a {
    color: ${theme.colors.navy};
  }
`;
