"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  featuredProjects,
  projectDisclosure,
  projectFilters,
  projects,
  type Project,
  type ProjectBorough,
} from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProjectsProps = {
  variant?: "preview" | "full";
  fullBleed?: boolean;
};

export function Projects({ variant = "full", fullBleed = false }: ProjectsProps) {
  const isPreview = variant === "preview";
  const [active, setActive] = useState<ProjectBorough>("all");

  const source = isPreview ? featuredProjects : projects;

  const filtered = useMemo(() => {
    const list =
      active === "all"
        ? source
        : source.filter((p) => p.borough === active);
    return list.map((p, i) => ({
      ...p,
      large: fullBleed && isPreview ? i === 0 : i === 0,
    }));
  }, [active, source, isPreview, fullBleed]);

  const heading = (
    <SectionHeading
      eyebrow="Project Experience"
      title={
        <>
          Project <em>Experience</em>
        </>
      }
      description={
        isPreview
          ? undefined
          : "Firsthand involvement across ground-up residential, multi-family, and commercial construction."
      }
      dark={fullBleed && isPreview}
      className="mb-0"
    />
  );

  const grid = (
    <div
      className={cn(
        "grid gap-0.5",
        fullBleed && isPreview
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "gap-1 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {filtered.map((project) => (
        <ProjectCard
          key={project.num}
          project={project}
          tall={fullBleed && isPreview && project.large}
        />
      ))}
    </div>
  );

  if (fullBleed && isPreview) {
    return (
      <section className="bg-navy">
        <div className="container-site px-5 pb-6 pt-14 md:px-10 lg:px-16">
          {heading}
        </div>
        {grid}
        <div className="container-site px-5 py-10 text-center md:px-10 lg:px-16">
          <Button href="/projects" variant="ghost-white">
            View Full Portfolio
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section
      id={isPreview ? undefined : "projects"}
      className="section-padding bg-cream-dark"
    >
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {heading}

          {!isPreview && (
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActive(filter.id)}
                  className={cn(
                    "px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-colors",
                    active === filter.id
                      ? "bg-navy text-ivory"
                      : "border-2 border-cream-deeper bg-ivory text-stone hover:border-navy/30",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {!isPreview && (
          <p className="mb-8 max-w-3xl border-l-[3px] border-crimson/40 py-1 pl-4 text-sm font-light leading-relaxed text-stone">
            {projectDisclosure}
          </p>
        )}

        {grid}

        {isPreview && (
          <div className="mt-10 text-center">
            <Button href="/projects" variant="outline">
              View Full Portfolio
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  tall,
}: {
  project: Project & { large?: boolean };
  tall?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden bg-navy-mid",
        project.large || tall
          ? "sm:col-span-2 aspect-[16/9] lg:aspect-[2/1]"
          : "aspect-[4/3]",
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.address}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-mid to-navy">
          <span className="font-display text-5xl text-ivory/10">FF</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
          {project.num}
        </p>
        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-ivory/55">
          Involved In · {project.type}
        </p>
        <h3 className="mt-2 font-display text-xl tracking-wide text-ivory md:text-2xl lg:text-3xl">
          {project.address}
        </h3>
        <p className="mt-1 text-sm text-ivory/60">
          {project.city}
          {project.note ? ` · ${project.note}` : ""}
        </p>
      </div>
    </article>
  );
}
