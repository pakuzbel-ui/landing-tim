import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variant === "primary"
          ? "bg-primary text-[#05101A] shadow-glow hover:-translate-y-0.5 hover:bg-[#ffe47a]"
          : "border border-white/12 bg-white/5 text-copy backdrop-blur hover:border-primary/45 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
