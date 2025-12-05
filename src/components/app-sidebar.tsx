
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  useSidebar
} from "@/components/ui/sidebar";
import {
  BookText,
  CalendarClock,
  LayoutDashboard,
  MessageCircle,
  Search,
  LineChart,
  Scale,
  FileText,
  Layers,
  ListChecks,
  PanelLeft,
  PlaySquare,
  Projector,
  Map,
  Disc3,
  Smile,
  Gavel,
  TrendingUp,
  SmilePlus,
  Settings,
  Zap,
  Globe,
  Brain,
  BookOpen,
  GitCompare,
  ScrollText,
  CalendarDays,
  BookMarked,
  AlertCircle,
  Bolt,
  Timer,
  Shuffle,
  Eye,
  Shield,
  Moon,
  Heart
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/mcqs", label: "Daily MCQs", icon: ListChecks },
  { href: "/notes", label: "Topic Notes", icon: BookText },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/reels", label: "Legal Reels", icon: PlaySquare },
  { href: "/planner", label: "Study Planner", icon: CalendarClock },
  { href: "/progress", label: "Progress Tracker", icon: LineChart },
  { href: "/search", label: "Search Content", icon: Search },
];

const newFeatures = [
  { href: "/visual-law", label: "Visual Law", icon: Projector },
  { href: "/career-roadmap", label: "Career Roadmap", icon: Map },
  { href: "/revision-wheel", label: "Revision Wheel", icon: Disc3 },
];

const clatTools = [
  { href: "/passage-sprint", label: "Passage Sprint", icon: Zap },
  { href: "/legal-drill", label: "Legal Drill", icon: Scale },
  { href: "/question-types", label: "Question Types", icon: ListChecks },
  { href: "/gk-oneliners", label: "GK One-Liners", icon: Globe },
  { href: "/maxims", label: "Legal Maxims", icon: ScrollText },
  { href: "/comparisons", label: "Comparisons", icon: GitCompare },
  { href: "/daily-25", label: "Daily 25", icon: CalendarDays },
  { href: "/brain-dump", label: "Brain Dump", icon: Brain },
  { href: "/case-diary", label: "Case Diary", icon: BookMarked },
  { href: "/quick-revision", label: "Quick Revision", icon: Bolt },
  { href: "/error-log", label: "Error Log", icon: AlertCircle },
  { href: "/vocab-context", label: "Vocabulary Drill", icon: BookOpen },
  { href: "/speed-reading", label: "Speed Reading", icon: Eye },
  { href: "/lr-patterns", label: "LR Patterns", icon: Brain },
  { href: "/parajumble", label: "Parajumble", icon: Shuffle },
  { href: "/mini-test", label: "Mini Test", icon: Timer },
  { href: "/fact-opinion", label: "Fact vs Opinion", icon: FileText },
  { href: "/mind-maps", label: "Mind Maps", icon: Map },
  { href: "/timeline", label: "Legal Timeline", icon: CalendarClock },
  { href: "/bare-acts", label: "Bare Acts", icon: BookText },
];

const aiTools = [
  { href: "/summarizer", label: "Summarizer", icon: FileText },
  { href: "/assistant", label: "AI Assistant", icon: MessageCircle },
  { href: "/mood-study", label: "Mood Study", icon: SmilePlus },
  { href: "/courtroom-sim", label: "Courtroom Sim", icon: Gavel },
];

const wellnessTools = [
  { href: "/safe-space", label: "Safe Space", icon: Shield },
  { href: "/stress-relief", label: "Stress Relief", icon: Smile },
  { href: "/positivity-gym", label: "Positivity Gym", icon: Brain },
  { href: "/sleep-sanctuary", label: "Sleep Sanctuary", icon: Moon },
  { href: "/exam-anxiety", label: "Exam Anxiety Guide", icon: Heart },
  { href: "/mood-journal", label: "Mood Journal", icon: SmilePlus },
  { href: "/focus-timer", label: "Focus Timer", icon: Timer },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const renderMenuItems = (items: typeof menuItems) => items.map((item) => (
    <SidebarMenuItem key={item.href}>
      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={{ children: item.label, side: 'right' }}>
        <Link href={item.href}>
          <item.icon />
          <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Scale className="size-6 text-primary" />
          <h1 className="text-lg font-semibold group-data-[collapsible=icon]:hidden">LawPrep Sprint</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {renderMenuItems(menuItems)}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">New Features</h3>
          {renderMenuItems(newFeatures)}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">🔥 CLAT Tools</h3>
          {renderMenuItems(clatTools)}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">AI Tools</h3>
          {renderMenuItems(aiTools)}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">💚 Wellness</h3>
          {renderMenuItems(wellnessTools)}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto flex flex-col items-center gap-2 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip={{ children: "Settings", side: "right" }}>
              <Link href="/settings">
                <Settings />
                <span className="group-data-[collapsible=icon]:hidden">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <ThemeToggle />
        <div className="w-full group-data-[collapsible=icon]:hidden">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={toggleSidebar} className="w-full">
                <PanelLeft />
                <span>Collapse</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </>
  );
}
