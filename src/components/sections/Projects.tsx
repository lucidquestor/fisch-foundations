"use client";

import { useState } from "react";
import {
  projectRegions,
  type ProjectRegion,
} from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<ProjectRegion>("All");

  return (
    <section id="projects" className="section-padding bg-brand-100">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Project Experience"
          title="Project Experience"
          description="Firsthand involvement across ten projects — ground-up residential, multi-family, and commercial construction spanning Manhattan, Brooklyn, Queens, and Long Island City."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectRegions.map((region) => (
            <button
              key={region.label}
              type="button"
              onClick={() => setActive(region.label)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === region.label
                  ? "border-brand-950 bg-brand-950 text-white"
                  : "border-brand-300 bg-white text-brand-700 hover:border-brand-500",
              )}
            >
              {region.label}
              {region.label !== "All" && (
                <span className="ml-2 text-brand-400">
                  {region.count} Projects
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectRegions
            .filter((r) => r.label !== "All")
            .filter((r) => active === "All" || active === r.label)
            .map((region) => (
              <div
                key={region.label}
                className="flex aspect-[4/3] flex-col justify-end rounded-sm border border-brand-200 bg-gradient-to-br from-brand-800 to-brand-950 p-6 text-white"
              >
                <p className="text-xs uppercase tracking-wider text-brand-300">
                  Project Involvement
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {region.label}
                </h3>
                <p className="mt-1 text-sm text-brand-300">
                  {region.count} Projects · Tri-State
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
