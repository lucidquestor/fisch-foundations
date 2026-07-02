"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream-deeper bg-ivory/95 backdrop-blur-md">
      <div className="container-site flex items-center justify-between px-5 py-3 md:px-10 lg:px-16">
        <Link href="/" className="group leading-tight">
          <span className="block font-display text-xl tracking-wide text-navy">
            FISCH
          </span>
          <span className="block text-[9px] font-sans font-medium uppercase tracking-[0.22em] text-stone">
            {siteConfig.descriptor}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-navy",
                pathname === link.href ? "text-navy" : "text-stone",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-cream-deeper bg-ivory px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.18em] text-stone"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn-primary inline-block"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
