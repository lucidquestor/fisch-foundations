import type { Metadata } from "next";
import { copy } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
  description: copy.projects.fullIntro,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Project <span className="text-crimson-muted">Experience</span>
          </>
        }
        description={copy.projects.fullIntro}
      />
      <Projects variant="full" />
      <CtaBanner />
    </>
  );
}
