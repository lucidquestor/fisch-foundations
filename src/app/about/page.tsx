import type { Metadata } from "next";
import { copy } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { FounderSection } from "@/components/sections/FounderSection";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: copy.about.pageDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        title={
          <>
            Construction From a{" "}
            <span className="text-crimson-muted">Developer&apos;s Perspective</span>
          </>
        }
        description={copy.about.pageDescription}
      />
      <FounderSection hideTitle />
      <About />
      <Process />
      <CtaBanner />
    </>
  );
}
