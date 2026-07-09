import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "tech-panel rounded-lg border border-white/[0.08] bg-[#07111d]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.03]",
        className,
      )}
    >
      {children}
    </div>
  );
}
