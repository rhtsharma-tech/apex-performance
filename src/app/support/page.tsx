"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Support" },
];

const faqs = [
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free ground shipping on orders over $200 within the continental US. Standard shipping takes 3-5 business days. Expedited options (2-day and overnight) are available at checkout. International shipping is available to Canada and select EU countries — rates calculated at checkout.",
  },
  {
    question: "What is the return/exchange window?",
    answer:
      "We accept returns within 30 days of delivery for unused, uninstalled parts in original packaging. A 15% restocking fee applies to non-defective returns. Defective or incorrectly shipped parts can be returned at any time for a full refund or replacement. Contact support to initiate a return.",
  },
  {
    question: "How do I confirm part fitment for my vehicle?",
    answer:
      "Every product page includes a 'Fitment' section listing compatible vehicles. You can also use our Fitment Checker on any product detail page — enter your year, make, and model to verify compatibility. If your vehicle isn't listed, contact our engineering team for a custom consultation.",
  },
  {
    question: "What warranty do parts carry?",
    answer:
      "All APEX-branded parts carry a limited lifetime warranty against manufacturing defects. Third-party brands follow their respective manufacturer warranties (typically 1-3 years). Track-use components carry a 2-year warranty when installed by an APEX-certified shop. Warranty claims require proof of purchase and photos of the defect.",
  },
  {
    question: "Do you offer installation guidance?",
    answer:
      "Yes. Every product ships with detailed installation instructions. We also maintain a growing library of video walkthroughs and torque specs on our Support page. For complex installations (turbo kits, coilovers, brake systems), we recommend professional installation and can connect you with certified APEX shops in your area.",
  },
  {
    question: "How do I join the dealer program?",
    answer:
      "Our dealer program is open to established automotive shops and racing teams. Benefits include wholesale pricing, priority inventory access, and co-branded marketing support. Apply through the Dealer Portal link below — approval typically takes 3-5 business days.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["8800 Performance Way", "Austin, TX 78701"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (800) 423-754", "Mon-Fri: 08:00 - 19:00 CST"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["support@apexperformance.com", "Response within 24 hours"],
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="mt-6 mb-16">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-dim">
            Technical Support
          </span>
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-none">
          NEED{" "}
          <span className="italic text-primary">ASSISTANCE?</span>
        </h1>
        <p className="mt-4 max-w-lg font-body text-on-surface-muted">
          Find answers to common questions or reach out to our support team.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          Frequently Asked <span className="italic text-primary">Questions</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-surface-mid/30"
              >
                <span className="font-display text-sm font-bold pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-on-surface-muted transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 font-body text-sm text-on-surface-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          Get in <span className="italic text-primary">Touch</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg glass-card p-6 bento-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-2">
                  {item.title}
                </h3>
                {item.lines.map((line, j) => (
                  <p
                    key={j}
                    className="font-body text-sm text-on-surface-muted"
                  >
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* Dealer Portal */}
      <section className="mb-8 rounded-lg glass-panel p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">
              Dealer <span className="italic text-primary">Portal</span>
            </h2>
            <p className="mt-2 font-body text-sm text-on-surface-muted max-w-md">
              Wholesale pricing, priority inventory access, and co-branded
              marketing support for established automotive shops and racing
              teams.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary-dim"
          >
            Apply Now
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
