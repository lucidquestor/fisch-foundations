import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="How We Work"
          title="The Process"
          align="center"
          className="mx-auto text-center"
        />

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="relative">
              <span className="font-display text-5xl font-semibold text-brand-200">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
