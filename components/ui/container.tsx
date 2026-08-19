import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full px-4 sm:px-6 lg:px-10 2xl:px-14", className)}>
      {children}
    </div>
  );
}
