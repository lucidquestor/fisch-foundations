import {
  aboutHighlights,
  aboutRegions,
  projectDisclosure,
  siteConfig,
} from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section className="section-padding bg-cream">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden bg-navy">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)
                  `,
                }}
              />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-[4rem] leading-none tracking-wide text-ivory/[0.07]">
                  FISCH
                </p>
                <p className="-mt-2 font-display text-2xl tracking-[0.18em] text-ivory/[0.08]">
                  FOUNDATIONS
                </p>
                <div className="my-6 h-px w-12 bg-crimson/50" />
                <p className="font-serif text-sm italic tracking-wide text-ivory/25">
                  {siteConfig.tagline}
                </p>

                <div className="mt-8 w-full max-w-xs">
                  {aboutRegions.map((region, i) => (
                    <div
                      key={region.label}
                      className={`flex items-center justify-between py-3 ${
                        i < aboutRegions.length - 1
                          ? "border-b border-ivory/[0.07]"
                          : ""
                      }`}
                    >
                      <span className="text-[0.7rem] uppercase tracking-[0.15em] text-ivory/30">
                        {region.label}
                      </span>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-crimson/70">
                        {region.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title={
                <>
                  A Developer&apos;s <em>Perspective</em>
                </>
              }
            />
            <blockquote className="border-l-[3px] border-crimson py-1 pl-5 font-serif text-xl italic leading-relaxed text-navy">
              We bring a developer&apos;s perspective to every engagement —
              understanding how projects are financed, phased, and delivered.
            </blockquote>
            <p className="mt-5 text-sm font-light leading-relaxed text-stone">
              Fisch Foundations was built on firsthand experience across New York
              City&apos;s most demanding construction environments — with direct
              involvement in{" "}
              <strong className="font-medium text-charcoal">
                ground-up multi-family projects in Brooklyn and Queens
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-charcoal">
                commercial developments in Manhattan
              </strong>
              .
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone">
              We serve clients across the tri-state area — New York, New Jersey,
              and Connecticut.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item.label}
                  className="border border-cream-deeper bg-ivory px-4 py-3"
                >
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-crimson">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-stone-light">
              {projectDisclosure}
            </p>

            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
