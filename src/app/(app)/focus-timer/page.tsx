"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Timer, Play, Pause, RotateCcw, Coffee, Brain, 
  Zap, Trophy, Bell, BellOff, Target, TrendingUp
} from "lucide-react";

// Pomodoro presets
const presets = [
  { name: "Classic", work: 25, break: 5, longBreak: 15, cycles: 4 },
  { name: "Short Sprint", work: 15, break: 3, longBreak: 10, cycles: 4 },
  { name: "Deep Focus", work: 50, break: 10, longBreak: 20, cycles: 4 },
  { name: "CLAT Exam Sim", work: 120, break: 0, longBreak: 0, cycles: 1 },
];

export default function FocusTimerPage() {
  const [preset, setPreset] = useState(presets[0]);
  const [customWork, setCustomWork] = useState(25);
  const [customBreak, setCustomBreak] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [todayMinutes, setTodayMinutes] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load today's stats
  useEffect(() => {
    const saved = localStorage.getItem("focusTimerStats");
    if (saved) {
      const stats = JSON.parse(saved);
      const today = new Date().toDateString();
      if (stats.date === today) {
        setTodayMinutes(stats.minutes || 0);
        setCompletedPomodoros(stats.pomodoros || 0);
      }
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    
    // Play sound
    if (soundEnabled) {
      try {
        // Use browser notification sound or beep
        const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQMPVJ3L9N+aSgMLTJLL9+KmVQkHTYnI8+muXQcHQX/F7+u0Zg0HOXK98Oq8bg4DL2S17eu/dBQEHVO25OvEfBgDDE637uXJhRwCBjS38eXNix8ABiy19ujQkSIA");
        audio.play().catch(() => {});
      } catch (e) {}
    }

    if (!isBreak) {
      // Work session completed
      const newPomodoros = completedPomodoros + 1;
      const newMinutes = todayMinutes + (totalTime / 60);
      setCompletedPomodoros(newPomodoros);
      setTodayMinutes(newMinutes);
      
      // Save stats
      localStorage.setItem("focusTimerStats", JSON.stringify({
        date: new Date().toDateString(),
        minutes: newMinutes,
        pomodoros: newPomodoros,
      }));

      // Start break
      if (preset.break > 0) {
        const isLongBreak = currentCycle % preset.cycles === 0;
        const breakTime = isLongBreak ? preset.longBreak : preset.break;
        setIsBreak(true);
        setTimeLeft(breakTime * 60);
        setTotalTime(breakTime * 60);
        if (isLongBreak) setCurrentCycle(1);
        else setCurrentCycle((c) => c + 1);
      }
    } else {
      // Break completed, start work
      setIsBreak(false);
      setTimeLeft(preset.work * 60);
      setTotalTime(preset.work * 60);
    }
  };

  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(preset.work * 60);
      setTotalTime(preset.work * 60);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(preset.work * 60);
    setTotalTime(preset.work * 60);
    setCurrentCycle(1);
  };

  const selectPreset = (p: typeof presets[0]) => {
    setPreset(p);
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(p.work * 60);
    setTotalTime(p.work * 60);
    setCurrentCycle(1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Timer className="h-6 w-6 text-red-500" />
            Focus Timer
          </h1>
          <p className="text-muted-foreground">Pomodoro technique for productive study</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSoundEnabled(!soundEnabled)}
        >
          {soundEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
        </Button>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-red-500 mb-1">
            <Target className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold">{completedPomodoros}</p>
          <p className="text-xs text-muted-foreground">Pomodoros</p>
        </Card>
        <Card className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
            <Brain className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold">{Math.round(todayMinutes)}</p>
          <p className="text-xs text-muted-foreground">Minutes</p>
        </Card>
        <Card className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
            <TrendingUp className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold">{currentCycle}/{preset.cycles}</p>
          <p className="text-xs text-muted-foreground">Cycle</p>
        </Card>
      </div>

      {/* Timer Display */}
      <Card className={`overflow-hidden ${isBreak ? "border-green-500/50" : "border-red-500/50"}`}>
        <div className={`h-2 ${isBreak ? "bg-green-500" : "bg-red-500"}`}>
          <div 
            className="h-full bg-background transition-all duration-1000"
            style={{ width: `${100 - progress}%`, marginLeft: "auto" }}
          />
        </div>
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            {/* Status */}
            <Badge 
              variant="outline" 
              className={`mb-4 ${isBreak ? "text-green-500 border-green-500" : "text-red-500 border-red-500"}`}
            >
              {isBreak ? (
                <><Coffee className="h-3 w-3 mr-1" /> Break Time</>
              ) : (
                <><Brain className="h-3 w-3 mr-1" /> Focus Time</>
              )}
            </Badge>

            {/* Time Display */}
            <div className="text-6xl sm:text-8xl font-mono font-bold tracking-tight">
              {formatTime(timeLeft)}
            </div>

            {/* Progress */}
            <Progress value={progress} className="h-2 w-full max-w-xs mt-6" />

            {/* Controls */}
            <div className="flex gap-3 mt-8">
              <Button
                size="lg"
                onClick={isRunning ? pauseTimer : startTimer}
                className={isRunning ? "bg-amber-500 hover:bg-amber-600" : isBreak ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {isRunning ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                {isRunning ? "Pause" : "Start"}
              </Button>
              <Button variant="outline" size="lg" onClick={resetTimer}>
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Presets */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Timer Presets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((p) => (
              <Button
                key={p.name}
                variant={preset.name === p.name ? "default" : "outline"}
                className="h-auto py-3 flex-col gap-1"
                onClick={() => selectPreset(p)}
              >
                <span className="text-sm font-medium">{p.name}</span>
                <span className="text-xs text-muted-foreground">
                  {p.work}m work / {p.break}m break
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-500" />
            Pomodoro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Put your phone in another room during focus sessions</li>
            <li>• Stand up and stretch during breaks</li>
            <li>• Complete 4 pomodoros before a long break</li>
            <li>• If distracted, write it down and refocus</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
