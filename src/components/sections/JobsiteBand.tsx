import Image from "next/image";
import { copy, siteImages } from "@/content/site";

export function JobsiteBand() {
  return (
    <section className="relative isolate h-[42vh] min-h-[280px] max-h-[480px] w-full overflow-hidden bg-navy md:h-[50vh]">
      <Image
        src={siteImages.jobsite}
        alt="Active construction site"
        fill
        className="z-0 object-cover"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-navy/55" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      <div className="absolute inset-0 z-[2] flex items-center justify-center px-5 text-center">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-light">
            {copy.jobsite.eyebrow}
          </p>
          <p className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] leading-none tracking-wide text-ivory">
            {copy.jobsite.title}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm font-normal leading-relaxed text-ivory/65">
            {copy.jobsite.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
