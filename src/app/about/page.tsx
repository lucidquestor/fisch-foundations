import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FounderSection } from "@/components/sections/FounderSection";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fisch Foundations — a developer-minded general contractor serving the tri-state area with ground-up and renovation expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        title={
          <>
            Built on <span className="text-crimson-muted">Integrity</span>
          </>
        }
        description="A developer's perspective on construction — grounded in how projects are financed, phased, and delivered."
      />
      <FounderSection hideTitle />
      <About />
      <Process />
      <CtaBanner />
    </>
  );
}
