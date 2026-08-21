import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  leadingIcon?: ReactNode;
  compact?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Button({ href, children, variant = "primary", leadingIcon, compact = false, className, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex min-h-11 items-center py-2 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
        compact ? "gap-2" : "gap-3",
        variant === "primary"
          ? "text-copy hover:text-primary"
          : "text-copy-muted hover:text-copy",
        className,
      )}
    >
      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center text-primary" aria-hidden="true">
        {leadingIcon ?? <span className="h-2 w-2 bg-primary shadow-[0_0_14px_rgba(255,210,0,0.48)]" />}
      </span>
      <span>{children}</span>
      <span
        className={cn(
          "h-px shrink-0 bg-primary/45 transition-[width,background-color] duration-300 group-hover:bg-primary",
          compact ? "hidden w-4 group-hover:w-6 2xl:block" : "w-7 group-hover:w-10",
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full border border-primary/45 leading-none text-primary transition duration-300 group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-black",
          compact ? "h-7 w-7 text-sm" : "h-8 w-8 text-base",
        )}
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
