"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/80 bg-brand-50/95 backdrop-blur">
      <div className="container-narrow flex items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="group">
          <span className="block font-display text-lg font-semibold tracking-tight text-brand-950">
            FISCH
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-600">
            Foundations
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-700 transition-colors hover:text-brand-950"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-sm bg-brand-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-brand-950 transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-brand-950 transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-brand-950 transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-200 bg-brand-50 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-brand-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={siteConfig.phoneHref}
                className="text-sm font-semibold text-accent-dark"
                onClick={() => setOpen(false)}
              >
                {siteConfig.phone}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
