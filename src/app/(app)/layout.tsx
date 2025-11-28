import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { FeatureToggleProvider } from "@/context/feature-toggles";
import { RevisionModeProvider } from "@/context/revision-mode-context";
import { RevisionModeBanner } from "@/components/revision-mode-banner";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <AppSidebar />
      </Sidebar>
      <FeatureToggleProvider>
        <RevisionModeProvider>
          <SidebarInset className="flex flex-col">
            <RevisionModeBanner />
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:hidden">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">LawPrep Sprint</h1>
            </header>
            <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
          </SidebarInset>
        </RevisionModeProvider>
      </FeatureToggleProvider>
    </SidebarProvider>
  );
}
