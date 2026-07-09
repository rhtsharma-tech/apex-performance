"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function NewArrivals() {
  const { addItem } = useCart();
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
          <div
            key={product.id}
            className="group glass-card bento-card relative overflow-hidden rounded-lg"
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
                  className={`absolute left-3 top-3 rounded px-2 py-1 font-mono text-xs font-semibold uppercase ${
                    product.badge === "Sale"
                      ? "bg-secondary text-white"
                      : "bg-primary text-black"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => addItem(product)}
                className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                aria-label={`Add ${product.name} to cart`}
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {product.category.name}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold">
                {product.name}
              </h3>
              <p className="mt-2 font-mono text-lg font-bold text-on-surface">
                ${product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
