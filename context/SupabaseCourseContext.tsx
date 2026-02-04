import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import type { Course, Lesson } from "../lib/supabase/types";

interface SupabaseCourseContextValue {
  categorySlug: string;
  course: Course | null;
  lessons: Lesson[];
  currentLesson: Lesson | null;
  currentLessonIndex: number;
  totalLessons: number;
  isFirstLesson: boolean;
  isLastLesson: boolean;
  prevUrl: string;
  nextUrl: string;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setCourseData: (data: { course: Course; lessons: Lesson[]; categorySlug: string }) => void;
}

const SupabaseCourseContext = createContext<SupabaseCourseContextValue | null>(null);

interface SupabaseCourseProviderProps {
  children: ReactNode;
}

export const SupabaseCourseProvider = ({ children }: SupabaseCourseProviderProps) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Course data set by lesson pages
  const [courseData, setCourseData] = useState<{
    course: Course | null;
    lessons: Lesson[];
    categorySlug: string;
  }>({
    course: null,
    lessons: [],
    categorySlug: "",
  });

  const navigationData = useMemo(() => {
    const { course, lessons, categorySlug } = courseData;

    if (!course || lessons.length === 0) {
      return null;
    }

    // Parse lesson slug from URL
    const pathParts = currentPath.split("/").filter(Boolean);
    const lessonSlug = pathParts[3]; // e.g., "guitar-anatomy" or undefined for intro

    // Find current lesson index
    let currentLessonIndex = 0;
    if (lessonSlug) {
      currentLessonIndex = lessons.findIndex((lesson) => lesson.slug === lessonSlug);
      if (currentLessonIndex === -1) currentLessonIndex = 0;
    }

    const currentLesson = lessons[currentLessonIndex];
    const totalLessons = lessons.length;
    const isFirstLesson = currentLessonIndex <= 0;
    const isLastLesson = currentLessonIndex >= totalLessons - 1;

    // Calculate prev/next URLs
    const baseUrl = `/courses/${categorySlug}/${course.slug}`;
    let prevUrl = "";
    let nextUrl = "";

    if (!isFirstLesson) {
      const prevLesson = lessons[currentLessonIndex - 1];
      prevUrl = currentLessonIndex === 1 ? baseUrl : `${baseUrl}/${prevLesson.slug}`;
    }

    if (!isLastLesson) {
      const nextLesson = lessons[currentLessonIndex + 1];
      nextUrl = `${baseUrl}/${nextLesson.slug}`;
    }

    return {
      categorySlug,
      course,
      lessons,
      currentLesson,
      currentLessonIndex,
      totalLessons,
      isFirstLesson,
      isLastLesson,
      prevUrl,
      nextUrl,
    };
  }, [currentPath, courseData]);

  const value = useMemo(() => {
    if (!navigationData) {
      return {
        categorySlug: "",
        course: null,
        lessons: [],
        currentLesson: null,
        currentLessonIndex: 0,
        totalLessons: 0,
        isFirstLesson: true,
        isLastLesson: true,
        prevUrl: "",
        nextUrl: "",
        isMobileMenuOpen,
        setMobileMenuOpen,
        setCourseData: (data: { course: Course; lessons: Lesson[]; categorySlug: string }) => {
          setCourseData(data);
        },
      };
    }

    return {
      ...navigationData,
      isMobileMenuOpen,
      setMobileMenuOpen,
      setCourseData: (data: { course: Course; lessons: Lesson[]; categorySlug: string }) => {
        setCourseData(data);
      },
    };
  }, [navigationData, isMobileMenuOpen]);

  return (
    <SupabaseCourseContext.Provider value={value}>
      {children}
    </SupabaseCourseContext.Provider>
  );
};

export const useSupabaseCourse = () => {
  return useContext(SupabaseCourseContext);
};

export default SupabaseCourseContext;
