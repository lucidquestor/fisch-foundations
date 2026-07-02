import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "section-tag",
            dark && "text-gold-light before:bg-gold-light",
            align === "center" && "justify-center",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "section-title",
          dark && "text-ivory",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "section-intro",
            dark && "text-stone-lighter/80",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
