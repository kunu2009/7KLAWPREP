import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { FeatureToggleProvider } from "@/context/feature-toggles";
import { RevisionModeProvider } from "@/context/revision-mode-context";
import { RevisionModeBanner } from "@/components/revision-mode-banner";
import { ReactNode } from "react";
import { GlobalCommandLauncher } from "@/components/global-command-launcher";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <AppSidebar />
      </Sidebar>
      <FeatureToggleProvider>
        <RevisionModeProvider>
          <SidebarInset className="flex flex-col min-w-0">
            <RevisionModeBanner />
            <header className="sticky top-0 z-10 flex h-12 sm:h-14 items-center justify-between gap-3 border-b bg-background/90 px-3 sm:px-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-base sm:text-lg font-semibold">LawPrep Sprint</h1>
              </div>
              <GlobalCommandLauncher />
            </header>
            <main className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto p-3 pb-20 sm:p-6 md:pb-6">{children}</main>
            <MobileBottomNav />
          </SidebarInset>
        </RevisionModeProvider>
      </FeatureToggleProvider>
    </SidebarProvider>
  );
}
