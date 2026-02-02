import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface Props {
  title: string;
  tagline: string;
  img: string;
  shortName: string;
  courseCount: number;
  lessonCount: number;
  highlights: string[];
  isFeatured?: boolean;
  isComingSoon?: boolean;
}

const CourseTitleCard = (props: Props): JSX.Element => {
  const {
    title,
    tagline,
    img,
    shortName,
    courseCount,
    lessonCount,
    highlights,
    isFeatured = false,
    isComingSoon = false,
  } = props;

  const ariaLabel = `${title} Guitar Courses${isComingSoon ? " - Coming Soon" : ""}`;

  return (
    <Link href={shortName}>
      <a aria-label={ariaLabel}>
        <CourseTitleCardStyled $isFeatured={isFeatured}>
          {isFeatured && <Badge $type="featured">Start Here</Badge>}
          {isComingSoon && <Badge $type="comingSoon">Coming Soon</Badge>}

          <h3>{title}</h3>
          <p className="tagline">{tagline}</p>
          <div className="image-container">
            <Image
              src={img}
              width={isFeatured ? 120 : 100}
              height={isFeatured ? 160 : 133}
              alt={`${title} course cover`}
            />
          </div>
          {!isComingSoon && (
            <p className="metrics">
              {courseCount} {courseCount === 1 ? "Course" : "Courses"} • {lessonCount} Lessons
            </p>
          )}
          <div className="highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="highlight-tag">
                {highlight}
              </span>
            ))}
          </div>
          <span className="cta">
            Explore Courses <span aria-hidden="true">→</span>
          </span>
        </CourseTitleCardStyled>
      </a>
    </Link>
  );
};

export default CourseTitleCard;

interface StyledProps {
  $isFeatured: boolean;
}

const CourseTitleCardStyled = styled.div<StyledProps>`
  position: relative;
  width: ${({ $isFeatured }) => ($isFeatured ? "420px" : "280px")};
  margin-top: ${({ $isFeatured }) => ($isFeatured ? "0" : "1rem")};
  border-radius: ${theme.sizes.s};
  background-color: ${theme.colors.neutral[3]};
  color: white;
  padding: ${({ $isFeatured }) => ($isFeatured ? "1.25rem" : "1.5rem 1rem")};
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

  h3 {
    font-size: ${({ $isFeatured }) => ($isFeatured ? "1.25rem" : "1.1rem")};
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

  .tagline {
    color: ${theme.colors.neutral[10]};
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    font-style: italic;
  }

  .image-container {
    margin-bottom: 0.75rem;

    img {
      border-radius: ${theme.sizes.xs};
    }
  }

  .metrics {
    color: ${theme.colors.neutral[12]};
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
  }

  .highlight-tag {
    background-color: ${theme.colors.neutral[5]};
    color: ${theme.colors.neutral[14]};
    padding: 0.2em 0.6em;
    border-radius: 1em;
    font-size: 0.7rem;
  }

  .cta {
    color: ${theme.colors.green};
    font-weight: 600;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: ${({ $isFeatured }) => ($isFeatured ? "420px" : "320px")};
    margin-top: 0;
  }
`;

interface BadgeProps {
  $type: "featured" | "comingSoon";
}

const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: -10px;
  ${({ $type }) => ($type === "featured" ? "left: 50%; transform: translateX(-50%);" : "right: 12px;")}
  background-color: ${({ $type }) =>
    $type === "featured" ? theme.colors.gold : theme.colors.neutral[6]};
  color: ${({ $type }) => ($type === "featured" ? theme.colors.neutral[1] : theme.colors.neutral[14])};
  padding: 0.3em 0.75em;
  border-radius: 1em;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
