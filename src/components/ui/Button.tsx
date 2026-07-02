import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "outline"
    | "ivory"
    | "ghost"
    | "ivory-solid"
    | "ghost-white";
  className?: string;
};

const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
  ivory: "btn-ivory",
  ghost: "btn-ghost",
  "ivory-solid": "btn-ivory-solid",
  "ghost-white": "btn-ghost-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}
