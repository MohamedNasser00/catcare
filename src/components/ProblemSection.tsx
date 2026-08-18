import { Plane, Users, Utensils, Pill, ShieldQuestion, MessageCircle } from "lucide-react";

const problems = [
  { icon: Plane, title: "You're traveling", text: "Work trips, holidays, or family visits happen." },
  { icon: Users, title: "Help isn't always there", text: "Friends and family may not always be available." },
  { icon: Utensils, title: "Is your cat eating?", text: "You don't know if your cat is eating properly." },
  { icon: Pill, title: "Medication worries", text: "Missing a dose is not an option." },
  { icon: ShieldQuestion, title: "Trust matters", text: "You want someone you can actually trust in your home." },
  { icon: MessageCircle, title: "Silence is stressful", text: "You want real updates while you're away." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Leaving your cat alone is stressful.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cats are independent, but they still need daily care — and you still need to know
            they&apos;re okay.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <li key={title} className="surface-card p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
