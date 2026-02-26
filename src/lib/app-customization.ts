export type AccentPreset = "indigo" | "emerald" | "rose" | "amber";
export type ScalePreset = "compact" | "default" | "large";
export type RadiusPreset = "sharp" | "default" | "soft";

export interface AppCustomization {
  accent: AccentPreset;
  scale: ScalePreset;
  radius: RadiusPreset;
}

export const APP_CUSTOMIZATION_STORAGE_KEY = "lawprep.app.customization";

export const DEFAULT_APP_CUSTOMIZATION: AppCustomization = {
  accent: "indigo",
  scale: "default",
  radius: "default",
};

const radiusMap: Record<RadiusPreset, string> = {
  sharp: "0.35rem",
  default: "0.75rem",
  soft: "1.15rem",
};

export function applyAppCustomization(customization: AppCustomization) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.dataset.accent = customization.accent;
  root.dataset.scale = customization.scale;
  root.style.setProperty("--radius", radiusMap[customization.radius]);
}

export function saveAppCustomization(customization: AppCustomization) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    APP_CUSTOMIZATION_STORAGE_KEY,
    JSON.stringify(customization)
  );
  applyAppCustomization(customization);
}

export function getStoredAppCustomization(): AppCustomization {
  if (typeof window === "undefined") return DEFAULT_APP_CUSTOMIZATION;

  const raw = window.localStorage.getItem(APP_CUSTOMIZATION_STORAGE_KEY);
  if (!raw) return DEFAULT_APP_CUSTOMIZATION;

  try {
    const parsed = JSON.parse(raw) as Partial<AppCustomization>;
    return {
      accent: parsed.accent ?? DEFAULT_APP_CUSTOMIZATION.accent,
      scale: parsed.scale ?? DEFAULT_APP_CUSTOMIZATION.scale,
      radius: parsed.radius ?? DEFAULT_APP_CUSTOMIZATION.radius,
    };
  } catch {
    return DEFAULT_APP_CUSTOMIZATION;
  }
}