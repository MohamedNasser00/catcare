import { CalendarClock, MapPin, Wallet, Cat, Star, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { goToSitterForm } from "@/utils/leadCta";

const benefits = [
  { icon: CalendarClock, label: "Flexible schedule" },
  { icon: MapPin, label: "Choose your service area" },
  { icon: Wallet, label: "Set your own price" },
  { icon: Cat, label: "Care for cats locally" },
  { icon: Star, label: "Build your reputation" },
  { icon: Coins, label: "Earn per booking" },
];

export function SitterSection() {
  return (
    <section id="for-sitters" className="section-padding bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Love cats? Turn that into a side income.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re building a trusted network of cat sitters across Egypt. If you love cats and
            can provide reliable care, join our early sitter network.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="accent"
          size="xl"
          className="mt-8 w-full sm:w-auto"
          onClick={() => goToSitterForm("sitter_section")}
        >
          Become a Cat Sitter
        </Button>
      </div>
    </section>
  );
}
