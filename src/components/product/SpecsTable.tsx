import { Spec } from "@/types";

interface SpecsTableProps {
  specs: Spec[];
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h3 className="font-display text-xl uppercase text-on-surface">Precision Engineering</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="space-y-0">
        {specs.map((spec, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-white/5 group"
          >
            <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
              {spec.label}
            </span>
            <span className="font-mono text-sm text-on-surface group-hover:text-primary transition-colors">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
