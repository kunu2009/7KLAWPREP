
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
  SidebarTrigger,
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
  PlaySquare
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/mcqs", label: "Daily MCQs", icon: ListChecks },
  { href: "/notes", label: "Topic Notes", icon: BookText },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/reels", label: "Legal Reels", icon: PlaySquare },
  { href: "/planner", label: "Study Planner", icon: CalendarClock },
  { href: "/progress", label: "Progress Tracker", icon: LineChart },
  { href: "/summarizer", label: "Summarizer", icon: FileText },
  { href: "/search", label: "Search Content", icon: Search },
  { href: "/assistant", label: "AI Assistant", icon: MessageCircle },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

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
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={{ children: item.label, side: 'right' }}>
                  <a>
                    <item.icon />
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto flex flex-col items-center gap-2 p-2">
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
