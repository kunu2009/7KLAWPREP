"use client";

import { useRevisionMode } from '@/context/revision-mode-context';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Flame, Clock, Calendar, AlertTriangle, Trophy } from 'lucide-react';
import { format } from 'date-fns';

interface CountdownTimerProps {
  variant?: 'full' | 'compact' | 'minimal';
  className?: string;
}

export function CountdownTimer({ variant = 'full', className }: CountdownTimerProps) {
  const { timeRemaining, examDate, currentPlan } = useRevisionMode();

  const { days, hours, minutes, seconds, isExamDay, isExamOver } = timeRemaining;

  if (isExamOver) {
    return (
      <Card className={cn("bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30", className)}>
        <CardContent className="p-4 text-center">
          <Trophy className="h-8 w-8 mx-auto text-green-500 mb-2" />
          <p className="font-bold text-green-600">CLAT 2025 Complete!</p>
          <p className="text-sm text-muted-foreground">Hope you did great! 🎉</p>
        </CardContent>
      </Card>
    );
  }

  if (isExamDay) {
    return (
      <Card className={cn("bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/50 animate-pulse", className)}>
        <CardContent className="p-4 text-center">
          <AlertTriangle className="h-8 w-8 mx-auto text-orange-500 mb-2" />
          <p className="font-bold text-orange-600 text-lg">EXAM DAY! 🎯</p>
          <p className="text-sm text-muted-foreground">Give it your best shot!</p>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={cn("flex items-center gap-2 text-sm", className)}>
        <Clock className="h-4 w-4 text-primary" />
        <span className="font-mono font-bold">{days}d {hours}h {minutes}m</span>
        <span className="text-muted-foreground">to CLAT</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className={cn("bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20", className)}>
        <CardContent className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className={cn("h-5 w-5", days <= 3 ? "text-red-500 animate-pulse" : "text-primary")} />
            <span className="font-semibold">CLAT Countdown</span>
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span className="bg-background px-2 py-1 rounded font-bold">{days}d</span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-background px-2 py-1 rounded font-bold">{hours}h</span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-background px-2 py-1 rounded font-bold">{minutes}m</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Full variant
  const urgencyColor = days <= 1 ? 'from-red-500/20 to-orange-500/20 border-red-500/50' 
    : days <= 3 ? 'from-orange-500/15 to-yellow-500/15 border-orange-500/40'
    : days <= 7 ? 'from-yellow-500/10 to-amber-500/10 border-yellow-500/30'
    : 'from-primary/10 to-blue-500/10 border-primary/30';

  return (
    <Card className={cn("overflow-hidden", urgencyColor, className)}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <Flame className={cn("h-6 w-6", days <= 3 ? "text-red-500 animate-pulse" : "text-primary")} />
            <h2 className="text-lg font-bold">CLAT 2025 Countdown</h2>
            <Badge variant={days <= 3 ? "destructive" : "secondary"} className="ml-2">
              {currentPlan.phaseName}
            </Badge>
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="flex flex-col items-center">
              <div className={cn(
                "text-3xl sm:text-4xl font-bold font-mono px-3 py-2 rounded-lg",
                days <= 3 ? "bg-red-500/20 text-red-600" : "bg-background"
              )}>
                {String(days).padStart(2, '0')}
              </div>
              <span className="text-xs text-muted-foreground mt-1">DAYS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold font-mono bg-background px-3 py-2 rounded-lg">
                {String(hours).padStart(2, '0')}
              </div>
              <span className="text-xs text-muted-foreground mt-1">HOURS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold font-mono bg-background px-3 py-2 rounded-lg">
                {String(minutes).padStart(2, '0')}
              </div>
              <span className="text-xs text-muted-foreground mt-1">MINS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold font-mono bg-background px-3 py-2 rounded-lg animate-pulse">
                {String(seconds).padStart(2, '0')}
              </div>
              <span className="text-xs text-muted-foreground mt-1">SECS</span>
            </div>
          </div>

          {/* Exam Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Exam Date: {format(examDate, 'EEEE, MMMM d, yyyy')} at 2:00 PM</span>
          </div>

          {/* Urgency Message */}
          {days <= 7 && (
            <p className={cn(
              "mt-3 text-sm font-medium",
              days <= 1 ? "text-red-600" : days <= 3 ? "text-orange-600" : "text-yellow-600"
            )}>
              {days <= 1 ? "🚨 Final day! Focus on revision only!" 
                : days <= 3 ? "⚡ Final sprint! No new topics, only revise!" 
                : "📚 Intense revision phase - stay focused!"}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
