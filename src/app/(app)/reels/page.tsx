
"use client";

import { useState, useMemo } from 'react';
import { reels } from '@/lib/data';
import { ReelCard } from '@/components/reel-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaySquare, Shuffle, Filter } from 'lucide-react';

export default function ReelsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);

  // Get unique topics from reels
  const topics = useMemo(() => {
    const topicSet = new Set(reels.map(r => r.topic));
    return Array.from(topicSet).sort();
  }, []);

  // Filter and optionally shuffle reels
  const displayReels = useMemo(() => {
    let filtered = selectedTopic 
      ? reels.filter(r => r.topic === selectedTopic)
      : [...reels];
    
    if (isShuffled) {
      // Fisher-Yates shuffle
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
    }
    
    return filtered;
  }, [selectedTopic, isShuffled]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-4 shrink-0 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <PlaySquare className="h-6 w-6 text-primary" />
              Legal Reels
            </h1>
            <p className="text-muted-foreground">
              Scroll through quick, memorable legal facts and concepts.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsShuffled(!isShuffled)}
            >
              <Shuffle className={`h-4 w-4 mr-1 ${isShuffled ? 'text-primary' : ''}`} />
              {isShuffled ? 'Shuffled' : 'Shuffle'}
            </Button>
            <Badge variant="secondary">{displayReels.length} reels</Badge>
          </div>
        </div>

        {/* Topic Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Badge 
            variant={selectedTopic === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTopic(null)}
          >
            All Topics
          </Badge>
          {topics.map(topic => (
            <Badge 
              key={topic}
              variant={selectedTopic === topic ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* Reels Container */}
      <div className="flex-1 relative">
        {displayReels.length > 0 ? (
          <div className="absolute inset-0 h-full w-full overflow-y-auto snap-y snap-mandatory rounded-lg border bg-muted/20">
            {displayReels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            No reels found for this topic.
          </div>
        )}
      </div>
    </div>
  );
}
