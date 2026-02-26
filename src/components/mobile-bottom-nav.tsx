"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Target, LineChart, Settings } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/mcqs", label: "Practice", icon: Target },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/progress", label: "Progress", icon: LineChart },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 md:hidden">
      <div className="mx-auto grid h-16 max-w-xl grid-cols-4 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-medium text-muted-foreground transition-colors",
                isActive && "text-primary"
              )}
            >
              <item.icon className={cn("h-4 w-4", isActive && "h-5 w-5")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
