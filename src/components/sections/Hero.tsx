import { heroStats, siteConfig, trustBadges } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-200 bg-brand-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,39,0.12),_transparent_50%)]" />
      <div className="container-narrow section-padding relative">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          Licensed General Contractor · Tri-State Area
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-brand-950 md:text-6xl lg:text-7xl">
          Built to Endure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-700 md:text-xl">
          Ground-up residential and commercial construction, precision renovation
          — built on firsthand experience across the tri-state area.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#contact" variant="primary">
            Start Your Project
          </Button>
          <Button href="#projects" variant="outline">
            View Our Work
          </Button>
        </div>

        <dl className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-sm border border-brand-200 bg-brand-50/80 p-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-xl font-semibold text-brand-950">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap gap-2">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-brand-300 bg-white/60 px-3 py-1 text-xs font-medium text-brand-700"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="sr-only">{siteConfig.description}</p>
      </div>
    </section>
  );
}
