import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

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
