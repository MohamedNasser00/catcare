import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ownerFormUrl, trackOwnerCta } from "@/utils/leadCta";

const benefits = [
  "Home visits",
  "Feeding",
  "Water",
  "Litter cleaning",
  "Medication support",
  "Playtime",
  "Daily photos",
  "Daily notes",
];

export function OwnerSection() {
  return (
    <section id="for-owners" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Going away soon? We&apos;ve got your cat.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A sitter visits your home, follows your instructions, and sends you an update after
            every visit.
          </p>
          <Button variant="hero" size="xl" className="mt-8 w-full sm:w-auto" asChild>
            <a
              href={ownerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOwnerCta("owner_section")}
            >
              I Need a Cat Sitter
            </a>
          </Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
