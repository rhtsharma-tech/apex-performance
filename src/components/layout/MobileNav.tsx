"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Grid3X3, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const tabs = [
  { label: "Garage", href: "/", icon: LayoutGrid },
  { label: "Catalog", href: "/shop", icon: Grid3X3 },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
  { label: "Profile", href: "#", icon: User },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-nav backdrop-blur-2xl border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-on-surface-muted hover:text-on-surface"
              }`}
            >
              <div
                className={`transition-transform duration-200 ${
                  isActive ? "scale-110" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "fill-primary" : ""}`}
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider">
                {tab.label}
              </span>
              {tab.label === "Cart" && totalItems > 0 && (
                <span className="absolute -top-0.5 right-2 bg-primary text-black text-[9px] font-mono font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
              {isActive && (
                <div className="absolute -bottom-1.5 w-5 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
