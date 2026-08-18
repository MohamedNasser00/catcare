import { HeartHandshake, Camera, ClipboardList, Smile } from "lucide-react";

const solutions = [
  {
    icon: HeartHandshake,
    title: "Trusted Cat Sitters",
    text: "Connect with people who are comfortable caring for cats.",
  },
  {
    icon: Camera,
    title: "Daily Updates",
    text: "Receive photos and updates during every visit.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Care",
    text: "Your sitter follows your cat's exact feeding and care instructions.",
  },
  {
    icon: Smile,
    title: "Peace of Mind",
    text: "Know what is happening while you're away.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="section-padding bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
          CatCare keeps you connected.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
