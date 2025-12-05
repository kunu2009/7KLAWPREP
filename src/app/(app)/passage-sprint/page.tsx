"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { passageDrills } from '@/lib/clat-data';
import { 
  Timer, BookOpen, CheckCircle2, XCircle, ArrowRight, 
  RotateCcw, Trophy, Zap, Clock, Target, ChevronRight
} from 'lucide-react';

type PassageState = 'select' | 'reading' | 'questions' | 'results';

export default function PassageSprintPage() {
  const [state, setState] = useState<PassageState>('select');
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentPassage = passageDrills[currentPassageIndex];
  const currentQuestion = currentPassage?.questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startPassage = (index: number) => {
    setCurrentPassageIndex(index);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(passageDrills[index].questions.length).fill(null));
    setTimeElapsed(0);
    setReadingTime(0);
    setIsTimerRunning(true);
    setState('reading');
  };

  const finishReading = () => {
    setReadingTime(timeElapsed);
    setState('questions');
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < currentPassage.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsTimerRunning(false);
      setState('results');
    }
  };

  const calculateResults = () => {
    let correct = 0;
    currentPassage.questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correctAnswerIndex) {
        correct++;
      }
    });
    return {
      correct,
      total: currentPassage.questions.length,
      accuracy: Math.round((correct / currentPassage.questions.length) * 100),
      readingSpeed: Math.round(currentPassage.wordCount / (readingTime / 60)),
      totalTime: timeElapsed
    };
  };

  const resetToSelect = () => {
    setState('select');
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setTimeElapsed(0);
    setReadingTime(0);
    setShowExplanation(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'hard': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'english': return 'bg-blue-500/10 text-blue-600';
      case 'legal': return 'bg-purple-500/10 text-purple-600';
      case 'logical': return 'bg-orange-500/10 text-orange-600';
      case 'gk': return 'bg-emerald-500/10 text-emerald-600';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  // Select Passage Screen
  if (state === 'select') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            Passage Sprint Trainer
          </h1>
          <p className="text-muted-foreground">Practice timed passage reading with MCQs - the core CLAT skill</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {passageDrills.map((passage, index) => (
            <Card key={passage.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => startPassage(index)}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(passage.category)}>
                    {passage.category.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={getDifficultyColor(passage.difficulty)}>
                    {passage.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">Passage {index + 1}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {passage.passage.substring(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {passage.wordCount} words
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {Math.floor(passage.recommendedTime / 60)} min
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {passage.questions.length} Qs
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Start Sprint <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Reading Screen
  if (state === 'reading') {
    const progress = (timeElapsed / currentPassage.recommendedTime) * 100;
    const isOverTime = timeElapsed > currentPassage.recommendedTime;

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Read the Passage</h1>
            <p className="text-sm text-muted-foreground">Read carefully, then answer questions</p>
          </div>
          <Card className={`p-3 ${isOverTime ? 'bg-red-500/10 border-red-500/30' : 'bg-primary/5'}`}>
            <div className="flex items-center gap-2">
              <Timer className={`h-5 w-5 ${isOverTime ? 'text-red-500' : 'text-primary'}`} />
              <span className={`text-xl font-mono font-bold ${isOverTime ? 'text-red-500' : ''}`}>
                {formatTime(timeElapsed)}
              </span>
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Recommended: {formatTime(currentPassage.recommendedTime)}</span>
            <span>{Math.min(Math.round(progress), 100)}%</span>
          </div>
          <Progress value={Math.min(progress, 100)} className={isOverTime ? '[&>div]:bg-red-500' : ''} />
        </div>

        <Card>
          <CardHeader>
            <div className="flex gap-2">
              <Badge className={getCategoryColor(currentPassage.category)}>
                {currentPassage.category.toUpperCase()}
              </Badge>
              <Badge variant="outline">{currentPassage.wordCount} words</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {currentPassage.passage}
              </p>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button onClick={finishReading} className="w-full" size="lg">
              I'm Done Reading - Start Questions <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Questions Screen
  if (state === 'questions') {
    const isAnswered = selectedAnswers[currentQuestionIndex] !== null;

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Question {currentQuestionIndex + 1} of {currentPassage.questions.length}</h1>
            <Progress value={((currentQuestionIndex + 1) / currentPassage.questions.length) * 100} className="mt-2 w-48" />
          </div>
          <Card className="p-3 bg-primary/5">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-primary" />
              <span className="text-xl font-mono font-bold">{formatTime(timeElapsed)}</span>
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              const isCorrect = index === currentQuestion.correctAnswerIndex;
              const showResult = showExplanation;

              let optionClass = "p-4 rounded-lg border cursor-pointer transition-all ";
              if (showResult) {
                if (isCorrect) {
                  optionClass += "bg-green-500/10 border-green-500 text-green-700";
                } else if (isSelected && !isCorrect) {
                  optionClass += "bg-red-500/10 border-red-500 text-red-700";
                } else {
                  optionClass += "bg-muted/50 opacity-50";
                }
              } else {
                optionClass += isSelected 
                  ? "bg-primary/10 border-primary" 
                  : "hover:bg-muted/50 hover:border-primary/50";
              }

              return (
                <div
                  key={index}
                  className={optionClass}
                  onClick={() => !showExplanation && selectAnswer(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                  </div>
                </div>
              );
            })}
          </CardContent>

          {showExplanation && (
            <CardContent className="pt-0">
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Explanation</h4>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                </CardContent>
              </Card>
            </CardContent>
          )}

          <CardFooter className="flex gap-3">
            {!showExplanation ? (
              <Button 
                onClick={() => setShowExplanation(true)} 
                disabled={!isAnswered}
                className="flex-1"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="flex-1">
                {currentQuestionIndex < currentPassage.questions.length - 1 ? (
                  <>Next Question <ArrowRight className="h-4 w-4 ml-2" /></>
                ) : (
                  <>See Results <Trophy className="h-4 w-4 ml-2" /></>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Results Screen
  if (state === 'results') {
    const results = calculateResults();

    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="text-center">
          <Trophy className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
          <h1 className="text-2xl font-bold">Sprint Complete!</h1>
          <p className="text-muted-foreground">Here's how you performed</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary">{results.accuracy}%</div>
            <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
            <div className="text-xs mt-2">{results.correct}/{results.total} correct</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-500">{formatTime(results.totalTime)}</div>
            <div className="text-sm text-muted-foreground mt-1">Total Time</div>
            <div className="text-xs mt-2">Reading: {formatTime(readingTime)}</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-green-500">{results.readingSpeed}</div>
            <div className="text-sm text-muted-foreground mt-1">Words/Min</div>
            <div className="text-xs mt-2">Reading Speed</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-purple-500">
              {results.accuracy >= 80 ? '🌟' : results.accuracy >= 60 ? '👍' : '💪'}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {results.accuracy >= 80 ? 'Excellent!' : results.accuracy >= 60 ? 'Good Job!' : 'Keep Practicing!'}
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentPassage.questions.map((q, i) => {
              const isCorrect = selectedAnswers[i] === q.correctAnswerIndex;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{q.question}</p>
                    {!isCorrect && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Correct: {q.options[q.correctAnswerIndex]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" onClick={resetToSelect} className="flex-1">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Another Passage
          </Button>
          <Button onClick={() => startPassage(currentPassageIndex)} className="flex-1">
            <RotateCcw className="h-4 w-4 mr-2" /> Retry This Passage
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
