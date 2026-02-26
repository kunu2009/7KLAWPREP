
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
  CalendarDays,
  LayoutDashboard,
  MessageCircle,
  Search,
  LineChart,
  Scale,
  FileText,
  Layers,
  ListChecks,
  PanelLeft,
  Projector,
  Map,
  Disc3,
  Settings,
  Globe,
  Shield,
  Target,
  Bolt,
  Timer,
  AlertCircle,
  Zap
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { trackEvent } from "@/lib/analytics";

const learnItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/notes", label: "Topic Notes", icon: BookText },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/bare-acts", label: "Bare Acts", icon: BookText },
  { href: "/current-affairs", label: "Current Affairs", icon: Globe },
];

const practiceItems = [
  { href: "/mcqs", label: "Daily MCQs", icon: ListChecks },
  { href: "/daily-25", label: "Daily 25", icon: CalendarDays },
  { href: "/passage-sprint", label: "Passage Sprint", icon: Zap },
  { href: "/legal-drill", label: "Legal Drill", icon: Scale },
  { href: "/mini-test", label: "Mini Test", icon: Timer },
  { href: "/mock-test", label: "Mock Test", icon: Target },
];

const analyzeItems = [
  { href: "/progress", label: "Progress Tracker", icon: LineChart },
  { href: "/error-log", label: "Error Log", icon: AlertCircle },
  { href: "/quick-revision", label: "Quick Revision", icon: Bolt },
  { href: "/planner", label: "Study Planner", icon: CalendarClock },
  { href: "/revision-wheel", label: "Revision Wheel", icon: Disc3 },
];

const moreItems = [
  { href: "/assistant", label: "AI Assistant", icon: MessageCircle },
  { href: "/summarizer", label: "Summarizer", icon: FileText },
  { href: "/visual-law", label: "Visual Law", icon: Projector },
  { href: "/career-roadmap", label: "Career Roadmap", icon: Map },
  { href: "/search", label: "Search Content", icon: Search },
  { href: "/safe-space", label: "Safe Space", icon: Shield },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const handleToolClick = (href: string, section: string) => {
    trackEvent("home_tool_hop", { destination: href, section });
  };

  const renderMenuItems = (
    items: Array<{ href: string; label: string; icon: React.ElementType }>,
    section: string
  ) => items.map((item) => (
    <SidebarMenuItem key={item.href}>
      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={{ children: item.label, side: 'right' }}>
        <Link href={item.href} onClick={() => handleToolClick(item.href, section)}>
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
          <h3 className="px-4 pt-2 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">Learn</h3>
          {renderMenuItems(learnItems, "learn")}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">Practice</h3>
          {renderMenuItems(practiceItems, "practice")}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">Analyze</h3>
          {renderMenuItems(analyzeItems, "analyze")}
        </SidebarMenu>

        <SidebarMenu>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">More</h3>
          {renderMenuItems(moreItems, "more")}
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
