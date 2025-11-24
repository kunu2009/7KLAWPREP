"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type SectionToggleKey = "mcqs" | "flashcards" | "notes" | "reels";

type SectionMap = Record<SectionToggleKey, boolean>;

const STORAGE_KEY = "lawprep-section-preferences";
const ORDER_KEY = "lawprep-section-order";
const ZEN_KEY = "lawprep-zen-mode";
const PROFILE_KEY = "lawprep-profile";

const defaultSections: SectionMap = {
  mcqs: true,
  flashcards: false,
  notes: false, // User requested minimal defaults
  reels: false, // User requested minimal defaults
};

const defaultOrder: SectionToggleKey[] = ["mcqs", "notes", "reels", "flashcards"];

export type AspirantProfile = {
  targetYear: string;
  type: string;
};

const defaultProfile: AspirantProfile = {
  targetYear: "2026",
  type: "Fresher",
};

type FeatureToggleContextValue = {
  sections: SectionMap;
  sectionOrder: SectionToggleKey[];
  zenMode: boolean;
  profile: AspirantProfile;
  updateSection: (section: SectionToggleKey, enabled: boolean) => void;
  reorderSections: (newOrder: SectionToggleKey[]) => void;
  toggleZenMode: (enabled: boolean) => void;
  updateProfile: (profile: AspirantProfile) => void;
  resetSections: () => void;
};

const FeatureToggleContext = createContext<FeatureToggleContextValue | null>(null);

export function FeatureToggleProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<SectionMap>(defaultSections);
  const [sectionOrder, setSectionOrder] = useState<SectionToggleKey[]>(defaultOrder);
  const [zenMode, setZenMode] = useState(false);
  const [profile, setProfile] = useState<AspirantProfile>(defaultProfile);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedSections = window.localStorage.getItem(STORAGE_KEY);
      if (storedSections) {
        const parsed = JSON.parse(storedSections) as Partial<SectionMap>;
        setSections((prev) => ({ ...prev, ...parsed }));
      }

      const storedOrder = window.localStorage.getItem(ORDER_KEY);
      if (storedOrder) {
        const parsedOrder = JSON.parse(storedOrder) as SectionToggleKey[];
        const allKeys = Object.keys(defaultSections) as SectionToggleKey[];
        const uniqueStored = Array.from(new Set(parsedOrder));
        const missing = allKeys.filter(k => !uniqueStored.includes(k));
        setSectionOrder([...uniqueStored, ...missing]);
      }

      const storedZen = window.localStorage.getItem(ZEN_KEY);
      if (storedZen) {
        setZenMode(JSON.parse(storedZen));
      }

      const storedProfile = window.localStorage.getItem(PROFILE_KEY);
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.warn("Failed to load section preferences", error);
    }
  }, []);

  const persistSections = (next: SectionMap) => {
    setSections(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  };

  const persistOrder = (next: SectionToggleKey[]) => {
    setSectionOrder(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ORDER_KEY, JSON.stringify(next));
    }
  };

  const toggleZenMode = (enabled: boolean) => {
    setZenMode(enabled);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ZEN_KEY, JSON.stringify(enabled));
    }
  };

  const updateProfile = (next: AspirantProfile) => {
    setProfile(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(next));
    }
  };

  const updateSection = (section: SectionToggleKey, enabled: boolean) => {
    const next = { ...sections, [section]: enabled };
    persistSections(next);
  };

  const reorderSections = (newOrder: SectionToggleKey[]) => {
    persistOrder(newOrder);
  };

  const resetSections = () => {
    persistSections(defaultSections);
    persistOrder(defaultOrder);
    toggleZenMode(false);
    updateProfile(defaultProfile);
  };

  const value = useMemo(
    () => ({ sections, sectionOrder, zenMode, profile, updateSection, reorderSections, toggleZenMode, updateProfile, resetSections }),
    [sections, sectionOrder, zenMode, profile]
  );

  return (
    <FeatureToggleContext.Provider value={value}>
      {children}
    </FeatureToggleContext.Provider>
  );
}

export function useFeatureToggles() {
  const context = useContext(FeatureToggleContext);
  if (!context) {
    throw new Error("useFeatureToggles must be used within a FeatureToggleProvider");
  }
  return context;
}

export const defaultSectionState = defaultSections;
