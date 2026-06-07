import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Packages } from "@/components/Packages";
import { Maintenance } from "@/components/Maintenance";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Packages />
      <Maintenance />
      <FinalCta />
    </main>
  );
}
