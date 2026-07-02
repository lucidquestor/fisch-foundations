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
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-site">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Start Your <em>Project</em>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl tracking-wide text-navy">
              Let&apos;s Talk
            </h3>
            <p className="mt-3 font-serif text-lg italic text-stone">
              Every project begins with a conversation.
            </p>

            <dl className="mt-8 space-y-5">
              {[
                { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
                { label: "Email", value: siteConfig.email, href: siteConfig.emailHref },
                { label: "Service Area", value: siteConfig.serviceArea },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 border-b border-cream-deeper pb-5 last:border-b-0"
                >
                  <dt className="min-w-[80px] pt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-crimson">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-charcoal">
                    {item.href ? (
                      <a href={item.href} className="hover:text-crimson">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 lg:col-span-3 md:grid-cols-2"
          >
            <Field label="First Name" name="firstName" required />
            <Field label="Last Name" name="lastName" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />

            <div className="md:col-span-2">
              <label
                htmlFor="projectType"
                className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="mt-1.5 w-full border border-cream-deeper bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-navy"
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
              <label
                htmlFor="details"
                className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
              >
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                className="mt-1.5 w-full resize-y border border-cream-deeper bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-navy"
              />
            </div>

            {state === "success" && (
              <p className="md:col-span-2 text-sm font-medium text-crimson">
                Thank you — we&apos;ll be in touch within 24 hours.
              </p>
            )}
            {state === "error" && (
              <p className="md:col-span-2 text-sm font-medium text-crimson-light">
                {error}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-primary w-full disabled:opacity-60 md:w-auto"
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full border border-cream-deeper bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}
