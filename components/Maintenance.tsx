import { Check, ShieldCheck } from "lucide-react";
import { MAINTENANCE } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Maintenance() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-28">
      <Reveal>
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-5">
          {/* Lewa strona — atuty / gwarancje */}
          <div className="lg:col-span-3 p-7 sm:p-9">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
              {MAINTENANCE.eyebrow}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {MAINTENANCE.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {MAINTENANCE.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-ink">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prawa strona — cena */}
          <div className="flex flex-col justify-center gap-3 border-t border-border bg-gradient-to-br from-brand-500/[0.1] to-transparent p-7 sm:p-9 lg:col-span-2 lg:border-l lg:border-t-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-ink">
                {MAINTENANCE.price}
              </span>
              <span className="text-sm text-ink-faint">{MAINTENANCE.priceNote}</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-muted">{MAINTENANCE.note}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
