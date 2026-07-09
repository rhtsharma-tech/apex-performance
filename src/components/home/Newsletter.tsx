"use client";

import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="px-[var(--spacing-margin-mobile)] py-24 md:px-[var(--spacing-margin-desktop)]">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Join the{" "}
            <span className="italic text-primary">INNER CIRCLE</span>
          </h2>

          <p className="mt-4 max-w-md font-body text-on-surface-muted">
            Get exclusive early access to new product launches, track-day
            insights, and technical build breakdowns delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full rounded bg-surface-mid px-4 py-3 font-body text-sm text-on-surface placeholder-on-surface-muted/50 outline-none ring-1 ring-outline-dim transition-colors focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full rounded bg-primary px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
            >
              Request Secure Access
            </button>
          </form>
        </div>

        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl md:block">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwZtwkurDXzYkSk1Hpwv4nAUNI2BLny162QkNzIELiMfyN8NahQ-U9dUzqMrAqYmJPhiCSeWGQ3ijVjiAlEvKrAjmruAeT2hE4bBdLoo3-M0W_3oP39rMGO9kSvxOb2nI2_YrE492-WfX4-lFSH-RdBt0IRUX4KQKIscoAoJ2yX4a7j4rr7SMSdI2hD3yW6zrkbif31KH9Jl0INODLLY29GEQ7vmoVNpv-x80v4eqcGyYa-TSBosT3Vg4Mnz695MdSgZ9Jdn9L3Zn"
            alt="Performance cockpit"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 md:hidden" />
        </div>
      </div>
    </section>
  );
}
