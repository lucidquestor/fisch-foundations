import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-950 text-white hover:bg-brand-800 border border-brand-950",
  secondary:
    "bg-accent text-brand-950 hover:bg-accent-dark border border-accent",
  outline:
    "bg-transparent text-brand-950 hover:bg-brand-100 border border-brand-300",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
