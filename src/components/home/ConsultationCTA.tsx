import Image from "next/image";
import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section className="relative mx-[var(--spacing-margin-mobile)] overflow-hidden rounded-2xl md:mx-[var(--spacing-margin-desktop)]">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmDw7rYrJrkj0InjPRtUPxQ3oDr13ky0pnLjVxReq_Py53zuUP5iehNN8xWq-eh3iQZ4O1haztgJLOyHN-7Hcn1m4nsamtmVsVu94OsR1hHkw6htCbLHFAj61gGzzUut-dnlq36wqciFbDZjtI_2FB4oedUUEZhxeVXbfsJnY0Lzv_a19U3FMQEOkwzqRj2YiQ3cEs4AGEIPLuEbzlTCNXchLTCAoyhx4pEB9T79fZd5MOFaWUV6cVY9F-kVgtgQw3acMcE6MuoWie"
        alt="Performance cockpit interior"
        width={1440}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />

      <div className="relative z-10 flex items-center justify-center py-24 md:py-32">
        <div className="glass mx-4 max-w-lg rounded-2xl p-8 text-center md:mx-0 md:p-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Master Technical Support
          </p>

          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            Need technical consultation for your build?
          </h2>

          <p className="mt-4 font-body text-on-surface-muted">
            Our team of race-certified technicians provides personalized
            guidance for component selection, fitment planning, and performance
            optimization.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded bg-primary px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
            >
              Speak with a tech
            </Link>
            <Link
              href="/guides"
              className="glass inline-flex items-center justify-center rounded px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-on-surface transition-colors hover:border-primary/40"
            >
              View build guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
