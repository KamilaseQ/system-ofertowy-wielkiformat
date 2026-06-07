import { Check } from "lucide-react";
import { BENEFITS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Benefits() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Korzyści"
          title="Mniej pracy ręcznej, więcej zebranych klientów."
          subtitle="Strona przestaje być tylko wizytówką, a zaczyna pracować jak narzędzie sprzedaży — zbiera zapytania i porządkuje kontakty za Was."
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-fr gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {BENEFITS.map((benefit, i) => (
          <Reveal key={benefit.title} delay={(i % 2) * 0.06} className="h-full">
            <div className="flex h-full flex-col gap-3 bg-night p-6 transition-colors duration-300 hover:bg-night-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-ink">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{benefit.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
