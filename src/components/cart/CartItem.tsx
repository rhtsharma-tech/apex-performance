"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();
  const { product, quantity } = item;

  return (
    <div className="technical-border bg-surface-low rounded-lg p-4">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden bg-surface-mid">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="80px"
            className="object-cover"
          />
          <div className="scanline absolute inset-0 pointer-events-none" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-sm uppercase text-on-surface leading-tight truncate">
            {product.name}
          </h3>
          <p className="font-mono text-sm text-primary mt-1">
            {formatPrice(product.price)}
          </p>
          <p className="font-mono text-xs text-on-surface-muted mt-0.5">
            SN: {product.serialNumber}
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
        {/* Quantity stepper */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
            className="w-7 h-7 rounded bg-surface-mid border border-white/10 flex items-center justify-center text-on-surface hover:bg-surface-high hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="font-mono text-sm text-on-surface w-6 text-center">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="w-7 h-7 rounded bg-surface-mid border border-white/10 flex items-center justify-center text-on-surface hover:bg-surface-high hover:text-primary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        {/* Decommission */}
        <button
          onClick={() => removeItem(product.id)}
          className="font-mono text-xs text-error underline underline-offset-2 hover:text-error/80 transition-colors"
        >
          DECOMMISSION
        </button>
      </div>
    </div>
  );
}
