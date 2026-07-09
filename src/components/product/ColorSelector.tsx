"use client";

import { cn } from "@/lib/utils";

interface ColorSelectorProps {
  colors: string[];
  selected: string;
  onChange: (color: string) => void;
}

const colorNames: Record<string, string> = {
  "#1a1a1a": "Obsidian Black",
  "#c0c0c0": "Titanium Silver",
  "#d4af37": "Championship Gold",
  "#8b0000": "Racing Red",
  "#003366": "Deep Sapphire",
};

export default function ColorSelector({ colors, selected, onChange }: ColorSelectorProps) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-on-surface-muted mb-3">
        Select Finish: <span className="text-on-surface">{colorNames[selected] || selected}</span>
      </p>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={cn(
              "w-10 h-10 rounded-full transition-all duration-200",
              selected === color
                ? "ring-4 ring-primary/40 ring-offset-2 ring-offset-surface"
                : "hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-surface"
            )}
            style={{ backgroundColor: color }}
            aria-label={colorNames[color] || color}
          />
        ))}
      </div>
    </div>
  );
}
