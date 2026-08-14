import { courses, CoursesInterface } from "../data/courseData";

export const getCourses = (): CoursesInterface[] => {
  return courses;
};

export const getCourseByShortName = (shortName: string): CoursesInterface | undefined => {
  return courses.find((c) => c.shortName === shortName);
};

// The complete Beginner to Advanced series is available in every environment.
export const isBeginnerToAdvancedRestricted = (): boolean => {
  return false;
};
