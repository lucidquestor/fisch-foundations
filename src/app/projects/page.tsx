import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected project experience across Manhattan, Brooklyn, and Queens — ground-up residential, multi-family, and commercial construction.",
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
        description="Firsthand involvement across ground-up residential, multi-family, and commercial construction."
      />
      <Projects variant="full" />
      <CtaBanner />
    </>
  );
}
