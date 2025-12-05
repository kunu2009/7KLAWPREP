"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Zap,
  Scale,
  ListChecks,
  Globe,
  ScrollText,
  GitCompare,
  CalendarDays,
  Brain,
  BookMarked,
  Bolt,
  AlertCircle,
  BookOpen,
  Eye,
  Shuffle,
  Timer,
  FileText,
  Map,
  CalendarClock,
  BookText,
  Grid3X3,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Heart,
  Smile,
  BookHeart,
  Wind
} from "lucide-react";

// All CLAT study tools with their metadata
const clatStudyTools = [
  // Core Practice
  { href: "/passage-sprint", label: "Passage Sprint", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10", category: "Core Practice", isNew: false, description: "Timed RC practice" },
  { href: "/legal-drill", label: "Legal Drill", icon: Scale, color: "text-blue-500", bg: "bg-blue-500/10", category: "Core Practice", isNew: false, description: "Legal reasoning" },
  { href: "/question-types", label: "Question Types", icon: ListChecks, color: "text-purple-500", bg: "bg-purple-500/10", category: "Core Practice", isNew: true, description: "Categorized drills" },
  { href: "/daily-25", label: "Daily 25", icon: CalendarDays, color: "text-green-500", bg: "bg-green-500/10", category: "Core Practice", isNew: false, description: "Daily practice" },
  { href: "/mini-test", label: "Mini Test", icon: Timer, color: "text-red-500", bg: "bg-red-500/10", category: "Core Practice", isNew: false, description: "Quick tests" },

  // Knowledge Building
  { href: "/gk-oneliners", label: "GK One-Liners", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10", category: "Knowledge", isNew: false, description: "Quick GK facts" },
  { href: "/maxims", label: "Legal Maxims", icon: ScrollText, color: "text-amber-500", bg: "bg-amber-500/10", category: "Knowledge", isNew: false, description: "Latin maxims" },
  { href: "/comparisons", label: "Comparisons", icon: GitCompare, color: "text-pink-500", bg: "bg-pink-500/10", category: "Knowledge", isNew: false, description: "Side-by-side" },
  { href: "/case-diary", label: "Case Diary", icon: BookMarked, color: "text-indigo-500", bg: "bg-indigo-500/10", category: "Knowledge", isNew: false, description: "Landmark cases" },
  { href: "/timeline", label: "Legal Timeline", icon: CalendarClock, color: "text-teal-500", bg: "bg-teal-500/10", category: "Knowledge", isNew: true, description: "Historical events" },
  { href: "/bare-acts", label: "Bare Acts", icon: BookText, color: "text-slate-500", bg: "bg-slate-500/10", category: "Knowledge", isNew: true, description: "Key provisions" },

  // Brain Training
  { href: "/brain-dump", label: "Brain Dump", icon: Brain, color: "text-violet-500", bg: "bg-violet-500/10", category: "Brain Training", isNew: false, description: "Active recall" },
  { href: "/vocab-context", label: "Vocabulary Drill", icon: BookOpen, color: "text-orange-500", bg: "bg-orange-500/10", category: "Brain Training", isNew: false, description: "Word power" },
  { href: "/speed-reading", label: "Speed Reading", icon: Eye, color: "text-emerald-500", bg: "bg-emerald-500/10", category: "Brain Training", isNew: false, description: "Reading speed" },
  { href: "/lr-patterns", label: "LR Patterns", icon: Brain, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", category: "Brain Training", isNew: false, description: "Logic patterns" },
  { href: "/parajumble", label: "Parajumble", icon: Shuffle, color: "text-rose-500", bg: "bg-rose-500/10", category: "Brain Training", isNew: false, description: "Sentence order" },

  // Visual Learning
  { href: "/fact-opinion", label: "Fact vs Opinion", icon: FileText, color: "text-sky-500", bg: "bg-sky-500/10", category: "Visual", isNew: true, description: "Statement sorting" },
  { href: "/mind-maps", label: "Mind Maps", icon: Map, color: "text-lime-500", bg: "bg-lime-500/10", category: "Visual", isNew: true, description: "Concept maps" },

  // Revision
  { href: "/quick-revision", label: "Quick Revision", icon: Bolt, color: "text-yellow-600", bg: "bg-yellow-600/10", category: "Revision", isNew: false, description: "Fast review" },
  { href: "/error-log", label: "Error Log", icon: AlertCircle, color: "text-red-600", bg: "bg-red-600/10", category: "Revision", isNew: false, description: "Track mistakes" },

  // Wellness & Mental Health
  { href: "/stress-relief", label: "Stress Relief", icon: Wind, color: "text-emerald-500", bg: "bg-emerald-500/10", category: "Wellness", isNew: true, description: "Breathing & calm" },
  { href: "/exam-anxiety", label: "Exam Anxiety", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10", category: "Wellness", isNew: true, description: "Anxiety tips" },
  { href: "/mood-journal", label: "Mood Journal", icon: BookHeart, color: "text-rose-500", bg: "bg-rose-500/10", category: "Wellness", isNew: true, description: "Track feelings" },
  { href: "/focus-timer", label: "Focus Timer", icon: Timer, color: "text-red-500", bg: "bg-red-500/10", category: "Wellness", isNew: true, description: "Pomodoro timer" },
];

const categories = [
  { name: "Core Practice", icon: GraduationCap, color: "text-blue-500" },
  { name: "Knowledge", icon: BookOpen, color: "text-green-500" },
  { name: "Brain Training", icon: Brain, color: "text-purple-500" },
  { name: "Visual", icon: Map, color: "text-pink-500" },
  { name: "Revision", icon: Bolt, color: "text-orange-500" },
  { name: "Wellness", icon: Heart, color: "text-emerald-500" },
];

// App-drawer style tool button
function ToolButton({ tool }: { tool: typeof clatStudyTools[0] }) {
  return (
    <Link href={tool.href}>
      <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted/80 transition-all group cursor-pointer relative">
        <div className={`p-3 rounded-2xl ${tool.bg} group-hover:scale-110 transition-transform shadow-sm`}>
          <tool.icon className={`h-6 w-6 ${tool.color}`} />
        </div>
        <span className="text-xs font-medium text-center leading-tight">{tool.label}</span>
        {tool.isNew && (
          <Badge className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0 bg-red-500 text-white">
            NEW
          </Badge>
        )}
      </div>
    </Link>
  );
}

// Full grid view for dashboard
export function StudyToolsGrid() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-primary" />
              CLAT Study Tools
            </CardTitle>
            <CardDescription>20 specialized tools for your CLAT prep</CardDescription>
          </div>
          <Badge variant="outline" className="gap-1">
            <Sparkles className="h-3 w-3" /> 9 New
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {categories.map((category) => {
          const categoryTools = clatStudyTools.filter(t => t.category === category.name);
          return (
            <div key={category.name} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <category.icon className={`h-4 w-4 ${category.color}`} />
                <span className="text-sm font-semibold text-muted-foreground">{category.name}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-1">
                {categoryTools.map((tool) => (
                  <ToolButton key={tool.href} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

// Compact horizontal scroll for quick access
export function StudyToolsCompact() {
  const featuredTools = clatStudyTools.filter(t => t.isNew || ["Passage Sprint", "Legal Drill", "Daily 25", "Quick Revision"].includes(t.label));
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            Study Tools
          </CardTitle>
          <StudyToolsDrawer>
            <Button variant="ghost" size="sm" className="text-xs">
              View All <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </StudyToolsDrawer>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <ScrollArea className="w-full">
          <div className="flex gap-3 pb-2">
            {featuredTools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-muted/80 transition-all min-w-[72px] relative">
                  <div className={`p-2.5 rounded-xl ${tool.bg}`}>
                    <tool.icon className={`h-5 w-5 ${tool.color}`} />
                  </div>
                  <span className="text-[10px] font-medium text-center leading-tight whitespace-nowrap">{tool.label}</span>
                  {tool.isNew && (
                    <Badge className="absolute -top-0.5 -right-0.5 text-[8px] px-1 py-0 bg-red-500 text-white">
                      NEW
                    </Badge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

// Sheet/Drawer for mobile-friendly full view
export function StudyToolsDrawer({ children }: { children?: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className="gap-2">
            <Grid3X3 className="h-4 w-4" />
            All Tools
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2">
            <Grid3X3 className="h-5 w-5 text-primary" />
            CLAT Study Tools
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(85vh-80px)]">
          <div className="space-y-6 pb-8">
            {categories.map((category) => {
              const categoryTools = clatStudyTools.filter(t => t.category === category.name);
              return (
                <div key={category.name}>
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <category.icon className={`h-4 w-4 ${category.color}`} />
                    <span className="text-sm font-semibold">{category.name}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {categoryTools.map((tool) => (
                      <ToolButton key={tool.href} tool={tool} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

// Large featured tools section with descriptions
export function StudyToolsFeatured() {
  const newTools = clatStudyTools.filter(t => t.isNew);
  
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-red-500/20 rounded-full">
            <Sparkles className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <CardTitle className="text-lg">🔥 New Study Tools</CardTitle>
            <CardDescription>Recently added to boost your CLAT prep</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {newTools.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="h-full hover:shadow-md transition-all hover:border-primary/50 cursor-pointer group">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className={`p-3 rounded-2xl ${tool.bg} group-hover:scale-110 transition-transform`}>
                    <tool.icon className={`h-7 w-7 ${tool.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tool.label}</p>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default StudyToolsGrid;
