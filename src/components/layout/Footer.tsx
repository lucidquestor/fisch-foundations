import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-crimson bg-navy px-5 py-6 md:px-10 lg:px-16">
      <div className="container-site flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg tracking-wide text-ivory/90">
            FISCH FOUNDATIONS
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-ivory/35">
            {siteConfig.descriptor}
          </p>
        </div>
        <p className="text-[0.7rem] tracking-wide text-ivory/35">
          © {year} Fisch Foundations LLC · All rights reserved
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.68rem] uppercase tracking-[0.12em] text-ivory/40 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
