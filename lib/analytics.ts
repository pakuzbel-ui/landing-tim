type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

/** Sends product events without collecting any form values or personal data. */
export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
}

export function trackContactClick(
  contactType: "telegram" | "whatsapp" | "email" | "instagram" | "facebook",
  placement: string,
  locale?: string,
) {
  trackEvent("contact_click", { contact_type: contactType, placement, locale });
}
