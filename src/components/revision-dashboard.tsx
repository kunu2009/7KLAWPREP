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
  Target, BookOpen, Layers3, FileText, Brain, 
  CheckCircle2, Clock, Lightbulb, ArrowRight, RotateCcw,
  Flame, Zap, Coffee, AlertTriangle, Trophy, Heart, Grid3X3
} from 'lucide-react';
import { StudyToolsDrawer } from '@/components/study-tools-drawer';

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
  { href: '/mock-test', icon: FileText, label: '🔥 Mock', color: 'text-red-500', highlight: true },
  { href: '/current-affairs', icon: FileText, label: '📰 CA', color: 'text-amber-500', highlight: true },
  { href: '/mcqs', icon: Target, label: 'MCQs', color: 'text-blue-500' },
  { href: '/flashcards', icon: Layers3, label: 'Cards', color: 'text-green-500' },
  { href: '/notes', icon: BookOpen, label: 'Notes', color: 'text-purple-500' },
  { href: '/assistant', icon: Brain, label: 'AI Help', color: 'text-pink-500' },
  { href: null, icon: Grid3X3, label: '📚 All Tools', color: 'text-primary', isDrawer: true },
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
    <div className="space-y-4 pb-6 min-h-screen">
      {/* Header - Mobile Optimized */}
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight flex items-center gap-2">
            <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 shrink-0" />
            <span className="truncate">Revision Mode</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">CLAT countdown command center</p>
        </div>
        <Button variant="outline" size="sm" onClick={toggleRevisionMode} className="shrink-0 text-xs">
          Exit
        </Button>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer variant="full" />

      {/* Progress Overview - Mobile Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <Card className="p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
            <div className="p-1.5 sm:p-2 bg-green-500/10 rounded-full mb-1 sm:mb-0">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">{completedCount}/{totalTargets}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Tasks</p>
            </div>
          </div>
        </Card>
        <Card className="p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
            <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-full mb-1 sm:mb-0">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">{completedMinutes}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Mins</p>
            </div>
          </div>
        </Card>
        <Card className="p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
            <div className="p-1.5 sm:p-2 bg-purple-500/10 rounded-full mb-1 sm:mb-0">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">{progressPercent}%</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Done</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions - Mobile First Grid */}
      <Card>
        <CardHeader className="pb-2 px-3 pt-3 sm:px-6 sm:pt-6">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
            {quickActions.map((action, index) => (
              action.isDrawer ? (
                <StudyToolsDrawer key={`drawer-${index}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-auto py-2 sm:py-3 flex-col gap-1 border-dashed border-primary/50 hover:bg-primary/5 w-full"
                  >
                    <action.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${action.color}`} />
                    <span className="text-[10px] sm:text-xs truncate w-full text-center">{action.label}</span>
                  </Button>
                </StudyToolsDrawer>
              ) : (
                <Button
                  key={action.href}
                  variant={action.highlight ? "default" : "outline"}
                  size="sm"
                  asChild
                  className={`h-auto py-2 sm:py-3 flex-col gap-1 w-full ${action.highlight ? 'bg-red-500 hover:bg-red-600 text-white' : ''}`}
                >
                  <Link href={action.href!}>
                    <action.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${action.highlight ? 'text-white' : action.color}`} />
                    <span className="text-[10px] sm:text-xs truncate w-full text-center">{action.label}</span>
                  </Link>
                </Button>
              )
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content - Stack on Mobile */}
      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        {/* Daily Targets */}
        <Card className="order-1">
          <CardHeader className="pb-2 px-3 pt-3 sm:px-6 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Today's Targets
                </CardTitle>
                <CardDescription className="text-xs">{currentPlan.phaseName}</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={resetDailyProgress} className="h-8 px-2">
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <Progress value={progressPercent} className="h-1.5 sm:h-2 mt-2" />
          </CardHeader>
          <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
            <ScrollArea className="h-[250px] sm:h-[350px]">
              <div className="space-y-2">
                {currentPlan.dailyTargets.map((target) => {
                  const Icon = typeIcons[target.type];
                  const isCompleted = completedTargets.includes(target.id);
                  return (
                    <div 
                      key={target.id}
                      className={`flex items-start gap-2 p-2 sm:p-3 rounded-lg border transition-all ${
                        isCompleted ? 'bg-green-500/5 border-green-500/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      <Checkbox
                        checked={isCompleted}
                        onCheckedChange={() => markTargetComplete(target.id)}
                        className="mt-0.5"
                      />
                      <div className={`p-1.5 rounded-lg ${typeColors[target.type]} shrink-0`}>
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                          {target.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{target.description}</p>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                            <Clock className="h-2.5 w-2.5 mr-0.5" />
                            {target.duration}m
                          </Badge>
                          {target.topic && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 truncate max-w-[80px]">
                              {target.topic}
                            </Badge>
                          )}
                        </div>
                      </div>
                      {isCompleted && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Sidebar Cards - Horizontal scroll on mobile */}
        <div className="order-2 space-y-3 lg:space-y-4">
          {/* Focus Areas */}
          <Card>
            <CardHeader className="pb-2 px-3 pt-3 sm:px-6 sm:pt-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                Focus Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
              <div className="flex flex-wrap gap-1.5">
                {currentPlan.focusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="text-[10px] sm:text-xs">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Tips */}
          <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20">
            <CardHeader className="pb-2 px-3 pt-3 sm:px-6 sm:pt-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-2">
                <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
              <ul className="space-y-1.5">
                {currentPlan.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span className="line-clamp-2">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Motivation Card */}
          {timeRemaining.days <= 7 && (
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-3 sm:p-4 text-center">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-primary mb-1" />
                <p className="text-sm font-medium">You've Got This! 💪</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {timeRemaining.days <= 1 
                    ? "Stay calm, trust your prep!" 
                    : timeRemaining.days <= 3 
                      ? "Final push! Keep going!"
                      : "Stay consistent!"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Bottom Navigation - Fixed on Mobile */}
      <Card className="sticky bottom-2 sm:relative sm:bottom-auto">
        <CardContent className="p-2 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span>Quality over quantity!</span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none text-xs">
                <Link href="/progress">
                  Progress <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>
              <Button size="sm" asChild className="flex-1 sm:flex-none text-xs">
                <Link href="/mcqs">
                  Practice <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
