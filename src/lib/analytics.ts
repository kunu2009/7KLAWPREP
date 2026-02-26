export type AnalyticsEvent =
  | "home_session_start"
  | "home_tool_hop"
  | "session_completed"
  | "ai_question_submitted"
  | "ai_summary_requested"
  | "ai_citation_clicked";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

const STORAGE_KEY = "lawprep_analytics_events";

export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  const record = {
    event,
    payload,
    timestamp: new Date().toISOString(),
  };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const events = raw ? (JSON.parse(raw) as Array<typeof record>) : [];
    events.push(record);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events.slice(-1000)));
  } catch {
    // no-op on storage issues
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", record);
  }
}
