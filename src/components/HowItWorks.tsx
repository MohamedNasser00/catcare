import { Button } from "@/components/ui/button";
import { ownerFormUrl, trackOwnerCta } from "@/utils/leadCta";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Cat",
    text: "Tell us your location, dates, number of cats, and care requirements.",
  },
  {
    number: "02",
    title: "We Find the Right Sitter",
    text: "We'll connect you with available cat sitters in your area.",
  },
  {
    number: "03",
    title: "Stay Connected",
    text: "Receive daily photos and care updates while you're away.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="surface-card p-7">
              <span className="font-display text-3xl font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a
              href={ownerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOwnerCta("how_it_works")}
            >
              Find My Cat Sitter
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
