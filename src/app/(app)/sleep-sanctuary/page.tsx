"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  CloudRain, Waves, Trees, Wind, Bird, Moon,
  Play, Pause, Volume2, Sparkles, Clock, Heart
} from "lucide-react";

const sounds = [
  { id: "rain", name: "Gentle Rain", icon: CloudRain, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "ocean", name: "Ocean Waves", icon: Waves, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { id: "forest", name: "Forest", icon: Trees, color: "text-green-500", bg: "bg-green-500/10" },
  { id: "wind", name: "Soft Wind", icon: Wind, color: "text-slate-500", bg: "bg-slate-500/10" },
  { id: "birds", name: "Morning Birds", icon: Bird, color: "text-amber-500", bg: "bg-amber-500/10" },
  { id: "night", name: "Night Ambience", icon: Moon, color: "text-indigo-500", bg: "bg-indigo-500/10" },
];

const sleepTips = [
  "Put your phone away 30 minutes before bed",
  "Keep your room cool and dark",
  "Try the 4-7-8 breathing technique",
  "Write down tomorrow's worries so you can forget them tonight",
  "Avoid caffeine after 2 PM",
  "Create a consistent sleep schedule",
  "Use a lavender pillow spray",
  "Do some gentle stretching before bed",
];

const bedtimeAffirmations = [
  "Today was enough. I was enough.",
  "I release all the worries of today.",
  "Tomorrow is a fresh start.",
  "I am safe and at peace.",
  "I did my best today, and that's all that matters.",
  "My mind is calm, my body is relaxed.",
  "I deserve this rest.",
  "Good things are coming my way.",
];

export default function SleepSanctuaryPage() {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [volume, setVolume] = useState(50);
  const [sleepTimer, setSleepTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [breathCount, setBreathCount] = useState(4);
  const [isBreathing, setIsBreathing] = useState(false);

  // Sleep timer countdown
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t && t <= 1) {
          setActiveSound(null);
          return null;
        }
        return t ? t - 1 : null;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Breathing exercise
  useEffect(() => {
    if (!isBreathing) return;
    const phases = [
      { phase: "inhale" as const, duration: 4000 },
      { phase: "hold" as const, duration: 7000 },
      { phase: "exhale" as const, duration: 8000 },
    ];
    let currentPhaseIndex = 0;

    const runPhase = () => {
      setBreathPhase(phases[currentPhaseIndex].phase);
      setBreathCount(phases[currentPhaseIndex].duration / 1000);
      
      const countInterval = setInterval(() => {
        setBreathCount((c) => Math.max(0, c - 1));
      }, 1000);

      setTimeout(() => {
        clearInterval(countInterval);
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
        if (isBreathing) runPhase();
      }, phases[currentPhaseIndex].duration);
    };

    runPhase();
    return () => setIsBreathing(false);
  }, [isBreathing]);

  const toggleSound = (soundId: string) => {
    if (activeSound === soundId) {
      setActiveSound(null);
    } else {
      setActiveSound(soundId);
    }
  };

  const startSleepTimer = (minutes: number) => {
    setSleepTimer(minutes);
    setTimeLeft(minutes * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const nextAffirmation = () => {
    setCurrentAffirmation((c) => (c + 1) % bedtimeAffirmations.length);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="text-center py-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20">
          <Moon className="h-5 w-5 text-indigo-400" />
          <span className="font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Sleep Sanctuary
          </span>
          <Sparkles className="h-4 w-4 text-purple-400" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Wind down and prepare for restful sleep 🌙
        </p>
      </div>

      {/* Ambient Sounds */}
      <Card className="border-indigo-500/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-indigo-500" />
            Sleep Sounds
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            {sounds.map((sound) => (
              <button
                key={sound.id}
                onClick={() => toggleSound(sound.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                  activeSound === sound.id 
                    ? `${sound.bg} ring-2 ring-offset-2 ring-offset-background ring-current ${sound.color}` 
                    : "hover:bg-muted/50"
                }`}
              >
                <div className={`p-2 rounded-full ${sound.bg}`}>
                  <sound.icon className={`h-5 w-5 ${sound.color}`} />
                </div>
                <span className="text-xs">{sound.name}</span>
                {activeSound === sound.id && (
                  <Badge className="text-[10px] px-1.5 py-0">Playing</Badge>
                )}
              </button>
            ))}
          </div>

          {activeSound && (
            <div className="space-y-4 p-4 rounded-lg bg-muted/30">
              <div className="flex items-center gap-4">
                <Volume2 className="h-4 w-4 text-muted-foreground shrink-0" />
                <Slider
                  value={[volume]}
                  onValueChange={(v) => setVolume(v[0])}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground w-8">{volume}%</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Sleep Timer</span>
                <div className="flex gap-2">
                  {[15, 30, 45, 60].map((mins) => (
                    <Button
                      key={mins}
                      size="sm"
                      variant={sleepTimer === mins ? "default" : "outline"}
                      onClick={() => startSleepTimer(mins)}
                    >
                      {mins}m
                    </Button>
                  ))}
                </div>
              </div>

              {timeLeft && (
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-indigo-500/10">
                  <Clock className="h-4 w-4 text-indigo-500" />
                  <span className="font-mono">{formatTime(timeLeft)}</span>
                  <span className="text-xs text-muted-foreground">until sounds stop</span>
                </div>
              )}

              <p className="text-xs text-center text-muted-foreground">
                💡 Tip: Use headphones or play at low volume for best sleep
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 4-7-8 Breathing */}
      <Card className="border-purple-500/20 overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Wind className="h-5 w-5 text-purple-500" />
            4-7-8 Sleep Breathing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-1000 ${
              !isBreathing ? "bg-purple-500/10" :
              breathPhase === "inhale" ? "bg-blue-500/20 scale-110" :
              breathPhase === "hold" ? "bg-purple-500/20 scale-110" :
              "bg-indigo-500/20 scale-90"
            }`}>
              <div className="text-center">
                <p className="text-3xl font-bold">{isBreathing ? breathCount : "4-7-8"}</p>
                <p className="text-sm text-muted-foreground capitalize">
                  {isBreathing ? breathPhase : "Tap to start"}
                </p>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsBreathing(!isBreathing)}
              variant={isBreathing ? "destructive" : "default"}
              className="gap-2"
            >
              {isBreathing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isBreathing ? "Stop" : "Start Breathing"}
            </Button>

            <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <p className="font-medium text-blue-500">Inhale</p>
                <p>4 seconds</p>
              </div>
              <div className="p-2 rounded-lg bg-purple-500/10">
                <p className="font-medium text-purple-500">Hold</p>
                <p>7 seconds</p>
              </div>
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <p className="font-medium text-indigo-500">Exhale</p>
                <p>8 seconds</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bedtime Affirmation */}
      <Card className="border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5">
        <CardContent className="p-6 text-center">
          <Heart className="h-8 w-8 text-pink-400 mx-auto mb-4" />
          <p className="text-lg font-medium mb-4 leading-relaxed">
            &ldquo;{bedtimeAffirmations[currentAffirmation]}&rdquo;
          </p>
          <Button variant="outline" size="sm" onClick={nextAffirmation}>
            Another affirmation ✨
          </Button>
        </CardContent>
      </Card>

      {/* Sleep Tips */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Sleep Better Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sleepTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30">
                <span className="text-amber-500 mt-0.5">🌟</span>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Goodnight Message */}
      <Card className="bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950 text-white border-0">
        <CardContent className="p-6 text-center">
          <Moon className="h-10 w-10 mx-auto mb-3 text-yellow-200" />
          <p className="text-lg font-medium mb-1">Goodnight, superstar 🌟</p>
          <p className="text-sm text-white/70">
            You worked hard today. Now rest well. Tomorrow is another chance to shine.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
