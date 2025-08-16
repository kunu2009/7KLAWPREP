
"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import type { MCQ } from '@/lib/types';
import { useProgress } from '@/hooks/use-progress';
import { cn } from '@/lib/utils';

interface McqCardProps {
  mcq: MCQ;
  questionNumber: number;
}

export function McqCard({ mcq, questionNumber }: McqCardProps) {
  const { recordAnswer, history } = useProgress();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const hasBeenAnswered = history && history[mcq.id] !== undefined;

  useEffect(() => {
    // When history loads, if the question has been answered, reveal it.
    if (hasBeenAnswered) {
      setIsRevealed(true);
    }
  }, [hasBeenAnswered]);

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === mcq.correctAnswerIndex;
    if (!hasBeenAnswered) {
      recordAnswer(mcq.id, isCorrect);
    }
    setIsRevealed(true);
  };

  const getOptionLabelClass = (index: number) => {
    const isCorrectAnswer = index === mcq.correctAnswerIndex;
    const answerResult = history[mcq.id];

    if (isRevealed || hasBeenAnswered) {
        if (isCorrectAnswer) {
            return 'text-green-600 dark:text-green-500 font-semibold';
        }
        if (answerResult === 'incorrect' && selectedOption === index) {
             return 'text-red-600 dark:text-red-500 font-semibold';
        }
    }
    return '';
  };
  
  const getAlertVariant = () => {
    if (!isRevealed) return null;
    const result = history[mcq.id];
    if (result === 'correct') return 'correct';
    if (result === 'incorrect') return 'incorrect';
    // Handle the case where the answer has just been submitted but history might not be updated yet
    if (selectedOption !== null) {
      return selectedOption === mcq.correctAnswerIndex ? 'correct' : 'incorrect';
    }
    return null;
  }
  
  const alertVariant = getAlertVariant();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Question {questionNumber}: <span className="font-normal">{mcq.question}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={hasBeenAnswered ? (Object.keys(mcq.options).find(key => mcq.options[parseInt(key)] === mcq.options[mcq.correctAnswerIndex])) : selectedOption?.toString()}
          onValueChange={(value) => setSelectedOption(parseInt(value))}
          disabled={isRevealed || hasBeenAnswered}
          className="space-y-2"
        >
          {mcq.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`${mcq.id}-option-${index}`} />
              <Label htmlFor={`${mcq.id}-option-${index}`} className={cn("cursor-pointer", getOptionLabelClass(index))}>
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        {!isRevealed && !hasBeenAnswered && (
          <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
            Check Answer
          </Button>
        )}

        {alertVariant === 'correct' && (
          <Alert className="border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
            <AlertTitle className="text-green-700 dark:text-green-400">Correct!</AlertTitle>
            <AlertDescription className="text-green-700/80 dark:text-green-400/80">{mcq.explanation}</AlertDescription>
          </Alert>
        )}
        
        {alertVariant === 'incorrect' && (
           <Alert variant="destructive" className="border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-700">
            <XCircle className="h-4 w-4 text-red-600 dark:text-red-500" />
            <AlertTitle className="text-red-700 dark:text-red-400">Incorrect</AlertTitle>
            <AlertDescription className="text-red-700/80 dark:text-red-400/80">
              <span className="font-semibold">Correct answer:</span> {mcq.options[mcq.correctAnswerIndex]}
              <br/>
              {mcq.explanation}
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
