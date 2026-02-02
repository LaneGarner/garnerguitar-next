import { useState, useEffect, useCallback } from "react";

const STORAGE_PREFIX = "garnerguitar:progress:";
export const PROGRESS_CHANGE_EVENT = "lessonProgressChange";

export const useLessonProgress = (lessonKey: string | null) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!lessonKey) return;
    const stored = localStorage.getItem(STORAGE_PREFIX + lessonKey);
    setIsComplete(stored === "true");
  }, [lessonKey]);

  const toggleComplete = useCallback(() => {
    if (!lessonKey) return;
    const newValue = !isComplete;
    localStorage.setItem(STORAGE_PREFIX + lessonKey, String(newValue));
    setIsComplete(newValue);
    // Dispatch event so Menu can update immediately
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGE_EVENT));
  }, [lessonKey, isComplete]);

  return { isComplete, toggleComplete };
};

export const isLessonComplete = (lessonKey: string): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_PREFIX + lessonKey) === "true";
};
