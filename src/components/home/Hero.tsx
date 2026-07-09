"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/lib/data";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-dim">
            {heroSlides[current].tag}
          </span>
        </div>

        <h1 className="font-display text-6xl font-bold leading-none tracking-tight md:text-8xl lg:text-9xl">
          PERFORMANCE{" "}
          <span className="italic text-primary">REDEFINED</span>
        </h1>

        <p className="mt-6 max-w-xl font-body text-lg text-on-surface-muted md:text-xl">
          Precision-engineered components for drivers who demand more. From
          track-day builds to daily-driven machines.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded bg-primary px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
          >
            Shop Catalog
          </Link>
          <Link
            href="/specs"
            className="glass inline-flex items-center justify-center rounded px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-on-surface transition-colors hover:border-primary/40"
          >
            Track Specs
          </Link>
        </div>

        <div className="absolute bottom-12 left-[var(--spacing-margin-mobile)] flex gap-2 md:left-[var(--spacing-margin-desktop)]">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current
                  ? "w-10 bg-primary"
                  : "w-5 bg-on-surface-muted/30 hover:bg-on-surface-muted/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
