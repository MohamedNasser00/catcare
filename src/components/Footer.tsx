import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { CatLogo } from "@/components/CatLogo";
import { hasWhatsApp, navLinks, siteConfig } from "@/config/site";
import { scrollToId } from "@/utils/leadCta";
import { ownerWhatsAppUrl } from "@/utils/whatsapp";
import { trackEvent } from "@/services/analyticsService";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-primary">
              <CatLogo />
            </span>
            <span className="font-display text-lg font-semibold">{siteConfig.brand}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="CatCare on Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="#"
              aria-label="CatCare on Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="size-4" />
            </a>
            {hasWhatsApp() && (
            <a
              href={ownerWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with CatCare on WhatsApp"
              onClick={() => trackEvent("whatsapp_owner_click", { location: "footer" })}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="size-4" />
            </a>
            )}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.href.replace("#", ""));
                  }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {hasWhatsApp() && (
            <li>
              <a
                href={ownerWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_owner_click", { location: "footer_contact" })}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground md:px-6">
        © 2026 {siteConfig.brand}. All rights reserved.
      </div>
    </footer>
  );
}
