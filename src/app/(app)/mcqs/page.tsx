
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { McqCard } from '@/components/mcq-card';
import { mcqs } from '@/lib/data';
import type { MCQ } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RotateCw, Target, CheckCircle2, XCircle, Trophy, Flame } from 'lucide-react';
import { format } from 'date-fns';
import { useProgress } from '@/hooks/use-progress';

// More efficient shuffle algorithm (Fisher-Yates)
const shuffleMcqs = (array: MCQ[]): MCQ[] => {
  const newArray = [...array];
  let currentIndex = newArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}

const getTodaysMcqs = (): MCQ[] => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const storageKey = `lawPrepDailyMCQ_${today}`;

  try {
    const storedMcqIdsJson = localStorage.getItem(storageKey);
    if (storedMcqIdsJson) {
      const storedMcqIds = JSON.parse(storedMcqIdsJson);
      if (Array.isArray(storedMcqIds) && storedMcqIds.length > 0) {
        const todaysMcqs = storedMcqIds.map((id: string) => mcqs.find(mcq => mcq.id === id)).filter((mcq): mcq is MCQ => !!mcq);
        if (todaysMcqs.length === 10) {
          return todaysMcqs;
        }
      }
    }
  } catch (error) {
    console.error("Failed to read from localStorage", error);
  }
  
  const shuffled = shuffleMcqs(mcqs);
  const newDailyMcqs = shuffled.slice(0, 10);
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(newDailyMcqs.map(mcq => mcq.id)));
  } catch (error) {
    console.error("Failed to write to localStorage", error);
  }
  
  return newDailyMcqs;
};

export default function DailyMcqPage() {
  const [dailyMcqs, setDailyMcqs] = useState<MCQ[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [id: string]: boolean }>({});
  const { currentStreak, history } = useProgress();

  useEffect(() => {
    setIsClient(true);
    setDailyMcqs(getTodaysMcqs());
  }, []);

  // Track which questions are answered from history
  useEffect(() => {
    if (dailyMcqs.length > 0 && history) {
      const answered: { [id: string]: boolean } = {};
      dailyMcqs.forEach(mcq => {
        if (history[mcq.id]) {
          answered[mcq.id] = history[mcq.id] === 'correct';
        }
      });
      setAnsweredQuestions(answered);
    }
  }, [dailyMcqs, history]);

  const refreshMcqs = useCallback(() => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const storageKey = `lawPrepDailyMCQ_${today}`;
    try {
      localStorage.removeItem(storageKey); 
    } catch (error) {
      console.error("Failed to remove item from localStorage", error);
    }
    setDailyMcqs(getTodaysMcqs());
    setAnsweredQuestions({});
  }, []);

  // Stats for today's session
  const sessionStats = useMemo(() => {
    const answered = Object.keys(answeredQuestions).length;
    const correct = Object.values(answeredQuestions).filter(v => v).length;
    const incorrect = answered - correct;
    const remaining = dailyMcqs.length - answered;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { answered, correct, incorrect, remaining, accuracy };
  }, [answeredQuestions, dailyMcqs.length]);

  // Get unique topics from today's MCQs
  const todaysTopics = useMemo(() => {
    const topicSet = new Set(dailyMcqs.map(m => m.topic));
    return Array.from(topicSet);
  }, [dailyMcqs]);
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Daily MCQs
          </h1>
          <p className="text-muted-foreground">Your daily set of 10 questions. A new set appears each day.</p>
          {todaysTopics.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {todaysTopics.map(topic => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {currentStreak > 0 && (
            <div className="flex items-center gap-1 text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-full">
              <Flame className="h-4 w-4" />
              <span className="text-sm font-medium">{currentStreak} day streak</span>
            </div>
          )}
          <Button onClick={refreshMcqs} variant="outline" disabled={!isClient}>
            <RotateCw className="mr-2 h-4 w-4" />
            New Set
          </Button>
        </div>
      </div>

      {/* Progress Card */}
      {isClient && dailyMcqs.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={(sessionStats.answered / dailyMcqs.length) * 100} className="h-2" />
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{sessionStats.answered}</p>
                  <p className="text-xs text-muted-foreground">Answered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{sessionStats.correct}</p>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Correct
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-500">{sessionStats.incorrect}</p>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <XCircle className="h-3 w-3" /> Wrong
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{sessionStats.accuracy}%</p>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Trophy className="h-3 w-3" /> Accuracy
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completion Message */}
      {isClient && sessionStats.answered === dailyMcqs.length && dailyMcqs.length > 0 && (
        <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-full">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-green-700">Daily Challenge Complete!</p>
                <p className="text-sm text-muted-foreground">
                  You scored {sessionStats.correct}/{dailyMcqs.length} ({sessionStats.accuracy}%). 
                  {sessionStats.accuracy >= 80 ? ' Excellent work! 🎉' : sessionStats.accuracy >= 60 ? ' Good effort! Keep practicing! 💪' : ' Review the explanations and try again tomorrow! 📚'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions */}
      {!isClient ? (
         <Card className="p-8">
           <CardContent className="text-center">
             <p className="text-muted-foreground">Loading questions...</p>
           </CardContent>
         </Card>
      ) : dailyMcqs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {dailyMcqs.map((mcq, index) => (
            <McqCard key={mcq.id} mcq={mcq} questionNumber={index + 1} />
          ))}
        </div>
      ) : (
        <Card className="p-8">
          <CardContent className="text-center">
            <p className="text-muted-foreground">No questions available.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
