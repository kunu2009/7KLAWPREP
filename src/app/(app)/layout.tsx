import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <header className="fixed top-0 right-0 z-50 md:hidden p-2">
            <SidebarTrigger>
                <Menu />
            </SidebarTrigger>
        </header>
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
        <Sidebar side="right" collapsible="icon" className="bg-card border-l">
            <AppSidebar />
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
