import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { FounderSection } from "@/components/sections/FounderSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services variant="preview" />
      <Projects variant="preview" />
      <FounderSection compact />
      <CtaBanner />
    </>
  );
}
