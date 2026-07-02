import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-padding bg-navy">
      <div className="container-site">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              The <em>Process</em>
            </>
          }
          dark
        />

        <ol className="grid border-t border-ivory/10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className={`relative px-6 py-10 ${
                i < processSteps.length - 1 ? "lg:border-r lg:border-ivory/10" : ""
              } ${i % 2 === 0 ? "md:border-r md:border-ivory/10" : ""}`}
            >
              <span className="mb-6 block h-2.5 w-2.5 bg-crimson-muted" />
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/35">
                {step.step}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-wide text-ivory">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ivory/55">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
