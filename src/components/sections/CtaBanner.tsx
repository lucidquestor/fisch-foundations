import { copy, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-navy px-5 py-14 md:px-10 lg:px-16">
      <div className="container-site grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-wide text-ivory">
            {copy.cta.title}
          </h2>
          <p className="mt-3 max-w-lg text-sm font-normal leading-relaxed text-ivory/60 md:text-base">
            {copy.cta.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button href="/contact" variant="ivory-solid" className="w-full text-center sm:w-auto">
            Request an Estimate
          </Button>
          <Button href={siteConfig.phoneHref} variant="ghost-white" className="w-full text-center sm:w-auto">
            Call Us Directly
          </Button>
        </div>
      </div>
    </section>
  );
}
