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

export function WalletIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 7.5h14.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-12A3.5 3.5 0 0 1 3 16V8.5A3.5 3.5 0 0 1 6.5 5H18" />
      <path d="M16 13h5" />
      <path d="M17.5 12.5h.01" />
    </BaseIcon>
  );
}

export function TimerIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M10 2h4" />
      <path d="M12 14l3-3" />
      <circle cx="12" cy="13" r="8" />
      <path d="M17.5 6.5l1.2-1.2" />
    </BaseIcon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </BaseIcon>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8 8.4l2.4 5" />
      <path d="M16 8.4l-2.4 5" />
      <path d="M8.2 7h7.6" />
    </BaseIcon>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13.5A2.5 2.5 0 0 0 6.5 16H8v-5H6.5A2.5 2.5 0 0 0 4 13.5z" />
      <path d="M20 13.5A2.5 2.5 0 0 1 17.5 16H16v-5h1.5A2.5 2.5 0 0 1 20 13.5z" />
      <path d="M16 18c-.8 1.2-2 1.8-4 1.8" />
    </BaseIcon>
  );
}

export function CoverageIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 6.5l5-2 6 2 5-2v13l-5 2-6-2-5 2v-13z" />
      <path d="M9 4.5v13" />
      <path d="M15 6.5v13" />
      <path d="M12 11.8h.01" />
      <path d="M16.5 14.2h.01" />
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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path d="M12 2.5A9.4 9.4 0 0 0 3.9 16.6L3 21l4.5-1.1A9.4 9.4 0 1 0 12 2.5Zm0 1.8a7.6 7.6 0 0 1 6.4 11.7 7.6 7.6 0 0 1-10.3 2.5l-.3-.2-2.4.6.5-2.4-.2-.3A7.6 7.6 0 0 1 12 4.3Zm-3 3.9c-.2 0-.5.1-.7.3-.3.3-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.6 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.3-.1-.5-.1-.7.2l-.5.7c-.2.3-.4.3-.7.1-.3-.1-1.2-.4-2.2-1.4-.8-.8-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.7-.4Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
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
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path d="M14.2 8.2V6.9c0-.7.5-.9.9-.9h2V2.7l-2.8-.1c-3.1 0-3.8 2.3-3.8 3.8v1.8H8v3.4h2.5V21h3.7v-9.4h2.8l.4-3.4h-3.2Z" />
    </svg>
  );
}
