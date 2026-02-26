"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useFeatureToggles, SectionToggleKey } from "@/context/feature-toggles";
import { ArrowUp, ArrowDown, EyeOff, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "next-themes";
import {
  AppCustomization,
  DEFAULT_APP_CUSTOMIZATION,
  applyAppCustomization,
  getStoredAppCustomization,
  saveAppCustomization,
} from "@/lib/app-customization";

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
  const { theme, setTheme } = useTheme();
  const { sections, sectionOrder, zenMode, profile, updateSection, reorderSections, toggleZenMode, updateProfile, resetSections } = useFeatureToggles();
  const [customization, setCustomization] = React.useState<AppCustomization>(DEFAULT_APP_CUSTOMIZATION);

  React.useEffect(() => {
    const loaded = getStoredAppCustomization();
    setCustomization(loaded);
    applyAppCustomization(loaded);
  }, []);

  const handleCustomizationChange = <K extends keyof AppCustomization>(key: K, value: AppCustomization[K]) => {
    const next = { ...customization, [key]: value };
    setCustomization(next);
    saveAppCustomization(next);
  };

  const resetAppCustomization = () => {
    setCustomization(DEFAULT_APP_CUSTOMIZATION);
    saveAppCustomization(DEFAULT_APP_CUSTOMIZATION);
  };

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
        <p className="text-muted-foreground">Customize your app look, dashboard layout, and study visibility.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>App Appearance</CardTitle>
          <CardDescription>Tune theme, colors, readability, and shape across the whole app.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium">Theme Mode</p>
              <Select value={theme ?? "system"} onValueChange={(value) => setTheme(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Theme mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Accent Theme</p>
              <Select value={customization.accent} onValueChange={(value: AppCustomization["accent"]) => handleCustomizationChange("accent", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Accent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indigo">Indigo (Default)</SelectItem>
                  <SelectItem value="emerald">Emerald</SelectItem>
                  <SelectItem value="rose">Rose</SelectItem>
                  <SelectItem value="amber">Amber</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Text Scale</p>
              <Select value={customization.scale} onValueChange={(value: AppCustomization["scale"]) => handleCustomizationChange("scale", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Text scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Corner Style</p>
              <Select value={customization.radius} onValueChange={(value: AppCustomization["radius"]) => handleCustomizationChange("radius", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Corner style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sharp">Sharp</SelectItem>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="soft">Soft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Reset all appearance changes to default?</p>
            <Button variant="outline" onClick={resetAppCustomization}>Reset appearance</Button>
          </div>
        </CardContent>
      </Card>

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
