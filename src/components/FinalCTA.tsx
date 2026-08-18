import { Button } from "@/components/ui/button";
import { ownerFormUrl, sitterFormUrl, trackOwnerCta, trackSitterCta } from "@/utils/leadCta";

export function FinalCTA() {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Ready to give your cat better care?
        </h2>
        <p className="mt-4 text-muted-foreground">Join the CatCare early access list.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a
              href={ownerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOwnerCta("final_cta")}
            >
              I Need a Cat Sitter
            </a>
          </Button>
          <Button variant="soft" size="xl" className="w-full sm:w-auto" asChild>
            <a
              href={sitterFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSitterCta("final_cta")}
            >
              Become a Sitter
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
