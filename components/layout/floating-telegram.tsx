import { TelegramIcon } from "@/components/ui/icons";

export function FloatingTelegram() {
  return (
    <a
      href="https://t.me/bigboyy_1"
      target="_blank"
      rel="noreferrer"
      aria-label="Message on Telegram"
      className="floating-telegram h-14 w-14 justify-center rounded-full text-sm font-semibold transition"
    >
      <TelegramIcon className="h-6 w-6 text-white" />
    </a>
  );
}
