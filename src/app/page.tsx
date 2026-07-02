import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Process />
      <Projects />
      <CtaBanner />
      <Contact />
    </>
  );
}
