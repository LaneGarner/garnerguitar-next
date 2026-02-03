import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const WhyLearnCard = (): JSX.Element => {
  return (
    <WhyLearnCardStyled>
      <h2>Why learn guitar with these courses?</h2>
      <ul>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Self-paced learning</strong>
            <span>Learn on your schedule, revisit lessons anytime</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Free intro course</strong>
            <span>Start learning at no cost with the Guitar Basics course</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Video demonstrations</strong>
            <span>See and hear each technique demonstrated correctly</span>
          </div>
        </li>
        <li>
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Structured curriculum</strong>
            <span>Clear path from fundamentals to advanced concepts</span>
          </div>
        </li>
      </ul>
    </WhyLearnCardStyled>
  );
};

export default WhyLearnCard;

const WhyLearnCardStyled = styled.div`
  background-color: ${theme.colors.neutral[2]};
  border-radius: ${theme.sizes.s};
  padding: ${theme.sizes.m};
  box-shadow: ${theme.utils.shadows.light};

  h2 {
    font-size: 1.25rem;
    margin-bottom: ${theme.sizes.s};
    text-align: center;
    color: ${theme.colors.neutral[15]};
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
