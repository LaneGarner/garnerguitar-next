import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const Hero = (): JSX.Element => {
  return (
    <HeroStyled>
      <div className="hero-copy">
        <h1>Learn guitar with a clear path forward</h1>
        <p>
          Structured, self-paced courses built around technique, theory,
          rhythm, ear training, and practical musicianship.
        </p>
        <p>Start at the beginning or strengthen the skills you already have.</p>
        <div className="hero-actions">
          <Link className="primary-action" href="/courses/beginner-to-advanced/guitar-basics">
            Start the free course
          </Link>
          <Link className="secondary-action" href="/courses">
            Browse all courses
          </Link>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled.div`
  background: url(images/online-guitar-lessons.jpg);
  min-height: 500px;
  background-size: cover;
  background-position: center;
  margin: 0 2em ${theme.sizes.xl} 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.utils.shadows.primary};
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 350px;
    margin: 0 ${theme.sizes.s} ${theme.sizes.l} ${theme.sizes.s};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 280px;
    margin: 0 ${theme.sizes.xs} ${theme.sizes.m} ${theme.sizes.xs};
  }

  .hero-copy {
    width: min(680px, calc(100% - 2rem));
    padding: 2rem;
    border-radius: 0.5rem;
    background: #111111dd;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    backdrop-filter: blur(20px);
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2.25rem;
  }

  p {
    max-width: 580px;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;

    a {
      min-width: 190px;
      padding: 0.85rem 1.25rem;
      border: 2px solid ${theme.colors.gold};
      border-radius: 2rem;
      font-weight: bold;
      text-decoration: none;

      &:focus-visible {
        outline: 3px solid ${theme.colors.green};
        outline-offset: 2px;
      }
    }

    .primary-action {
      background: ${theme.colors.gold};
      color: ${theme.colors.neutral[1]};
    }

    .secondary-action {
      color: white;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .hero-copy {
      padding: 1.5rem;
    }

    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    .hero-copy {
      padding: 1.25rem 1rem;
    }

    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }

    .hero-actions,
    .hero-actions a {
      width: 100%;
    }
  }
`;
