import Image from "next/image";
import { copy, featuredProjects, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

const heroProject = featuredProjects[0];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b-[3px] border-crimson bg-navy lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px),
              repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40 lg:via-navy/90 lg:to-transparent" />
      </div>

      <div className="container-site relative z-10 grid lg:min-h-screen lg:grid-cols-2 lg:items-stretch">
        <div className="grid px-5 py-24 md:px-10 md:py-28 lg:min-h-full lg:grid-rows-[1fr_auto] lg:px-16 lg:pb-0 lg:pt-32">
          <div className="flex flex-col justify-center lg:justify-end lg:pb-10">
            <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-light sm:text-[0.7rem] sm:tracking-[0.35em]">
              <span className="block h-px w-9 bg-gold-light" />
              {siteConfig.descriptor} · Tri-State
            </p>

            <h1 className="max-w-xl font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.93] tracking-wide text-ivory">
              Built to
              <br />
              <span className="text-crimson-muted">Endure.</span>
            </h1>

            <p className="mt-5 max-w-md text-base font-normal leading-relaxed text-ivory/75 md:text-lg">
              {copy.hero.subhead}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-0 lg:pb-6">
            <Button href="/contact" variant="ivory" className="w-full text-center sm:w-auto">
              Start Your Project
            </Button>
            <Button href="/projects" variant="ghost" className="w-full text-center sm:w-auto">
              View Our Work
            </Button>
          </div>

          {heroProject.image && (
            <div className="relative -mx-5 mb-0 mt-2 aspect-[16/10] overflow-hidden border-y border-ivory/15 md:-mx-10 lg:hidden">
              <Image
                src={heroProject.image}
                alt={heroProject.address}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-light">
                  Featured Project
                </p>
                <p className="mt-1 font-display text-xl tracking-wide text-ivory">
                  {heroProject.address}
                </p>
                <p className="mt-1 text-xs text-ivory/55">
                  {heroProject.city} · {heroProject.note}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-0 hidden min-h-[420px] grid-rows-[1fr_auto] bg-navy lg:grid lg:min-h-full">
          <div className="relative min-h-0">
            {heroProject.image && (
              <Image
                src={heroProject.image}
                alt={heroProject.address}
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
            )}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-navy/30" />
          </div>
          <div className="relative z-[2] shrink-0 border-t border-ivory/15 bg-navy/90 p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-light">
              Featured Project
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide text-ivory">
              {heroProject.address}
            </p>
            <p className="mt-1 text-sm text-ivory/55">
              {heroProject.city} · {heroProject.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
