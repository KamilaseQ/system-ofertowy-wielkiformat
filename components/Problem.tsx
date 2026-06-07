"use client";

import { Clock, StickyNote, Repeat, Lightbulb } from "lucide-react";
import { PAIN_POINTS, PAIN_CONCLUSION } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [Clock, StickyNote, Repeat];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Problem"
          title="Ręczne układanie oferty zjada czas — a leady trafiają to na kartkę, to w mail."
          subtitle="Składanie listy nośników nie zajmuje godzin, ale powtarza się przy każdym zapytaniu. A dane klienta i tak trzeba potem ręcznie przepisać do bazy."
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3">
        {PAIN_POINTS.map((point, i) => {
          const Icon = ICONS[i] ?? Clock;
          return (
            <Reveal key={point.title} delay={i * 0.08} className="h-full">
              <div className="glass h-full rounded-2xl p-6">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="font-semibold text-ink">{point.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {point.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-4 flex flex-col gap-4 overflow-hidden rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-500/[0.12] to-transparent p-7 sm:flex-row sm:items-start sm:gap-6 sm:p-9">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
            <Lightbulb className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 sm:text-sm">
              {PAIN_CONCLUSION.title}
            </p>
            <p className="mt-2 max-w-2xl text-lg font-medium leading-relaxed text-ink">
              {PAIN_CONCLUSION.description}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
