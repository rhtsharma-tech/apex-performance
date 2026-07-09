"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Performance", href: "/" },
  { label: "About", href: "/" },
  { label: "Support", href: "/" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          {/* Desktop search input */}
          <div className="hidden lg:flex items-center relative">
            <input
              type="text"
              placeholder="Search components..."
              className="bg-surface-mid/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 w-56 transition-all focus:w-72"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-dim" />
          </div>

          {/* Mobile search icon */}
          <Link
            href="/shop"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full glass text-on-surface-muted hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
