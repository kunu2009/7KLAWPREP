
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { applyAppCustomization, getStoredAppCustomization } from "@/lib/app-customization";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    applyAppCustomization(getStoredAppCustomization());
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
