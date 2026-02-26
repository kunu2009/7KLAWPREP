"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Command } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";

type CommandItem = {
  href: string;
  label: string;
  category: "Learn" | "Practice" | "Analyze" | "AI";
};

const commandItems: CommandItem[] = [
  { href: "/", label: "Dashboard", category: "Learn" },
  { href: "/notes", label: "Topic Notes", category: "Learn" },
  { href: "/flashcards", label: "Flashcards", category: "Learn" },
  { href: "/bare-acts", label: "Bare Acts", category: "Learn" },
  { href: "/mcqs", label: "Daily MCQs", category: "Practice" },
  { href: "/daily-25", label: "Daily 25", category: "Practice" },
  { href: "/legal-drill", label: "Legal Drill", category: "Practice" },
  { href: "/mock-test", label: "Mock Test", category: "Practice" },
  { href: "/progress", label: "Progress Tracker", category: "Analyze" },
  { href: "/error-log", label: "Error Log", category: "Analyze" },
  { href: "/planner", label: "Study Planner", category: "Analyze" },
  { href: "/search", label: "Search Content", category: "Analyze" },
  { href: "/assistant", label: "AI Assistant", category: "AI" },
  { href: "/summarizer", label: "Summarizer", category: "AI" },
  { href: "/visual-law", label: "Visual Law", category: "AI" },
];

export function GlobalCommandLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return commandItems;

    return commandItems.filter(
      (item) =>
        item.label.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.href.toLowerCase().includes(term)
    );
  }, [query]);

  const selectCommand = (item: CommandItem) => {
    trackEvent("home_tool_hop", {
      destination: item.href,
      source: "command_launcher",
    });
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 text-muted-foreground"
        aria-label="Open command launcher"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <span className="hidden md:inline text-xs">Ctrl+K</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-2 text-base">
              <Command className="h-4 w-4" />
              Jump to any module
            </DialogTitle>
          </DialogHeader>

          <div className="p-4 space-y-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search modules, tools, routes..."
              autoFocus
            />

            <div className="max-h-[360px] overflow-auto space-y-1">
              {filteredItems.length ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => selectCommand(item)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted ${
                      pathname === item.href ? "bg-muted" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.href}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {item.category}
                    </Badge>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground px-2 py-3">
                  No matches found.
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
