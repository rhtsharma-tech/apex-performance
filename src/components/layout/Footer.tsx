import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Share, Globe, Mail } from "lucide-react";

const shopLinks = [
  "Engine Components",
  "Drivetrain & Gear",
  "Braking Tech",
  "Aerodynamics",
  "Cockpit Mods",
  "Wheel & Tire",
];

const supportLinks = [
  "Shipping Policy",
  "Returns & Claims",
  "Dealer Portal",
  "Installation Guides",
  "About Our Tech",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pb-24 lg:pb-0">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-[var(--spacing-margin-desktop)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Apex Performance" width={40} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-on-surface-dim text-sm leading-relaxed mb-6">
              Premium performance parts engineered for enthusiasts who demand
              more from every drive.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-on-surface-dim hover:text-primary transition-colors"
                aria-label="Share"
              >
                <Share className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-on-surface-dim hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-on-surface-dim hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Catalog */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Shop Catalog
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/shop"
                    className="text-on-surface-dim hover:text-on-surface text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-on-surface-dim hover:text-on-surface text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-on-surface-dim mt-0.5 shrink-0" />
                <span className="text-on-surface-dim text-sm leading-relaxed">
                  8800 Performance Way
                  <br />
                  Austin, TX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-on-surface-dim shrink-0" />
                <a
                  href="tel:+1800423754"
                  className="text-on-surface-dim hover:text-on-surface text-sm transition-colors"
                >
                  +1 (800) 423-754
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-on-surface-dim mt-0.5 shrink-0" />
                <span className="text-on-surface-dim text-sm">
                  Mon-Fri: 08:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-[var(--spacing-margin-desktop)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-on-surface-dim text-xs font-mono uppercase tracking-wider">
            &copy; 2024 Apex Performance. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-on-surface-dim text-[10px] font-mono font-bold tracking-wider border border-white/10 rounded px-2 py-1">
              VISA
            </span>
            <span className="text-on-surface-dim text-[10px] font-mono font-bold tracking-wider border border-white/10 rounded px-2 py-1">
              MC
            </span>
            <span className="text-on-surface-dim text-[10px] font-mono font-bold tracking-wider border border-white/10 rounded px-2 py-1">
              AMEX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
