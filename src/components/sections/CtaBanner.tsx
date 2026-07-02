import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="border-y border-brand-200 bg-brand-950 text-white">
      <div className="container-narrow section-padding text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Ready to Break Ground?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-300">
          Let&apos;s discuss your project — we respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#contact" variant="secondary">
            Request an Estimate
          </Button>
          <Button href={siteConfig.phoneHref} variant="outline" className="!border-brand-600 !text-white hover:!bg-brand-800">
            Call Us Directly
          </Button>
        </div>
      </div>
    </section>
  );
}
