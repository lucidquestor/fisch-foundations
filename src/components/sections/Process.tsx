import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="process" className="section-padding bg-navy">
      <div className="container-site">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              The <span className="section-title-accent">Process</span>
            </>
          }
          dark
        />

        <ol className="grid border-t border-ivory/10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className={cn(
                "relative border-b border-ivory/10 px-5 py-8 md:px-6 md:py-10",
                i % 2 === 0 && "md:border-r md:border-ivory/10",
                i < processSteps.length - 1 && "lg:border-r lg:border-ivory/10",
                i >= processSteps.length - 2 && "md:border-b-0 lg:border-b-0",
                i === processSteps.length - 1 && "border-b-0",
              )}
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
