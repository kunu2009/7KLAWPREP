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
      const savedProgress = localStorage.getItem('lawPrepProgress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Could not load progress from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem('lawPrepProgress', JSON.stringify(progress));
      } catch (error) {
        console.error("Could not save progress to localStorage", error);
      }
    }
  }, [progress, isClient]);

  const recordAnswer = useCallback((mcqId: string, isCorrect: boolean) => {
    setProgress(prev => {
      // Only update stats if the question hasn't been answered before
      if (prev.history[mcqId]) {
        return prev;
      }

      return {
        attempted: prev.attempted + 1,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        history: { ...prev.history, [mcqId]: isCorrect ? 'correct' : 'incorrect' },
      };
    });
  }, []);
  
  const resetProgress = useCallback(() => {
    setProgress(defaultState);
  }, []);

  return (
    <ProgressContext.Provider value={{ ...progress, recordAnswer, resetProgress, isClient }}>
      {children}
    </ProgressContext.Provider>
  );
};
