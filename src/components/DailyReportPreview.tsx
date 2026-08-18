import report1 from "@/assets/report-1.jpg";
import report2 from "@/assets/report-2.jpg";
import report3 from "@/assets/report-3.jpg";

const checklist = [
  { emoji: "🍗", label: "Food", value: "Completed" },
  { emoji: "💧", label: "Water", value: "Changed" },
  { emoji: "🧹", label: "Litter", value: "Cleaned" },
  { emoji: "💊", label: "Medication", value: "Given" },
  { emoji: "🎾", label: "Playtime", value: "20 minutes" },
];

const photos = [
  { src: report1, alt: "Cat eating from a ceramic bowl at home" },
  { src: report2, alt: "Cat playing with a feather toy on a rug" },
  { src: report3, alt: "Cat sleeping curled up on a cream sofa" },
];

export function DailyReportPreview() {
  return (
    <section id="daily-report" className="section-padding bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Know how your cat is doing. Every day.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every visit ends with a care report, so you never have to guess.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-border bg-background p-5 shadow-[var(--shadow-card)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div>
              <p className="text-lg font-semibold text-foreground">🐱 Luna</p>
              <p className="text-sm text-muted-foreground">Daily Care Report</p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Day 3 of 5
            </span>
          </div>

          <div className="grid gap-8 pt-6 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Care Checklist
              </h3>
              <ul className="mt-3 space-y-2">
                {checklist.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      <span aria-hidden="true">{item.emoji}</span> {item.label}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Mood
              </h3>
              <p className="mt-2 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                😸 Happy
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Photos
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {photos.map((photo) => (
                  <img
                    key={photo.alt}
                    src={photo.src}
                    alt={photo.alt}
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                ))}
              </div>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Sitter Note
              </h3>
              <blockquote className="mt-2 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground">
                &ldquo;Luna was active today and finished all her food.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">Completed: 6:30 PM</p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          You shouldn&apos;t have to wonder how your cat is doing.
        </p>
      </div>
    </section>
  );
}
