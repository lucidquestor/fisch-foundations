import {
  additionalServices,
  primaryServices,
} from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type ServicesProps = {
  variant?: "preview" | "full";
};

export function Services({ variant = "full" }: ServicesProps) {
  const isPreview = variant === "preview";
  const shown = isPreview ? primaryServices : primaryServices;

  return (
    <section
      id={isPreview ? undefined : "services"}
      className="section-padding bg-ivory"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              Our <em>Services</em>
            </>
          }
          description={
            isPreview
              ? "Three core capabilities — with additional services available as your project requires."
              : "From permit drawings to final punch list — we manage the full construction lifecycle with a single point of accountability."
          }
        />

        <div
          className={`grid border border-cream-deeper ${
            isPreview ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {shown.map((service, index) => (
            <article
              key={service.number}
              className={`group relative overflow-hidden border-cream-deeper bg-ivory p-8 transition-colors hover:bg-cream ${
                !isPreview && index % 3 !== 2 ? "lg:border-r" : ""
              } ${!isPreview && index < 3 ? "border-b lg:[&:nth-child(n+4)]:border-b-0" : ""} ${
                isPreview && index < 2 ? "border-b md:border-b-0 md:border-r" : ""
              } border-b last:border-b-0`}
            >
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-stone-lighter">
                {service.number}
              </span>
              <h3 className="mt-4 font-display text-2xl tracking-wide text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-stone">
                {service.description}
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {!isPreview && (
          <div className="mt-14">
            <p className="section-tag">Additional Capabilities</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="border border-cream-deeper bg-cream px-6 py-5"
                >
                  <h4 className="font-display text-xl tracking-wide text-navy">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-stone">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isPreview && (
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
