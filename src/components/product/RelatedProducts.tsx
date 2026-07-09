import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const { addItem } = useCart();
  const [featured, ...rest] = products;

  if (!featured) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl uppercase text-on-surface">Performance Pairings</h3>
        <Link
          href="/shop"
          className="font-mono text-xs uppercase tracking-wider text-primary hover:text-yellow-400 transition-colors flex items-center gap-1"
        >
          View Catalog <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Featured large card */}
        <Link
          href={`/product/${featured.slug}`}
          className="lg:col-span-2 relative aspect-[16/9] rounded-xl overflow-hidden group border border-white/10"
        >
          <Image
            src={featured.thumbnail}
            alt={featured.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 backdrop-blur-sm text-black font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded">
              Recommended Add-on
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4 className="font-display text-xl uppercase text-white mb-1">{featured.name}</h4>
            <p className="text-white/70 text-sm mb-3 line-clamp-2">{featured.shortDescription}</p>
            <button className="bg-primary text-black font-mono text-xs uppercase tracking-wider px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
              Configure Fitment
            </button>
          </div>
        </Link>

        {/* Small cards */}
        {rest.slice(0, 2).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="bg-surface border border-white/10 rounded-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative aspect-square bg-surface-mid">
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addItem(product);
                }}
                className="absolute bottom-3 right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                aria-label="Add to cart"
              >
                <Plus className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-display text-sm uppercase text-on-surface line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <span className="font-mono text-sm font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
