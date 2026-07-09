"use client";

import { useState } from "react";
import { Star, ShoppingBag, Truck, Shield } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { cn, formatPrice, getDiscountPercent } from "@/lib/utils";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";

interface ProductInfoProps {
  product: Product;
}

const defaultColors = ["#1a1a1a", "#c0c0c0", "#d4af37", "#8b0000", "#003366"];

export default function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(defaultColors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-4xl uppercase text-on-surface leading-tight">
          {product.name}
        </h1>
      </div>

      {/* SKU & Rating */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-mono text-xs text-on-surface-dim">SKU: {product.sku}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < Math.floor(product.rating)
                  ? "fill-yellow-500 text-yellow-500"
                  : "text-on-surface-dim"
              )}
            />
          ))}
          <span className="font-mono text-xs text-on-surface-muted ml-1">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-mono text-3xl font-bold text-primary">
          {formatPrice(product.price)}
        </span>
        {hasDiscount && (
          <>
            <span className="font-mono text-lg text-on-surface-dim line-through">
              {formatPrice(product.originalPrice!)}
            </span>
            <span className="font-mono text-[10px] text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded uppercase tracking-wider">
              {getDiscountPercent(product.originalPrice!, product.price)}% Performance Rebate Applied
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-on-surface-muted leading-relaxed">{product.description}</p>

      {/* Color selector */}
      <ColorSelector
        colors={defaultColors}
        selected={selectedColor}
        onChange={setSelectedColor}
      />

      {/* Quantity & Add to Cart */}
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={cn(
          "w-full py-4 rounded-lg font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300",
          added
            ? "bg-green-500 text-white"
            : "bg-primary text-black hover:bg-yellow-400"
        )}
      >
        <ShoppingBag className="w-4 h-4" />
        {added ? "Added to Cart" : "Add to Cart"}
      </button>

      {/* Shipping info */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="bg-surface border border-white/10 rounded-lg p-4 flex items-center gap-3">
          <Truck className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface font-bold">
              Express Track
            </p>
            <p className="font-mono text-[10px] text-on-surface-muted">Shipping</p>
          </div>
        </div>
        <div className="bg-surface border border-white/10 rounded-lg p-4 flex items-center gap-3">
          <Shield className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface font-bold">
              2-Year Circuit
            </p>
            <p className="font-mono text-[10px] text-on-surface-muted">Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
