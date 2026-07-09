"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { ShippingMethod } from "./ShippingSelector";

interface OrderSummaryProps {
  shipping: ShippingMethod;
}

export default function OrderSummary({ shipping }: OrderSummaryProps) {
  const { items, totalPrice } = useCart();
  const logisticsFee = shipping === "express" ? 120 : 45;
  const total = totalPrice + logisticsFee;

  return (
    <div className="glass-panel rounded-t-xl border-t border-x border-white/10 p-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-muted">
              Subtotal
            </span>
            <span className="font-mono text-sm text-on-surface">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-muted">
              Logistics
            </span>
            <span className="font-mono text-sm text-on-surface">
              {formatPrice(logisticsFee)}
            </span>
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <span className="font-mono text-sm uppercase tracking-widest text-primary font-bold">
              Total
            </span>
            <span className="font-mono text-lg text-primary font-bold">
              {formatPrice(total)}
            </span>
          </div>
        </div>

        <button className="glitch-hover bg-primary text-black font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold whitespace-nowrap">
          Execute Transaction
        </button>
      </div>
    </div>
  );
}
