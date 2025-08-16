
"use client";

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { ProgressState } from '@/lib/types';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-config';

interface ProgressContextType extends ProgressState {
  recordAnswer: (mcqId: string, isCorrect: boolean) => void;
  resetProgress: () => void;
  isClient: boolean;
  playerId: string | null;
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
  playerId: null,
});

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<ProgressState>(defaultState);
  const [isClient, setIsClient] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const pId = sessionStorage.getItem('playerId');
    if (pId) {
      setPlayerId(pId);
    }
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      if (playerId) {
        try {
          const progressDocRef = doc(db, 'userProgress', playerId, 'mcq', 'history');
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
      }
    };
    loadProgress();
  }, [playerId]);


  const recordAnswer = useCallback(async (mcqId: string, isCorrect: boolean) => {
    if (!playerId || progress.history[mcqId]) {
      return;
    }
    
    const newHistory = { ...progress.history, [mcqId]: isCorrect ? 'correct' : 'incorrect' as 'correct' | 'incorrect' };

    // Optimistic UI update
    setProgress(prev => ({
      attempted: prev.attempted + 1,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      history: newHistory,
    }));
    
    try {
        const progressDocRef = doc(db, 'userProgress', playerId, 'mcq', 'history');
        // Use set with merge to create or update the document
        await setDoc(progressDocRef, { history: newHistory }, { merge: true });
    } catch (error) {
        console.error("Could not save progress to Firestore", error);
        // Revert on failure (optional, might cause UI flicker)
        setProgress(progress);
    }

  }, [playerId, progress]);
  
  const resetProgress = useCallback(async () => {
    if (!playerId) return;

    setProgress(defaultState);
     try {
        const progressDocRef = doc(db, 'userProgress', playerId, 'mcq', 'history');
        await setDoc(progressDocRef, { history: {} });
    } catch (error) {
        console.error("Could not reset progress in Firestore", error);
    }
  }, [playerId]);

  return (
    <ProgressContext.Provider value={{ ...progress, recordAnswer, resetProgress, isClient, playerId }}>
      {children}
    </ProgressContext.Provider>
  );
};
