"use client";

import { FormEvent, useState } from "react";
import { projectTypes, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your Project"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-brand-950">
              Let&apos;s Talk
            </h3>
            <p className="mt-3 text-brand-700">
              Every project begins with a conversation.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.phoneHref}
                    className="text-lg font-semibold text-brand-950 hover:text-accent-dark"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.emailHref}
                    className="text-lg font-semibold text-brand-950 hover:text-accent-dark"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Service Area
                </dt>
                <dd className="mt-1 text-brand-700">{siteConfig.serviceArea}</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-sm border border-brand-200 bg-white p-8 lg:col-span-3 md:grid-cols-2"
          >
            <Field label="First Name" name="firstName" required />
            <Field label="Last Name" name="lastName" required />
            <Field label="Email" name="email" type="email" required className="md:col-span-1" />
            <Field label="Phone" name="phone" type="tel" />

            <div className="md:col-span-2">
              <label htmlFor="projectType" className="block text-sm font-medium text-brand-800">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="mt-1 w-full rounded-sm border border-brand-300 bg-white px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="details" className="block text-sm font-medium text-brand-800">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                className="mt-1 w-full rounded-sm border border-brand-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>

            {state === "success" && (
              <p className="md:col-span-2 text-sm font-medium text-green-700">
                Thank you — we&apos;ll be in touch within 24 hours.
              </p>
            )}
            {state === "error" && (
              <p className="md:col-span-2 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full rounded-sm bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60 md:w-auto"
              >
                {state === "submitting" ? "Sending…" : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-brand-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-sm border border-brand-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
      />
    </div>
  );
}
