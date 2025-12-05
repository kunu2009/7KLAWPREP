"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, Wind, Moon, Sun, Sparkles, Play, Pause, RotateCcw,
  Volume2, VolumeX, Timer, Brain, Flower2, TreePine, Waves,
  Coffee, Music, Eye, Smile, CloudRain, Bird
} from "lucide-react";

// Breathing exercises
const breathingExercises = [
  {
    id: "4-7-8",
    name: "4-7-8 Relaxing Breath",
    description: "Calms anxiety and helps you sleep",
    steps: [
      { phase: "Inhale", duration: 4, color: "bg-blue-500" },
      { phase: "Hold", duration: 7, color: "bg-purple-500" },
      { phase: "Exhale", duration: 8, color: "bg-green-500" },
    ],
    benefits: ["Reduces anxiety", "Promotes sleep", "Calms nervous system"],
  },
  {
    id: "box",
    name: "Box Breathing",
    description: "Used by Navy SEALs for focus",
    steps: [
      { phase: "Inhale", duration: 4, color: "bg-blue-500" },
      { phase: "Hold", duration: 4, color: "bg-purple-500" },
      { phase: "Exhale", duration: 4, color: "bg-green-500" },
      { phase: "Hold", duration: 4, color: "bg-orange-500" },
    ],
    benefits: ["Improves focus", "Reduces stress", "Enhances performance"],
  },
  {
    id: "calm",
    name: "Calming Breath",
    description: "Quick stress relief in 1 minute",
    steps: [
      { phase: "Inhale", duration: 3, color: "bg-blue-500" },
      { phase: "Exhale", duration: 6, color: "bg-green-500" },
    ],
    benefits: ["Quick relief", "Activates calm response", "Easy to do anywhere"],
  },
];

// Ambient sounds
const ambientSounds = [
  { id: "rain", name: "Rain", icon: CloudRain, color: "text-blue-500" },
  { id: "forest", name: "Forest", icon: TreePine, color: "text-green-500" },
  { id: "ocean", name: "Ocean Waves", icon: Waves, color: "text-cyan-500" },
  { id: "birds", name: "Birds", icon: Bird, color: "text-amber-500" },
  { id: "cafe", name: "Café", icon: Coffee, color: "text-orange-500" },
  { id: "music", name: "Lo-Fi", icon: Music, color: "text-purple-500" },
];

// Motivational quotes for exam stress
const motivationalQuotes = [
  { quote: "You didn't come this far to only come this far.", author: "Unknown" },
  { quote: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  { quote: "Every accomplishment starts with the decision to try.", author: "John F. Kennedy" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
];

// Quick stress busters
const stressBusters = [
  { icon: Eye, title: "20-20-20 Rule", desc: "Look 20ft away for 20 sec every 20 min", time: "20s" },
  { icon: Smile, title: "Smile Break", desc: "Force a smile for 60 seconds - it tricks your brain!", time: "1m" },
  { icon: TreePine, title: "Nature Gaze", desc: "Look at greenery or nature photos", time: "2m" },
  { icon: Coffee, title: "Hydration Check", desc: "Drink water mindfully, feel each sip", time: "1m" },
  { icon: Wind, title: "Sigh of Relief", desc: "Take 3 deep sighs, releasing tension", time: "30s" },
  { icon: Flower2, title: "Gratitude Moment", desc: "Think of 3 things you're grateful for", time: "2m" },
];

export default function StressReliefPage() {
  const [activeExercise, setActiveExercise] = useState(breathingExercises[0]);
  const [isBreathing, setIsBreathing] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [quote, setQuote] = useState(motivationalQuotes[0]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
  }, []);

  useEffect(() => {
    if (isBreathing) {
      const step = activeExercise.steps[currentPhase];
      setCountdown(step.duration);

      intervalRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            const nextPhase = (currentPhase + 1) % activeExercise.steps.length;
            if (nextPhase === 0) setCycles((c) => c + 1);
            setCurrentPhase(nextPhase);
            return activeExercise.steps[nextPhase].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isBreathing, currentPhase, activeExercise]);

  const startBreathing = () => {
    setIsBreathing(true);
    setCurrentPhase(0);
    setCycles(0);
    setCountdown(activeExercise.steps[0].duration);
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetBreathing = () => {
    stopBreathing();
    setCurrentPhase(0);
    setCycles(0);
    setCountdown(0);
  };

  const currentStep = activeExercise.steps[currentPhase];
  const totalDuration = activeExercise.steps.reduce((sum, s) => sum + s.duration, 0);
  const progress = isBreathing ? ((currentStep.duration - countdown) / currentStep.duration) * 100 : 0;

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          Stress Relief Center
        </h1>
        <p className="text-muted-foreground">Take a break. Your mental health matters.</p>
      </div>

      {/* Motivational Quote */}
      <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border-purple-500/20">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-purple-500 mt-1 shrink-0" />
            <div>
              <p className="text-base sm:text-lg italic">"{quote.quote}"</p>
              <p className="text-sm text-muted-foreground mt-2">— {quote.author}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-xs"
                onClick={() => setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])}
              >
                <RotateCcw className="h-3 w-3 mr-1" /> New Quote
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="breathing" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="breathing" className="text-xs sm:text-sm">
            <Wind className="h-4 w-4 mr-1 hidden sm:inline" /> Breathing
          </TabsTrigger>
          <TabsTrigger value="quick" className="text-xs sm:text-sm">
            <Timer className="h-4 w-4 mr-1 hidden sm:inline" /> Quick Relief
          </TabsTrigger>
          <TabsTrigger value="ambient" className="text-xs sm:text-sm">
            <Volume2 className="h-4 w-4 mr-1 hidden sm:inline" /> Sounds
          </TabsTrigger>
        </TabsList>

        {/* Breathing Exercises Tab */}
        <TabsContent value="breathing" className="space-y-4">
          {/* Exercise Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {breathingExercises.map((ex) => (
              <Button
                key={ex.id}
                variant={activeExercise.id === ex.id ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  resetBreathing();
                  setActiveExercise(ex);
                }}
                className="whitespace-nowrap"
              >
                {ex.name}
              </Button>
            ))}
          </div>

          {/* Breathing Visual */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                {/* Breathing Circle */}
                <div className="relative">
                  <div
                    className={`w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center transition-all duration-1000 ${
                      isBreathing ? currentStep.color : "bg-muted"
                    } ${isBreathing ? "scale-100" : "scale-90"}`}
                    style={{
                      transform: isBreathing && currentStep.phase === "Inhale" 
                        ? "scale(1.1)" 
                        : isBreathing && currentStep.phase === "Exhale"
                        ? "scale(0.9)"
                        : "scale(1)",
                      transition: `transform ${currentStep?.duration || 1}s ease-in-out`,
                    }}
                  >
                    <div className="text-center text-white">
                      <p className="text-2xl sm:text-3xl font-bold">{isBreathing ? countdown : "Ready"}</p>
                      <p className="text-sm sm:text-base">{isBreathing ? currentStep.phase : "Press Start"}</p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                {isBreathing && (
                  <div className="mt-4 w-full max-w-xs">
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span>Cycles: {cycles}</span>
                  <span>•</span>
                  <span>~{Math.floor((cycles * totalDuration) / 60)}m {(cycles * totalDuration) % 60}s</span>
                </div>

                {/* Controls */}
                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={isBreathing ? stopBreathing : startBreathing}
                    size="lg"
                    className={isBreathing ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    {isBreathing ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                    {isBreathing ? "Pause" : "Start"}
                  </Button>
                  <Button variant="outline" size="lg" onClick={resetBreathing}>
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Exercise Info */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2">{activeExercise.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{activeExercise.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activeExercise.benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Quick Stress Busters Tab */}
        <TabsContent value="quick" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">⚡ Quick Stress Busters</CardTitle>
              <CardDescription>1-2 minute exercises you can do anywhere</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {stressBusters.map((buster, i) => (
                  <Card key={i} className="p-4 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <buster.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm">{buster.title}</p>
                          <Badge variant="outline" className="text-xs">{buster.time}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{buster.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Grounding Exercise */}
          <Card className="bg-gradient-to-br from-green-500/5 to-teal-500/5 border-green-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <TreePine className="h-5 w-5 text-green-500" />
                5-4-3-2-1 Grounding Technique
              </CardTitle>
              <CardDescription>When anxiety strikes, use your senses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                  <Badge className="bg-blue-500">5</Badge>
                  <span className="text-sm">things you can <strong>SEE</strong></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                  <Badge className="bg-green-500">4</Badge>
                  <span className="text-sm">things you can <strong>TOUCH</strong></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                  <Badge className="bg-yellow-500">3</Badge>
                  <span className="text-sm">things you can <strong>HEAR</strong></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                  <Badge className="bg-orange-500">2</Badge>
                  <span className="text-sm">things you can <strong>SMELL</strong></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                  <Badge className="bg-red-500">1</Badge>
                  <span className="text-sm">thing you can <strong>TASTE</strong></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ambient Sounds Tab */}
        <TabsContent value="ambient" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">🎧 Ambient Sounds</CardTitle>
              <CardDescription>Background sounds to help you focus or relax</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ambientSounds.map((sound) => (
                  <Button
                    key={sound.id}
                    variant={activeSound === sound.id ? "default" : "outline"}
                    className="h-auto py-4 flex-col gap-2"
                    onClick={() => setActiveSound(activeSound === sound.id ? null : sound.id)}
                  >
                    <sound.icon className={`h-6 w-6 ${activeSound === sound.id ? "text-white" : sound.color}`} />
                    <span className="text-xs">{sound.name}</span>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                💡 Tip: Open YouTube/Spotify and search for "{activeSound || "study"} ambient sounds" for free audio
              </p>
            </CardContent>
          </Card>

          {/* Study Music Recommendations */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">🎵 Recommended Playlists</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Lo-Fi Hip Hop for Studying</span>
                  </div>
                  <Badge variant="outline">Focus</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Calm Piano Music</span>
                  </div>
                  <Badge variant="outline">Relax</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Nature Sounds Compilation</span>
                  </div>
                  <Badge variant="outline">Sleep</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
