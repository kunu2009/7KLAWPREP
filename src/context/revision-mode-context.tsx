"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

// CLAT 2026 Exam Date - December 7, 2025 at 2:00 PM IST
const CLAT_EXAM_DATE = new Date('2025-12-07T14:00:00+05:30');

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  isExamDay: boolean;
  isExamOver: boolean;
}

interface DailyTarget {
  id: string;
  title: string;
  description: string;
  type: 'mcq' | 'revision' | 'flashcard' | 'mock' | 'break';
  duration: number; // in minutes
  completed: boolean;
  topic?: string;
}

interface RevisionPlan {
  phase: 'comfort' | 'intense' | 'final' | 'exam-day';
  phaseName: string;
  dailyTargets: DailyTarget[];
  tips: string[];
  focusAreas: string[];
}

interface RevisionModeContextType {
  isRevisionMode: boolean;
  toggleRevisionMode: () => void;
  timeRemaining: TimeRemaining;
  currentPlan: RevisionPlan;
  completedTargets: string[];
  markTargetComplete: (targetId: string) => void;
  resetDailyProgress: () => void;
  examDate: Date;
}

const RevisionModeContext = createContext<RevisionModeContextType | undefined>(undefined);

const STORAGE_KEY = 'lawprep_revision_mode';
const TARGETS_KEY = 'lawprep_completed_targets';

// Generate revision plan based on days remaining
function generateRevisionPlan(daysRemaining: number): RevisionPlan {
  // Exam Day
  if (daysRemaining <= 0) {
    return {
      phase: 'exam-day',
      phaseName: '🎯 Exam Day!',
      dailyTargets: [
        { id: 'ed1', title: 'Light Breakfast', description: 'Eat a nutritious, light meal', type: 'break', duration: 30, completed: false },
        { id: 'ed2', title: 'Quick Formula Glance', description: 'Glance through your formula sheet one last time', type: 'revision', duration: 15, completed: false },
        { id: 'ed3', title: 'Reach Center Early', description: 'Arrive at exam center 1 hour before', type: 'break', duration: 60, completed: false },
        { id: 'ed4', title: 'Stay Calm', description: 'Deep breathing exercises', type: 'break', duration: 10, completed: false },
      ],
      tips: [
        "Trust your preparation - you've got this! 💪",
        "Read each question carefully, don't rush",
        "Attempt your strongest sections first",
        "Don't spend too much time on one question",
        "Keep track of time - 120 minutes for 120 questions",
        "Stay hydrated, carry water bottle",
      ],
      focusAreas: ['Time Management', 'Accuracy', 'Confidence'],
    };
  }

  // Final Sprint (1-3 days)
  if (daysRemaining <= 3) {
    return {
      phase: 'final',
      phaseName: '🔥 Final Sprint',
      dailyTargets: [
        { id: 'f1', title: 'Quick MCQ Revision', description: 'Solve 30 high-yield MCQs from weak areas', type: 'mcq', duration: 45, completed: false, topic: 'Mixed' },
        { id: 'f2', title: 'Legal Maxims Flash', description: 'Review all legal maxims flashcards', type: 'flashcard', duration: 20, completed: false, topic: 'Legal Aptitude' },
        { id: 'f3', title: 'Constitution Essentials', description: 'Key articles: 12-35, 36-51, 52-151', type: 'revision', duration: 30, completed: false, topic: 'Constitution' },
        { id: 'f4', title: 'Current Affairs Quick Notes', description: 'Last 6 months important events', type: 'revision', duration: 25, completed: false, topic: 'Current Affairs' },
        { id: 'f5', title: 'English Vocabulary', description: 'Review common legal terms & idioms', type: 'flashcard', duration: 15, completed: false, topic: 'English' },
        { id: 'f6', title: 'Logical Reasoning Formulas', description: 'Quick review of LR shortcuts', type: 'revision', duration: 20, completed: false, topic: 'Logical Reasoning' },
        { id: 'f7', title: 'Rest & Relaxation', description: 'Take a proper break, avoid burnout', type: 'break', duration: 60, completed: false },
      ],
      tips: [
        "NO new topics now - only revise what you know",
        "Focus on high-weightage areas",
        "Sleep at least 7-8 hours",
        "Avoid heavy discussions about preparation",
        "Keep your admit card and ID ready",
        "Light exercise or walk to reduce stress",
      ],
      focusAreas: ['Legal Aptitude', 'Constitution', 'Current Affairs', 'English'],
    };
  }

  // Intense Phase (4-7 days)
  if (daysRemaining <= 7) {
    return {
      phase: 'intense',
      phaseName: '⚡ Intense Revision',
      dailyTargets: [
        { id: 'i1', title: 'Morning MCQ Sprint', description: 'Solve 50 MCQs across all subjects', type: 'mcq', duration: 60, completed: false, topic: 'Mixed' },
        { id: 'i2', title: 'Legal Reasoning Practice', description: 'Focus on principle-based questions', type: 'mcq', duration: 45, completed: false, topic: 'Legal Aptitude' },
        { id: 'i3', title: 'Constitution Deep Dive', description: 'Parts I-IV with amendments', type: 'revision', duration: 45, completed: false, topic: 'Constitution' },
        { id: 'i4', title: 'GK & Current Affairs', description: 'Monthly digest + static GK', type: 'revision', duration: 40, completed: false, topic: 'Current Affairs' },
        { id: 'i5', title: 'English Comprehension', description: 'Practice 3 RC passages', type: 'mcq', duration: 30, completed: false, topic: 'English' },
        { id: 'i6', title: 'Quantitative Techniques', description: 'Quick math formulas + 20 questions', type: 'mcq', duration: 35, completed: false, topic: 'Quantitative' },
        { id: 'i7', title: 'Logical Reasoning', description: 'Solve puzzles, syllogisms, arrangements', type: 'mcq', duration: 40, completed: false, topic: 'Logical Reasoning' },
        { id: 'i8', title: 'Mini Mock Test', description: 'Take a 60-question timed test', type: 'mock', duration: 60, completed: false },
        { id: 'i9', title: 'Error Analysis', description: 'Review mistakes from today', type: 'revision', duration: 20, completed: false },
      ],
      tips: [
        "Maintain a consistent study schedule",
        "Identify and target your weak areas",
        "Take 1 mini mock test daily",
        "Review wrong answers thoroughly",
        "Keep hydrated and take short breaks",
        "Avoid social media distractions",
      ],
      focusAreas: ['Legal Aptitude', 'Constitution', 'Logical Reasoning', 'English', 'GK/Current Affairs', 'Quantitative'],
    };
  }

  // Comfort Phase (8-30 days)
  return {
    phase: 'comfort',
    phaseName: '📚 Strategic Revision',
    dailyTargets: [
      { id: 'c1', title: 'Subject-wise MCQs', description: 'Complete 40 MCQs from one subject', type: 'mcq', duration: 50, completed: false },
      { id: 'c2', title: 'Topic Notes Review', description: 'Read through 2 topic notes thoroughly', type: 'revision', duration: 40, completed: false },
      { id: 'c3', title: 'Flashcard Session', description: 'Review 30 flashcards', type: 'flashcard', duration: 20, completed: false },
      { id: 'c4', title: 'Current Affairs Update', description: 'Read daily current affairs', type: 'revision', duration: 30, completed: false, topic: 'Current Affairs' },
      { id: 'c5', title: 'Legal Reels', description: 'Watch legal concept reels for quick refresh', type: 'revision', duration: 15, completed: false },
      { id: 'c6', title: 'Weekly Mock Test', description: 'Full-length mock test (if weekend)', type: 'mock', duration: 120, completed: false },
    ],
    tips: [
      "Build a strong foundation in all subjects",
      "Create short notes for quick revision",
      "Practice time management in mocks",
      "Focus on understanding concepts, not just memorizing",
      "Track your progress daily",
      "Maintain a healthy sleep schedule",
    ],
    focusAreas: ['All Subjects', 'Concept Building', 'Time Management'],
  };
}

export function RevisionModeProvider({ children }: { children: ReactNode }) {
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [completedTargets, setCompletedTargets] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    isExamDay: false,
    isExamOver: false,
  });

  // Load saved state
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem(STORAGE_KEY);
      if (savedMode) {
        setIsRevisionMode(JSON.parse(savedMode));
      }
      
      const savedTargets = localStorage.getItem(TARGETS_KEY);
      if (savedTargets) {
        const parsed = JSON.parse(savedTargets);
        // Reset if it's a new day
        const lastDate = parsed.date;
        const today = new Date().toDateString();
        if (lastDate === today) {
          setCompletedTargets(parsed.targets || []);
        }
      }
    } catch (error) {
      console.error('Failed to load revision mode state', error);
    }
  }, []);

  // Save state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(isRevisionMode));
  }, [isRevisionMode]);

  useEffect(() => {
    localStorage.setItem(TARGETS_KEY, JSON.stringify({
      date: new Date().toDateString(),
      targets: completedTargets,
    }));
  }, [completedTargets]);

  // Update countdown every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = CLAT_EXAM_DATE.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalDays: 0,
          isExamDay: differenceInDays(CLAT_EXAM_DATE, now) === 0,
          isExamOver: diff < -3 * 60 * 60 * 1000, // 3 hours after exam start
        });
        return;
      }

      const totalDays = differenceInDays(CLAT_EXAM_DATE, now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        totalDays,
        isExamDay: false,
        isExamOver: false,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentPlan = useMemo(() => {
    return generateRevisionPlan(timeRemaining.totalDays);
  }, [timeRemaining.totalDays]);

  const toggleRevisionMode = () => setIsRevisionMode(prev => !prev);

  const markTargetComplete = (targetId: string) => {
    setCompletedTargets(prev => 
      prev.includes(targetId) 
        ? prev.filter(id => id !== targetId)
        : [...prev, targetId]
    );
  };

  const resetDailyProgress = () => {
    setCompletedTargets([]);
  };

  return (
    <RevisionModeContext.Provider value={{
      isRevisionMode,
      toggleRevisionMode,
      timeRemaining,
      currentPlan,
      completedTargets,
      markTargetComplete,
      resetDailyProgress,
      examDate: CLAT_EXAM_DATE,
    }}>
      {children}
    </RevisionModeContext.Provider>
  );
}

export function useRevisionMode() {
  const context = useContext(RevisionModeContext);
  if (!context) {
    throw new Error('useRevisionMode must be used within a RevisionModeProvider');
  }
  return context;
}
