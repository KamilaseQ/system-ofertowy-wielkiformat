"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import {
  COMPARISON,
  COMPARE_HEADERS,
  type CompareValue,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Cell({ value, gold }: { value: CompareValue; gold?: boolean }) {
  if (value === true) {
    return (
      <Check
        className={cn("mx-auto h-5 w-5", gold ? "text-gold-400" : "text-brand-400")}
        aria-label="tak"
      />
    );
  }
  if (value === false) {
    return <Minus className="mx-auto h-5 w-5 text-ink-faint/40" aria-label="brak" />;
  }
  return (
    <span
      className={cn(
        "text-xs font-medium sm:text-sm",
        gold ? "text-gold-300" : "text-ink-muted",
      )}
    >
      {value}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[460px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="w-[44%] px-3 pb-4 text-left align-bottom sm:px-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
                Porównanie
              </span>
            </th>
            <th className="px-2 pb-4 text-center align-bottom sm:px-3">
              <div className="text-sm font-bold text-ink">Pakiet 1</div>
              <div className="text-xs text-ink-faint">{COMPARE_HEADERS.p1.price}</div>
            </th>
            <th className="px-2 pb-4 text-center align-bottom sm:px-3">
              <div className="inline-flex flex-col items-center rounded-t-xl border-x border-t border-gold-500/40 bg-gold-500/[0.08] px-3 py-2">
                <span className="text-sm font-bold text-gold-300">Pakiet 2</span>
                <span className="text-xs text-gold-300/70">
                  {COMPARE_HEADERS.p2.price}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((row, i) => (
            <motion.tr
              key={row.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
            >
              <td className="border-t border-border px-3 py-3 text-sm text-ink sm:px-4">
                {row.label}
              </td>
              <td className="border-t border-border px-2 py-3 text-center sm:px-3">
                <Cell value={row.p1} />
              </td>
              <td className="border-x border-t border-gold-500/25 bg-gold-500/[0.05] px-2 py-3 text-center sm:px-3">
                <Cell value={row.p2} gold />
              </td>
            </motion.tr>
          ))}
          <tr>
            <td className="px-3 pt-4 sm:px-4" />
            <td className="px-2 pt-4 text-center sm:px-3">
              <div className="text-base font-bold text-ink">
                {COMPARE_HEADERS.p1.price}
              </div>
            </td>
            <td className="rounded-b-xl border-x border-b border-gold-500/40 bg-gold-500/[0.08] px-2 pb-3 pt-4 text-center sm:px-3">
              <div className="text-base font-bold text-gold-300">
                {COMPARE_HEADERS.p2.price}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
