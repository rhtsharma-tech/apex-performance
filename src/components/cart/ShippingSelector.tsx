"use client";

import { Truck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShippingMethod = "standard" | "express";

interface ShippingSelectorProps {
  selected: ShippingMethod;
  onChange: (method: ShippingMethod) => void;
}

const methods = [
  {
    id: "standard" as const,
    label: "Standard Logistics",
    time: "5-7 Business Days",
    price: "$45.00",
    icon: Truck,
  },
  {
    id: "express" as const,
    label: "Express Track Delivery",
    time: "1-2 Business Days",
    price: "$120.00",
    icon: Zap,
  },
];

export default function ShippingSelector({ selected, onChange }: ShippingSelectorProps) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
        Logistics Protocol
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((method) => {
          const Icon = method.icon;
          const isSelected = selected === method.id;
          return (
            <button
              key={method.id}
              onClick={() => onChange(method.id)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-white/10 bg-surface hover:border-white/20"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "w-5 h-5 shrink-0",
                    isSelected ? "text-primary" : "text-on-surface-muted"
                  )}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "font-mono text-xs uppercase tracking-wider font-bold",
                      isSelected ? "text-primary" : "text-on-surface"
                    )}
                  >
                    {method.label}
                  </p>
                  <p className="font-mono text-[10px] text-on-surface-muted mt-0.5">
                    {method.time}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p
                    className={cn(
                      "font-mono text-sm font-bold",
                      isSelected ? "text-primary" : "text-on-surface"
                    )}
                  >
                    {method.price}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
