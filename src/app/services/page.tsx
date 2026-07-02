import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ground-up construction, major renovations, and construction management across the NY · NJ · CT tri-state area.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title={
          <>
            Our <span className="text-crimson-muted">Services</span>
          </>
        }
        description="Three core capabilities — with additional services available as your project requires."
      />
      <Services variant="full" />
      <Process />
      <CtaBanner />
    </>
  );
}
