"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function NewArrivals() {
  const displayProducts = products.slice(0, 4);

  return (
    <section className="px-[var(--spacing-margin-mobile)] py-24 md:px-[var(--spacing-margin-desktop)]">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              NEW ARRIVALS
            </h2>
            <div className="h-px flex-1 bg-outline-dim" />
          </div>
        </div>
        <Link
          href="/shop?sort=newest"
          className="font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-dim"
        >
          View 2024 Releases &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayProducts.map((product) => (
          <ArrivalCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ArrivalCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const { addItem } = useCart();
  const [isPulsing, setIsPulsing] = useState(false);

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(product);
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    },
    [addItem, product]
  );

  return (
    <div className="relative">
      <Link
        href={`/product/${product.slug}`}
        className={cn(
          "group glass-card bento-card block relative overflow-hidden rounded-lg transition-all duration-300",
          isPulsing
            ? "border-primary/60 shadow-[0_0_20px_rgba(255,215,0,0.35)]"
            : ""
        )}
      >
        <div className="relative aspect-square overflow-hidden bg-surface-mid">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {product.badge && (
            <span
              className={cn(
                "absolute left-3 top-3 rounded px-2 py-1 font-mono text-xs font-semibold uppercase",
                product.badge === "Sale"
                  ? "bg-secondary text-white"
                  : "bg-primary text-black"
              )}
            >
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            {product.category.name}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold text-on-surface group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 font-mono text-lg font-bold text-on-surface">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>

      <button
        onClick={handleAddToCart}
        className="absolute bottom-[72px] right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 z-10"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingCart className="h-5 w-5 text-black" />
      </button>
    </div>
  );
}
