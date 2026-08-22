import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const WhyLearnCard = (): JSX.Element => {
  return (
    <WhyLearnCardStyled>
      <h2>How the courses work</h2>
      <ul>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Study at your own pace</strong>
            <span>Work through lessons when you have time and revisit them whenever you need to.</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Start for free</strong>
            <span>The 21-lesson Guitar Basics course is free and does not assume previous experience.</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Learn with clear examples</strong>
            <span>Written explanations, diagrams, exercises, and musical examples help you put each idea into practice.</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Follow a structured curriculum</strong>
            <span>Each course builds on earlier material while remaining useful as a reference.</span>
          </div>
        </li>
      </ul>
    </WhyLearnCardStyled>
  );
};

export default WhyLearnCard;

const WhyLearnCardStyled = styled.div`
  ${theme.utils.cards.darker}

  h2 {
    font-size: 1.25rem;
    margin-bottom: ${theme.sizes.s};
    text-align: center;
    color: ${theme.colors.neutral[15]};

    &::after {
      content: "";
      display: block;
      width: 40%;
      height: 2px;
      background-color: ${theme.colors.gold};
      margin: 0.5rem auto 0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: ${theme.sizes.s};
    margin-bottom: ${theme.sizes.s};

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .checkmark {
    color: ${theme.colors.green};
    font-size: 1.25rem;
    line-height: 1.4;
  }

  strong {
    display: block;
    color: ${theme.colors.neutral[14]};
  }

  span {
    color: ${theme.colors.neutral[10]};
    font-size: 0.9rem;
  }
`;
