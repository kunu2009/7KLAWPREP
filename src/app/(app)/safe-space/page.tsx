"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, Cloud, Stars, Moon, Sun, Sparkles, 
  Lock, Shield, Flower2, Coffee, Music, 
  MessageCircleHeart, BookHeart, Palette
} from "lucide-react";

const comfortingMessages = [
  "You're doing amazing, even when it doesn't feel like it 💜",
  "It's okay to take breaks. Your worth isn't measured by productivity.",
  "You don't have to be perfect. You just have to be you.",
  "Missing out on something doesn't mean you're missing out on life.",
  "Your feelings are valid. All of them.",
  "You're stronger than you think, braver than you believe.",
  "It's okay to not know everything. That's how we grow.",
  "You are enough. You have always been enough.",
  "Take it one breath at a time. You've got this.",
  "The people who matter will understand. Always.",
  "Your pace is perfect for you. Don't compare your chapter 1 to someone's chapter 20.",
  "It's okay to say no. Your energy is precious.",
  "You're not behind. You're exactly where you need to be.",
  "Being a topper doesn't mean you can't struggle. You're human first.",
  "Trust yourself. You've made it this far.",
];

const selfCareIdeas = [
  { icon: Coffee, text: "Make yourself a warm drink", color: "text-amber-500" },
  { icon: Music, text: "Listen to your comfort playlist", color: "text-pink-500" },
  { icon: Flower2, text: "Water your plants or look at flowers", color: "text-green-500" },
  { icon: Moon, text: "Take a 10-minute power nap", color: "text-indigo-500" },
  { icon: Palette, text: "Doodle something silly", color: "text-purple-500" },
  { icon: BookHeart, text: "Read a few pages of your favorite book", color: "text-rose-500" },
];

const fomoReminders = [
  "Social media shows highlights, not reality",
  "Your path is unique - comparison steals joy",
  "What you have right now is enough",
  "Missing one event won't change your life",
  "Real friends will include you next time",
  "Your mental peace > being everywhere",
  "It's okay to choose rest over socializing",
  "You're not missing out, you're opting in to self-care",
];

const trustAffirmations = [
  "I am learning to trust at my own pace",
  "It's okay to have boundaries",
  "I can be open without being vulnerable to hurt",
  "Not everyone will let me down",
  "I trust myself to handle whatever comes",
  "Taking time to trust is wisdom, not weakness",
  "I choose who earns my trust",
  "My past doesn't define my future relationships",
];

export default function SafeSpacePage() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [privateNote, setPrivateNote] = useState("");
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [mood, setMood] = useState<string | null>(null);
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setCurrentMessage(comfortingMessages[Math.floor(Math.random() * comfortingMessages.length)]);
    const saved = localStorage.getItem("safeSpaceNote");
    if (saved) setPrivateNote(saved);
  }, []);

  useEffect(() => {
    if (privateNote) {
      localStorage.setItem("safeSpaceNote", privateNote);
    }
  }, [privateNote]);

  const getNewMessage = () => {
    let newMsg = comfortingMessages[Math.floor(Math.random() * comfortingMessages.length)];
    while (newMsg === currentMessage) {
      newMsg = comfortingMessages[Math.floor(Math.random() * comfortingMessages.length)];
    }
    setCurrentMessage(newMsg);
  };

  const addStar = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newStar = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setStars((prev) => [...prev.slice(-20), newStar]);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="text-center py-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-500/20">
          <Shield className="h-5 w-5 text-pink-500" />
          <span className="font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Your Safe Space
          </span>
          <Lock className="h-4 w-4 text-purple-500" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          A private corner just for you. No judgments, no pressure. 💜
        </p>
      </div>

      {/* Comforting Message */}
      <Card className="border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5">
        <CardContent className="p-6 text-center">
          <Sparkles className="h-8 w-8 text-pink-400 mx-auto mb-4" />
          <p className="text-lg font-medium leading-relaxed mb-4">
            {currentMessage}
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={getNewMessage}
            className="border-pink-500/30 hover:bg-pink-500/10"
          >
            <Heart className="h-4 w-4 mr-2 text-pink-500" />
            Another message
          </Button>
        </CardContent>
      </Card>

      {/* Quick Mood Check */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MessageCircleHeart className="h-5 w-5 text-rose-500" />
            How are you feeling right now?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              { emoji: "😔", label: "Overwhelmed", color: "bg-blue-500/10 border-blue-500/30" },
              { emoji: "😰", label: "Anxious", color: "bg-purple-500/10 border-purple-500/30" },
              { emoji: "😢", label: "Left out", color: "bg-indigo-500/10 border-indigo-500/30" },
              { emoji: "😤", label: "Frustrated", color: "bg-red-500/10 border-red-500/30" },
              { emoji: "😴", label: "Exhausted", color: "bg-slate-500/10 border-slate-500/30" },
              { emoji: "🥺", label: "Need a hug", color: "bg-pink-500/10 border-pink-500/30" },
              { emoji: "😊", label: "Okay today", color: "bg-green-500/10 border-green-500/30" },
            ].map((m) => (
              <Button
                key={m.label}
                variant="outline"
                size="sm"
                className={`${mood === m.label ? m.color + " border-2" : ""}`}
                onClick={() => setMood(m.label)}
              >
                <span className="mr-1">{m.emoji}</span>
                {m.label}
              </Button>
            ))}
          </div>
          {mood && (
            <div className="mt-4 p-3 rounded-lg bg-muted/50">
              <p className="text-sm">
                {mood === "Overwhelmed" && "It's okay to feel this way. You're carrying a lot. Remember: you don't have to do everything today. 💙"}
                {mood === "Anxious" && "Your worries are valid, but they don't define your future. Take a deep breath. You've handled hard things before. 💜"}
                {mood === "Left out" && "FOMO is real, but so is the peace you get from taking care of yourself. The right people will always include you. 💙"}
                {mood === "Frustrated" && "It's okay to be upset. Feel it, but don't let it consume you. You're allowed to be human. 💗"}
                {mood === "Exhausted" && "Rest is productive too. Your brain and body need recovery time. It's not laziness, it's self-care. 🩶"}
                {mood === "Need a hug" && "Sending you the biggest virtual hug. You are loved, even when it doesn't feel like it. 💕"}
                {mood === "Okay today" && "That's wonderful! Celebrate the okay days. They matter just as much as the great ones. 💚"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Starry Sky - Interactive calming */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Stars className="h-5 w-5 text-yellow-500" />
            Your Night Sky
            <Badge variant="outline" className="ml-auto text-xs">Tap to add stars ✨</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div 
            className="h-40 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 relative cursor-pointer overflow-hidden"
            onClick={addStar}
          >
            {/* Moon */}
            <div className="absolute top-4 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg shadow-yellow-200/30" />
            {/* Stars */}
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ left: star.x, top: star.y, boxShadow: "0 0 6px 2px rgba(255,255,255,0.5)" }}
              />
            ))}
            {/* Clouds */}
            <Cloud className="absolute bottom-2 left-4 h-12 w-12 text-white/10" />
            <Cloud className="absolute bottom-4 right-12 h-8 w-8 text-white/5" />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-xs">
              {stars.length > 0 ? `${stars.length} wishes made ✨` : "Tap anywhere to make a wish"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* FOMO Fighter */}
      <Card className="border-indigo-500/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Sun className="h-5 w-5 text-amber-500" />
            FOMO Fighter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {fomoReminders.map((reminder, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/5">
                <span className="text-amber-500 mt-0.5">✦</span>
                <span className="text-sm">{reminder}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trust Building Affirmations */}
      <Card className="border-emerald-500/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-500" />
            Building Trust (At Your Pace)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {trustAffirmations.map((affirmation, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-emerald-500/5 transition-colors">
                <Heart className="h-3 w-3 text-emerald-500 shrink-0" />
                <span className="text-sm">{affirmation}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Self-Care Ideas */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Flower2 className="h-5 w-5 text-pink-500" />
            Tiny Self-Care Ideas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {selfCareIdeas.map((idea, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
              >
                <idea.icon className={`h-6 w-6 ${idea.color}`} />
                <span className="text-xs">{idea.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Private Note */}
      <Card className="border-purple-500/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Lock className="h-5 w-5 text-purple-500" />
              Your Private Note
            </CardTitle>
            <Badge variant="outline" className="text-xs text-purple-500 border-purple-500/30">
              Saved locally only
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write anything here... your worries, your wins, your secrets. This stays on your device only. 💜"
            value={privateNote}
            onChange={(e) => setPrivateNote(e.target.value)}
            className="min-h-[120px] border-purple-500/20 focus:border-purple-500/50"
          />
          <p className="text-xs text-muted-foreground mt-2">
            🔒 This note is stored only on your device. No one else can see it.
          </p>
        </CardContent>
      </Card>

      {/* Secret Encouragement */}
      <Card 
        className="cursor-pointer hover:border-pink-500/30 transition-all"
        onClick={() => setShowSecret(!showSecret)}
      >
        <CardContent className="p-4 text-center">
          {!showSecret ? (
            <p className="text-sm text-muted-foreground">
              ✨ Tap here for a secret message ✨
            </p>
          ) : (
            <div className="space-y-2">
              <p className="text-lg font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                You&apos;re going to do amazing things.
              </p>
              <p className="text-sm text-muted-foreground">
                Being a topper is impressive, but being YOU is extraordinary. 
                Don&apos;t forget to be kind to yourself on this journey. 💜
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
