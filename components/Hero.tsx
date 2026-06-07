"use client";

import { motion, type Variants } from "framer-motion";
import { Crown, ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section className="bg-aurora relative overflow-hidden">
      <div className="mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-24 sm:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-sm text-gold-300"
        >
          <Crown className="h-4 w-4" />
          Oferta przygotowana dla Wielkiego Formatu
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
        >
          Klient sam składa listę nośników.
          <br />
          <span className="text-gradient-brand">Wy dostajecie gotowe zapytanie.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
        >
          Kolejne wdrożenie dla Waszej strony: odwiedzający sam składa listę
          interesujących go nośników i wysyła gotowe zapytanie o dostępność i wycenę —
          z kompletem danych kontaktowych. Koniec z ręcznym układaniem oferty
          i przepisywaniem leadów.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400"
          >
            Zobacz pakiety
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#jak-to-dziala"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/[0.03] px-6 py-3.5 font-semibold text-ink transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            Jak to działa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
