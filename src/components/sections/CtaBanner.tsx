import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-navy px-5 py-14 md:px-10 lg:px-16">
      <div className="container-site grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-wide text-ivory">
            Ready to Break Ground?
          </h2>
          <p className="mt-3 font-serif text-lg italic text-ivory/60">
            Let&apos;s discuss your project — we respond within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button href="/contact" variant="ivory-solid">
            Request an Estimate
          </Button>
          <Button href={siteConfig.phoneHref} variant="ghost-white">
            Call Us Directly
          </Button>
        </div>
      </div>
    </section>
  );
}
