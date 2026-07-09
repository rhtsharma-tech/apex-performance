"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { cn, formatPrice, getDiscountPercent } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  yellow: "bg-yellow-500 text-black",
  red: "bg-red-500 text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  const deactivate = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    if (!isActive) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(e.target as Node)
      ) {
        deactivate();
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isActive, deactivate]);

  const handleCardTap = (e: React.MouseEvent) => {
    if (!isActive) {
      e.preventDefault();
      setIsActive(true);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    deactivate();
  };

  return (
    <div ref={cardRef}>
      <Link
        href={`/product/${product.slug}`}
        onClick={handleCardTap}
        className={cn(
          "group bento-card block bg-surface border rounded-xl overflow-hidden transition-all duration-300",
          isActive
            ? "border-primary/50 shadow-xl shadow-primary/10 -translate-y-1"
            : "border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50"
        )}
      >
        {/* Image */}
        <div className="relative aspect-square bg-surface-mid overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={cn(
              "object-cover transition-transform duration-500",
              isActive
                ? "scale-105"
                : "group-hover:scale-105"
            )}
          />

          {product.badge && (
            <span
              className={cn(
                "absolute top-3 left-3 px-2 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded",
                badgeColors[product.badgeColor || "yellow"]
              )}
            >
              {product.badge}
            </span>
          )}

          <button
            onClick={handleAddToCart}
            className={cn(
              "absolute bottom-3 right-3 w-9 h-9 bg-primary rounded-full flex items-center justify-center transition-all duration-300",
              isActive
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
            )}
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1">
            {product.category.name}
          </p>
          <h3
            className={cn(
              "font-display text-sm uppercase leading-tight mb-2 line-clamp-2 transition-colors",
              isActive
                ? "text-primary"
                : "text-on-surface group-hover:text-primary"
            )}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-mono text-sm font-bold",
                hasDiscount ? "text-primary" : "text-on-surface"
              )}
            >
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <>
                <span className="font-mono text-xs text-on-surface-dim line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
                <span className="font-mono text-[10px] text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded">
                  -{getDiscountPercent(product.originalPrice!, product.price)}%
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
