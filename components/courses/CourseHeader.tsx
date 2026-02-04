import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../Logo";
import { theme } from "../../utils/styles/theme";
import { useCourseNavigation, useSupabaseCourse } from "../../context";
import { courses } from "../../data";
import { toKebabCase } from "../../utils";
import { isLessonComplete, PROGRESS_CHANGE_EVENT } from "../../hooks";

const CourseHeader = (): JSX.Element => {
  const courseNav = useCourseNavigation();
  const supabaseCourse = useSupabaseCourse();
  const [completedCount, setCompletedCount] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Determine which context to use
  const isSupabaseCourse = supabaseCourse?.course && supabaseCourse.lessons.length > 0;

  const isMobileMenuOpen = isSupabaseCourse
    ? (supabaseCourse?.isMobileMenuOpen ?? false)
    : (courseNav?.isMobileMenuOpen ?? false);

  const handleMenuToggle = () => {
    if (isSupabaseCourse) {
      supabaseCourse?.setMobileMenuOpen(!isMobileMenuOpen);
    } else {
      courseNav?.setMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  // Return focus to menu button when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen && menuButtonRef.current) {
      const timeout = setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isMobileMenuOpen]);

  const calculateCompleted = useCallback(() => {
    if (isSupabaseCourse && supabaseCourse?.course) {
      const { course, lessons, categorySlug } = supabaseCourse;
      let count = 0;
      lessons.forEach((lesson) => {
        const key = `${categorySlug}:${course.slug}:${lesson.slug}`;
        if (isLessonComplete(key)) count++;
      });
      setCompletedCount(count);
    } else if (courseNav?.course) {
      const { course, courseIndex } = courseNav;
      const categoryShortName = courses[courseIndex].shortName;
      const courseSlug = toKebabCase(course.title);

      let count = 0;
      course.pages.forEach((page) => {
        const key = `${categoryShortName}:${courseSlug}:${toKebabCase(page.title)}`;
        if (isLessonComplete(key)) count++;
      });
      setCompletedCount(count);
    }
  }, [courseNav?.course, courseNav?.courseIndex, supabaseCourse?.course, supabaseCourse?.lessons, isSupabaseCourse]);

  useEffect(() => {
    calculateCompleted();
  }, [calculateCompleted]);

  useEffect(() => {
    window.addEventListener(PROGRESS_CHANGE_EVENT, calculateCompleted);
    return () =>
      window.removeEventListener(PROGRESS_CHANGE_EVENT, calculateCompleted);
  }, [calculateCompleted]);

  // Get values based on which context is active
  const course = isSupabaseCourse ? supabaseCourse?.course : courseNav?.course;
  const totalLessons = isSupabaseCourse ? (supabaseCourse?.totalLessons || 0) : (courseNav?.totalPages || 0);
  const currentIndex = isSupabaseCourse ? (supabaseCourse?.currentLessonIndex ?? 0) : (courseNav?.currentPageIndex ?? 0);
  const currentTitle = isSupabaseCourse ? supabaseCourse?.currentLesson?.title : courseNav?.currentPage?.title;
  const isFirstPage = isSupabaseCourse ? supabaseCourse?.isFirstLesson : courseNav?.isFirstPage;
  const isLastPage = isSupabaseCourse ? supabaseCourse?.isLastLesson : courseNav?.isLastPage;
  const prevUrl = isSupabaseCourse ? (supabaseCourse?.prevUrl || "") : (courseNav?.prevUrl || "");
  const nextUrl = isSupabaseCourse ? (supabaseCourse?.nextUrl || "") : (courseNav?.nextUrl || "");

  const progressPercent =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <HeaderStyled>
      <div className="header-top">
        <Link href="/" className="brand">
          <Logo size={36} />
          <span className="site-title heading-style">GarnerGuitar.com</span>
        </Link>
        <nav className="header-nav" aria-label="Site navigation">
          <Link href="/courses" className="nav-link">
            All Courses
          </Link>
        </nav>
      </div>
      {course && (
        <div className="header-bottom">
          <MenuToggleButton
            ref={menuButtonRef}
            onClick={handleMenuToggle}
            aria-expanded={isMobileMenuOpen}
            aria-controls="course-mobile-menu"
            aria-label={isMobileMenuOpen ? "Close lesson menu" : "Open lesson menu"}
            $isOpen={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </MenuToggleButton>
          <h2 className="course-title">{course.title}</h2>
          <div className="lesson-section">
            <nav className="lesson-nav-row" aria-label="Lesson navigation">
              {!isFirstPage ? (
                <a href={prevUrl} className="nav-btn">
                  <span aria-hidden="true">&larr;</span>
                </a>
              ) : (
                <span className="nav-btn-placeholder" />
              )}
              <span className="lesson-indicator">
                Lesson {currentIndex + 1} of {totalLessons}
              </span>
              {!isLastPage ? (
                <a href={nextUrl} className="nav-btn">
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ) : (
                <span className="nav-btn-placeholder" />
              )}
            </nav>
            <h1 className="lesson-title">{currentTitle}</h1>
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

  @media (max-width: ${theme.breakpoints.md}) {
    height: ${theme.sizes.headerMobile};
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid ${theme.colors.neutral[13]};

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0.5rem 1rem;
    }
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

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.25rem;
    }
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

    @media (max-width: ${theme.breakpoints.md}) {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      gap: 0.75rem;
    }
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

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
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
      top: 0.5rem;
      bottom: 0.5rem;
      width: 1px;
      background: ${theme.colors.neutral[12]};

      @media (max-width: ${theme.breakpoints.md}) {
        display: none;
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      flex: 1;
      align-items: center;
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

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.125rem;
      text-align: center;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1rem;
    }
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

    @media (max-width: ${theme.breakpoints.md}) {
      width: 36px;
      height: 36px;
    }
  }

  .nav-btn-placeholder {
    width: 28px;
    height: 28px;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 36px;
      height: 36px;
    }
  }

  .progress-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
    flex-shrink: 0;

    @media (max-width: ${theme.breakpoints.sm}) {
      display: none;
    }
  }

  .progress-text {
    font-size: 0.875rem;
    color: ${theme.colors.neutral[5]};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 0.75rem;
    }
  }

  .progress-bar {
    width: 200px;
    height: 8px;
    background: ${theme.colors.neutral[12]};
    border-radius: 4px;
    overflow: hidden;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 120px;
      height: 6px;
    }
  }

  .progress-fill {
    height: 100%;
    background: ${theme.colors.green};
    border-radius: 4px;
    transition: width 300ms ease;
  }
`;

const MenuToggleButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.green};
    outline-offset: 2px;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${theme.colors.neutral[2]};
    border-radius: 2px;
    transition: transform 200ms ease, opacity 200ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateY(8px) rotate(45deg)" : "translateY(0) rotate(0)"};
    }

    &:nth-child(2) {
      margin: 6px 0;
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateY(-8px) rotate(-45deg)" : "translateY(0) rotate(0)"};
    }
  }
`;
