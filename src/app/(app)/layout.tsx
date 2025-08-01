
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar, useSidebar } from "@/components/ui/sidebar";
import { ReactNode } from "react";

function AppLayoutContent({ children }: { children: ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
      {!isCollapsed && (
        <Sidebar side="right" collapsible="icon">
          <AppSidebar />
        </Sidebar>
      )}
    </div>
  );
}


export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
        <AppLayoutContent>{children}</AppLayoutContent>
    </SidebarProvider>
  );
}
