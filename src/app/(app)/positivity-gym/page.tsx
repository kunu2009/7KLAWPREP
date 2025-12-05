"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, Heart, Sparkles, Target, Trophy, Star,
  Smile, Frown, Meh, TrendingUp, Calendar, Gift
} from "lucide-react";

const positiveThoughts = [
  { negative: "I'm not as smart as others", positive: "I learn at my own pace and that's okay" },
  { negative: "Everyone is ahead of me", positive: "My journey is unique and valid" },
  { negative: "I'll never be good enough", positive: "I'm improving every single day" },
  { negative: "People will judge me if I fail", positive: "Failure is how I learn and grow" },
  { negative: "I missed out on everything", positive: "I chose to take care of myself" },
  { negative: "No one understands me", positive: "The right people will understand" },
  { negative: "I have to be perfect", positive: "Progress matters more than perfection" },
  { negative: "I can't trust anyone", positive: "I'm learning to trust the right people" },
  { negative: "I'm falling behind", positive: "I'm exactly where I need to be" },
  { negative: "Everyone is watching my mistakes", positive: "People are focused on their own lives" },
];

const dailyChallenges = [
  { task: "Say 3 nice things about yourself", points: 10, icon: Heart },
  { task: "Take a 5-minute break without phone", points: 15, icon: Brain },
  { task: "Drink a full glass of water", points: 5, icon: Sparkles },
  { task: "Text/talk to someone you trust", points: 20, icon: Smile },
  { task: "Do a 2-minute stretch", points: 10, icon: Star },
  { task: "Write one thing you're grateful for", points: 15, icon: Gift },
  { task: "Skip checking social media for 1 hour", points: 25, icon: Trophy },
  { task: "Take 5 deep breaths", points: 10, icon: Heart },
];

const miniGames = [
  { name: "Thought Flipper", description: "Turn negative thoughts into positive ones", unlockPoints: 0 },
  { name: "Gratitude Garden", description: "Plant flowers for things you're thankful for", unlockPoints: 50 },
  { name: "Worry Box", description: "Put your worries away safely", unlockPoints: 100 },
];

export default function PositivityGymPage() {
  const [points, setPoints] = useState(0);
  const [completedToday, setCompletedToday] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [gratitudeItems, setGratitudeItems] = useState<string[]>([]);
  const [worries, setWorries] = useState<string[]>([]);
  const [newGratitude, setNewGratitude] = useState("");
  const [newWorry, setNewWorry] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("positivityGym");
    if (saved) {
      const data = JSON.parse(saved);
      const today = new Date().toDateString();
      setPoints(data.points || 0);
      setStreak(data.streak || 0);
      setGratitudeItems(data.gratitudeItems || []);
      setWorries(data.worries || []);
      if (data.lastDate === today) {
        setCompletedToday(data.completedToday || []);
      } else if (data.lastDate) {
        const lastDate = new Date(data.lastDate);
        const daysDiff = Math.floor((new Date().getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDiff > 1) setStreak(0);
      }
    }
  }, []);

  const saveProgress = (newPoints: number, newCompleted: number[]) => {
    const data = {
      points: newPoints,
      completedToday: newCompleted,
      lastDate: new Date().toDateString(),
      streak: streak,
      gratitudeItems,
      worries,
    };
    localStorage.setItem("positivityGym", JSON.stringify(data));
  };

  const completeChallenge = (index: number, pts: number) => {
    if (completedToday.includes(index)) return;
    const newCompleted = [...completedToday, index];
    const newPoints = points + pts;
    setCompletedToday(newCompleted);
    setPoints(newPoints);
    if (newCompleted.length === 1 && completedToday.length === 0) {
      setStreak((s) => s + 1);
    }
    saveProgress(newPoints, newCompleted);
  };

  const addGratitude = () => {
    if (!newGratitude.trim()) return;
    const updated = [...gratitudeItems, newGratitude];
    setGratitudeItems(updated);
    setNewGratitude("");
    const newPoints = points + 5;
    setPoints(newPoints);
    localStorage.setItem("positivityGym", JSON.stringify({
      ...JSON.parse(localStorage.getItem("positivityGym") || "{}"),
      gratitudeItems: updated,
      points: newPoints,
    }));
  };

  const addWorry = () => {
    if (!newWorry.trim()) return;
    const updated = [...worries, newWorry];
    setWorries(updated);
    setNewWorry("");
  };

  const releaseWorry = (index: number) => {
    const updated = worries.filter((_, i) => i !== index);
    setWorries(updated);
    const newPoints = points + 10;
    setPoints(newPoints);
    localStorage.setItem("positivityGym", JSON.stringify({
      ...JSON.parse(localStorage.getItem("positivityGym") || "{}"),
      worries: updated,
      points: newPoints,
    }));
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header with Stats */}
      <div className="text-center">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Brain className="h-6 w-6 text-pink-500" />
          Positivity Gym
        </h1>
        <p className="text-muted-foreground text-sm">Train your mind to be kinder to yourself 💪</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center bg-gradient-to-br from-pink-500/10 to-rose-500/10">
          <Trophy className="h-5 w-5 text-pink-500 mx-auto mb-1" />
          <p className="text-xl font-bold">{points}</p>
          <p className="text-[10px] text-muted-foreground">Points</p>
        </Card>
        <Card className="p-3 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10">
          <Target className="h-5 w-5 text-amber-500 mx-auto mb-1" />
          <p className="text-xl font-bold">{completedToday.length}/{dailyChallenges.length}</p>
          <p className="text-[10px] text-muted-foreground">Today</p>
        </Card>
        <Card className="p-3 text-center bg-gradient-to-br from-emerald-500/10 to-green-500/10">
          <TrendingUp className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
          <p className="text-xl font-bold">{streak}</p>
          <p className="text-[10px] text-muted-foreground">Day Streak</p>
        </Card>
      </div>

      {/* Daily Challenges */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            Today&apos;s Self-Care Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {dailyChallenges.map((challenge, i) => {
              const done = completedToday.includes(i);
              return (
                <div 
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    done ? "bg-green-500/10 border-green-500/30" : "hover:bg-muted/50"
                  }`}
                >
                  <challenge.icon className={`h-5 w-5 shrink-0 ${done ? "text-green-500" : "text-muted-foreground"}`} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${done ? "line-through text-muted-foreground" : ""}`}>
                      {challenge.task}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0">+{challenge.points}</Badge>
                  <Button
                    size="sm"
                    variant={done ? "ghost" : "default"}
                    disabled={done}
                    onClick={() => completeChallenge(i, challenge.points)}
                    className="shrink-0"
                  >
                    {done ? "Done ✓" : "Complete"}
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Mini Games */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            Mind Training Games
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {miniGames.map((game) => {
              const unlocked = points >= game.unlockPoints;
              return (
                <Card 
                  key={game.name}
                  className={`cursor-pointer transition-all ${
                    unlocked ? "hover:border-purple-500/50" : "opacity-60"
                  } ${currentGame === game.name ? "border-purple-500 bg-purple-500/5" : ""}`}
                  onClick={() => unlocked && setCurrentGame(currentGame === game.name ? null : game.name)}
                >
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-sm">{game.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{game.description}</p>
                    {!unlocked && (
                      <Badge variant="outline" className="mt-2 text-xs">
                        🔒 {game.unlockPoints} pts
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Thought Flipper Game */}
          {currentGame === "Thought Flipper" && (
            <div className="mt-4 p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium mb-3">Tap cards to flip negative thoughts into positive ones:</p>
              <div className="space-y-2">
                {positiveThoughts.slice(0, 5).map((thought, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      flippedCards.includes(i) 
                        ? "bg-green-500/10 border border-green-500/30" 
                        : "bg-red-500/10 border border-red-500/30"
                    }`}
                    onClick={() => {
                      if (!flippedCards.includes(i)) {
                        setFlippedCards([...flippedCards, i]);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {flippedCards.includes(i) ? (
                        <Smile className="h-4 w-4 text-green-500 shrink-0" />
                      ) : (
                        <Frown className="h-4 w-4 text-red-500 shrink-0" />
                      )}
                      <p className="text-sm">
                        {flippedCards.includes(i) ? thought.positive : thought.negative}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gratitude Garden */}
          {currentGame === "Gratitude Garden" && points >= 50 && (
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-emerald-500/5">
              <p className="text-sm font-medium mb-3">Plant a flower for each thing you&apos;re grateful for 🌸</p>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="I'm grateful for..."
                  value={newGratitude}
                  onChange={(e) => setNewGratitude(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border text-sm bg-background"
                  onKeyDown={(e) => e.key === "Enter" && addGratitude()}
                />
                <Button size="sm" onClick={addGratitude}>Plant 🌷</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {gratitudeItems.map((item, i) => (
                  <Badge key={i} variant="outline" className="bg-pink-500/10">
                    🌸 {item}
                  </Badge>
                ))}
                {gratitudeItems.length === 0 && (
                  <p className="text-xs text-muted-foreground">Your garden is empty. Plant some gratitude! 🌱</p>
                )}
              </div>
            </div>
          )}

          {/* Worry Box */}
          {currentGame === "Worry Box" && points >= 100 && (
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
              <p className="text-sm font-medium mb-3">Put your worries in the box, then let them go 📦</p>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="I'm worried about..."
                  value={newWorry}
                  onChange={(e) => setNewWorry(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border text-sm bg-background"
                  onKeyDown={(e) => e.key === "Enter" && addWorry()}
                />
                <Button size="sm" variant="outline" onClick={addWorry}>Add</Button>
              </div>
              <div className="space-y-2">
                {worries.map((worry, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <span className="text-sm flex-1">{worry}</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-xs text-green-500"
                      onClick={() => releaseWorry(i)}
                    >
                      Release ✨
                    </Button>
                  </div>
                ))}
                {worries.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    Your worry box is empty. That&apos;s amazing! 🎉
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-xs text-muted-foreground">{points} / 200 to unlock all games</span>
          </div>
          <Progress value={Math.min((points / 200) * 100, 100)} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Keep going! You&apos;re building a stronger, kinder mind 💪💜
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
