
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
  Search,
  LineChart,
  Scale,
  Layers,
  ListChecks,
  PanelLeft,
  PanelRight,
  PlaySquare,
  Projector,
  Map,
  Disc3,
  SmilePlus,
  Gavel,
  ClipboardList,
  Wand2,
  Newspaper,
  Menu
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Logo } from "./logo";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/mcqs", label: "Daily MCQs", icon: ListChecks },
  { href: "/practice-quiz", label: "Practice Quiz", icon: ClipboardList },
  { href: "/notes", label: "Topic Notes", icon: BookText },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/reels", label: "Legal Reels", icon: PlaySquare },
  { href: "/planner", label: "Study Planner", icon: CalendarClock },
  { href: "/progress", label: "Progress Tracker", icon: LineChart },
  { href: "/search", label: "Search Content", icon: Search },
];

const newFeatures = [
  { href: "/current-affairs", label: "Current Affairs", icon: Newspaper },
  { href: "/visual-law", label: "Visual Law", icon: Projector },
  { href: "/career-roadmap", label: "Career Roadmap", icon: Map },
  { href: "/revision-wheel", label: "Revision Wheel", icon: Disc3 },
];

const aiTools = [
  { href: "/ai-tools", label: "AI Tools", icon: Wand2 },
  { href: "/mood-study", label: "Mood Study", icon: SmilePlus },
  { href: "/courtroom-sim", label: "Courtroom Sim", icon: Gavel },
];


export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const renderMenuItems = (items: typeof menuItems) => items.map((item) => (
    <SidebarMenuItem key={item.href}>
      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={{ children: item.label, side: 'left' }}>
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
            <Logo className="size-6 text-primary" />
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
            <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">AI Tools</h3>
            {renderMenuItems(aiTools)}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto flex flex-col items-center gap-2 p-2">
        <ThemeToggle />
         <div className="w-full">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={toggleSidebar} className="w-full" tooltip={{ children: 'Collapse Sidebar', side: 'left' }}>
                        <PanelRight />
                        <span className="group-data-[collapsible=icon]:hidden">Collapse</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </div>
      </SidebarFooter>
    </>
  );
}
