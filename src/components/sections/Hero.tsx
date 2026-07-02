import { heroStats, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 72px)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-gold/5" />
      <div className="absolute right-0 top-0 hidden h-full w-[42%] border-l border-ivory/10 bg-ivory/[0.045] lg:block" />
      <div className="absolute bottom-[10%] left-16 top-[10%] hidden w-px bg-gradient-to-b from-transparent via-crimson to-transparent lg:block" />

      <div className="container-site relative z-10 px-5 pb-36 pt-32 md:px-10 md:pt-36 lg:px-16 lg:pl-24">
        <p className="hero-eyebrow mb-8 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold-light">
          <span className="block h-px w-9 bg-gold-light" />
          Licensed General Contractor · Tri-State Area
        </p>

        <h1 className="max-w-3xl font-display text-[clamp(3.2rem,6.5vw,6rem)] leading-[0.93] tracking-wide text-ivory">
          Built to
          <br />
          <span className="text-crimson-muted">Endure.</span>
        </h1>

        <p className="mt-6 max-w-md font-serif text-lg font-light italic leading-relaxed text-ivory/70">
          Ground-up residential and commercial construction, precision renovation
          — built on firsthand experience across the tri-state area.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#contact" variant="ivory">
            Start Your Project
          </Button>
          <Button href="#projects" variant="ghost">
            View Our Work
          </Button>
        </div>

        <p className="sr-only">{siteConfig.description}</p>
      </div>

      <div className="absolute bottom-8 left-5 right-5 z-10 hidden border-t border-ivory/10 pt-6 md:left-10 md:right-10 lg:left-24 lg:flex lg:gap-0">
        {heroStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`pr-8 ${i < heroStats.length - 1 ? "mr-8 border-r border-ivory/10" : ""}`}
          >
            <p className="font-display text-2xl tracking-wide text-ivory">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
