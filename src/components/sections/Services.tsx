import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-padding bg-ivory">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              Our <em>Services</em>
            </>
          }
          description="From permit drawings to final punch list — we manage the full construction lifecycle with a single point of accountability."
        />

        <div className="grid border border-cream-deeper md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`group relative overflow-hidden border-cream-deeper bg-ivory p-8 transition-colors hover:bg-cream ${
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${index < 3 ? "border-b" : ""} ${index % 2 === 0 ? "md:border-r" : ""} ${
                index >= 4 ? "md:border-b-0" : "md:border-b"
              } border-b last:border-b-0 lg:[&:nth-child(n+4)]:border-b-0`}
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
      </div>
    </section>
  );
}
