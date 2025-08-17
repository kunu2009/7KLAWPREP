
"use client";

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { ProgressState } from '@/lib/types';

interface ProgressContextType extends ProgressState {
  recordAnswer: (mcqId: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  isClient: boolean;
}

const defaultState: ProgressState = {
  attempted: 0,
  correct: 0,
  history: {},
};

export const ProgressContext = createContext<ProgressContextType>({
  ...defaultState,
  recordAnswer: () => {},
  resetProgress: () => {},
  isClient: false,
});

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<ProgressState>(defaultState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const storedProgress = localStorage.getItem('lawPrepProgress');
      if (storedProgress) {
        const parsedProgress = JSON.parse(storedProgress);
        setProgress({
          history: parsedProgress.history || {},
          attempted: Object.keys(parsedProgress.history || {}).length,
          correct: Object.values(parsedProgress.history || {}).filter(v => v === 'correct').length
        });
      }
    } catch (error) {
      console.error("Could not load progress from localStorage", error);
    }
  }, []);

  const recordAnswer = useCallback((mcqId: string, isCorrect: boolean) => {
    setProgress(prev => {
      if (prev.history[mcqId]) {
        return prev; // Already answered
      }
      const newHistory = { ...prev.history, [mcqId]: isCorrect ? 'correct' : 'incorrect' };
      const newProgress = {
        attempted: prev.attempted + 1,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        history: newHistory,
      };
      try {
        localStorage.setItem('lawPrepProgress', JSON.stringify({ history: newHistory }));
      } catch (error) {
        console.error("Could not save progress to localStorage", error);
      }
      return newProgress;
    });
  }, []);
  
  const resetProgress = useCallback(() => {
    setProgress(defaultState);
    try {
      localStorage.removeItem('lawPrepProgress');
    } catch (error) {
      console.error("Could not reset progress in localStorage", error);
    }
  }, []);

  return (
    <ProgressContext.Provider value={{ ...progress, recordAnswer, resetProgress, isClient }}>
      {children}
    </ProgressContext.Provider>
  );
};
