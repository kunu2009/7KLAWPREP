"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mcqs } from '@/lib/data';
import { 
  CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, 
  Timer, Target, Zap, BookOpen, Scale, Brain, Globe, Calculator
} from 'lucide-react';

const sectionIcons: Record<string, React.ElementType> = {
  'English': BookOpen,
  'Legal Aptitude': Scale,
  'Logical Reasoning': Brain,
  'General Knowledge': Globe,
  'Current Affairs': Globe,
  'Constitution': Scale,
  'Quantitative': Calculator,
};

const sectionColors: Record<string, string> = {
  'English': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  'Legal Aptitude': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  'Logical Reasoning': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  'General Knowledge': 'bg-green-500/10 text-green-600 border-green-500/20',
  'Current Affairs': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  'Constitution': 'bg-red-500/10 text-red-600 border-red-500/20',
  'Quantitative': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
};

type QuizState = 'intro' | 'quiz' | 'results';

export default function Daily25Page() {
  const [state, setState] = useState<QuizState>('intro');
  const [dailyQuestions, setDailyQuestions] = useState<typeof mcqs>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Generate daily questions based on date seed
  useEffect(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    // Group MCQs by topic
    const byTopic: Record<string, typeof mcqs> = {};
    mcqs.forEach(q => {
      const topic = q.topic;
      if (!byTopic[topic]) byTopic[topic] = [];
      byTopic[topic].push(q);
    });

    // Shuffle function with seed
    const seededShuffle = <T,>(array: T[], s: number): T[] => {
      const shuffled = [...array];
      let currentIndex = shuffled.length;
      let randomValue: number;

      while (currentIndex !== 0) {
        s = (s * 9301 + 49297) % 233280;
        randomValue = s / 233280;
        const randomIndex = Math.floor(randomValue * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
      }
      return shuffled;
    };

    // Select 5 questions per major category (or as many as available)
    const categories = [
      ['English'],
      ['Legal Aptitude', 'Constitution'],
      ['Logical Reasoning'],
      ['General Knowledge', 'Current Affairs'],
      ['Quantitative']
    ];

    let selected: typeof mcqs = [];
    let localSeed = seed;

    categories.forEach(cats => {
      let pool: typeof mcqs = [];
      cats.forEach(cat => {
        if (byTopic[cat]) pool = [...pool, ...byTopic[cat]];
      });
      const shuffled = seededShuffle(pool, localSeed);
      selected = [...selected, ...shuffled.slice(0, 5)];
      localSeed += 1000;
    });

    // If we don't have 25, fill with random questions
    if (selected.length < 25) {
      const remaining = seededShuffle(mcqs.filter(q => !selected.includes(q)), localSeed);
      selected = [...selected, ...remaining.slice(0, 25 - selected.length)];
    }

    setDailyQuestions(selected.slice(0, 25));
    setAnswers(new Array(25).fill(null));
  }, []);

  // Timer
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

  const currentQuestion = dailyQuestions[currentIndex];

  const startQuiz = () => {
    setState('quiz');
    setIsTimerRunning(true);
    setTimeElapsed(0);
  };

  const selectAnswer = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
      const newAnswers = [...answers];
      newAnswers[currentIndex] = index;
      setAnswers(newAnswers);
    }
  };

  const checkAnswer = () => {
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentIndex < dailyQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsTimerRunning(false);
      setState('results');
    }
  };

  const calculateResults = () => {
    let correct = 0;
    const bySection: Record<string, { correct: number; total: number }> = {};

    dailyQuestions.forEach((q, i) => {
      const topic = q.topic;
      if (!bySection[topic]) bySection[topic] = { correct: 0, total: 0 };
      bySection[topic].total++;
      
      if (answers[i] === q.correctAnswerIndex) {
        correct++;
        bySection[topic].correct++;
      }
    });

    return {
      correct,
      total: dailyQuestions.length,
      accuracy: Math.round((correct / dailyQuestions.length) * 100),
      bySection,
      time: timeElapsed
    };
  };

  const resetQuiz = () => {
    setState('intro');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers(new Array(25).fill(null));
    setShowExplanation(false);
    setTimeElapsed(0);
  };

  // Intro Screen
  if (state === 'intro') {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">CLAT Daily 25</h1>
          <p className="text-muted-foreground mt-2">
            Your daily warm-up with 25 mixed questions
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-3xl font-bold text-primary">25</p>
                <p className="text-sm text-muted-foreground">Questions</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Sections</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Today's Mix</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { section: 'English', count: 5, icon: BookOpen },
              { section: 'Legal Aptitude', count: 5, icon: Scale },
              { section: 'Logical Reasoning', count: 5, icon: Brain },
              { section: 'General Knowledge', count: 5, icon: Globe },
              { section: 'Quantitative', count: 5, icon: Calculator },
            ].map((item) => (
              <div key={item.section} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{item.section}</span>
                </div>
                <Badge variant="outline">{item.count} Qs</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Button onClick={startQuiz} size="lg" className="w-full">
          <Target className="h-5 w-5 mr-2" /> Start Daily Challenge
        </Button>
      </div>
    );
  }

  // Quiz Screen
  if (state === 'quiz' && currentQuestion) {
    const Icon = sectionIcons[currentQuestion.topic] || Target;

    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge className={sectionColors[currentQuestion.topic] || 'bg-gray-500/10'}>
                <Icon className="h-3 w-3 mr-1" />
                {currentQuestion.topic}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Question {currentIndex + 1} of {dailyQuestions.length}
            </p>
            <Progress value={((currentIndex + 1) / dailyQuestions.length) * 100} className="mt-2 w-48" />
          </div>
          <Card className="p-3 bg-primary/5">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-primary" />
              <span className="text-xl font-mono font-bold">{formatTime(timeElapsed)}</span>
            </div>
          </Card>
        </div>

        {/* Question Navigation */}
        <div className="flex flex-wrap gap-1">
          {dailyQuestions.map((_, i) => {
            let bgColor = 'bg-muted';
            if (answers[i] !== null) {
              bgColor = i === currentIndex ? 'bg-primary' : 'bg-primary/50';
            } else if (i === currentIndex) {
              bgColor = 'bg-primary/30';
            }
            return (
              <button
                key={i}
                onClick={() => {
                  if (!showExplanation) {
                    setCurrentIndex(i);
                    setSelectedAnswer(answers[i]);
                  }
                }}
                className={`w-8 h-8 rounded text-xs font-medium ${bgColor} ${i === currentIndex ? 'ring-2 ring-primary' : ''}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
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
                  onClick={() => selectAnswer(index)}
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
                onClick={checkAnswer} 
                disabled={selectedAnswer === null}
                className="flex-1"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="flex-1">
                {currentIndex < dailyQuestions.length - 1 ? (
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
          <h1 className="text-2xl font-bold">Daily 25 Complete!</h1>
          <p className="text-muted-foreground">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary">{results.accuracy}%</div>
            <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-green-500">{results.correct}/{results.total}</div>
            <div className="text-sm text-muted-foreground mt-1">Correct</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-500">{formatTime(results.time)}</div>
            <div className="text-sm text-muted-foreground mt-1">Time Taken</div>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Section-wise Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(results.bySection).map(([section, data]) => {
              const Icon = sectionIcons[section] || Target;
              const percentage = Math.round((data.correct / data.total) * 100);
              return (
                <div key={section} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 w-40">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm truncate">{section}</span>
                  </div>
                  <div className="flex-1">
                    <Progress value={percentage} className="h-2" />
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-sm font-medium">{data.correct}/{data.total}</span>
                    <span className="text-xs text-muted-foreground ml-1">({percentage}%)</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {dailyQuestions.map((q, i) => {
                const isCorrect = answers[i] === q.correctAnswerIndex;
                return (
                  <div
                    key={i}
                    className={`p-2 rounded text-center text-sm font-medium ${
                      isCorrect ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Button onClick={resetQuiz} className="w-full" size="lg">
          <RotateCcw className="h-4 w-4 mr-2" /> Try Again
        </Button>
      </div>
    );
  }

  return null;
}
