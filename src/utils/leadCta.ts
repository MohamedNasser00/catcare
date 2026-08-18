import { trackEvent } from "@/services/analyticsService";
import { hasOwnerForm, hasSitterForm, isDev, siteConfig } from "@/config/site";

export function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openForm(url: string, kind: "owner" | "sitter") {
  if (!url) {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.warn(
        `[CatCare] Missing VITE_${kind.toUpperCase()}_GOOGLE_FORM_URL — set it in .env before deploying.`,
      );
      window.alert(
        `Development notice: the ${kind} Google Form URL is not configured yet.\nSet VITE_${kind.toUpperCase()}_GOOGLE_FORM_URL in your .env file.`,
      );
    }
    return;
  }
  // Open in a new tab with the same security as rel="noopener noreferrer".
  window.open(url, "_blank", "noopener,noreferrer");
}

export function goToOwnerForm(location: string) {
  trackEvent("owner_cta_click", { location });
  trackEvent("owner_google_form_open", { location });
  openForm(siteConfig.ownerFormUrl, "owner");
}

export function goToSitterForm(location: string) {
  trackEvent("sitter_cta_click", { location });
  trackEvent("sitter_google_form_open", { location });
  openForm(siteConfig.sitterFormUrl, "sitter");
}

export { hasOwnerForm, hasSitterForm };
