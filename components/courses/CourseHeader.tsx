import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../Logo";
import { theme } from "../../utils/styles/theme";
import { useCourseNavigation } from "../../context";
import { courses } from "../../data";
import { toKebabCase } from "../../utils";
import { isLessonComplete, PROGRESS_CHANGE_EVENT } from "../../hooks";

const CourseHeader = (): JSX.Element => {
  const courseNav = useCourseNavigation();
  const [completedCount, setCompletedCount] = useState(0);

  const calculateCompleted = useCallback(() => {
    if (!courseNav?.course) return;
    const { course, courseIndex } = courseNav;
    const categoryShortName = courses[courseIndex].shortName;
    const courseSlug = toKebabCase(course.title);

    let count = 0;
    course.pages.forEach((page) => {
      const key = `${categoryShortName}:${courseSlug}:${toKebabCase(page.title)}`;
      if (isLessonComplete(key)) count++;
    });
    setCompletedCount(count);
  }, [courseNav?.course, courseNav?.courseIndex]);

  // Calculate on mount and when course changes
  useEffect(() => {
    calculateCompleted();
  }, [calculateCompleted]);

  // Listen for progress changes from lesson complete button
  useEffect(() => {
    window.addEventListener(PROGRESS_CHANGE_EVENT, calculateCompleted);
    return () =>
      window.removeEventListener(PROGRESS_CHANGE_EVENT, calculateCompleted);
  }, [calculateCompleted]);

  const totalLessons = courseNav?.totalPages || 0;
  const progressPercent =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <HeaderStyled>
      <div className="header-top">
        <Link href="/">
          <a className="brand">
            <Logo size={36} />
            <span className="site-title heading-style">GarnerGuitar.com</span>
          </a>
        </Link>
        <nav className="header-nav" aria-label="Site navigation">
          <Link href="/courses">
            <a className="nav-link">All Courses</a>
          </Link>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </nav>
      </div>
      {courseNav?.course && (
        <div className="header-bottom">
          <h2 className="course-title">{courseNav.course.title}</h2>
          <div className="lesson-section">
            <nav className="lesson-nav-row" aria-label="Lesson navigation">
              {!courseNav.isFirstPage ? (
                <a href={courseNav.prevUrl} className="nav-btn">
                  <span aria-hidden="true">&larr;</span>
                </a>
              ) : (
                <span className="nav-btn-placeholder" />
              )}
              <span className="lesson-indicator">
                Lesson {(courseNav.currentPageIndex ?? 0) + 1} of {courseNav.totalPages ?? 0}
              </span>
              {!courseNav.isLastPage ? (
                <a href={courseNav.nextUrl} className="nav-btn">
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ) : (
                <span className="nav-btn-placeholder" />
              )}
            </nav>
            <h1 className="lesson-title">{courseNav.currentPage?.title}</h1>
          </div>
          <div className="progress-section">
            <span className="progress-text">
              {completedCount} of {totalLessons} lessons complete
            </span>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Course progress: ${progressPercent}%`}
            >
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </HeaderStyled>
  );
};

export default CourseHeader;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background: ${theme.colors.neutral[15]};
  border-bottom: 1px solid ${theme.colors.neutral[12]};
  height: ${theme.sizes.header};
  display: flex;
  flex-direction: column;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid ${theme.colors.neutral[13]};
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${theme.colors.neutral[2]};

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .site-title {
    font-size: 1.5rem;
    margin: 0;
  }

  .header-nav {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    min-height: 44px;
    display: flex;
    align-items: center;
    color: ${theme.colors.neutral[3]};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 150ms ease;

    &:hover {
      background-color: ${theme.colors.neutral[13]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .header-bottom {
    display: grid;
    grid-template-columns: calc(${theme.sizes.sidebarWidth} - 1.5rem) 1fr auto;
    align-items: center;
    padding: 0.75rem 1.5rem;
    flex: 1;
    gap: 1.5rem;
  }

  .course-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.neutral[2]};
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .lesson-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -1.5rem;
      top: 0.25rem;
      bottom: 0.25rem;
      width: 1px;
      background: ${theme.colors.neutral[12]};
    }
  }

  .lesson-indicator {
    font-size: 0.75rem;
    color: ${theme.colors.neutral[6]};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .lesson-nav-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lesson-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.neutral[1]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    color: ${theme.colors.neutral[5]};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background-color: ${theme.colors.neutral[12]};
      color: ${theme.colors.neutral[2]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .nav-btn-placeholder {
    width: 28px;
    height: 28px;
  }

  .progress-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .progress-text {
    font-size: 0.875rem;
    color: ${theme.colors.neutral[5]};
  }

  .progress-bar {
    width: 200px;
    height: 8px;
    background: ${theme.colors.neutral[12]};
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: ${theme.colors.green};
    border-radius: 4px;
    transition: width 300ms ease;
  }
`;
