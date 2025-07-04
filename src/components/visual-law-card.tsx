
"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { VisualLawItem } from '@/lib/types';
import { Expand } from 'lucide-react';

interface VisualLawCardProps {
  item: VisualLawItem;
}

export function VisualLawCard({ item }: VisualLawCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:border-primary transition-colors flex flex-col h-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.category}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                data-ai-hint={item.aiHint}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Expand className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={1200}
            height={800}
            className="w-full h-auto rounded-md border"
            data-ai-hint={item.aiHint}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
