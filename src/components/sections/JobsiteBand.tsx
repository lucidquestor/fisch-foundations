import Image from "next/image";
import { siteImages } from "@/content/site";

export function JobsiteBand() {
  return (
    <section className="relative h-[42vh] min-h-[280px] max-h-[480px] w-full overflow-hidden md:h-[50vh]">
      <Image
        src={siteImages.jobsite}
        alt="Active construction site"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/55" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-light">
            On Site · On Schedule
          </p>
          <p className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] leading-none tracking-wide text-ivory">
            From Ground Break to Keys in Hand
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm font-normal leading-relaxed text-ivory/65">
            Daily oversight, trade coordination, and accountable delivery on
            complex residential and commercial builds.
          </p>
        </div>
      </div>
    </section>
  );
}
