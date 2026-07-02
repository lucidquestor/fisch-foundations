import Image from "next/image";
import { featuredProjects, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

const heroProject = featuredProjects[0];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-navy lg:min-h-screen">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40 lg:via-navy/90 lg:to-transparent" />

      <div className="container-site relative z-10 grid min-h-[90vh] lg:min-h-screen lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center px-5 py-28 md:px-10 lg:px-16 lg:py-32">
          <p className="mb-6 flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold-light">
            <span className="block h-px w-9 bg-gold-light" />
            {siteConfig.descriptor} · Tri-State
          </p>

          <h1 className="max-w-xl font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.93] tracking-wide text-ivory">
            Built to
            <br />
            <span className="text-crimson-muted">Endure.</span>
          </h1>

          <p className="mt-5 max-w-md text-base font-normal leading-relaxed text-ivory/75 md:text-lg">
            Ground-up residential and commercial construction across NY, NJ, and
            CT — managed from foundation to certificate of occupancy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="ivory">
              Start Your Project
            </Button>
            <Button href="/projects" variant="ghost">
              View Our Work
            </Button>
          </div>

          <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/35">
            Licensed & Insured · Residential & Commercial · Ground-Up & Renovation
          </p>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
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
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
          <div className="absolute inset-0 bg-navy/30" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/15 bg-navy/80 p-6 backdrop-blur-sm">
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
