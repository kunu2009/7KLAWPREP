
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter
} from "@/components/ui/sidebar";
import {
  BookText,
  CalendarClock,
  LayoutDashboard,
  MessageCircle,
  Search,
  LineChart,
  Scale,
  FileText
} from "lucide-react";

const menuItems = [
  { href: "/", label: "Daily MCQs", icon: LayoutDashboard },
  { href: "/notes", label: "Topic Notes", icon: BookText },
  { href: "/planner", label: "Study Planner", icon: CalendarClock },
  { href: "/progress", label: "Progress Tracker", icon: LineChart },
  { href: "/summarizer", label: "Summarizer", icon: FileText },
  { href: "/search", label: "Search Content", icon: Search },
  { href: "/assistant", label: "AI Assistant", icon: MessageCircle },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
            <Scale className="size-6 text-primary" />
            <h1 className="text-lg font-semibold">LawPrep Sprint</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         {/* Can add elements to the footer here later */}
      </SidebarFooter>
    </>
  );
}
