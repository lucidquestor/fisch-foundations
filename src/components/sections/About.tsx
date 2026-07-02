import { aboutHighlights } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="section-padding bg-brand-100">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the Company"
              title="Built on Integrity"
            />
            <blockquote className="border-l-4 border-accent pl-6 font-display text-xl italic leading-relaxed text-brand-800 md:text-2xl">
              We bring a developer&apos;s perspective to every engagement —
              understanding how projects are financed, phased, and delivered.
            </blockquote>
            <p className="mt-6 text-base leading-relaxed text-brand-700">
              Fisch Foundations was built on firsthand experience across New York
              City&apos;s most demanding construction environments — with direct
              involvement in ground-up multi-family projects in Brooklyn and Queens
              and commercial developments in Manhattan.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-700">
              That experience shapes how we approach every new engagement: grounded
              in how developers actually think, plan, and build. We serve clients
              across the tri-state area — New York, New Jersey, and Connecticut.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Work With Us
              </Button>
            </div>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-brand-200 bg-white p-6"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold text-brand-950">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
