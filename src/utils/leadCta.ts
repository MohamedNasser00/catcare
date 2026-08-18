import { trackEvent } from "@/services/analyticsService";
import { hasOwnerForm, hasSitterForm, siteConfig } from "@/config/site";

export const ownerFormUrl = siteConfig.ownerFormUrl;
export const sitterFormUrl = siteConfig.sitterFormUrl;

export function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Analytics-only click handlers for the CTA anchors.
 * Navigation happens natively via <a href target="_blank" rel="noopener noreferrer">,
 * so popup blockers cannot swallow it. These handlers must never call
 * window.open or preventDefault, and errors are swallowed so tracking
 * can never break navigation.
 */
export function trackOwnerCta(location: string) {
  try {
    trackEvent("owner_cta_click", { location });
    trackEvent("owner_google_form_open", { location });
  } catch {
    // analytics must never break navigation
  }
}

export function trackSitterCta(location: string) {
  try {
    trackEvent("sitter_cta_click", { location });
    trackEvent("sitter_google_form_open", { location });
  } catch {
    // analytics must never break navigation
  }
}

export { hasOwnerForm, hasSitterForm };
