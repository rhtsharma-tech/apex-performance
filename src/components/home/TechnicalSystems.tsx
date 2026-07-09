import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function TechnicalSystems() {
  const displayCategories = categories.slice(0, 4);

  return (
    <section className="relative px-[var(--spacing-margin-mobile)] py-24 md:px-[var(--spacing-margin-desktop)]">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            TECHNICAL SYSTEMS
          </h2>
          <p className="mt-2 font-body text-on-surface-muted">
            Browse our full catalog of performance categories.
          </p>
        </div>
        <Link
          href="/shop"
          className="hidden font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-dim md:block"
        >
          Explore Systems &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        {displayCategories.map((category, i) => {
          const isLarge = i === 0;

          return (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-lg bento-card ${
                isLarge
                  ? "md:col-span-3 md:row-span-2"
                  : i === 1
                    ? "md:col-span-3"
                    : "md:col-span-3"
              } ${isLarge ? "min-h-[400px] md:min-h-full" : "min-h-[250px]"}`}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-bold md:text-2xl">
                  {category.name}
                </h3>

                {isLarge && (
                  <p className="mt-2 max-w-sm font-body text-sm text-on-surface-muted">
                    {category.description}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-mid/80 px-3 py-1 font-mono text-xs text-on-surface-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/shop"
        className="mt-6 block font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-dim md:hidden"
      >
        Explore Systems &rarr;
      </Link>
    </section>
  );
}
