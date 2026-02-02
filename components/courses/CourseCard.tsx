import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface Props {
  title: string;
  part?: number;
  description: string;
  skills: string[];
  url: string;
  lessonCount: number;
  isFree?: boolean;
  icon?: ReactNode;
}

const CourseCard = ({
  title,
  part,
  description,
  skills,
  url,
  lessonCount,
  isFree = false,
  icon,
}: Props): JSX.Element => {
  const ariaLabel = `Course ${part}: ${title}${isFree ? " - Free" : ""} - ${lessonCount} lessons`;

  return (
    <Link href={url}>
      <a aria-label={ariaLabel}>
        <CardStyled>
          {isFree && <Badge>Free</Badge>}

          {icon && <div className="icon">{icon}</div>}

          {part && <p className="course-number">Course {part}</p>}
          <h3>{title}</h3>

          <p className="lesson-count">{lessonCount} Lessons</p>

          <div className="description-container">
            <p className="description">{description}</p>
          </div>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <span className="cta">
            Start Learning <span aria-hidden="true">→</span>
          </span>
        </CardStyled>
      </a>
    </Link>
  );
};

export default CourseCard;

const CardStyled = styled.div`
  position: relative;
  width: 340px;
  border-radius: ${theme.sizes.s};
  background-color: ${theme.colors.neutral[3]};
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: ${theme.utils.shadows.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${theme.utils.shadows.dark};
  }

  &:focus-within {
    outline: 3px solid ${theme.colors.green};
    outline-offset: 2px;
  }

  .icon {
    font-size: 2.25rem;
    color: ${theme.colors.gold};
    margin-bottom: 0.75rem;
    opacity: 0.9;
  }

  .course-number {
    color: ${theme.colors.neutral[10]};
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: ${theme.sizes.xs};
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.gold};
      margin: ${theme.sizes.xs} auto 0;
    }
  }

  .lesson-count {
    color: ${theme.colors.neutral[11]};
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  .description-container {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 0.5em;
    padding: 0.875rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  .description {
    color: ${theme.colors.neutral[13]};
    font-size: 0.875rem;
    line-height: 1.6;
    margin: 0;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .skill-tag {
    background-color: transparent;
    color: ${theme.colors.neutral[12]};
    border: 1px solid ${theme.colors.neutral[6]};
    padding: 0.3em 0.75em;
    border-radius: 1em;
    font-size: 0.7rem;
  }

  .cta {
    color: ${theme.colors.green};
    font-weight: 600;
    font-size: 0.95rem;
    margin-top: auto;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: ${theme.colors.gold};
  color: ${theme.colors.neutral[1]};
  padding: 0.3em 0.75em;
  border-radius: 1em;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
