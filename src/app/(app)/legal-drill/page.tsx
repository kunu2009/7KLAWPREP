"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { legalDrills } from '@/lib/clat-data';
import { 
  Scale, CheckCircle2, XCircle, ArrowRight, RotateCcw, 
  Trophy, BookOpen, Lightbulb, PenLine
} from 'lucide-react';

type DrillState = 'select' | 'practice' | 'results';

export default function LegalDrillPage() {
  const [state, setState] = useState<DrillState>('select');
  const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userReasoning, setUserReasoning] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredDrills, setAnsweredDrills] = useState<{index: number, correct: boolean}[]>([]);

  const currentDrill = legalDrills[currentDrillIndex];

  const startDrill = (index: number) => {
    setCurrentDrillIndex(index);
    setSelectedAnswer(null);
    setUserReasoning('');
    setShowAnswer(false);
    setState('practice');
  };

  const checkAnswer = () => {
    setShowAnswer(true);
    const isCorrect = selectedAnswer === currentDrill.correctAnswer;
    setAnsweredDrills(prev => [...prev, { index: currentDrillIndex, correct: isCorrect }]);
  };

  const nextDrill = () => {
    if (currentDrillIndex < legalDrills.length - 1) {
      setCurrentDrillIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setUserReasoning('');
      setShowAnswer(false);
    } else {
      setState('results');
    }
  };

  const resetDrills = () => {
    setState('select');
    setCurrentDrillIndex(0);
    setSelectedAnswer(null);
    setUserReasoning('');
    setShowAnswer(false);
    setAnsweredDrills([]);
  };

  const correctCount = answeredDrills.filter(d => d.correct).length;
  const accuracy = answeredDrills.length > 0 
    ? Math.round((correctCount / answeredDrills.length) * 100) 
    : 0;

  // Select Screen
  if (state === 'select') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Scale className="h-6 w-6 text-purple-500" />
            Legal Reasoning Drill
          </h1>
          <p className="text-muted-foreground">
            Practice IRAC method with principle-fact based questions
          </p>
        </div>

        <Card className="bg-purple-500/5 border-purple-500/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-purple-600 mb-2">What is IRAC?</h3>
            <p className="text-sm text-muted-foreground">
              <strong>I</strong>ssue → <strong>R</strong>ule → <strong>A</strong>pplication → <strong>C</strong>onclusion. 
              This is the standard method for legal reasoning used in CLAT and law school.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {legalDrills.map((drill, index) => (
            <Card key={drill.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => startDrill(index)}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{drill.topic}</Badge>
                  <span className="text-sm text-muted-foreground">#{index + 1}</span>
                </div>
                <CardTitle className="text-base mt-2 line-clamp-2">
                  {drill.principle.substring(0, 80)}...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {drill.factSituation.substring(0, 100)}...
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Start Drill <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Button onClick={() => startDrill(0)} size="lg" className="w-full">
          Start All Drills Sequentially
        </Button>
      </div>
    );
  }

  // Practice Screen
  if (state === 'practice') {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Legal Drill {currentDrillIndex + 1} of {legalDrills.length}</h1>
            <Progress value={((currentDrillIndex + 1) / legalDrills.length) * 100} className="mt-2 w-48" />
          </div>
          <Badge variant="outline" className="text-lg px-4 py-1">{currentDrill.topic}</Badge>
        </div>

        {/* Principle Card */}
        <Card className="bg-blue-500/5 border-blue-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-500" />
              Legal Principle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{currentDrill.principle}</p>
          </CardContent>
        </Card>

        {/* Fact Situation Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Fact Situation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{currentDrill.factSituation}</p>
          </CardContent>
        </Card>

        {/* Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Select the correct answer:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentDrill.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentDrill.correctAnswer;
              const showResult = showAnswer;

              let optionClass = "p-4 rounded-lg border cursor-pointer transition-all ";
              if (showResult) {
                if (isCorrect) {
                  optionClass += "bg-green-500/10 border-green-500";
                } else if (isSelected && !isCorrect) {
                  optionClass += "bg-red-500/10 border-red-500";
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
                  onClick={() => !showAnswer && setSelectedAnswer(index)}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-sm">{option}</span>
                    {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* User Reasoning (Optional) */}
        {!showAnswer && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <PenLine className="h-4 w-4" />
                Your Reasoning (Optional)
              </CardTitle>
              <CardDescription>
                Write a brief explanation for your answer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Explain your reasoning in 1-2 lines..."
                value={userReasoning}
                onChange={(e) => setUserReasoning(e.target.value)}
                rows={3}
              />
            </CardContent>
          </Card>
        )}

        {/* Answer Explanation */}
        {showAnswer && (
          <Card className="bg-green-500/5 border-green-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-green-600">Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{currentDrill.reasoning}</p>
              
              <Tabs defaultValue="irac" className="mt-4">
                <TabsList>
                  <TabsTrigger value="irac">IRAC Breakdown</TabsTrigger>
                </TabsList>
                <TabsContent value="irac" className="space-y-3 mt-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-semibold text-blue-600 mb-1">ISSUE</p>
                    <p className="text-sm">{currentDrill.iracBreakdown.issue}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-semibold text-purple-600 mb-1">RULE</p>
                    <p className="text-sm">{currentDrill.iracBreakdown.rule}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-semibold text-orange-600 mb-1">APPLICATION</p>
                    <p className="text-sm">{currentDrill.iracBreakdown.application}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-semibold text-green-600 mb-1">CONCLUSION</p>
                    <p className="text-sm">{currentDrill.iracBreakdown.conclusion}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!showAnswer ? (
            <Button 
              onClick={checkAnswer} 
              disabled={selectedAnswer === null}
              className="flex-1"
              size="lg"
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={nextDrill} className="flex-1" size="lg">
              {currentDrillIndex < legalDrills.length - 1 ? (
                <>Next Drill <ArrowRight className="h-4 w-4 ml-2" /></>
              ) : (
                <>See Results <Trophy className="h-4 w-4 ml-2" /></>
              )}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Results Screen
  if (state === 'results') {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="text-center">
          <Trophy className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
          <h1 className="text-2xl font-bold">Drills Complete!</h1>
          <p className="text-muted-foreground">Here's your performance summary</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary">{accuracy}%</div>
            <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-green-500">{correctCount}/{answeredDrills.length}</div>
            <div className="text-sm text-muted-foreground mt-1">Correct Answers</div>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Drill Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {answeredDrills.map((drill, i) => {
              const drillData = legalDrills[drill.index];
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  {drill.correct ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{drillData.topic}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {drillData.principle.substring(0, 60)}...
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Button onClick={resetDrills} className="w-full" size="lg">
          <RotateCcw className="h-4 w-4 mr-2" /> Practice Again
        </Button>
      </div>
    );
  }

  return null;
}
