"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type CourseKey = "clat" | "mhcet";

export type CourseConfig = {
  key: CourseKey;
  label: string;
  shortLabel: string;
  description: string;
};

const STORAGE_KEY = "lawprep.selected-course";

export const COURSE_OPTIONS: Record<CourseKey, CourseConfig> = {
  clat: {
    key: "clat",
    label: "CLAT 5-Year LLB",
    shortLabel: "CLAT",
    description: "Current app experience, built for CLAT-style reasoning, legal aptitude, and current affairs prep.",
  },
  mhcet: {
    key: "mhcet",
    label: "MHCET 5-Year LLB",
    shortLabel: "MHCET",
    description: "A Maharashtra-focused 5-year LLB path that reuses the same study material with MHCET-centered framing.",
  },
};

type CourseContextValue = {
  course: CourseKey;
  courseConfig: CourseConfig;
  isCourseChosen: boolean;
  setCourse: (course: CourseKey) => void;
};

const CourseContext = createContext<CourseContextValue | null>(null);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [course, setCourseState] = useState<CourseKey>("clat");
  const [isCourseChosen, setIsCourseChosen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "clat" || saved === "mhcet") {
      setCourseState(saved);
      setIsCourseChosen(true);
    }
  }, []);

  const setCourse = (nextCourse: CourseKey) => {
    setCourseState(nextCourse);
    setIsCourseChosen(true);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextCourse);
    }
  };

  const value = useMemo(() => ({
    course,
    courseConfig: COURSE_OPTIONS[course],
    isCourseChosen,
    setCourse,
  }), [course, isCourseChosen]);

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
}
