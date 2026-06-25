import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost" | "outline";

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: string;
  className?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-aurora-indigo to-aurora-violet shadow-[0_18px_40px_-16px_rgba(99,102,241,0.7)] hover:shadow-[0_22px_55px_-14px_rgba(139,92,246,0.85)] hover:-translate-y-0.5",
  outline:
    "text-mist-100 border border-ink-600 hover:border-ink-600 hover:bg-ink-850",
  ghost: "text-mist-300 hover:text-mist-50",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
