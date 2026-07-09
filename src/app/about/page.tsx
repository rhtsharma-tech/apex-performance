import Link from "next/link";
import { Gauge, Target, Handshake } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every component is measured to micron tolerances. We work exclusively with ISO-certified manufacturers and enforce tolerances 30% tighter than industry standards.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Track-validated, dyno-proven, street-legal. Our parts are tested at circuits including Nürburgring, Laguna Seca, and Bathurst before release.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Direct relationships with manufacturers mean no middlemen, faster support, and parts designed to our exact specifications — not off-the-shelf compromises.",
  },
];

const team = [
  { name: "Marcus Chen", role: "Founder & CEO", bio: "Former Porsche Motorsport engineer" },
  { name: "Sarah Rodriguez", role: "Head of Engineering", bio: "15+ years in automotive R&D" },
  { name: "James Whitfield", role: "Director of Operations", bio: "Supply chain specialist" },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="mt-6 mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface/60 border border-white/10 px-4 py-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-dim">
            Our Story
          </span>
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-none">
          ENGINEERED FOR{" "}
          <span className="italic text-primary">EXCELLENCE</span>
        </h1>
      </section>

      {/* Story */}
      <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Since 2012
          </h2>
          <div className="space-y-4 font-body text-on-surface-muted leading-relaxed">
            <p>
              APEX Performance was founded by a group of racing engineers who
              saw a gap between aftermarket parts and true motorsport-grade
              components. We believed enthusiasts deserved better than
              off-the-shelf compromises.
            </p>
            <p>
              Starting from a single workshop in Austin, Texas, we&apos;ve grown
              into a trusted supplier for privateer racers, factory teams, and
              weekend warriors across North America. Every component we sell
              carries our engineering guarantee.
            </p>
            <p>
              Our direct relationships with manufacturers mean we design parts to
              our exact specifications — not the other way around. When you bolt
              on an APEX component, you&apos;re getting something tested at the
              limit before it ever reaches your garage.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 technical-grid-dense opacity-30" />
          <div className="relative flex items-center justify-center h-full min-h-[300px]">
            <div className="text-center px-8">
              <span className="font-display text-7xl font-bold text-primary md:text-8xl">
                12+
              </span>
              <p className="mt-2 font-mono text-sm uppercase tracking-wider text-on-surface-muted">
                Years of Racing Heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
          Our <span className="italic text-primary">Values</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-lg glass-card p-6 bento-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-on-surface-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
          The <span className="italic text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg glass-card p-6 bento-card"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-mid">
                <span className="font-display text-xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">{member.name}</h3>
              <p className="font-mono text-xs uppercase tracking-wider text-primary mt-1">
                {member.role}
              </p>
              <p className="mt-2 font-body text-sm text-on-surface-muted">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24 md:mb-12">
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Ready to see what{" "}
          <span className="italic text-primary">precision</span> looks like?
        </h2>
        <p className="mt-3 font-body text-on-surface-muted max-w-md mx-auto">
          Explore our full catalog of track-validated components.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded bg-primary px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}
