"use client";

import { useState, useEffect } from 'react';
import { McqCard } from '@/components/mcq-card';
import { mcqs } from '@/lib/data';
import type { MCQ } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';

// Function to get 10 random MCQs
const getRandomMcqs = (): MCQ[] => {
  const shuffled = [...mcqs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
};

export default function DailyMcqPage() {
  const [dailyMcqs, setDailyMcqs] = useState<MCQ[]>([]);

  useEffect(() => {
    // Set initial random MCQs on component mount (client-side)
    setDailyMcqs(getRandomMcqs());
  }, []);

  const refreshMcqs = () => {
    setDailyMcqs(getRandomMcqs());
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Daily MCQs</h1>
          <p className="text-muted-foreground">Test your knowledge with 10 new questions every day.</p>
        </div>
        <Button onClick={refreshMcqs} variant="outline">
          <RotateCw className="mr-2 h-4 w-4" />
          New Questions
        </Button>
      </div>

      {dailyMcqs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {dailyMcqs.map((mcq, index) => (
            <McqCard key={mcq.id} mcq={mcq} questionNumber={index + 1} />
          ))}
        </div>
      ) : (
         <p className="text-muted-foreground">Loading questions...</p>
      )}
    </div>
  );
}
