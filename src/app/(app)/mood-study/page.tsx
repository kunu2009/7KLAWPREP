
"use client";

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { suggestStudyActivity } from '@/ai/flows/suggest-study-activity';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Wand2, BrainCircuit, Bed, Coffee, Frown, Meh, Zap, Heart, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const moods = [
  { label: "Energized", icon: Zap, prompt: "I'm feeling energized and ready to tackle something challenging.", color: "text-yellow-500", bg: "hover:bg-yellow-500/10" },
  { label: "Focused", icon: Target, prompt: "I'm feeling focused and want to dive deep into a specific topic.", color: "text-blue-500", bg: "hover:bg-blue-500/10" },
  { label: "Motivated", icon: Heart, prompt: "I'm feeling motivated and want to make real progress today.", color: "text-red-500", bg: "hover:bg-red-500/10" },
  { label: "Neutral", icon: Meh, prompt: "I'm feeling okay, not too energetic but not tired either.", color: "text-gray-500", bg: "hover:bg-gray-500/10" },
  { label: "Tired", icon: Bed, prompt: "I'm feeling tired and need a low-effort way to revise.", color: "text-purple-500", bg: "hover:bg-purple-500/10" },
  { label: "Anxious", icon: Frown, prompt: "I'm feeling anxious about exams and need something calming but productive.", color: "text-orange-500", bg: "hover:bg-orange-500/10" },
  { label: "Short on Time", icon: Clock, prompt: "I only have 15-20 minutes to study. Suggest something quick but effective.", color: "text-cyan-500", bg: "hover:bg-cyan-500/10" },
  { label: "Bored", icon: BrainCircuit, prompt: "I'm feeling bored and need something engaging to study.", color: "text-green-500", bg: "hover:bg-green-500/10" },
];

const quickActions = [
  { label: "5 Quick MCQs", href: "/mcqs", icon: Target },
  { label: "Flip Flashcards", href: "/flashcards", icon: Zap },
  { label: "Watch Reels", href: "/reels", icon: Heart },
  { label: "Read Notes", href: "/notes", icon: BrainCircuit },
];

export default function MoodStudyPage() {
  const [suggestion, setSuggestion] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleMoodSelect = (mood: typeof moods[0]) => {
    setSuggestion('');
    setSelectedMood(mood.label);

    startTransition(async () => {
      try {
        const response = await suggestStudyActivity({ mood: mood.prompt });
        if (response && response.suggestion) {
          setSuggestion(response.suggestion);
        } else {
          throw new Error("Invalid response from AI.");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Failed to get a study suggestion. Please try again.",
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mood-Based Study</h1>
        <p className="text-muted-foreground">Tell us how you're feeling, and our AI will suggest the perfect study activity to match your energy.</p>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Start</CardTitle>
          <CardDescription>Jump right into studying without AI suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quickActions.map((action) => (
              <Button key={action.label} variant="outline" asChild className="h-auto py-3 flex-col gap-1">
                <Link href={action.href}>
                  <action.icon className="h-4 w-4" />
                  <span className="text-xs">{action.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How are you feeling?</CardTitle>
            <CardDescription>Select your current mood to get a personalized AI suggestion.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {moods.map((mood) => (
                <Button 
                  key={mood.label} 
                  variant={selectedMood === mood.label ? "default" : "outline"}
                  className={`h-20 flex-col gap-2 ${selectedMood !== mood.label ? mood.bg : ''}`}
                  onClick={() => handleMoodSelect(mood)}
                  disabled={isPending}
                >
                  <mood.icon className={`h-6 w-6 ${selectedMood === mood.label ? '' : mood.color}`} />
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/> AI Suggestion</CardTitle>
            <CardDescription>Your personalized study plan based on your mood.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center min-h-[200px]">
            {isPending ? (
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span>Thinking about what's best for you...</span>
              </div>
            ) : suggestion ? (
              <div className="text-sm leading-relaxed whitespace-pre-wrap flex-1 p-4 bg-muted/50 rounded-lg">{suggestion}</div>
            ) : (
              <div className="text-center text-muted-foreground">
                <Wand2 className="mx-auto h-8 w-8 mb-2" />
                <p>Select a mood to begin.</p>
                <p className="text-xs mt-1">Our AI will craft a study session just for you.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Wellness Tips Card */}
      <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-green-500" />
            Balance Board Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-background rounded-lg">
              <p className="font-medium mb-1">💧 Stay Hydrated</p>
              <p className="text-muted-foreground text-xs">Drink water every hour. Dehydration reduces focus by up to 25%.</p>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <p className="font-medium mb-1">😴 Sleep Well</p>
              <p className="text-muted-foreground text-xs">7-8 hours of sleep helps memory consolidation for what you studied.</p>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <p className="font-medium mb-1">🚶 Take Breaks</p>
              <p className="text-muted-foreground text-xs">Use 25-5 Pomodoro technique. Short walks boost retention.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
