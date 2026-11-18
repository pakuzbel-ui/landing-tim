type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
    fbq?: (
      command: "track" | "trackCustom",
      eventName: string,
      params?: AnalyticsParams,
    ) => void;
  }
}

/** Sends product events without collecting any form values or personal data. */
export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);

  if (eventName === "generate_lead") {
    window.fbq?.("track", "Lead", params);
    return;
  }

  if (eventName === "contact_click") {
    window.fbq?.("track", "Contact", params);
    return;
  }

  window.fbq?.("trackCustom", eventName, params);
}

export function trackContactClick(
  contactType: "telegram" | "whatsapp" | "email" | "instagram" | "facebook",
  placement: string,
  locale?: string,
) {
  const params = { contact_type: contactType, placement, locale };

  // Keep the WhatsApp click in GA, but do not send it to Meta as an ad conversion.
  if (contactType === "whatsapp") {
    if (typeof window !== "undefined") window.gtag?.("event", "contact_click", params);
    return;
  }

  if (typeof window === "undefined") return;
  window.gtag?.("event", "contact_click", params);

  if (contactType === "telegram") {
    window.fbq?.("track", "Lead", params);
    return;
  }

  window.fbq?.("track", "Contact", params);
}
