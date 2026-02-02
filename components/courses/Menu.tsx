import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { theme } from "../../utils/styles/theme";
import { toKebabCase } from "../../utils";
import { useCourseNavigation } from "../../context";
import { courses } from "../../data";
import { isLessonComplete, PROGRESS_CHANGE_EVENT } from "../../hooks";

const Menu = (): JSX.Element | null => {
  const courseNav = useCourseNavigation();
  const activeItemRef = useRef<HTMLLIElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  // Function to check completion status for all lessons
  const refreshCompletedLessons = () => {
    if (!courseNav?.course) return;
    const { course, courseIndex } = courseNav;
    const categoryShortName = courses[courseIndex].shortName;
    const courseSlug = toKebabCase(course.title);

    const completed = new Set<string>();
    course.pages.forEach((page) => {
      const key = `${categoryShortName}:${courseSlug}:${toKebabCase(page.title)}`;
      if (isLessonComplete(key)) {
        completed.add(key);
      }
    });
    setCompletedLessons(completed);
  };

  // Check completion status on mount and when page changes
  useEffect(() => {
    refreshCompletedLessons();
  }, [courseNav?.currentPageIndex, courseNav?.course, courseNav?.courseIndex]);

  // Listen for completion changes from the button
  useEffect(() => {
    const handleProgressChange = () => refreshCompletedLessons();
    window.addEventListener(PROGRESS_CHANGE_EVENT, handleProgressChange);
    return () =>
      window.removeEventListener(PROGRESS_CHANGE_EVENT, handleProgressChange);
  }, [courseNav?.course, courseNav?.courseIndex]);

  // Scroll active item into view when it changes (Menu persists in _app.tsx)
  useEffect(() => {
    const container = scrollContainerRef.current;
    const item = activeItemRef.current;
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const padding = 40; // Extra space above the item when scrolling

    // Check if item is fully visible within the container
    const isAboveView = itemRect.top < containerRect.top;
    const isBelowView = itemRect.bottom > containerRect.bottom;

    if (isAboveView || isBelowView) {
      // Calculate scroll position with padding above
      const itemOffsetTop = item.offsetTop;
      container.scrollTo({
        top: Math.max(0, itemOffsetTop - padding),
        behavior: "smooth",
      });
    }
  }, [courseNav?.currentPageIndex]);

  if (!courseNav?.course) {
    return null;
  }

  const {
    course,
    currentPageIndex,
    totalPages,
    isFirstPage,
    isLastPage,
    prevUrl,
    nextUrl,
  } = courseNav;

  const getLessonUrl = (page: { title: string }, index: number) => {
    return page.title === "Introduction" || index === 0
      ? course.url
      : `${course.url}/${toKebabCase(page.title)}`;
  };

  const isActive = (index: number) => {
    return index === currentPageIndex;
  };

  return (
    <MenuStyled className="menu">
      <header className="menu-header">
        <h3 className="course-head">{course.title}</h3>
        <div className="progress-indicator">
          Lesson {currentPageIndex + 1} of {totalPages}
        </div>
        <nav className="page-nav" aria-label="Lesson navigation">
          {!isFirstPage ? (
            <Link href={prevUrl}>
              <a className="page-nav-link">
                <span aria-hidden="true">&larr;</span> Back
              </a>
            </Link>
          ) : (
            <span className="page-nav-placeholder" />
          )}
          {!isLastPage ? (
            <Link href={nextUrl}>
              <a className="page-nav-link">
                Next <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          ) : (
            <span className="page-nav-placeholder" />
          )}
        </nav>
      </header>

      <div className="menu-content" ref={scrollContainerRef}>
        <ul className="nav-list">
          {course.pages.map((page, i) => {
            const categoryShortName = courses[courseNav.courseIndex].shortName;
            const courseSlug = toKebabCase(course.title);
            const lessonKey = `${categoryShortName}:${courseSlug}:${toKebabCase(page.title)}`;
            const isCompleted = completedLessons.has(lessonKey);

            return (
              <li
                key={i}
                className="nav-item"
                ref={isActive(i) ? activeItemRef : null}
              >
                <Link href={getLessonUrl(page, i)}>
                  <a
                    className={`nav-link ${isActive(i) ? "active" : ""}`}
                    aria-current={isActive(i) ? "page" : undefined}
                  >
                    {isCompleted && (
                      <FaCheck className="check-icon" aria-hidden="true" />
                    )}
                    {page.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.aside`
  background-color: ${theme.colors.neutral[14]};
  height: 100%;
  display: flex;
  flex-direction: column;

  .menu-header {
    flex-shrink: 0;
    padding: ${theme.sizes.s};
    background-color: ${theme.colors.neutral[15]};
    border-bottom: 1px solid ${theme.colors.neutral[11]};
  }

  .course-head {
    font-size: 1.2rem;
    margin: 0;
    color: ${theme.colors.neutral[3]};
    text-align: center;
  }

  .progress-indicator {
    text-align: center;
    font-size: 0.85rem;
    color: ${theme.colors.neutral[6]};
    margin: ${theme.sizes.xs} 0;
  }

  .page-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.xs};
    margin-top: ${theme.sizes.xs};
  }

  .page-nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em 1em;
    min-width: 44px;
    min-height: 44px;
    color: ${theme.colors.neutral[3]};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 150ms ease, color 150ms ease;
    font-weight: 500;

    &:hover {
      background-color: ${theme.colors.green};
      color: ${theme.colors.neutral[2]};
    }

    &:focus {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
  }

  .page-nav-placeholder {
    min-width: 44px;
    min-height: 44px;
  }

  .menu-content {
    flex: 1;
    overflow-y: auto;
    padding: ${theme.sizes.s};
    padding-bottom: ${theme.sizes.l};
  }

  .nav-list {
    padding-left: 0;
    margin: 0;
  }

  .nav-item {
    list-style-type: none;
    margin-bottom: 0.25em;
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    color: ${theme.colors.neutral[5]};
    text-decoration: none;
    border-radius: 4px;
    border-left: 3px solid transparent;
    transition: background-color 150ms ease, color 150ms ease, border-color 150ms ease;

    .check-icon {
      color: ${theme.colors.green};
      font-size: 0.75em;
      margin-right: 0.5em;
      flex-shrink: 0;
    }

    &.active .check-icon {
      color: ${theme.colors.neutral[2]};
    }

    &:hover {
      background-color: ${theme.colors.neutral[13]};
      color: ${theme.colors.neutral[2]};
    }

    &:focus {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }

    &.active {
      background-color: ${theme.colors.green};
      color: ${theme.colors.neutral[2]};
      font-weight: 600;
      border-left-color: ${theme.colors.neutral[2]};
    }
  }
`;
