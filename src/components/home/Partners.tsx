const partners = [
  "BREMBO",
  "KW SUSPENSION",
  "akrapovič",
  "RECARO",
  "OHLINS",
];

export default function Partners() {
  return (
    <section className="px-[var(--spacing-margin-mobile)] py-20 md:px-[var(--spacing-margin-desktop)]">
      <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-on-surface-muted">
        Authorized Tier-1 Technical Partners
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {partners.map((name) => (
          <span
            key={name}
            className="brand-logo-grayscale cursor-default font-display text-2xl font-bold italic md:text-4xl"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
