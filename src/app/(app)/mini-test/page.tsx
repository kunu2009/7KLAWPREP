"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Timer, Play, Pause, RotateCcw, CheckCircle2, XCircle, Trophy, Brain, BookOpen, Scale, Newspaper, Zap } from 'lucide-react';

interface MiniTestQuestion {
  id: string;
  section: 'english' | 'gk' | 'legal' | 'logical' | 'quant';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const miniTestQuestions: MiniTestQuestion[] = [
  // English
  {
    id: 'mt1',
    section: 'english',
    question: 'Choose the word most similar in meaning to "Abrogate":',
    options: ['Establish', 'Abolish', 'Ratify', 'Enforce'],
    correctIndex: 1,
    explanation: '"Abrogate" means to abolish or annul, especially by authority.'
  },
  {
    id: 'mt2',
    section: 'english',
    question: 'Fill in the blank: The court _____ the petition due to lack of jurisdiction.',
    options: ['dismissed', 'approved', 'reviewed', 'submitted'],
    correctIndex: 0,
    explanation: 'Courts "dismiss" petitions when they lack jurisdiction or the petition has no merit.'
  },
  {
    id: 'mt3',
    section: 'english',
    question: 'Identify the error: "Neither the judge nor the lawyers was present in the courtroom."',
    options: ['Neither', 'nor', 'was', 'in'],
    correctIndex: 2,
    explanation: 'With "neither...nor", the verb agrees with the nearest subject. "Lawyers" is plural, so it should be "were".'
  },
  // GK & Current Affairs
  {
    id: 'mt4',
    section: 'gk',
    question: 'Who is the current Chief Justice of India (as of 2024)?',
    options: ['D.Y. Chandrachud', 'Sanjiv Khanna', 'N.V. Ramana', 'U.U. Lalit'],
    correctIndex: 0,
    explanation: 'Justice D.Y. Chandrachud is the 50th Chief Justice of India, serving since November 2022.'
  },
  {
    id: 'mt5',
    section: 'gk',
    question: 'The Bharatiya Nyaya Sanhita (BNS) replaced which law?',
    options: ['CrPC', 'IPC', 'Evidence Act', 'CPC'],
    correctIndex: 1,
    explanation: 'BNS 2023 replaced the colonial-era Indian Penal Code 1860.'
  },
  {
    id: 'mt6',
    section: 'gk',
    question: 'Which country hosted the 2024 G20 Summit?',
    options: ['India', 'Brazil', 'Germany', 'Japan'],
    correctIndex: 1,
    explanation: 'Brazil hosted the G20 Summit in 2024. India hosted in 2023.'
  },
  // Legal Reasoning
  {
    id: 'mt7',
    section: 'legal',
    question: 'PRINCIPLE: Every person has a right to defend their body, property, and family. FACT: A sees B about to hit C with a stick. A pushes B, injuring B. Is A liable?',
    options: ['Yes, A used excessive force', 'No, A acted in private defence', 'Yes, C could have defended himself', 'No, A had no duty to help'],
    correctIndex: 1,
    explanation: 'A can exercise the right of private defence on behalf of another person (C). Pushing B was reasonable force to prevent harm to C.'
  },
  {
    id: 'mt8',
    section: 'legal',
    question: 'Which Article of the Constitution provides for Writ jurisdiction of the Supreme Court?',
    options: ['Article 32', 'Article 226', 'Article 136', 'Article 21'],
    correctIndex: 0,
    explanation: 'Article 32 gives the Supreme Court power to issue writs for enforcement of Fundamental Rights. Article 226 is for High Courts.'
  },
  {
    id: 'mt9',
    section: 'legal',
    question: 'PRINCIPLE: Ignorance of law is no excuse. FACT: X, a foreigner, violates a new tax law, claiming ignorance. Is X liable?',
    options: ['No, as X is a foreigner', 'Yes, ignorance of law is no excuse', 'No, the law is new', 'Depends on the court'],
    correctIndex: 1,
    explanation: 'The principle "Ignorantia juris non excusat" applies universally. Being a foreigner or the law being new are not valid defences.'
  },
  // Logical Reasoning
  {
    id: 'mt10',
    section: 'logical',
    question: 'If all lawyers are graduates, and some graduates are doctors, which conclusion follows?',
    options: ['All lawyers are doctors', 'Some lawyers are doctors', 'Some doctors are lawyers', 'No definite conclusion'],
    correctIndex: 3,
    explanation: 'There is no definite connection between lawyers and doctors. The graduates who are doctors may not be lawyers.'
  },
  {
    id: 'mt11',
    section: 'logical',
    question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. How is A related to D?',
    options: ['Granddaughter', 'Daughter', 'Sister', 'Niece'],
    correctIndex: 0,
    explanation: 'C is B\'s mother. A is B\'s sister, so C is also A\'s mother. D is C\'s father, making D the grandfather of A. A is D\'s granddaughter.'
  },
  {
    id: 'mt12',
    section: 'logical',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '36'],
    correctIndex: 1,
    explanation: 'Pattern: n(n+1). 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.'
  },
  // Quantitative
  {
    id: 'mt13',
    section: 'quant',
    question: 'A lawyer charges ₹500 for the first hour and ₹200 for each additional hour. How much for 5 hours?',
    options: ['₹1000', '₹1300', '₹1500', '₹1100'],
    correctIndex: 1,
    explanation: 'First hour: ₹500. Additional 4 hours: 4 × ₹200 = ₹800. Total: ₹500 + ₹800 = ₹1300.'
  },
  {
    id: 'mt14',
    section: 'quant',
    question: 'If 60% of cases are civil and 25% of civil cases are property disputes, what percentage of all cases are property disputes?',
    options: ['15%', '85%', '25%', '35%'],
    correctIndex: 0,
    explanation: '25% of 60% = 0.25 × 0.60 = 0.15 = 15%.'
  },
  {
    id: 'mt15',
    section: 'quant',
    question: 'A court hears 40 cases per day. At this rate, how many days to hear 1000 cases?',
    options: ['20', '25', '30', '40'],
    correctIndex: 1,
    explanation: '1000 ÷ 40 = 25 days.'
  }
];

const sectionConfig = {
  english: { icon: BookOpen, color: 'blue', label: 'English' },
  gk: { icon: Newspaper, color: 'green', label: 'GK & CA' },
  legal: { icon: Scale, color: 'purple', label: 'Legal' },
  logical: { icon: Brain, color: 'orange', label: 'Logical' },
  quant: { icon: Zap, color: 'pink', label: 'Quant' }
};

export default function MiniTestPage() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(miniTestQuestions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [isPaused, setIsPaused] = useState(false);

  const currentQuestion = miniTestQuestions[currentIndex];

  useEffect(() => {
    if (!isStarted || isPaused || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isPaused, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (index: number) => {
    if (isSubmitted) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  };

  const navigateQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  const submitTest = () => {
    setIsSubmitted(true);
  };

  const resetTest = () => {
    setIsStarted(false);
    setCurrentIndex(0);
    setAnswers(new Array(miniTestQuestions.length).fill(null));
    setIsSubmitted(false);
    setTimeLeft(15 * 60);
    setIsPaused(false);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === miniTestQuestions[index].correctIndex ? 1 : 0);
    }, 0);
  };

  const getSectionScore = (section: string) => {
    let correct = 0;
    let total = 0;
    miniTestQuestions.forEach((q, index) => {
      if (q.section === section) {
        total++;
        if (answers[index] === q.correctIndex) correct++;
      }
    });
    return { correct, total };
  };

  if (!isStarted) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Timer className="h-6 w-6 text-red-500" />
            Mini Test
          </h1>
          <p className="text-muted-foreground">
            15-question quick test covering all CLAT sections
          </p>
        </div>

        <Card className="p-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-xl font-bold mb-2">Ready for a Quick Challenge?</h2>
          <p className="text-muted-foreground mb-6">
            15 questions • 15 minutes • All sections covered
          </p>

          <div className="grid grid-cols-5 gap-2 mb-6">
            {Object.entries(sectionConfig).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <div key={key} className="p-2 rounded-lg bg-muted/30 text-center">
                  <Icon className={`h-5 w-5 mx-auto mb-1 text-${config.color}-500`} />
                  <p className="text-xs">{config.label}</p>
                </div>
              );
            })}
          </div>

          <Button onClick={() => setIsStarted(true)} size="lg" className="w-full">
            <Play className="h-4 w-4 mr-2" /> Start Test
          </Button>
        </Card>

        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-amber-600 mb-2">📋 Test Instructions</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 15 questions covering English, GK, Legal, Logical, and Quant</li>
              <li>• Time limit: 15 minutes (1 minute per question)</li>
              <li>• Navigate between questions using the number grid</li>
              <li>• Review answers before final submission</li>
              <li>• No negative marking</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSubmitted) {
    const score = calculateScore();
    const percentage = Math.round((score / miniTestQuestions.length) * 100);

    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <Card className="text-center p-8">
          <Trophy className={`h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
          <h1 className="text-2xl font-bold mb-2">Test Complete!</h1>
          <p className="text-4xl font-bold text-primary mb-2">{score}/{miniTestQuestions.length}</p>
          <p className="text-muted-foreground mb-4">{percentage}% Accuracy</p>
          
          {/* Section-wise scores */}
          <div className="grid grid-cols-5 gap-2 my-6">
            {Object.entries(sectionConfig).map(([key, config]) => {
              const { correct, total } = getSectionScore(key);
              const Icon = config.icon;
              return (
                <div key={key} className={`p-3 rounded-lg bg-${config.color}-500/10`}>
                  <Icon className={`h-5 w-5 mx-auto mb-1 text-${config.color}-500`} />
                  <p className="font-bold">{correct}/{total}</p>
                  <p className="text-xs text-muted-foreground">{config.label}</p>
                </div>
              );
            })}
          </div>

          <Button onClick={resetTest} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" /> Take Another Test
          </Button>
        </Card>

        {/* Detailed Review */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Detailed Review</h2>
          {miniTestQuestions.map((q, index) => {
            const isCorrect = answers[index] === q.correctIndex;
            const config = sectionConfig[q.section];
            const Icon = config.icon;
            
            return (
              <Card key={q.id} className={isCorrect ? 'border-green-500/30' : 'border-red-500/30'}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Icon className="h-3 w-3" />
                      {config.label}
                    </Badge>
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Q{index + 1}. {q.question}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    {q.options.map((opt, optIndex) => (
                      <div 
                        key={optIndex}
                        className={`p-2 rounded ${
                          optIndex === q.correctIndex ? 'bg-green-500/20' :
                          optIndex === answers[index] ? 'bg-red-500/20' : 'bg-muted/30'
                        }`}
                      >
                        {String.fromCharCode(65 + optIndex)}. {opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{q.explanation}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const config = sectionConfig[currentQuestion.section];
  const SectionIcon = config.icon;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Timer className="h-5 w-5 text-red-500" />
            Mini Test
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={timeLeft < 60 ? "destructive" : "outline"} className="text-lg px-3 py-1">
            {formatTime(timeLeft)}
          </Badge>
          <Button variant="ghost" size="icon" onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Progress */}
      <Progress value={((currentIndex + 1) / miniTestQuestions.length) * 100} className="h-2" />

      {/* Question Navigation */}
      <div className="grid grid-cols-15 gap-1">
        {miniTestQuestions.map((q, index) => (
          <Button
            key={q.id}
            variant={index === currentIndex ? "default" : answers[index] !== null ? "secondary" : "outline"}
            size="sm"
            className="w-8 h-8 p-0 text-xs"
            onClick={() => navigateQuestion(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge className={`bg-${config.color}-500/10 text-${config.color}-600`}>
              <SectionIcon className="h-3 w-3 mr-1" />
              {config.label}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Q{currentIndex + 1} of {miniTestQuestions.length}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">{currentQuestion.question}</p>

          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full justify-start text-left h-auto py-3 px-4 ${
                  answers[currentIndex] === index ? 'bg-primary/20 border-primary' : ''
                }`}
                onClick={() => handleAnswer(index)}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button 
            variant="outline" 
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(prev => prev - 1)}
          >
            Previous
          </Button>
          {currentIndex < miniTestQuestions.length - 1 ? (
            <Button 
              className="flex-1"
              onClick={() => setCurrentIndex(prev => prev + 1)}
            >
              Next
            </Button>
          ) : (
            <Button 
              className="flex-1"
              variant="default"
              onClick={submitTest}
            >
              Submit Test
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Answer Summary */}
      <Card className="p-4">
        <div className="flex items-center justify-between text-sm">
          <span>Answered: {answers.filter(a => a !== null).length}/{miniTestQuestions.length}</span>
          <span>Unanswered: {answers.filter(a => a === null).length}</span>
        </div>
      </Card>

      {isPaused && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="p-8 text-center">
            <Pause className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-bold mb-2">Test Paused</h2>
            <p className="text-muted-foreground mb-4">Click resume to continue</p>
            <Button onClick={() => setIsPaused(false)}>
              <Play className="h-4 w-4 mr-2" /> Resume
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
