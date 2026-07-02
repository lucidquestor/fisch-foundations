import { Hero } from "@/components/sections/Hero";
import { JobsiteBand } from "@/components/sections/JobsiteBand";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { FounderSection } from "@/components/sections/FounderSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects variant="preview" fullBleed />
      <JobsiteBand />
      <Services variant="preview" />
      <FounderSection compact />
      <CtaBanner />
    </>
  );
}
