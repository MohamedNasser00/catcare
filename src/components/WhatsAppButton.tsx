import { MessageCircle } from "lucide-react";
import { ownerWhatsAppUrl } from "@/utils/whatsapp";
import { trackEvent } from "@/services/analyticsService";
import { hasWhatsApp } from "@/config/site";

export function WhatsAppButton() {
  if (!hasWhatsApp()) return null;

  return (
    <a
      href={ownerWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CatCare on WhatsApp"
      onClick={() => trackEvent("whatsapp_owner_click", { location: "floating_button" })}
      className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-sm font-medium text-[var(--whatsapp-foreground)] shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with CatCare</span>
    </a>
  );
}
