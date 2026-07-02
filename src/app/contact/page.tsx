import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an estimate for your construction project. Serving New York, New Jersey, and Connecticut.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Start Your <span className="text-crimson-muted">Project</span>
          </>
        }
        description="Every project begins with a conversation. We respond within 24 hours."
      />
      <Contact showHeading={false} />
    </>
  );
}
