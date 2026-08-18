import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasWhatsApp } from "@/config/site";
import { ownerWhatsAppUrl } from "@/utils/whatsapp";
import { trackEvent } from "@/services/analyticsService";

export function WhatsAppSection() {
  if (!hasWhatsApp()) return null;

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Have questions?</h2>
        <p className="mt-4 text-muted-foreground">
          Talk directly with CatCare on WhatsApp.
        </p>
        <Button variant="whatsapp" size="xl" className="mt-8 w-full sm:w-auto" asChild>
          <a
            href={ownerWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_owner_click", { location: "whatsapp_section" })}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Chat with CatCare
          </a>
        </Button>
      </div>
    </section>
  );
}
