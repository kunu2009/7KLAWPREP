
"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Flashcard } from "@/components/flashcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { flashcards } from "@/lib/data";
import type { Flashcard as FlashcardType } from "@/lib/types";
import { Layers3, Shuffle, RotateCcw, Keyboard, ChevronLeft, ChevronRight } from "lucide-react";

export default function FlashcardsPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());

  // Get unique topics
  const topics = useMemo(() => {
    const topicSet = new Set(flashcards.map(f => f.topic));
    return Array.from(topicSet).sort();
  }, []);

  // Filter and optionally shuffle flashcards
  const displayCards = useMemo(() => {
    let cards = selectedTopic 
      ? flashcards.filter(f => f.topic === selectedTopic)
      : [...flashcards];
    
    if (isShuffled) {
      // Fisher-Yates shuffle
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
    
    return cards;
  }, [selectedTopic, isShuffled]);

  // Track current card
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      const index = api.selectedScrollSnap();
      setCurrent(index);
      if (displayCards[index]) {
        setViewedCards(prev => new Set(prev).add(displayCards[index].id));
      }
    });
  }, [api, displayCards]);

  // Mark first card as viewed
  useEffect(() => {
    if (displayCards.length > 0) {
      setViewedCards(prev => new Set(prev).add(displayCards[0].id));
    }
  }, [displayCards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        api?.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        api?.scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api]);

  const handleReset = () => {
    setViewedCards(new Set());
    setCurrent(0);
    api?.scrollTo(0);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
    setCurrent(0);
    api?.scrollTo(0);
  };

  const progressPercent = displayCards.length > 0 
    ? Math.round((viewedCards.size / displayCards.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Layers3 className="h-6 w-6 text-primary" />
            Flashcards
          </h1>
          <p className="text-muted-foreground">
            Flip through key legal terms and concepts. Click a card to see the definition.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleShuffle}>
            <Shuffle className={`h-4 w-4 mr-1 ${isShuffled ? 'text-primary' : ''}`} />
            {isShuffled ? 'Shuffled' : 'Shuffle'}
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Topic Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Filter by Topic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedTopic === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTopic(null)}
            >
              All ({flashcards.length})
            </Badge>
            {topics.map(topic => {
              const count = flashcards.filter(f => f.topic === topic).length;
              return (
                <Badge 
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic} ({count})
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Card {current + 1} of {displayCards.length}
          </span>
          <span className="text-muted-foreground">
            {viewedCards.size} viewed ({progressPercent}%)
          </span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Carousel */}
      {displayCards.length > 0 ? (
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        >
          <CarouselContent>
            {displayCards.map((flashcard: FlashcardType, index) => (
              <CarouselItem key={flashcard.id}>
                <div className="p-1">
                  <Flashcard flashcard={flashcard} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 sm:ml-8" />
          <CarouselNext className="mr-12 sm:mr-8" />
        </Carousel>
      ) : (
        <Card className="py-12">
          <CardContent className="text-center">
            <p className="text-muted-foreground">No flashcards found for this topic.</p>
          </CardContent>
        </Card>
      )}

      {/* Keyboard Hint */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Keyboard className="h-3 w-3" />
        <span>Use</span>
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">
          <ChevronLeft className="h-3 w-3 inline" />
        </kbd>
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">
          <ChevronRight className="h-3 w-3 inline" />
        </kbd>
        <span>arrow keys to navigate</span>
      </div>
    </div>
  );
}
