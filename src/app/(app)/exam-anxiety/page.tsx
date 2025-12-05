"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, Lightbulb, Target, Clock, AlertTriangle, CheckCircle2, 
  XCircle, Coffee, Moon, Sun, Utensils, Dumbbell, Heart, 
  Smartphone, BookOpen, Calendar, TrendingUp, Shield
} from "lucide-react";

// Exam anxiety tips
const anxietyTips = [
  {
    title: "Reframe Negative Thoughts",
    description: "Instead of 'I'm going to fail', think 'I've prepared well and will do my best'",
    icon: Brain,
    category: "mindset",
  },
  {
    title: "Prepare Everything Night Before",
    description: "Admit card, pens, watch, snacks - reduce morning stress",
    icon: CheckCircle2,
    category: "preparation",
  },
  {
    title: "Arrive Early, Not Just On Time",
    description: "Reach venue 30-45 minutes early to settle your nerves",
    icon: Clock,
    category: "exam-day",
  },
  {
    title: "Power Poses Before Exam",
    description: "2 minutes of confident posture can reduce cortisol by 25%",
    icon: Dumbbell,
    category: "exam-day",
  },
  {
    title: "Avoid Last-Minute Revision",
    description: "Don't cram new topics. Review what you know confidently.",
    icon: AlertTriangle,
    category: "exam-day",
  },
  {
    title: "The 5-Second Rule",
    description: "Feeling panicked? Count 5-4-3-2-1 and refocus on the question",
    icon: Target,
    category: "during-exam",
  },
];

// Do's and Don'ts
const examDos = [
  "Read instructions carefully before starting",
  "Skim through all sections first",
  "Attempt easy questions first to build confidence",
  "Keep track of time with a watch",
  "Mark questions to review later",
  "Eat a balanced breakfast",
  "Stay hydrated during exam",
  "Take 3 deep breaths if feeling anxious",
  "Trust your first instinct on MCQs",
  "Review marked questions in remaining time",
];

const examDonts = [
  "Don't study new topics the night before",
  "Don't skip sleep to study more",
  "Don't discuss answers with friends before exam",
  "Don't spend too much time on one question",
  "Don't panic if you don't know an answer",
  "Don't check social media before exam",
  "Don't compare your speed with others",
  "Don't leave questions blank (no negative marking in CLAT)",
  "Don't change answers without good reason",
  "Don't let one tough section affect the next",
];

// Daily routine tips
const routineTips = {
  morning: [
    { icon: Sun, title: "Wake up at consistent time", desc: "Even on weekends, maintain sleep schedule" },
    { icon: Utensils, title: "Healthy breakfast", desc: "Protein + complex carbs for brain fuel" },
    { icon: Target, title: "Plan your day", desc: "Write 3 main goals for the day" },
  ],
  study: [
    { icon: Clock, title: "Pomodoro Technique", desc: "25 min study + 5 min break cycles" },
    { icon: BookOpen, title: "Active Recall", desc: "Test yourself instead of re-reading" },
    { icon: Brain, title: "Spaced Repetition", desc: "Review at increasing intervals" },
  ],
  evening: [
    { icon: Dumbbell, title: "Physical Activity", desc: "30 min exercise reduces stress hormones" },
    { icon: Smartphone, title: "Digital Detox", desc: "No screens 1 hour before bed" },
    { icon: Moon, title: "Sleep 7-8 hours", desc: "Memory consolidation happens during sleep" },
  ],
};

// Mental health warning signs
const warningSignsToSeek = [
  "Persistent feelings of hopelessness",
  "Unable to concentrate even when trying",
  "Significant changes in sleep or appetite",
  "Feeling isolated or withdrawing from everyone",
  "Thoughts of self-harm (please reach out immediately)",
  "Anxiety that interferes with daily life",
  "Panic attacks becoming frequent",
  "Loss of interest in everything, including the exam",
];

// Helpline numbers
const helplines = [
  { name: "iCall", number: "9152987821", desc: "Psychosocial helpline" },
  { name: "Vandrevala Foundation", number: "1860-2662-345", desc: "24/7 mental health support" },
  { name: "NIMHANS", number: "080-46110007", desc: "Mental health helpline" },
];

export default function ExamAnxietyPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTips = activeCategory 
    ? anxietyTips.filter(t => t.category === activeCategory)
    : anxietyTips;

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-500" />
          Exam Anxiety Guide
        </h1>
        <p className="text-muted-foreground">Strategies to overcome exam fear and perform your best</p>
      </div>

      {/* Quick Message */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Remember: You are more than your exam score.</p>
              <p className="text-sm text-muted-foreground mt-1">
                CLAT is one exam. It doesn't define your worth or your future. Many successful lawyers
                didn't crack it the first time. What matters is that you're trying.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tips" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tips" className="text-xs">Tips</TabsTrigger>
          <TabsTrigger value="dosdonts" className="text-xs">Do's/Don'ts</TabsTrigger>
          <TabsTrigger value="routine" className="text-xs">Routine</TabsTrigger>
          <TabsTrigger value="help" className="text-xs">Help</TabsTrigger>
        </TabsList>

        {/* Anxiety Tips Tab */}
        <TabsContent value="tips" className="space-y-4">
          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={activeCategory === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              All
            </Button>
            <Button 
              variant={activeCategory === "mindset" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory("mindset")}
            >
              Mindset
            </Button>
            <Button 
              variant={activeCategory === "preparation" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory("preparation")}
            >
              Prep
            </Button>
            <Button 
              variant={activeCategory === "exam-day" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory("exam-day")}
            >
              Exam Day
            </Button>
            <Button 
              variant={activeCategory === "during-exam" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory("during-exam")}
            >
              During Exam
            </Button>
          </div>

          {/* Tips Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredTips.map((tip, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <tip.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{tip.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Do's and Don'ts Tab */}
        <TabsContent value="dosdonts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Do's */}
            <Card className="border-green-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                  Do's ✓
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <ul className="space-y-2">
                    {examDos.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-red-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Don'ts ✗
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <ul className="space-y-2">
                    {examDonts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Daily Routine Tab */}
        <TabsContent value="routine" className="space-y-4">
          {Object.entries(routineTips).map(([period, tips]) => (
            <Card key={period}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize flex items-center gap-2">
                  {period === "morning" && <Sun className="h-5 w-5 text-amber-500" />}
                  {period === "study" && <BookOpen className="h-5 w-5 text-blue-500" />}
                  {period === "evening" && <Moon className="h-5 w-5 text-purple-500" />}
                  {period} Routine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <tip.icon className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{tip.title}</p>
                        <p className="text-xs text-muted-foreground">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Weekly Planner Card */}
          <Card className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-indigo-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-500" />
                Last Week Before CLAT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-medium">Day 7-6</span>
                  <span className="text-muted-foreground">Full revision of strong topics</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-medium">Day 5-4</span>
                  <span className="text-muted-foreground">Mock tests + analysis</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-medium">Day 3-2</span>
                  <span className="text-muted-foreground">Light revision, GK + current affairs</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-medium">Day 1</span>
                  <span className="text-muted-foreground">REST! Prepare documents, sleep early</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Help Tab */}
        <TabsContent value="help" className="space-y-4">
          {/* Warning Signs */}
          <Card className="border-amber-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                When to Seek Professional Help
              </CardTitle>
              <CardDescription>
                It's okay to ask for help. These signs suggest you might benefit from professional support:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {warningSignsToSeek.map((sign, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Helplines */}
          <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Mental Health Helplines (India)
              </CardTitle>
              <CardDescription>
                Free, confidential support available 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {helplines.map((line, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div>
                      <p className="font-medium">{line.name}</p>
                      <p className="text-xs text-muted-foreground">{line.desc}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">{line.number}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                You are not alone. Reaching out is a sign of strength, not weakness. 💚
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
