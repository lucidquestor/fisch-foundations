import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-navy md:min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 72px)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-gold/5" />
      <div className="absolute right-0 top-0 hidden h-full w-[42%] border-l border-ivory/10 bg-ivory/[0.045] lg:block" />

      <div className="container-site relative z-10 flex min-h-[85vh] flex-col justify-center px-5 py-32 md:min-h-screen md:px-10 lg:px-16 lg:pl-24">
        <p className="mb-8 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold-light">
          <span className="block h-px w-9 bg-gold-light" />
          {siteConfig.descriptor} · Tri-State Area
        </p>

        <h1 className="max-w-3xl font-display text-[clamp(3.2rem,6.5vw,6rem)] leading-[0.93] tracking-wide text-ivory">
          Built to
          <br />
          <span className="text-crimson-muted">Endure.</span>
        </h1>

        <p className="mt-6 max-w-lg font-serif text-lg font-light italic leading-relaxed text-ivory/70">
          Ground-up residential and commercial construction, precision renovation
          — built on a developer&apos;s perspective across the tri-state area.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="ivory">
            Start Your Project
          </Button>
          <Button href="/projects" variant="ghost">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
