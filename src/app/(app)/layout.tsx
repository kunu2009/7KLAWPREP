import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
        <Sidebar collapsible="icon" side="right" className="bg-card border-l">
            <AppSidebar />
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
