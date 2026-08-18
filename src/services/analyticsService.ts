import { siteConfig } from "@/config/site";

export type AnalyticsEvent =
  | "page_view"
  | "owner_cta_click"
  | "sitter_cta_click"
  | "owner_google_form_open"
  | "sitter_google_form_open"
  | "whatsapp_owner_click"
  | "whatsapp_sitter_click"
  | "faq_open";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export const analyticsEnabled = () => Boolean(siteConfig.gaMeasurementId);

export function initAnalytics() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;
  if (!analyticsEnabled()) return;

  const id = siteConfig.gaMeasurementId;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...params, source: "catcare_landing_page" };
  if (analyticsEnabled() && window.gtag) {
    window.gtag("event", event, payload);
  } else if (import.meta.env.DEV) {
    console.info("[analytics:disabled]", event, payload);
  }
}
