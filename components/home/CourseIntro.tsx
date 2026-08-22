import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const CourseIntro = (): JSX.Element => {
  return (
    <CourseIntroStyled>
      <h2>A structured way to learn</h2>
      <p>
        Good playing is built from simple things practiced carefully. These
        courses connect technique, rhythm, theory, ear training, and fretboard
        knowledge so each new skill has a clear purpose.
      </p>
      <p>
        Work through the lessons in order or return to a specific topic when
        you need it. You can study at your own pace and revisit the material as
        often as you like.
      </p>
      <Link href="/courses/beginner-to-advanced/guitar-basics">
        Start the free Guitar Basics course
      </Link>
    </CourseIntroStyled>
  );
};

export default CourseIntro;

const CourseIntroStyled = styled.section`
  ${theme.utils.cards.darker}
  width: min(760px, calc(100% - 2rem));
  margin: 0 auto ${theme.sizes.xl};
  text-align: center;

  h2 {
    margin-bottom: ${theme.sizes.s};
    font-size: 1.75rem;
  }

  p {
    margin: 0 auto ${theme.sizes.s};
    max-width: 650px;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    margin-top: ${theme.sizes.xs};
    padding: 0.75rem 1.25rem;
    border-radius: 2rem;
    background: ${theme.colors.gold};
    color: ${theme.colors.neutral[1]};
    font-weight: bold;
    text-decoration: none;

    &:focus-visible {
      outline: 3px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }
`;
