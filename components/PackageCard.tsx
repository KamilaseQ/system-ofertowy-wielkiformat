"use client";

import { Check, ArrowRight, Plus, Clock } from "lucide-react";
import type { Package } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: Package;
  onOpen: () => void;
}

export function PackageCard({ pkg, onOpen }: PackageCardProps) {
  const isGold = pkg.accent === "gold";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
        isGold
          ? "border-gold-500/50 bg-gradient-to-b from-gold-500/[0.06] to-transparent hover:shadow-2xl hover:shadow-gold-500/10"
          : "border-border bg-gradient-to-b from-white/[0.035] to-transparent hover:border-white/20 hover:shadow-xl hover:shadow-black/20",
      )}
    >
      <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        Pakiet {pkg.tier}
      </div>
      <h3
        className={cn(
          "text-2xl font-bold tracking-tight",
          isGold ? "text-gradient-gold" : "text-ink",
        )}
      >
        {pkg.name}
      </h3>
      <p className="mt-1 text-sm text-ink-muted">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-ink">{pkg.price}</span>
        {pkg.priceNote && (
          <span className="text-sm text-ink-faint">{pkg.priceNote}</span>
        )}
      </div>

      <div
        className={cn(
          "mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs",
          isGold
            ? "border-gold-500/40 bg-gold-500/10 text-gold-300"
            : "border-border bg-white/[0.03] text-ink-muted",
        )}
      >
        <Clock className="h-3.5 w-3.5" />
        {pkg.timeline}
      </div>

      {pkg.buildsOn && (
        <p
          className={cn(
            "mt-6 flex items-center gap-2 text-sm font-semibold",
            isGold ? "text-gold-300" : "text-brand-300",
          )}
        >
          <Plus className="h-4 w-4 shrink-0" />
          {pkg.buildsOn}
        </p>
      )}

      <ul className={cn("space-y-3", pkg.buildsOn ? "mt-3" : "mt-6")}>
        {pkg.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                isGold ? "text-gold-400" : "text-brand-400",
              )}
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {isGold ? (
        <p className="mt-6 rounded-xl border border-gold-500/30 bg-gold-500/[0.08] p-4 text-base font-bold leading-relaxed text-gold-300">
          {pkg.effect}
        </p>
      ) : (
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{pkg.effect}</p>
      )}

      <button
        onClick={onOpen}
        className={cn(
          "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition",
          isGold
            ? "bg-gold-400 text-night hover:bg-gold-300"
            : "bg-white/5 text-ink hover:bg-white/10",
        )}
      >
        Zobacz szczegóły
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
