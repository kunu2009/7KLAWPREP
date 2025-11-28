"use client";

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { ProgressState } from '@/lib/types';
import { format, differenceInCalendarDays, parseISO } from 'date-fns';

interface ProgressContextType extends ProgressState {
  recordAnswer: (mcqId: string, isCorrect: boolean, topic: string) => void;
  resetProgress: () => void;
  isClient: boolean;
  getTopicAccuracy: (topic: string) => number;
  getWeakestTopics: (limit?: number) => Array<{ topic: string; accuracy: number; attempted: number }>;
}

const defaultState: ProgressState = {
  attempted: 0,
  correct: 0,
  history: {},
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: null,
  topicProgress: {},
};

export const ProgressContext = createContext<ProgressContextType>({
  ...defaultState,
  recordAnswer: () => {},
  resetProgress: () => {},
  isClient: false,
  getTopicAccuracy: () => 0,
  getWeakestTopics: () => [],
});

const getTodayString = () => format(new Date(), 'yyyy-MM-dd');

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<ProgressState>(defaultState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const savedProgress = localStorage.getItem('lawPrepProgress');
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress) as Partial<ProgressState>;
        // Merge with defaults to ensure new fields exist
        setProgress({
          ...defaultState,
          ...parsed,
          topicProgress: parsed.topicProgress || {},
        });
      }
    } catch (error) {
      console.error("Could not load progress from localStorage", error);
    }
  }, []);

  // Update streak on app load
  useEffect(() => {
    if (!isClient) return;
    
    const today = getTodayString();
    if (progress.lastStudyDate && progress.lastStudyDate !== today) {
      const daysDiff = differenceInCalendarDays(
        new Date(today),
        parseISO(progress.lastStudyDate)
      );
      
      // If more than 1 day has passed, reset streak
      if (daysDiff > 1) {
        setProgress(prev => ({
          ...prev,
          currentStreak: 0,
        }));
      }
    }
  }, [isClient, progress.lastStudyDate]);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem('lawPrepProgress', JSON.stringify(progress));
      } catch (error) {
        console.error("Could not save progress to localStorage", error);
      }
    }
  }, [progress, isClient]);

  const recordAnswer = useCallback((mcqId: string, isCorrect: boolean, topic: string) => {
    setProgress(prev => {
      // Only update stats if the question hasn't been answered before
      if (prev.history[mcqId]) {
        return prev;
      }

      const today = getTodayString();
      let newStreak = prev.currentStreak;
      
      // Update streak logic
      if (prev.lastStudyDate !== today) {
        if (prev.lastStudyDate) {
          const daysDiff = differenceInCalendarDays(
            new Date(today),
            parseISO(prev.lastStudyDate)
          );
          newStreak = daysDiff === 1 ? prev.currentStreak + 1 : 1;
        } else {
          newStreak = 1;
        }
      }

      // Update topic progress
      const currentTopicProgress = prev.topicProgress[topic] || { attempted: 0, correct: 0 };
      const updatedTopicProgress = {
        ...prev.topicProgress,
        [topic]: {
          attempted: currentTopicProgress.attempted + 1,
          correct: isCorrect ? currentTopicProgress.correct + 1 : currentTopicProgress.correct,
        },
      };

      return {
        attempted: prev.attempted + 1,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        history: { ...prev.history, [mcqId]: isCorrect ? 'correct' : 'incorrect' },
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
        lastStudyDate: today,
        topicProgress: updatedTopicProgress,
      };
    });
  }, []);

  const getTopicAccuracy = useCallback((topic: string): number => {
    const topicData = progress.topicProgress[topic];
    if (!topicData || topicData.attempted === 0) return 0;
    return Math.round((topicData.correct / topicData.attempted) * 100);
  }, [progress.topicProgress]);

  const getWeakestTopics = useCallback((limit = 5): Array<{ topic: string; accuracy: number; attempted: number }> => {
    return Object.entries(progress.topicProgress)
      .filter(([, data]) => data.attempted >= 3) // Only consider topics with enough attempts
      .map(([topic, data]) => ({
        topic,
        accuracy: Math.round((data.correct / data.attempted) * 100),
        attempted: data.attempted,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, limit);
  }, [progress.topicProgress]);
  
  const resetProgress = useCallback(() => {
    setProgress(defaultState);
  }, []);

  return (
    <ProgressContext.Provider value={{ 
      ...progress, 
      recordAnswer, 
      resetProgress, 
      isClient,
      getTopicAccuracy,
      getWeakestTopics,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
