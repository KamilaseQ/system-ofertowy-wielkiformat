"use client";

import { useState } from "react";
import { PACKAGES, type Package } from "@/lib/data";
import { PackageCard } from "@/components/PackageCard";
import { PackageDetail } from "@/components/PackageDetail";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Packages() {
  const [active, setActive] = useState<Package | null>(null);
  const [open, setOpen] = useState(false);

  const openPackage = (pkg: Package) => {
    setActive(pkg);
    setOpen(true);
  };

  return (
    <section id="oferta" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Oferta"
          title="Dwa pakiety"
          subtitle="Oba kończą z ręcznym układaniem ofert i przepisywaniem leadów. Pakiet 2 idzie dalej: dopracowany, ekspresowy system, który zdejmuje pracę z każdego etapu — od zapytania po gotowy plik z leadami. Kliknij pakiet, by zobaczyć szczegóły."
        />
      </Reveal>

      <div className="mt-16 grid items-start gap-8 md:grid-cols-2 md:gap-6">
        {PACKAGES.map((pkg, i) => (
          <Reveal
            key={pkg.id}
            delay={i * 0.1}
            className="mx-auto w-full max-w-sm md:max-w-none"
          >
            <PackageCard pkg={pkg} onOpen={() => openPackage(pkg)} />
          </Reveal>
        ))}
      </div>

      <PackageDetail pkg={active} open={open} onOpenChange={setOpen} />
    </section>
  );
}
