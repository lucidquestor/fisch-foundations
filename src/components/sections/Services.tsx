import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="What We Build"
          title="Our Services"
          description="From permit drawings to final punch list — we manage the full construction lifecycle with a single point of accountability."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-sm border border-brand-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <span className="font-display text-3xl font-semibold text-accent/40 transition-colors group-hover:text-accent">
                {service.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-700">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
