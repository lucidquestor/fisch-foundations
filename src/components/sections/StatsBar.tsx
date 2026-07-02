export function StatsBar() {
  return (
    <section className="border-b border-brand-200 bg-brand-950 text-white">
      <div className="container-narrow px-6 py-8 md:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide">
              FISCH
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-400">
              FOUNDATIONS
            </p>
          </div>
          <p className="text-sm font-medium tracking-wide text-brand-300">
            Build · Renovate · Construct
          </p>
        </div>
      </div>
    </section>
  );
}
