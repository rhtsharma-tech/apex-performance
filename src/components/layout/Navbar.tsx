"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Performance", href: "/" },
  { label: "About", href: "/" },
  { label: "Support", href: "/" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg shadow-black/20 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-5 lg:px-[var(--spacing-margin-desktop)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center">
              <span className="text-black font-display font-bold text-sm">
                A
              </span>
            </div>
            <span className="font-display font-bold text-xl text-on-surface tracking-wide">
              APEX
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors pb-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Search - hidden on mobile */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-surface-mid/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 w-48 transition-all focus:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-dim" />
            </div>

            <button
              className="text-on-surface-muted hover:text-primary transition-colors hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-on-surface-muted hover:text-primary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-mono font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="text-on-surface-muted hover:text-primary transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-on-surface-muted hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-nav transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-mono text-sm uppercase tracking-widest py-3 px-3 rounded-lg transition-all ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-on-surface-muted hover:text-primary hover:bg-surface-mid/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search parts..."
                  className="w-full bg-surface-mid/50 border border-white/10 rounded-full pl-10 pr-4 py-3 text-sm text-on-surface placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-dim" />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-on-surface-muted hover:text-primary transition-colors py-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="font-mono text-sm">Cart</span>
                {totalItems > 0 && (
                  <span className="ml-auto bg-primary text-black text-[10px] font-mono font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-on-surface-muted hover:text-primary transition-colors py-2"
              >
                <User className="w-5 h-5" />
                <span className="font-mono text-sm">Account</span>
              </Link>
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-on-surface-muted hover:text-primary transition-colors py-2"
              >
                <Heart className="w-5 h-5" />
                <span className="font-mono text-sm">Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
