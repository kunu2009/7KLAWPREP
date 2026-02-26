
"use client";

import { useMemo } from 'react';
import { reels } from '@/lib/data';
import { ReelCard } from '@/components/reel-card';
import { Badge } from '@/components/ui/badge';
import { PlaySquare } from 'lucide-react';

export default function ReelsPage() {
  const displayReels = useMemo(() => {
    return reels;
  }, []);

  return (
    <div className="h-full flex flex-col pb-20 md:pb-0">
      {/* Header */}
      <div className="mb-2 shrink-0">
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
