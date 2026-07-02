import { trustBadges } from "@/content/site";

export function TrustBar() {
  return (
    <div className="overflow-hidden border-b border-cream-deeper bg-cream-dark px-5 py-4 md:px-10 lg:px-16">
      <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-3">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2.5 whitespace-nowrap">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-stone">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
