"use client";

import { useState } from "react";
import { X, Filter } from "lucide-react";
import { FilterState } from "@/types";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const brands = ["Brembo", "KW", "Akrapovic", "Recaro", "Ohlins", "Apex"];
const systems = ["Engine", "Chassis", "Brakes", "Aero", "Drivetrain", "Exhaust"];

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handleSystemChange = (system: string) => {
    const newSystems = filters.systems.includes(system)
      ? filters.systems.filter((s) => s !== system)
      : [...filters.systems, system];
    onFilterChange({ ...filters, systems: newSystems });
  };

  const handlePriceChange = (type: "min" | "max", value: string) => {
    const num = value === "" ? 0 : Number(value);
    const newRange: [number, number] = type === "min" ? [num, filters.priceRange[1]] : [filters.priceRange[0], num];
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const clearAll = () => {
    onFilterChange({ brands: [], priceRange: [0, 0], systems: [], search: "" });
  };

  const content = (
    <div className="space-y-6">
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 accent-primary bg-transparent border border-white/20 rounded"
              />
              <span className="text-sm text-on-surface-muted group-hover:text-on-surface transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange[0] || ""}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
          />
          <span className="text-on-surface-dim">—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange[1] || ""}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">System</h3>
        <div className="space-y-2">
          {systems.map((system) => (
            <label key={system} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.systems.includes(system)}
                onChange={() => handleSystemChange(system)}
                className="w-4 h-4 accent-primary bg-transparent border border-white/20 rounded"
              />
              <span className="text-sm text-on-surface-muted group-hover:text-on-surface transition-colors">
                {system}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="w-full py-2 text-sm font-mono uppercase tracking-wider text-on-surface-dim hover:text-primary border border-white/10 rounded transition-colors"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="bg-surface border border-white/10 rounded-lg p-5 sticky top-24">
          <h2 className="font-mono text-sm uppercase tracking-widest text-on-surface mb-6">Filters</h2>
          {content}
        </div>
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-24 right-6 z-40 bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      >
        <Filter className="w-5 h-5" />
      </button>

      {/* Mobile slide-over */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-80 bg-surface border-r border-white/10 p-6 transition-transform duration-300 overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-mono text-sm uppercase tracking-widest text-on-surface">Filters</h2>
            <button onClick={() => setIsOpen(false)} className="text-on-surface-muted hover:text-on-surface">
              <X className="w-5 h-5" />
            </button>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
