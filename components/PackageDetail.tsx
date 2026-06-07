"use client";

import { Check, Target, Wrench, Sparkles, Clock } from "lucide-react";
import type { Package } from "@/lib/data";
import { ResponsiveDialog } from "@/components/ui/responsive-dialog";
import { cn } from "@/lib/utils";

interface PackageDetailProps {
  pkg: Package | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function Block({
  icon: Icon,
  title,
  children,
  accent,
}: {
  icon: typeof Target;
  title: string;
  children: React.ReactNode;
  accent: "brand" | "gold";
}) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-2">
        <Icon
          className={cn(
            "h-4 w-4",
            accent === "gold" ? "text-gold-400" : "text-brand-400",
          )}
        />
        <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-faint">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}

export function PackageDetail({ pkg, open, onOpenChange }: PackageDetailProps) {
  if (!pkg) return null;
  const isGold = pkg.accent === "gold";

  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={onOpenChange}
      title={pkg.name}
      subtitle={`Pakiet ${pkg.tier} · ${pkg.price}${pkg.priceNote ? ` · ${pkg.priceNote}` : ""}`}
      accent={pkg.accent}
    >
      <Block icon={Target} title="Cel pakietu" accent={pkg.accent}>
        <p className="leading-relaxed text-ink-muted">{pkg.goal}</p>
      </Block>

      <Block icon={Wrench} title="Co robimy konkretnie" accent={pkg.accent}>
        <ul className="space-y-2.5">
          {pkg.scope.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  isGold ? "text-gold-400" : "text-brand-400",
                )}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={Sparkles} title="Co realnie zyskujecie" accent={pkg.accent}>
        <ul className="space-y-3">
          {pkg.supports.map((item) => (
            <li
              key={item.title}
              className={cn(
                "rounded-xl border bg-white/[0.03] p-4",
                isGold ? "border-gold-500/25" : "border-brand-500/20",
              )}
            >
              <p className="flex items-start gap-2 font-semibold text-ink">
                <Check
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    isGold ? "text-gold-400" : "text-brand-400",
                  )}
                />
                {item.title}
              </p>
              <p className="mt-1.5 pl-6 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={Clock} title="Czas realizacji" accent={pkg.accent}>
        <p className="leading-relaxed text-ink-muted">{pkg.timeline}</p>
      </Block>
    </ResponsiveDialog>
  );
}
