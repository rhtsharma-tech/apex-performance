"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import CartItem from "@/components/cart/CartItem";
import ShippingSelector, { type ShippingMethod } from "@/components/cart/ShippingSelector";
import OrderSummary from "@/components/cart/OrderSummary";
import PaymentSection from "@/components/cart/PaymentSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function CartPage() {
  const { items } = useCart();
  const [shipping, setShipping] = useState<ShippingMethod>("standard");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart" },
  ];

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-20 h-20 bg-surface-mid rounded-full flex items-center justify-center mb-6 border border-white/10">
            <span className="text-3xl opacity-50">0</span>
          </div>
          <h2 className="font-display text-2xl uppercase text-on-surface mb-3">
            Your Manifest is Empty
          </h2>
          <p className="text-on-surface-muted text-sm max-w-md mb-8">
            No components have been added to your configuration manifest.
            Browse the catalog to begin your build.
          </p>
          <Link
            href="/shop"
            className="bg-primary text-black font-mono text-xs uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors font-bold"
          >
            Enter Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl uppercase text-on-surface">
            Manifest: Checkout
          </h1>
        </div>
        <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-green-500">
            Secure Link: Active
          </span>
        </span>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-muted">
            System Check: Step 03 / 04
          </span>
          <span className="font-mono text-[10px] text-on-surface-muted">75%</span>
        </div>
        <div className="h-[2px] bg-surface-mid rounded-full overflow-hidden">
          <div className="rpm-bar h-full rounded-full" style={{ width: "75%" }} />
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
            Configuration Entries
          </h2>
          <div className="space-y-3">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 pt-8">
          <ShippingSelector selected={shipping} onChange={setShipping} />
        </section>

        <section className="border-t border-white/10 pt-8">
          <PaymentSection />
        </section>
      </div>

      <div className="mt-12 pb-8">
        <OrderSummary shipping={shipping} />
      </div>
    </div>
  );
}
