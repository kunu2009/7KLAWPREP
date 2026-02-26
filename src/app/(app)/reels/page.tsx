
"use client";

import { useMemo, useState } from 'react';
import { reels } from '@/lib/data';
import { ReelCard } from '@/components/reel-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { PlaySquare, Filter, Shuffle, ChevronDown } from 'lucide-react';

export default function ReelsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);

  const topics = useMemo(() => {
    const topicSet = new Set(reels.map(r => r.topic));
    return Array.from(topicSet).sort();
  }, []);

  const displayReels = useMemo(() => {
    let filtered = selectedTopic
      ? reels.filter(r => r.topic === selectedTopic)
      : [...reels];

    if (isShuffled) {
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
    }

    return filtered;
  }, [selectedTopic, isShuffled]);

  return (
    <div className="h-full flex flex-col pb-20 md:pb-0">
      {/* Header */}
      <div className="mb-2 shrink-0 space-y-2">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight flex items-center gap-2">
              <PlaySquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Legal Reels
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Swipe-style feed for quick legal memory hits.
            </p>
          </div>
          <Badge variant="secondary">{displayReels.length} reels</Badge>
        </div>

        <Collapsible open={controlsOpen} onOpenChange={setControlsOpen}>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => setIsShuffled((prev) => !prev)}
            >
              <Shuffle className="mr-1.5 h-3.5 w-3.5" />
              {isShuffled ? 'Shuffled' : 'Shuffle'}
            </Button>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Filter className="mr-1.5 h-3.5 w-3.5" />
                Filters
                <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${controlsOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="pt-1">
            <div className="flex items-center gap-2 flex-wrap rounded-xl border bg-card p-2">
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
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Reels Container */}
      <div className="flex-1 relative">
        {displayReels.length > 0 ? (
          <div className="absolute inset-0 h-full w-full overflow-y-auto snap-y snap-mandatory rounded-2xl border bg-muted/10">
            {displayReels.map((reel, index) => (
              <ReelCard key={reel.id} reel={reel} index={index} />
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
