"use client";

import { FormEvent, useState } from "react";
import {
  budgetRanges,
  copy,
  projectTypes,
  siteConfig,
  startTimelines,
} from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactProps = {
  showHeading?: boolean;
};

export function Contact({ showHeading = true }: ContactProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
        {showHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title={
              <>
                Start Your <span className="section-title-accent">Project</span>
              </>
            }
          />
        )}

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl tracking-wide text-navy">
              Let&apos;s Talk
            </h3>
            <p className="mt-3 font-serif text-lg italic text-stone">
              {copy.contact.intro}
            </p>

            <dl className="mt-8 space-y-5">
              {[
                {
                  label: "Phone",
                  value: siteConfig.phone,
                  href: siteConfig.phoneHref,
                },
                {
                  label: "Email",
                  value: siteConfig.email,
                  href: siteConfig.emailHref,
                },
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
            encType="multipart/form-data"
            className="grid gap-4 lg:col-span-3 md:grid-cols-2"
          >
            <Field label="First Name" name="firstName" required />
            <Field label="Last Name" name="lastName" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Project Location" name="projectLocation" required />

            <SelectField label="Project Type" name="projectType" required>
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </SelectField>

            <SelectField label="Estimated Budget" name="budgetRange">
              <option value="">Select a range (optional)</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </SelectField>

            <SelectField label="Desired Start" name="desiredStart">
              <option value="">Select a timeline (optional)</option>
              {startTimelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </SelectField>

            <SelectField label="Plans Available?" name="plansAvailable">
              <option value="">Select (optional)</option>
              <option value="Yes">Yes — I have plans or drawings</option>
              <option value="In progress">In progress</option>
              <option value="No">Not yet</option>
            </SelectField>

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

            <div className="md:col-span-2">
              <label
                htmlFor="plans"
                className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
              >
                Upload Plans or Photos (optional)
              </label>
              <input
                id="plans"
                name="plans"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                className="mt-1.5 w-full border border-cream-deeper bg-cream px-4 py-3 text-sm text-charcoal file:mr-4 file:border-0 file:bg-navy file:px-3 file:py-1 file:text-xs file:uppercase file:tracking-wider file:text-ivory"
              />
              <p className="mt-1 text-xs text-stone-light">
                PDF, JPG, or PNG · Max 10 MB. You can also email files to{" "}
                {siteConfig.email}.
              </p>
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

function SelectField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="mt-1.5 w-full border border-cream-deeper bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-navy"
      >
        {children}
      </select>
    </div>
  );
}
