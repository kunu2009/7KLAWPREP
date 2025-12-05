"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Smile, Meh, Frown, Sun, Cloud, CloudRain, Heart, 
  PenLine, Calendar, TrendingUp, Sparkles, Save, Trash2
} from "lucide-react";

// Mood options
const moodOptions = [
  { id: "great", label: "Great! 😊", icon: Smile, color: "text-green-500 bg-green-500/10", value: 5 },
  { id: "good", label: "Good 🙂", icon: Smile, color: "text-blue-500 bg-blue-500/10", value: 4 },
  { id: "okay", label: "Okay 😐", icon: Meh, color: "text-yellow-500 bg-yellow-500/10", value: 3 },
  { id: "low", label: "Low 😔", icon: Frown, color: "text-orange-500 bg-orange-500/10", value: 2 },
  { id: "stressed", label: "Stressed 😰", icon: Frown, color: "text-red-500 bg-red-500/10", value: 1 },
];

// Energy levels
const energyOptions = [
  { id: "high", label: "High Energy", icon: Sun, color: "text-amber-500" },
  { id: "medium", label: "Medium", icon: Cloud, color: "text-blue-500" },
  { id: "low", label: "Low Energy", icon: CloudRain, color: "text-slate-500" },
];

// Journal prompts
const journalPrompts = [
  "What went well in my study session today?",
  "What's one thing I'm proud of this week?",
  "What topic do I feel most confident about?",
  "What's worrying me about the exam? (Writing it down helps!)",
  "Three things I'm grateful for today:",
  "What would I tell a friend feeling the same way?",
  "One small win from today:",
  "How will I feel after CLAT is over?",
  "What self-care did I do today?",
  "My preparation is going well because...",
];

// Affirmations
const affirmations = [
  "I am capable of achieving my goals.",
  "Every hour of study brings me closer to success.",
  "I choose calm over anxiety.",
  "I trust my preparation.",
  "I am worthy regardless of any exam result.",
  "I grow stronger with every challenge.",
  "My best effort is enough.",
  "I will stay focused and composed.",
  "I believe in my abilities.",
  "Today I choose progress over perfection.",
];

interface MoodEntry {
  id: string;
  date: string;
  mood: string;
  energy: string;
  journal: string;
  timestamp: number;
}

export default function MoodJournalPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);
  const [journalText, setJournalText] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState(journalPrompts[0]);
  const [affirmation, setAffirmation] = useState(affirmations[0]);
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("moodJournalEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
    setCurrentPrompt(journalPrompts[Math.floor(Math.random() * journalPrompts.length)]);
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
  }, []);

  // Save entry
  const saveEntry = () => {
    if (!selectedMood) return;

    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-IN", { 
        weekday: "short", 
        day: "numeric", 
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      }),
      mood: selectedMood,
      energy: selectedEnergy || "medium",
      journal: journalText,
      timestamp: Date.now(),
    };

    const updated = [newEntry, ...entries].slice(0, 30); // Keep last 30 entries
    setEntries(updated);
    localStorage.setItem("moodJournalEntries", JSON.stringify(updated));

    // Reset form
    setSelectedMood(null);
    setSelectedEnergy(null);
    setJournalText("");
    setCurrentPrompt(journalPrompts[Math.floor(Math.random() * journalPrompts.length)]);
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("moodJournalEntries", JSON.stringify(updated));
  };

  const getMoodEmoji = (moodId: string) => {
    const mood = moodOptions.find(m => m.id === moodId);
    return mood?.label.split(" ")[1] || "😐";
  };

  const getMoodColor = (moodId: string) => {
    const mood = moodOptions.find(m => m.id === moodId);
    return mood?.color || "";
  };

  // Calculate streak
  const calculateStreak = () => {
    if (entries.length === 0) return 0;
    let streak = 0;
    const today = new Date().setHours(0, 0, 0, 0);
    
    for (let i = 0; i < entries.length; i++) {
      const entryDate = new Date(entries[i].timestamp).setHours(0, 0, 0, 0);
      const expectedDate = today - (i * 24 * 60 * 60 * 1000);
      
      if (entryDate === expectedDate || (i === 0 && entryDate === today)) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <PenLine className="h-6 w-6 text-purple-500" />
            Mood Journal
          </h1>
          <p className="text-muted-foreground">Track your emotions during CLAT prep</p>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowHistory(!showHistory)}
        >
          <Calendar className="h-4 w-4 mr-1" />
          {showHistory ? "New Entry" : "History"}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold text-purple-500">{entries.length}</p>
          <p className="text-xs text-muted-foreground">Entries</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold text-orange-500">{calculateStreak()}</p>
          <p className="text-xs text-muted-foreground">Day Streak</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold text-green-500">
            {entries.length > 0 
              ? getMoodEmoji(entries.reduce((a, b) => 
                  moodOptions.find(m => m.id === a)!.value > moodOptions.find(m => m.id === b.mood)!.value ? a : b.mood
                , entries[0].mood))
              : "—"}
          </p>
          <p className="text-xs text-muted-foreground">Best Mood</p>
        </Card>
      </div>

      {showHistory ? (
        /* History View */
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Journal History</CardTitle>
            <CardDescription>Your recent mood entries</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {entries.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No entries yet. Start tracking your mood!
                </p>
              ) : (
                <div className="space-y-3">
                  {entries.map((entry) => (
                    <Card key={entry.id} className="p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-full ${getMoodColor(entry.mood)}`}>
                            <span className="text-lg">{getMoodEmoji(entry.mood)}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium capitalize">{entry.mood}</p>
                            <p className="text-xs text-muted-foreground">{entry.date}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteEntry(entry.id)}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                      {entry.journal && (
                        <p className="text-sm text-muted-foreground mt-2 pl-12">
                          {entry.journal}
                        </p>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        /* New Entry Form */
        <>
          {/* Daily Affirmation */}
          <Card className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-purple-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium text-purple-600">Today's Affirmation</span>
              </div>
              <p className="text-base font-medium">"{affirmation}"</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-xs"
                onClick={() => setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)])}
              >
                New Affirmation
              </Button>
            </CardContent>
          </Card>

          {/* Mood Selection */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">How are you feeling?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {moodOptions.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={selectedMood === mood.id ? "default" : "outline"}
                    className={`flex-1 min-w-[100px] h-auto py-3 flex-col gap-1 ${
                      selectedMood === mood.id ? "" : mood.color
                    }`}
                    onClick={() => setSelectedMood(mood.id)}
                  >
                    <span className="text-lg">{mood.label.split(" ")[1]}</span>
                    <span className="text-xs">{mood.label.split(" ")[0]}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Energy Level */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Energy Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                {energyOptions.map((energy) => (
                  <Button
                    key={energy.id}
                    variant={selectedEnergy === energy.id ? "default" : "outline"}
                    className="flex-1 h-auto py-3 flex-col gap-1"
                    onClick={() => setSelectedEnergy(energy.id)}
                  >
                    <energy.icon className={`h-5 w-5 ${selectedEnergy === energy.id ? "" : energy.color}`} />
                    <span className="text-xs">{energy.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Journal */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <PenLine className="h-4 w-4" />
                Quick Journal
              </CardTitle>
              <CardDescription>
                Prompt: {currentPrompt}
                <Button 
                  variant="link" 
                  size="sm" 
                  className="ml-2 h-auto p-0 text-xs"
                  onClick={() => setCurrentPrompt(journalPrompts[Math.floor(Math.random() * journalPrompts.length)])}
                >
                  (New prompt)
                </Button>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your thoughts... (optional)"
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button 
            className="w-full" 
            size="lg" 
            onClick={saveEntry}
            disabled={!selectedMood}
          >
            <Save className="h-5 w-5 mr-2" />
            Save Today's Entry
          </Button>
        </>
      )}
    </div>
  );
}
