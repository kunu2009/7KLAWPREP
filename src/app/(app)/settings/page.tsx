"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useFeatureToggles, SectionToggleKey } from "@/context/feature-toggles";
import { ArrowUp, ArrowDown, EyeOff, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SECTION_COPY: Record<SectionToggleKey, { title: string; description: string }> = {
  mcqs: {
    title: "MCQ Snapshot",
    description: "Show multiple-choice question stats and quick access on the dashboard.",
  },
  flashcards: {
    title: "Flashcard Recap",
    description: "Surface flashcard counts so you can jump back into spaced repetition.",
  },
  notes: {
    title: "Topic Notes Overview",
    description: "Display how many note collections are ready for revision.",
  },
  reels: {
    title: "Legal Reels Highlight",
    description: "Keep inspirational bite-sized reels visible for rapid context refresh.",
  },
};

export default function SettingsPage() {
  const { sections, sectionOrder, zenMode, profile, updateSection, reorderSections, toggleZenMode, updateProfile, resetSections } = useFeatureToggles();

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...sectionOrder];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    reorderSections(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === sectionOrder.length - 1) return;
    const newOrder = [...sectionOrder];
    [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
    reorderSections(newOrder);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Control Center</h1>
        <p className="text-muted-foreground">Customize your dashboard layout and visibility.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>App Preferences</CardTitle>
          <CardDescription>Manage your focus and study environment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-full">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">Aspirant Profile</p>
                <p className="text-sm text-muted-foreground">Customize your learning path.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={profile.targetYear} onValueChange={(v) => updateProfile({ ...profile, targetYear: v })}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                </SelectContent>
              </Select>
              <Select value={profile.type} onValueChange={(v) => updateProfile({ ...profile, type: v })}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fresher">Fresher</SelectItem>
                  <SelectItem value="Dropper">Dropper</SelectItem>
                  <SelectItem value="Working">Working</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-full">
                <EyeOff className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">Zen Mode</p>
                <p className="text-sm text-muted-foreground">Hide metrics (counts/stats) to reduce anxiety.</p>
              </div>
            </div>
            <Switch
              checked={zenMode}
              onCheckedChange={toggleZenMode}
              aria-label="Toggle Zen Mode"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dashboard Sections</CardTitle>
          <CardDescription>Toggle visibility and reorder sections to suit your workflow.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {sectionOrder.map((key, index) => {
            const copy = SECTION_COPY[key];
            return (
              <div key={key} className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      title="Move Up"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => moveDown(index)}
                      disabled={index === sectionOrder.length - 1}
                      title="Move Down"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">{copy.title}</p>
                    <p className="text-sm text-muted-foreground">{copy.description}</p>
                  </div>
                </div>
                <Switch
                  checked={sections[key]}
                  onCheckedChange={(checked: boolean) => updateSection(key, checked)}
                  aria-label={`Toggle ${copy.title}`}
                />
              </div>
            );
          })}
          <Separator />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Reset to default layout?</p>
            <Button variant="outline" onClick={resetSections}>Reset to defaults</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
