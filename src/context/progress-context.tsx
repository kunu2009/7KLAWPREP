
"use client";

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { ProgressState } from '@/lib/types';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-config';
import { useAuth } from '@/hooks/use-auth';

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
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(defaultState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      if (isClient && user) {
        try {
          const progressDocRef = doc(db, 'userProgress', user.uid, 'mcq', 'history');
          const progressDocSnap = await getDoc(progressDocRef);
          if (progressDocSnap.exists()) {
            const data = progressDocSnap.data();
            setProgress({
              history: data.history || {},
              attempted: Object.keys(data.history || {}).length,
              correct: Object.values(data.history || {}).filter(v => v === 'correct').length
            });
          }
        } catch (error) {
          console.error("Could not load progress from Firestore", error);
        }
      } else if (!user) {
        // Reset progress if user logs out
        setProgress(defaultState);
      }
    };
    loadProgress();
  }, [user, isClient]);


  const recordAnswer = useCallback(async (mcqId: string, isCorrect: boolean) => {
    if (!user || progress.history[mcqId]) {
      return;
    }
    
    const newHistory = { ...progress.history, [mcqId]: isCorrect ? 'correct' : 'incorrect' as 'correct' | 'incorrect' };

    setProgress(prev => ({
      attempted: prev.attempted + 1,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      history: newHistory,
    }));
    
    try {
        const progressDocRef = doc(db, 'userProgress', user.uid, 'mcq', 'history');
        await setDoc(progressDocRef, { history: newHistory }, { merge: true });
    } catch (error) {
        console.error("Could not save progress to Firestore", error);
        setProgress(progress);
    }

  }, [user, progress]);
  
  const resetProgress = useCallback(async () => {
    if (!user) return;

    setProgress(defaultState);
     try {
        const progressDocRef = doc(db, 'userProgress', user.uid, 'mcq', 'history');
        await setDoc(progressDocRef, { history: {} });
    } catch (error) {
        console.error("Could not reset progress in Firestore", error);
    }
  }, [user]);

  return (
    <ProgressContext.Provider value={{ ...progress, recordAnswer, resetProgress, isClient }}>
      {children}
    </ProgressContext.Provider>
  );
};
