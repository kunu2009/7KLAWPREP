
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { mcqs, revisionTopics } from '@/lib/data';
import type { MCQ } from '@/lib/types';
import { McqCard } from '@/components/mcq-card';
import { BarChart, BookCopy, ClipboardList, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const shuffleMcqs = (array: MCQ[]): MCQ[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function PracticeQuizPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [quizQuestions, setQuizQuestions] = useState<MCQ[]>([]);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const availableQuestions = selectedTopic ? mcqs.filter(mcq => mcq.topic === selectedTopic).length : 0;

  const handleStartQuiz = () => {
    if (!selectedTopic || availableQuestions === 0) return;
    const filteredMcqs = mcqs.filter(mcq => mcq.topic === selectedTopic);
    const shuffled = shuffleMcqs(filteredMcqs);
    setQuizQuestions(shuffled.slice(0, Math.min(numQuestions, availableQuestions)));
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizQuestions([]);
    setSelectedTopic('');
  };

  if (quizStarted) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">{selectedTopic} Quiz</h1>
                <p className="text-muted-foreground">{quizQuestions.length} questions to test your knowledge.</p>
            </div>
            <Button onClick={handleRestartQuiz} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Start a New Quiz
            </Button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {quizQuestions.map((mcq, index) => (
            <McqCard key={mcq.id} mcq={mcq} questionNumber={index + 1} />
          ))}
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Quiz Complete!</CardTitle>
                <CardDescription>Check your progress to see how you did.</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="/progress">
                    <Button>
                        <BarChart className="mr-2 h-4 w-4" />
                        View Progress
                    </Button>
                </Link>
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Practice Quiz</h1>
        <p className="text-muted-foreground">Select a topic and the number of questions to start a targeted quiz.</p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><ClipboardList/> Create Your Quiz</CardTitle>
          <CardDescription>Customize your practice session.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="topic-select">Topic</Label>
            <Select onValueChange={setSelectedTopic} value={selectedTopic}>
              <SelectTrigger id="topic-select">
                <SelectValue placeholder="Select a topic..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {revisionTopics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic} ({mcqs.filter(mcq => mcq.topic === topic).length} questions)
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
             {selectedTopic && availableQuestions === 0 && (
                <p className="text-sm text-destructive">No questions available for this topic yet. Please select another.</p>
            )}
             {selectedTopic && availableQuestions > 0 && (
                <p className="text-sm text-muted-foreground">{availableQuestions} questions available for {selectedTopic}.</p>
            )}
          </div>
          
          <div className="space-y-3">
             <Label>Number of Questions</Label>
             <RadioGroup
                value={numQuestions.toString()}
                onValueChange={(value) => setNumQuestions(parseInt(value))}
                className="flex flex-wrap gap-4"
            >
                {[5, 10, 20].map(num => (
                    <div key={num} className="flex items-center space-x-2">
                        <RadioGroupItem value={num.toString()} id={`num-${num}`} />
                        <Label htmlFor={`num-${num}`} className="cursor-pointer">{num}</Label>
                    </div>
                ))}
             </RadioGroup>
          </div>

          <Button onClick={handleStartQuiz} disabled={!selectedTopic || availableQuestions === 0} className="w-full">
            <BookCopy className="mr-2 h-4 w-4" />
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
