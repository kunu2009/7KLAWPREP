"use client";

import { useRevisionMode } from '@/context/revision-mode-context';
import { CountdownTimer } from '@/components/countdown-timer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { 
  Target, BookOpen, Layers3, FileText, PlaySquare, Brain, 
  CheckCircle2, Clock, Lightbulb, ArrowRight, RotateCcw,
  Flame, Zap, Coffee, AlertTriangle, Trophy, Heart
} from 'lucide-react';

const typeIcons = {
  mcq: Target,
  revision: BookOpen,
  flashcard: Layers3,
  mock: FileText,
  break: Coffee,
};

const typeColors = {
  mcq: 'text-blue-500 bg-blue-500/10',
  revision: 'text-purple-500 bg-purple-500/10',
  flashcard: 'text-green-500 bg-green-500/10',
  mock: 'text-orange-500 bg-orange-500/10',
  break: 'text-pink-500 bg-pink-500/10',
};

const quickActions = [
  { href: '/mock-test', icon: FileText, label: '🔥 Mock Test', color: 'text-red-500', highlight: true },
  { href: '/current-affairs', icon: FileText, label: '📰 Current Affairs', color: 'text-amber-500', highlight: true },
  { href: '/mcqs', icon: Target, label: 'Quick MCQs', color: 'text-blue-500' },
  { href: '/flashcards', icon: Layers3, label: 'Flashcards', color: 'text-green-500' },
  { href: '/notes', icon: BookOpen, label: 'Notes', color: 'text-purple-500' },
  { href: '/assistant', icon: Brain, label: 'AI Doubt Solver', color: 'text-pink-500' },
];

export default function RevisionDashboard() {
  const { 
    timeRemaining, 
    currentPlan, 
    completedTargets, 
    markTargetComplete,
    resetDailyProgress,
    toggleRevisionMode 
  } = useRevisionMode();

  const completedCount = currentPlan.dailyTargets.filter(t => completedTargets.includes(t.id)).length;
  const totalTargets = currentPlan.dailyTargets.length;
  const progressPercent = totalTargets > 0 ? Math.round((completedCount / totalTargets) * 100) : 0;
  const totalMinutes = currentPlan.dailyTargets.reduce((sum, t) => sum + t.duration, 0);
  const completedMinutes = currentPlan.dailyTargets
    .filter(t => completedTargets.includes(t.id))
    .reduce((sum, t) => sum + t.duration, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500" />
            Revision Mode
          </h1>
          <p className="text-muted-foreground">Your CLAT countdown command center</p>
        </div>
        <Button variant="outline" onClick={toggleRevisionMode}>
          Exit Revision Mode
        </Button>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer variant="full" />

      {/* Progress Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-full">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedCount}/{totalTargets}</p>
              <p className="text-xs text-muted-foreground">Tasks Completed</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedMinutes}/{totalMinutes}</p>
              <p className="text-xs text-muted-foreground">Minutes Studied</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-full">
              <Trophy className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{progressPercent}%</p>
              <p className="text-xs text-muted-foreground">Daily Progress</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
        {/* Daily Targets */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Today's Targets
                </CardTitle>
                <CardDescription>{currentPlan.phaseName} - Day Plan</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={resetDailyProgress}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
            <Progress value={progressPercent} className="h-2 mt-2" />
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-3">
                {currentPlan.dailyTargets.map((target) => {
                  const Icon = typeIcons[target.type];
                  const isCompleted = completedTargets.includes(target.id);
                  return (
                    <div 
                      key={target.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                        isCompleted ? 'bg-green-500/5 border-green-500/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      <Checkbox
                        checked={isCompleted}
                        onCheckedChange={() => markTargetComplete(target.id)}
                        className="mt-1"
                      />
                      <div className={`p-2 rounded-lg ${typeColors[target.type]}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                          {target.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{target.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {target.duration} min
                          </Badge>
                          {target.topic && (
                            <Badge variant="secondary" className="text-xs">
                              {target.topic}
                            </Badge>
                          )}
                        </div>
                      </div>
                      {isCompleted && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.href}
                    variant={action.highlight ? "default" : "outline"}
                    size="sm"
                    asChild
                    className={`h-auto py-3 flex-col gap-1 ${action.highlight ? 'bg-red-500 hover:bg-red-600 text-white col-span-2' : ''}`}
                  >
                    <Link href={action.href}>
                      <action.icon className={`h-4 w-4 ${action.highlight ? 'text-white' : action.color}`} />
                      <span className="text-xs">{action.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Focus Areas */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-red-500" />
                Focus Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentPlan.focusAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Tips */}
          <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentPlan.tips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Motivation Card */}
          {timeRemaining.days <= 7 && (
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-4 text-center">
                <Heart className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-medium">You've Got This! 💪</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {timeRemaining.days <= 1 
                    ? "Stay calm, trust your preparation!" 
                    : timeRemaining.days <= 3 
                      ? "Final push! Your hard work will pay off!"
                      : "Stay consistent, stay confident!"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span>Remember: Quality over quantity. Focus beats panic!</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/progress">
                  View Progress <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/mcqs">
                  Start Practicing <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
