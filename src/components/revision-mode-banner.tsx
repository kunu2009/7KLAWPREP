"use client";

import { useRevisionMode } from '@/context/revision-mode-context';
import { Button } from '@/components/ui/button';
import { Flame, X, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function RevisionModeBanner() {
  const { isRevisionMode, toggleRevisionMode, timeRemaining } = useRevisionMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) return null;

  // Show countdown banner when not in revision mode (as an invitation)
  // Show if totalDays > 0 (countdown is running) and within 60 days of exam
  if (!isRevisionMode && timeRemaining.totalDays > 0 && timeRemaining.totalDays <= 60 && !timeRemaining.isExamOver) {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Flame className="h-5 w-5 animate-pulse" />
          <span className="text-sm font-medium">
            <span className="hidden sm:inline">🎯 CLAT 2025 in </span>
            <span className="font-bold font-mono">{timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</span>
            <span className="hidden md:inline"> - Activate Revision Mode!</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="h-7 text-xs"
            onClick={toggleRevisionMode}
          >
            Enter Revision Mode
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    );
  }

  // Show revision mode active banner
  if (isRevisionMode) {
    return (
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5" />
            <span className="font-bold text-sm">REVISION MODE ACTIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded font-mono text-xs">
            <Clock className="h-3 w-3" />
            {timeRemaining.days}d : {timeRemaining.hours}h : {timeRemaining.minutes}m
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="h-7 text-xs"
            asChild
          >
            <Link href="/">
              Revision Dashboard
            </Link>
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-7 w-7 p-0 text-white hover:bg-white/20"
            onClick={toggleRevisionMode}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
