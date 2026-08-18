import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CatLogo } from "@/components/CatLogo";
import { navLinks, siteConfig } from "@/config/site";
import {
  ownerFormUrl,
  sitterFormUrl,
  scrollToId,
  trackOwnerCta,
  trackSitterCta,
} from "@/utils/leadCta";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToId(href.replace("#", ""));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#top");
          }}
          className="flex items-center gap-2 rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="text-primary">
            <CatLogo />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.brand}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={sitterFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSitterCta("navbar")}
            className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Become a Sitter
          </a>
          <Button variant="hero" size="lg" className="rounded-full" asChild>
            <a
              href={ownerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOwnerCta("navbar")}
            >
              Find a Cat Sitter
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-4 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3">
            <Button variant="hero" size="xl" className="w-full" asChild>
              <a
                href={ownerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOpen(false);
                  trackOwnerCta("navbar_mobile");
                }}
              >
                Find a Cat Sitter
              </a>
            </Button>
            <Button variant="soft" size="xl" className="w-full" asChild>
              <a
                href={sitterFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOpen(false);
                  trackSitterCta("navbar_mobile");
                }}
              >
                Become a Sitter
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
