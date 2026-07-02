import { aboutHighlights, aboutRegions } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative h-[440px] overflow-hidden bg-navy">
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
              <p className="font-display text-[4.5rem] leading-none tracking-wide text-ivory/[0.07]">
                FISCH
              </p>
              <p className="-mt-2 font-display text-3xl tracking-[0.18em] text-ivory/[0.08]">
                FOUNDATIONS
              </p>
              <div className="my-8 h-px w-12 bg-crimson/50" />
              <p className="font-serif text-base italic tracking-wide text-ivory/25">
                Build · Renovate · Construct
              </p>

              <div className="mt-10 w-full max-w-xs">
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
                <p className="mt-5 text-center text-[0.62rem] uppercase tracking-[0.1em] text-ivory/20">
                  Project Involvement
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center bg-crimson">
            <span className="text-center font-display text-xs leading-snug tracking-[0.15em] text-ivory/70">
              Tri-
              <br />
              State
            </span>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About the Company"
            title={
              <>
                Built on <em>Integrity</em>
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
            That experience shapes how we approach every new engagement: grounded
            in how developers actually think, plan, and build. We serve clients
            across the tri-state area — New York, New Jersey, and Connecticut.
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

          <div className="mt-8">
            <Button href="#contact" variant="primary">
              Work With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
