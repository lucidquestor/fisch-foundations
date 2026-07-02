import type { Metadata } from "next";
import { copy } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: copy.contact.pageDescription,
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
        description={copy.contact.pageDescription}
      />
      <Contact showHeading={false} />
    </>
  );
}
