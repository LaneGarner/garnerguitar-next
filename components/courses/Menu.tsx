import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";
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

  const { course, currentPageIndex, courseIndex } = courseNav;

  const getLessonUrl = (page: { title: string }, index: number) => {
    return page.title === "Introduction" || index === 0
      ? course.url
      : `${course.url}/${toKebabCase(page.title)}`;
  };

  const isActive = (index: number) => {
    return index === currentPageIndex;
  };

  const handleLinkClick = () => {
    courseNav.setMobileMenuOpen(false);
  };

  const handleCloseMenu = () => {
    courseNav.setMobileMenuOpen(false);
  };

  return (
    <MenuStyled className="menu">
      <div className="menu-header">
        <h2 className="menu-course-title">{course.title}</h2>
        <button
          className="menu-close-btn"
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          <FaTimes aria-hidden="true" />
        </button>
      </div>
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
                <Link
                  href={getLessonUrl(page, i)}
                  className={`nav-link ${isActive(i) ? "active" : ""}`}
                  aria-current={isActive(i) ? "page" : undefined}
                  onClick={handleLinkClick}
                >
                  {isCompleted && (
                    <FaCheck className="check-icon" aria-hidden="true" />
                  )}
                  <span className="nav-link-title">{page.title}</span>
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
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.neutral[12]};
    flex-shrink: 0;

    @media (max-width: ${theme.breakpoints.md}) {
      display: flex;
    }
  }

  .menu-course-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.neutral[2]};
    line-height: 1.3;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .menu-close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.colors.neutral[5]};
    border-radius: 4px;
    flex-shrink: 0;
    margin-left: 0.5rem;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background-color: ${theme.colors.neutral[13]};
      color: ${theme.colors.neutral[2]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.green};
      outline-offset: 2px;
    }
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
