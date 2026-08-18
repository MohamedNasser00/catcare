import { Button } from "@/components/ui/button";
import { goToOwnerForm, goToSitterForm } from "@/utils/leadCta";

export function EarlyAccess() {
  return (
    <section id="early-access" className="section-padding bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Be one of the first CatCare users.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re launching CatCare in Egypt and looking for our first cat owners and trusted
            sitters.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
            <h3 className="text-xl font-semibold text-foreground">Cat Owner</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Need someone to care for your cat while you&apos;re away?
            </p>
            <Button
              variant="hero"
              size="xl"
              className="mt-6 w-full"
              onClick={() => goToOwnerForm("early_access")}
            >
              Join as a Cat Owner
            </Button>
          </article>
          <article className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
            <h3 className="text-xl font-semibold text-foreground">Cat Sitter</h3>
            <p className="mt-2 text-sm text-muted-foreground">Love cats? Turn that into a side income.</p>
            <Button
              variant="accent"
              size="xl"
              className="mt-6 w-full"
              onClick={() => goToSitterForm("early_access")}
            >
              Join as a Sitter
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
