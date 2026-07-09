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
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group bento-card block bg-surface border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="relative aspect-square bg-surface-mid overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
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
        <h3 className="font-display text-sm uppercase text-on-surface leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className={cn("font-mono text-sm font-bold", hasDiscount ? "text-primary" : "text-on-surface")}>
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
  );
}
