import { courses, CoursesInterface } from "../data/courseData";

export const getCourses = (): CoursesInterface[] => {
  return courses;
};

export const getCourseByShortName = (shortName: string): CoursesInterface | undefined => {
  return courses.find((c) => c.shortName === shortName);
};

// Check if beginner-to-advanced lessons should be restricted
// Set NEXT_PUBLIC_SHOW_ALL_COURSES=true to show all courses (for dev/preview deployments)
export const isBeginnerToAdvancedRestricted = (): boolean => {
  if (process.env.NEXT_PUBLIC_SHOW_ALL_COURSES === "true") return false;
  return process.env.NODE_ENV === "production";
};
