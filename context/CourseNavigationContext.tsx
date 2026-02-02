import { createContext, useContext, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import { courses } from "../data";
import { CourseInterface, PagesInterface } from "../data/courseData";
import { toKebabCase } from "../utils";

interface CourseNavigationContextValue {
  courseIndex: number;
  courseTypeIndex: number;
  currentPageIndex: number;
  course: CourseInterface | null;
  currentPage: PagesInterface | null;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  prevUrl: string;
  nextUrl: string;
}

const CourseNavigationContext = createContext<CourseNavigationContextValue | null>(null);

interface CourseNavigationProviderProps {
  children: ReactNode;
}

export const CourseNavigationProvider = ({ children }: CourseNavigationProviderProps) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const value = useMemo(() => {
    // Parse course info from URL path
    // Expected format: /courses/{category}/{course}/{lesson?}
    const pathParts = currentPath.split("/").filter(Boolean);

    if (pathParts[0] !== "courses" || pathParts.length < 3) {
      return null;
    }

    const categorySlug = pathParts[1]; // e.g., "beginner-to-advanced"
    const courseSlug = pathParts[2]; // e.g., "guitar-basics"
    const lessonSlug = pathParts[3]; // e.g., "guitar-anatomy" or undefined for intro

    // Find the category (courseIndex)
    const courseIndex = courses.findIndex((cat) => cat.shortName === categorySlug);
    if (courseIndex === -1) return null;

    const category = courses[courseIndex];

    // Find the course within category (courseTypeIndex)
    const courseTypeIndex = category.courses.findIndex((c) => {
      // Extract course slug from URL (e.g., /courses/beginner-to-advanced/guitar-basics -> guitar-basics)
      const urlParts = c.url.split("/").filter(Boolean);
      return urlParts[urlParts.length - 1] === courseSlug;
    });
    if (courseTypeIndex === -1) return null;

    const course = category.courses[courseTypeIndex];

    // Find current page index
    let currentPageIndex = 0;
    if (lessonSlug) {
      currentPageIndex = course.pages.findIndex(
        (page) => toKebabCase(page.title) === lessonSlug
      );
      if (currentPageIndex === -1) currentPageIndex = 0;
    }

    const currentPage = course.pages[currentPageIndex];
    const totalPages = course.pages.length;
    const isFirstPage = currentPageIndex <= 0;
    const isLastPage = currentPageIndex >= totalPages - 1;

    // Calculate prev/next URLs
    let prevUrl = "";
    let nextUrl = "";

    if (!isFirstPage) {
      const prevPage = course.pages[currentPageIndex - 1];
      prevUrl = currentPageIndex === 1
        ? course.url
        : `${course.url}/${toKebabCase(prevPage.title)}`;
    }

    if (!isLastPage) {
      const nextPage = course.pages[currentPageIndex + 1];
      nextUrl = `${course.url}/${toKebabCase(nextPage.title)}`;
    }

    return {
      courseIndex,
      courseTypeIndex,
      currentPageIndex,
      course,
      currentPage,
      totalPages,
      isFirstPage,
      isLastPage,
      prevUrl,
      nextUrl,
    };
  }, [currentPath]);

  return (
    <CourseNavigationContext.Provider value={value}>
      {children}
    </CourseNavigationContext.Provider>
  );
};

export const useCourseNavigation = () => {
  return useContext(CourseNavigationContext);
};

export default CourseNavigationContext;
