"use client";

import { Analytics, Download } from "lucide-react";
import { Metric } from "@/types";

interface PerformanceMetricsProps {
  metrics: Metric[];
}

export default function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Analytics className="w-5 h-5 text-primary" />
        <h3 className="font-display text-xl uppercase text-on-surface">Performance Metrics</h3>
      </div>

      <div className="space-y-5">
        {metrics.map((metric, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-on-surface-muted">
                {metric.label}
              </span>
              <span className="font-mono text-sm font-bold text-primary">
                {metric.value}{metric.unit}
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="rpm-gauge h-full rounded-full transition-all duration-700"
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-surface border border-white/10 rounded-lg">
        <p className="text-on-surface-muted text-sm italic leading-relaxed">
          &ldquo;Tested at Willow Springs Raceway: Consistent 1.2G deceleration over 20 hot laps
          with zero pedal travel increase.&rdquo;
        </p>
      </div>

      <button className="mt-6 w-full py-3 border border-primary/30 rounded-lg font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Download Data Sheet
      </button>
    </div>
  );
}
