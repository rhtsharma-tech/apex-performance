"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Gauge, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const tabs = [
  { label: "Garage", href: "/", icon: LayoutGrid },
  { label: "Catalog", href: "/shop", icon: Gauge },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
  { label: "Profile", href: "#", icon: User },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { totalItems, isLoaded } = useCart();

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <div className="glass-nav backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 shadow-lg shadow-black/30">
        <div className="flex items-center justify-around">
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
                className="relative flex items-center"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/15 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <div className="relative flex items-center gap-1.5 px-3 py-2">
                  <Icon
                    className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-on-surface-muted"
                    }`}
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="font-mono text-[10px] uppercase tracking-wider text-primary overflow-hidden whitespace-nowrap"
                      >
                        {tab.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {tab.label === "Cart" && isLoaded && totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-black text-[8px] font-mono font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
