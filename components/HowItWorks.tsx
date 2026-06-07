"use client";

import { Info } from "lucide-react";
import { STEPS, AVAILABILITY_NOTE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  return (
    <section
      id="jak-to-dziala"
      className="relative border-y border-border bg-night-2"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Jak to działa"
            title="Cztery kroki — od mapy do gotowego zapytania."
            subtitle="Dla klienta to kilka kliknięć. Dla Was — gotowy lead bez ręcznej pracy."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={(i % 4) * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-night p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 font-mono text-lg font-bold text-brand-300">
                  {step.index}
                </span>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-white/[0.03] p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
              <Info className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-ink">{AVAILABILITY_NOTE.title}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                {AVAILABILITY_NOTE.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
