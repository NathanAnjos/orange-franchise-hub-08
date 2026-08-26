import { Check, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export function scrollToForm() {
  const el = document.getElementById("formulario");
  el?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function CtaButton({
  children,
  className = "",
  withIcon = false,
  variant = "solid",
}: {
  children: ReactNode;
  className?: string;
  withIcon?: boolean;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[50px] px-6 py-3 text-sm font-semibold font-display transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary-light hover:-translate-y-0.5"
      : "border border-border-primary text-primary bg-accent hover:bg-primary hover:text-primary-foreground";
  return (
    <button type="button" onClick={scrollToForm} className={`${base} ${styles} ${className}`}>
      {withIcon && <MessageCircle className="h-4 w-4" />}
      {children}
    </button>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center rounded-[50px] border border-border-primary bg-accent px-4 py-1.5">
      {children}
    </span>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-body-text">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="text-sm leading-relaxed">{children}</span>
    </li>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-2xl leading-tight font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}
