import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-200 bg-brand-950 text-brand-100">
      <div className="container-narrow section-padding !py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              Fisch Foundations
            </p>
            <p className="mt-2 text-sm text-brand-300">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-400">
              Licensed general contractor serving the tri-state area.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={siteConfig.emailHref} className="hover:text-white">
                  {siteConfig.email}
                </Link>
              </li>
              <li className="text-brand-300">{siteConfig.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-brand-800 pt-8 text-xs text-brand-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Fisch Foundations. All rights reserved.</p>
          <p>{siteConfig.license} · {siteConfig.insurance}</p>
        </div>
      </div>
    </footer>
  );
}
