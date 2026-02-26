
"use client";

import type { Reel } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { icons, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReelCardProps {
  reel: Reel;
  index: number;
}

const gradientPalettes = [
  "from-fuchsia-500/55 via-purple-500/35 to-indigo-500/35",
  "from-cyan-500/55 via-blue-500/35 to-violet-500/35",
  "from-emerald-500/55 via-teal-500/35 to-cyan-500/35",
  "from-amber-500/55 via-orange-500/35 to-rose-500/35",
  "from-sky-500/55 via-indigo-500/35 to-fuchsia-500/35",
];

export function ReelCard({ reel, index }: ReelCardProps) {
  // A small set of default icons or a fallback is good practice
  const LucideIcon = icons[reel.icon as keyof typeof icons] || AlertTriangle;
  const gradientClass = gradientPalettes[index % gradientPalettes.length];

  return (
    <div className="h-full min-h-full w-full snap-start flex items-stretch justify-center px-2 py-1 sm:px-3 sm:py-1.5">
      <Card className={cn(
        "w-full h-full flex flex-col justify-between p-5 sm:p-6 shadow-xl border-primary/20 rounded-[1.75rem]",
        `bg-gradient-to-br ${gradientClass}`,
        "animate-in fade-in-50 zoom-in-95 duration-500 overflow-hidden"
      )}>
        <div className="flex items-center justify-between gap-3 text-primary">
          <div className="flex items-center gap-3 min-w-0">
            <div className="rounded-xl bg-background/70 p-2">
              <LucideIcon className="h-6 w-6 shrink-0" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold truncate text-foreground">{reel.title}</h2>
          </div>
          <span className="rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">REEL</span>
        </div>
        <CardContent className="flex-1 flex items-center justify-center p-0 my-3 sm:my-5">
          <p className="text-[1.7rem] sm:text-3xl font-semibold text-center leading-[1.45] sm:leading-[1.5] px-1 sm:px-2 text-foreground">
            {reel.content}
          </p>
        </CardContent>
        <div className="rounded-xl bg-background/60 px-3 py-1.5 text-center text-muted-foreground text-xs font-medium backdrop-blur-sm">
          LawPrep Reels • Swipe up for next
        </div>
      </Card>
    </div>
  );
}
