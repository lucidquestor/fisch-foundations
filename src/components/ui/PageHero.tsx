type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate border-b border-cream-deeper bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container-site relative z-10 px-5 md:px-10 lg:px-16">
        {eyebrow && (
          <p className="mb-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-light">
            <span className="block h-px w-7 bg-gold-light" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wide text-ivory">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl font-serif text-lg font-light italic leading-relaxed text-ivory/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
