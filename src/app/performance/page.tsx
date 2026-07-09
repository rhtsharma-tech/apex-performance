import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import Breadcrumb from "@/components/layout/Breadcrumb";

const featuredIds = ["p1", "p4", "p10", "p6", "p7", "p3"];
const featuredProducts = products.filter((p) => featuredIds.includes(p.id));

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Performance" },
];

export default function PerformancePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-6 mb-16 overflow-hidden rounded-lg">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpi9O6_yBMHcNq-dgITm_h4-CMulvsiqTIN0lBSvAMA0m-gO1lft8NCoP5gmb668TEUZ4imsKkdNF7j8yzBVwRlf8_25RapRmVj3IAsTIInD4rd0P6vo3Q-3GY_MqhvcVHgUB_8slfB6UCNKN-JnEQFVBCTohdAx5BmAdOcJ3K_Q4zXkQE5qPcmRxo12Lzj1AJcTBb3CzDcVwEE35dW_q9DPpUAjcWmKVNJjzfgjpK-B8aBecF6A9EOYFWbJqS__eNUB3wmONfrnMs"
            alt="Track-validated performance"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-4 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-on-surface-dim">
                Race-Day Components
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              TRACK-VALIDATED{" "}
              <span className="italic text-primary">PERFORMANCE</span>
            </h1>
            <p className="mt-3 max-w-lg font-body text-sm text-on-surface-muted md:mt-4 md:text-base">
              Components tested at the limit. Every part is validated on-track
              before reaching your garage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Featured Components
            </h2>
            <p className="mt-1 font-body text-sm text-on-surface-muted">
              Curated picks from our racing engineering team.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-dim md:block"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative overflow-hidden rounded-lg glass-card bento-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase ${
                      product.badgeColor === "red"
                        ? "bg-secondary text-white"
                        : "bg-primary text-black"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-on-surface-muted">
                  {product.category.name}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs text-on-surface-muted">
                      {product.rating}
                    </span>
                    <span className="text-primary text-xs">&#9733;</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.chips.slice(0, 3).map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-surface-mid/80 px-2.5 py-0.5 font-mono text-[10px] text-on-surface-dim"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-6 block font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-dim md:hidden text-center"
        >
          View All &rarr;
        </Link>
      </section>

      {/* Stats */}
      <section className="mb-16 rounded-lg glass-panel p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { value: "500+", label: "Track Validations" },
            { value: "12,000+", label: "Cars Served" },
            { value: "98%", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-on-surface-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Ready to <span className="italic text-primary">Upgrade</span>?
        </h2>
        <p className="mt-3 font-body text-on-surface-muted max-w-md mx-auto">
          Browse our full catalog of track-validated performance components.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded bg-primary px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
        >
          Explore Full Catalog
        </Link>
      </section>
    </>
  );
}
