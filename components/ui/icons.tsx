import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

function BaseIcon({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M13 2L5 14h5l-1 8 8-12h-5l1-8z" />
    </BaseIcon>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </BaseIcon>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3l7 3v6c0 4.5-2.9 7.9-7 9-4.1-1.1-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12.5l1.8 1.8 3.2-4" />
    </BaseIcon>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 5.74" />
    </BaseIcon>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </BaseIcon>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5L12 21l9-4.5" />
    </BaseIcon>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path d="M21.2 4.2c.8-.3 1.5.4 1.2 1.3l-3.1 14.5c-.2 1-1.4 1.3-2.1.7l-4.6-3.4-2.2 2.1c-.5.5-1.4.2-1.5-.6l-.6-4.2-4.2-1.5c-.9-.3-.9-1.5 0-1.8l17.1-7.1Zm-11 10 7.1-6.7c.3-.3-.1-.7-.4-.5l-8.6 5.7.6 4.6 1.3-3.1Z" />
    </svg>
  );
}
