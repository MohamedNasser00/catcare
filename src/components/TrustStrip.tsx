const items = [
  "Cat-focused",
  "Daily updates",
  "Local sitters",
  "Simple booking",
  "Built for Egyptian cat owners",
];

export function TrustStrip() {
  return (
    <section aria-label="What CatCare stands for" className="border-y border-border bg-card">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:px-6">
        {items.map((item) => (
          <li key={item} className="text-sm font-medium tracking-wide text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
