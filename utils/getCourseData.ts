import { courses, CoursesInterface } from "../data/courseData";

export const getCourses = (): CoursesInterface[] => {
  return courses;
};

export const getCourseByShortName = (shortName: string): CoursesInterface | undefined => {
  return courses.find((c) => c.shortName === shortName);
};

// Check if beginner-to-advanced lessons should be restricted (production only)
export const isBeginnerToAdvancedRestricted = (): boolean => {
  return process.env.NODE_ENV === "production";
};
