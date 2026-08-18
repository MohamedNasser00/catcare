import { Button } from "@/components/ui/button";
import heroCat from "@/assets/hero-cat.jpg";
import { ownerFormUrl, sitterFormUrl, trackOwnerCta, trackSitterCta } from "@/utils/leadCta";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-soft)]">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Launching in Egypt • Starting with Cairo &amp; Giza
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Your cat deserves great care, even when you&apos;re away.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Find a trusted cat sitter in your area and stay connected with daily photos, updates,
            and care reports.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a
                href={ownerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOwnerCta("hero")}
              >
                I Need a Cat Sitter
              </a>
            </Button>
            <Button variant="soft" size="xl" className="w-full sm:w-auto" asChild>
              <a
                href={sitterFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSitterCta("hero")}
              >
                Become a Cat Sitter
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
            <img
              src={heroCat}
              alt="A calm grey tabby cat sitting on a sunlit windowsill at home"
              width={1200}
              height={1408}
              fetchPriority="high"
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
            />
          </div>

          <div className="absolute -bottom-6 left-3 w-[16.5rem] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:left-auto sm:-right-2 sm:w-72">
            <p className="text-sm font-semibold text-foreground">🐱 Luna</p>
            <p className="text-xs text-muted-foreground">Today&apos;s Care Report</p>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              <li>✓ Food</li>
              <li>✓ Water</li>
              <li>✓ Litter</li>
              <li>📸 3 Photos</li>
            </ul>
            <p className="mt-3 rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
              😸 Happy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
