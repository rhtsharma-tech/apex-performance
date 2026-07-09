"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (val: number) => void;
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-white/10 rounded-lg bg-white/5 overflow-hidden">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className="w-10 h-10 flex items-center justify-center text-on-surface-muted hover:text-primary hover:bg-white/5 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-12 text-center font-mono text-sm text-on-surface select-none">
        {String(value).padStart(2, "0")}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-10 h-10 flex items-center justify-center text-on-surface-muted hover:text-primary hover:bg-white/5 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
