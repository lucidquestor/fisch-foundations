import { copy, founder, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type FounderSectionProps = {
  compact?: boolean;
  hideTitle?: boolean;
};

export function FounderSection({ compact = false, hideTitle = false }: FounderSectionProps) {
  const leadLine = founder.name
    ? `Led by ${founder.name}, Fisch Foundations brings firsthand experience from complex residential and commercial developments across New York City.`
    : "Fisch Foundations is led by a principal with firsthand experience from complex residential and commercial developments across New York City.";

  return (
    <section className={compact ? "section-padding bg-cream" : "section-padding bg-ivory"}>
      <div className="container-site">
        {!compact && !hideTitle && (
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Construction From a Developer&apos;s{" "}
                <span className="section-title-accent">Perspective</span>
              </>
            }
          />
        )}

        <div className={`grid items-center gap-10 ${compact ? "lg:grid-cols-5" : "lg:grid-cols-2 lg:gap-16"}`}>
          <div className={`relative z-0 ${compact ? "lg:col-span-2" : ""}`}>
            <div className="aspect-[4/5] w-full max-w-sm overflow-hidden bg-navy mx-auto sm:mx-0">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <span className="font-display text-6xl text-ivory/15">FF</span>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-ivory/30">
                  Professional photo
                </p>
                <p className="mt-1 text-xs text-ivory/20">
                  Add founder image in /public
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10 hidden h-20 w-20 bg-crimson sm:flex sm:items-center sm:justify-center">
              <span className="text-center font-display text-[0.65rem] leading-snug tracking-[0.12em] text-ivory/80">
                Tri-
                <br />
                State
              </span>
            </div>
          </div>

          <div className={compact ? "lg:col-span-3" : ""}>
            {compact && (
              <p className="section-tag">Developer-Led GC</p>
            )}
            {founder.name && (
              <h3 className="font-display text-3xl tracking-wide text-navy">
                {founder.name}
              </h3>
            )}
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
              {founder.title}
            </p>
            <p className="mt-5 text-sm font-light leading-relaxed text-stone">
              {leadLine} {founder.bio}
            </p>
            {!compact && (
              <p className="mt-4 text-sm font-light leading-relaxed text-stone">
                {founder.extendedBio}
              </p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-stone-light">
              {siteConfig.licenseNote}
            </p>
            {compact && (
              <div className="mt-6">
                <Button href="/about" variant="outline">
                  How We Work
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
