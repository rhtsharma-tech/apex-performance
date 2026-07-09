"use client";

import { useState } from "react";
import { Car } from "lucide-react";

const years = ["2024", "2023", "2022", "2021", "2020"];
const makes = ["Porsche", "BMW", "Audi", "Lamborghini", "McLaren"];

export default function FitmentChecker() {
  const [year, setYear] = useState(years[0]);
  const [make, setMake] = useState(makes[0]);

  return (
    <div className="glass-card bg-surface border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <Car className="w-6 h-6 text-primary rotate-[-15deg]" />
        <h3 className="font-display text-lg uppercase text-on-surface">
          Will this fit your vehicle?
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
            Year
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-surface text-on-surface">
                {y}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
            Make
          </label>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
          >
            {makes.map((m) => (
              <option key={m} value={m} className="bg-surface text-on-surface">
                {m}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full py-3 bg-primary text-black font-mono text-xs uppercase tracking-widest rounded-lg hover:bg-yellow-400 transition-colors font-bold">
          Check Fitment
        </button>
      </div>
    </div>
  );
}
