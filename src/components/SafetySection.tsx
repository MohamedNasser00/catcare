import { ShieldCheck, IdCard, MessagesSquare, ClipboardCheck, PhoneCall, Star } from "lucide-react";

const principles = [
  { icon: IdCard, title: "Sitter screening", text: "We're building a screening step before any sitter can accept bookings." },
  { icon: ClipboardCheck, title: "Profile information", text: "Experience, area, and services will be visible on every sitter profile." },
  { icon: Star, title: "Reviews", text: "Owners will be able to review sitters after each completed stay." },
  { icon: ShieldCheck, title: "Clear care instructions", text: "Your exact feeding, litter, and medication instructions travel with the booking." },
  { icon: PhoneCall, title: "Emergency contact", text: "A vet or emergency contact is part of every care plan." },
  { icon: MessagesSquare, title: "Transparent communication", text: "Updates after every visit, so nothing is hidden." },
];

export function SafetySection() {
  return (
    <section id="safety" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Your cat&apos;s safety comes first.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re pre-launch, so we won&apos;t claim that sitters are already verified.
            We&apos;re building a verification process for every sitter before they can accept
            bookings.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
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
