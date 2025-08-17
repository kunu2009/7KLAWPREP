
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar, useSidebar } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

function AppLayoutContent({ children }: { children: ReactNode }) {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
      
      {isCollapsed && (
         <div className="fixed top-4 right-4 z-20">
            <Button size="icon" onClick={toggleSidebar} variant="outline" className="shadow-md">
                <PanelLeft/>
                <span className="sr-only">Open Sidebar</span>
            </Button>
         </div>
      )}

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
