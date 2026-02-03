import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";
import Pill from "../common/Pill";

interface Props {
  title: string;
  part?: number;
  description: string;
  skills: string[];
  url: string;
  lessonCount: number;
  isFree?: boolean;
  isComingSoon?: boolean;
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
  isComingSoon = false,
  icon,
}: Props): JSX.Element => {
  const ariaLabel = `Course ${part}: ${title}${isFree ? " - Free" : ""}${isComingSoon ? " - Coming Soon" : ""} - ${lessonCount} lessons`;

  const cardContent = (
    <CardStyled $isComingSoon={isComingSoon}>
      {isComingSoon && <Badge $type="comingSoon">Coming Soon</Badge>}
      {isFree && !isComingSoon && <Badge $type="free">Free</Badge>}

      {icon && <div className="icon">{icon}</div>}

      {part && <p className="course-number">Course {part}</p>}
      <h3>{title}</h3>

      <p className="lesson-count">{lessonCount} Lessons</p>

      <div className="description-container">
        <p className="description">{description}</p>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>

      {!isComingSoon && (
        <span className="cta">
          Start Learning <span aria-hidden="true">→</span>
        </span>
      )}
    </CardStyled>
  );

  if (isComingSoon) {
    return <div aria-label={ariaLabel}>{cardContent}</div>;
  }

  return (
    <Link href={url} aria-label={ariaLabel}>
      {cardContent}
    </Link>
  );
};

export default CourseCard;

const CardStyled = styled.div<{ $isComingSoon?: boolean }>`
  ${theme.utils.cards.dark}
  position: relative;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: ${({ $isComingSoon }) => $isComingSoon ? "none" : "translateY(-5px) scale(1.02)"};
    box-shadow: ${({ $isComingSoon }) => $isComingSoon ? theme.utils.shadows.primary : theme.utils.shadows.dark};
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
    text-align: left;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .cta {
    color: ${theme.colors.green};
    font-weight: 600;
    font-size: 0.95rem;
    margin-top: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    max-width: 400px;
  }
`;

const Badge = styled.span<{ $type?: "free" | "comingSoon" }>`
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: ${({ $type }) => $type === "comingSoon" ? theme.colors.neutral[6] : theme.colors.gold};
  color: ${({ $type }) => $type === "comingSoon" ? theme.colors.neutral[14] : theme.colors.neutral[1]};
  padding: 0.3em 0.75em;
  border-radius: 1em;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
