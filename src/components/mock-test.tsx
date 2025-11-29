"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Clock, Play, Pause, CheckCircle2, XCircle, ArrowRight, ArrowLeft,
  Flag, AlertTriangle, Trophy, Target, BookOpen, RotateCcw, ChevronRight,
  Timer, Award, TrendingUp, FileText, ListChecks
} from 'lucide-react';
import { mockTests, MockTest, MockTestQuestion, currentAffairsCapsule } from '@/lib/mock-test-data';
import { cn } from '@/lib/utils';

type TestState = 'select-test' | 'not-started' | 'in-progress' | 'paused' | 'completed' | 'review';

interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isMarked: boolean;
  timeTaken: number;
}

export default function MockTestComponent() {
  const [testState, setTestState] = useState<TestState>('select-test');
  const [selectedTestIndex, setSelectedTestIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Map<string, UserAnswer>>(new Map());
  const [timeRemaining, setTimeRemaining] = useState(mockTests[0].duration * 60); // in seconds
  const [activeTab, setActiveTab] = useState('mock-test');
  
  const mockTest = mockTests[selectedTestIndex];
  const currentQuestion = mockTest.questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState === 'in-progress' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTestState('completed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, timeRemaining]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setTestState('in-progress');
    setTimeRemaining(mockTest.duration * 60);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Map());
  };

  const pauseTest = () => setTestState('paused');
  const resumeTest = () => setTestState('in-progress');
  
  const submitTest = () => {
    setTestState('completed');
  };

  const reviewTest = () => {
    setTestState('review');
    setCurrentQuestionIndex(0);
  };

  const retakeTest = () => {
    setTestState('not-started');
    setUserAnswers(new Map());
    setTimeRemaining(mockTest.duration * 60);
    setCurrentQuestionIndex(0);
  };

  const selectTest = (index: number) => {
    setSelectedTestIndex(index);
    setTestState('not-started');
    setUserAnswers(new Map());
    setTimeRemaining(mockTests[index].duration * 60);
    setCurrentQuestionIndex(0);
  };

  const backToTestSelection = () => {
    setTestState('select-test');
  };

  const selectAnswer = (optionIndex: number) => {
    if (testState !== 'in-progress') return;
    
    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isMarked: userAnswers.get(currentQuestion.id)?.isMarked || false,
      timeTaken: 0,
    };
    setUserAnswers(new Map(userAnswers.set(currentQuestion.id, answer)));
  };

  const toggleMark = () => {
    const existing = userAnswers.get(currentQuestion.id);
    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: existing?.selectedOption ?? null,
      isMarked: !existing?.isMarked,
      timeTaken: existing?.timeTaken || 0,
    };
    setUserAnswers(new Map(userAnswers.set(currentQuestion.id, answer)));
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < mockTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Calculate results
  const calculateResults = useCallback(() => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    
    mockTest.questions.forEach(q => {
      const answer = userAnswers.get(q.id);
      if (!answer || answer.selectedOption === null) {
        unattempted++;
      } else if (answer.selectedOption === q.correctAnswerIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const totalMarks = correct - (wrong * mockTest.negativeMarking);
    const percentage = (totalMarks / mockTest.totalMarks) * 100;

    return { correct, wrong, unattempted, totalMarks, percentage };
  }, [mockTest.questions, mockTest.negativeMarking, mockTest.totalMarks, userAnswers]);

  const results = (testState === 'completed' || testState === 'review') ? calculateResults() : null;

  // Get section-wise stats
  const getSectionStats = useCallback(() => {
    const stats: Record<string, { total: number; attempted: number; correct: number }> = {};
    
    mockTest.sections.forEach(section => {
      stats[section.key] = { total: 0, attempted: 0, correct: 0 };
    });

    mockTest.questions.forEach(q => {
      if (stats[q.section]) {
        stats[q.section].total++;
        const answer = userAnswers.get(q.id);
        if (answer && answer.selectedOption !== null) {
          stats[q.section].attempted++;
          if (answer.selectedOption === q.correctAnswerIndex) {
            stats[q.section].correct++;
          }
        }
      }
    });

    return stats;
  }, [mockTest.questions, mockTest.sections, userAnswers]);

  // Question status for navigator
  const getQuestionStatus = (index: number): 'current' | 'answered' | 'marked' | 'unanswered' => {
    if (index === currentQuestionIndex) return 'current';
    const q = mockTest.questions[index];
    const answer = userAnswers.get(q.id);
    if (answer?.isMarked) return 'marked';
    if (answer?.selectedOption !== null && answer?.selectedOption !== undefined) return 'answered';
    return 'unanswered';
  };

  const statusColors = {
    current: 'bg-primary text-primary-foreground',
    answered: 'bg-green-500 text-white',
    marked: 'bg-yellow-500 text-white',
    unanswered: 'bg-muted hover:bg-muted/80',
  };

  // Test selection screen
  if (testState === 'select-test') {
    return (
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mock-test">🎯 Mock Tests</TabsTrigger>
            <TabsTrigger value="current-affairs">📰 Current Affairs</TabsTrigger>
          </TabsList>

          <TabsContent value="mock-test" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Select a Mock Test</h2>
              <p className="text-muted-foreground">Choose from our full-length CLAT 2025 mock tests</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {mockTests.map((test, index) => (
                <Card 
                  key={test.id} 
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-lg hover:border-primary",
                    index === 0 ? "border-blue-500/50" : "border-green-500/50"
                  )}
                  onClick={() => selectTest(index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={index === 0 ? "default" : "secondary"} className={index === 1 ? "bg-green-500 hover:bg-green-600" : ""}>
                        {index === 0 ? "Mock Test 1" : "Mock Test 2 - NEW"}
                      </Badge>
                      <ListChecks className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{test.title}</CardTitle>
                    <CardDescription className="text-sm">{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-2 text-center mb-4">
                      <div className="p-2 bg-muted rounded">
                        <p className="font-bold text-primary">{test.totalQuestions}</p>
                        <p className="text-xs text-muted-foreground">Qs</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="font-bold text-primary">{test.duration}</p>
                        <p className="text-xs text-muted-foreground">Min</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="font-bold text-primary">{test.totalMarks}</p>
                        <p className="text-xs text-muted-foreground">Marks</p>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <p className="font-bold text-red-500">-{test.negativeMarking}</p>
                        <p className="text-xs text-muted-foreground">Neg</p>
                      </div>
                    </div>
                    <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                      <Play className="h-4 w-4 mr-2" />
                      Select This Test
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <Trophy className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700 dark:text-green-300">
                <strong>Pro Tip:</strong> Complete both mock tests for comprehensive preparation. Each test has completely different questions!
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="current-affairs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {currentAffairsCapsule.title}
                </CardTitle>
                <CardDescription>Last updated: {currentAffairsCapsule.lastUpdated}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-6">
                    {currentAffairsCapsule.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Not started screen
  if (testState === 'not-started') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" size="sm" onClick={backToTestSelection} className="mb-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Test Selection
        </Button>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mock-test">🎯 Mock Test</TabsTrigger>
            <TabsTrigger value="current-affairs">📰 Current Affairs</TabsTrigger>
          </TabsList>

          <TabsContent value="mock-test" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">{mockTest.title}</CardTitle>
                <CardDescription className="text-base">{mockTest.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Test Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">{mockTest.totalQuestions}</p>
                    <p className="text-sm text-muted-foreground">Questions</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">{mockTest.duration}</p>
                    <p className="text-sm text-muted-foreground">Minutes</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">{mockTest.totalMarks}</p>
                    <p className="text-sm text-muted-foreground">Total Marks</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-red-500">-{mockTest.negativeMarking}</p>
                    <p className="text-sm text-muted-foreground">Negative/Wrong</p>
                  </div>
                </div>

                {/* Section Breakdown */}
                <div>
                  <h3 className="font-semibold mb-3">Section Breakdown</h3>
                  <div className="space-y-2">
                    {mockTest.sections.map(section => (
                      <div key={section.key} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{section.name}</span>
                        <Badge variant="secondary">{section.questionCount} Qs</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                      <li>Each correct answer carries 1 mark</li>
                      <li>0.25 marks will be deducted for each wrong answer</li>
                      <li>No negative marking for unattempted questions</li>
                      <li>You can mark questions for review and come back later</li>
                      <li>Timer will start as soon as you click "Start Test"</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Button onClick={startTest} size="lg" className="w-full">
                  <Play className="h-5 w-5 mr-2" />
                  Start Test
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="current-affairs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {currentAffairsCapsule.title}
                </CardTitle>
                <CardDescription>Last updated: {currentAffairsCapsule.lastUpdated}</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-6">
                    {currentAffairsCapsule.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Completed/Review screen
  if (testState === 'completed' || testState === 'review') {
    const sectionStats = getSectionStats();
    
    if (testState === 'completed' && results) {
      return (
        <div className="space-y-6">
          {/* Results Summary */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                {results.percentage >= 60 ? (
                  <div className="p-4 bg-green-500/10 rounded-full">
                    <Trophy className="h-12 w-12 text-green-500" />
                  </div>
                ) : (
                  <div className="p-4 bg-yellow-500/10 rounded-full">
                    <TrendingUp className="h-12 w-12 text-yellow-500" />
                  </div>
                )}
              </div>
              <CardTitle className="text-2xl">Test Completed!</CardTitle>
              <CardDescription>Here's how you performed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Display */}
              <div className="text-center p-6 bg-muted rounded-xl">
                <p className="text-5xl font-bold text-primary">{results.totalMarks.toFixed(2)}</p>
                <p className="text-muted-foreground">out of {mockTest.totalMarks}</p>
                <p className="text-lg font-semibold mt-2">{results.percentage.toFixed(1)}%</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-500/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">{results.correct}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
                <div className="text-center p-4 bg-red-500/10 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-red-600">{results.wrong}</p>
                  <p className="text-xs text-muted-foreground">Wrong</p>
                </div>
                <div className="text-center p-4 bg-gray-500/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-600">{results.unattempted}</p>
                  <p className="text-xs text-muted-foreground">Skipped</p>
                </div>
              </div>

              {/* Section-wise Performance */}
              <div>
                <h3 className="font-semibold mb-3">Section-wise Performance</h3>
                <div className="space-y-3">
                  {mockTest.sections.map(section => {
                    const stat = sectionStats[section.key];
                    const accuracy = stat.attempted > 0 ? (stat.correct / stat.attempted) * 100 : 0;
                    return (
                      <div key={section.key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{section.name}</span>
                          <span className="text-muted-foreground">
                            {stat.correct}/{stat.attempted} attempted ({stat.total} total)
                          </span>
                        </div>
                        <Progress value={accuracy} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button onClick={reviewTest} variant="outline" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Review Answers
                </Button>
                <Button onClick={retakeTest} className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Review mode - show questions with answers
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Review: Question {currentQuestionIndex + 1}/{mockTest.questions.length}</h2>
          <Button variant="outline" size="sm" onClick={() => setTestState('completed')}>
            Back to Results
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            {currentQuestion.passage && (
              <div className="mb-4 p-4 bg-muted rounded-lg text-sm">
                <p className="whitespace-pre-wrap">{currentQuestion.passage}</p>
              </div>
            )}
            
            <p className="font-medium mb-4">{currentQuestion.question}</p>
            
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => {
                const userAnswer = userAnswers.get(currentQuestion.id);
                const isCorrect = index === currentQuestion.correctAnswerIndex;
                const isSelected = userAnswer?.selectedOption === index;
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "p-3 rounded-lg border",
                      isCorrect && "bg-green-500/10 border-green-500",
                      isSelected && !isCorrect && "bg-red-500/10 border-red-500",
                      !isCorrect && !isSelected && "bg-muted/30"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                      {isSelected && !isCorrect && <XCircle className="h-4 w-4 text-red-500" />}
                      <span>{String.fromCharCode(65 + index)}. {option}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Explanation:</p>
              <p className="text-sm mt-1">{currentQuestion.explanation}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button onClick={nextQuestion} disabled={currentQuestionIndex === mockTest.questions.length - 1}>
            Next <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Test in progress
  return (
    <div className="space-y-4">
      {/* Timer and Controls */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className={cn("h-5 w-5", timeRemaining < 300 && "text-red-500 animate-pulse")} />
            <span className={cn(
              "font-mono text-lg font-bold",
              timeRemaining < 300 && "text-red-500"
            )}>
              {formatTime(timeRemaining)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {testState === 'paused' ? (
              <Button size="sm" variant="outline" onClick={resumeTest}>
                <Play className="h-4 w-4 mr-1" /> Resume
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={pauseTest}>
                <Pause className="h-4 w-4 mr-1" /> Pause
              </Button>
            )}
            <Button size="sm" variant="destructive" onClick={submitTest}>
              Submit Test
            </Button>
          </div>
        </div>
        <Progress value={((mockTest.duration * 60 - timeRemaining) / (mockTest.duration * 60)) * 100} className="h-1 mt-2" />
      </div>

      {testState === 'paused' && (
        <Alert>
          <Pause className="h-4 w-4" />
          <AlertDescription>Test is paused. Click Resume to continue.</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        {/* Question Area */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{currentQuestion.section.replace('-', ' ').toUpperCase()}</Badge>
              <Badge variant={
                currentQuestion.difficulty === 'easy' ? 'default' :
                currentQuestion.difficulty === 'medium' ? 'secondary' : 'destructive'
              }>
                {currentQuestion.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-base">
              Question {currentQuestionIndex + 1} of {mockTest.questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.passage && (
              <ScrollArea className="h-40 rounded-lg border p-4 bg-muted/30">
                <p className="text-sm whitespace-pre-wrap">{currentQuestion.passage}</p>
              </ScrollArea>
            )}
            
            <p className="font-medium">{currentQuestion.question}</p>
            
            <RadioGroup
              value={userAnswers.get(currentQuestion.id)?.selectedOption?.toString() ?? ''}
              onValueChange={(value) => selectAnswer(parseInt(value))}
              disabled={testState === 'paused'}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {String.fromCharCode(65 + index)}. {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex items-center justify-between pt-4 border-t">
              <Button 
                variant={userAnswers.get(currentQuestion.id)?.isMarked ? "secondary" : "outline"}
                size="sm"
                onClick={toggleMark}
              >
                <Flag className={cn("h-4 w-4 mr-1", userAnswers.get(currentQuestion.id)?.isMarked && "text-yellow-500")} />
                {userAnswers.get(currentQuestion.id)?.isMarked ? 'Marked' : 'Mark for Review'}
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button onClick={nextQuestion} disabled={currentQuestionIndex === mockTest.questions.length - 1}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Navigator */}
        <Card className="lg:sticky lg:top-20 h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Question Navigator</CardTitle>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500"></span> Answered</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-500"></span> Marked</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-muted"></span> Not visited</span>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="grid grid-cols-5 gap-2">
                {mockTest.questions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className={cn("h-8 w-8 p-0 text-xs", statusColors[status])}
                      onClick={() => goToQuestion(index)}
                    >
                      {index + 1}
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
