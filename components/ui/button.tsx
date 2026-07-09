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
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]",
        variant === "primary"
          ? "bg-primary text-[#05101A] shadow-[0_0_0_1px_rgba(255,211,61,0.18),0_20px_60px_rgba(255,211,61,0.16)] hover:-translate-y-0.5 hover:bg-[#ffe47a]"
          : "border border-white/12 bg-[#07111d]/70 text-copy hover:border-primary/45 hover:bg-[#07111d]/82",
        className,
      )}
    >
      {children}
    </Link>
  );
}
