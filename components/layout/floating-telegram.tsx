"use client";

import { TelegramIcon } from "@/components/ui/icons";
import { telegramByLocale } from "@/data/telegram";
import { useLocale } from "@/lib/locale-provider";
import { trackContactClick } from "@/lib/analytics";

export function FloatingTelegram() {
  const { locale } = useLocale();
  const telegram = telegramByLocale[locale];

  return (
    <a
      href={telegram.href}
      onClick={() => trackContactClick("telegram", "floating_button", locale)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Message ${telegram.handle} on Telegram`}
      className="floating-telegram h-14 w-14 justify-center rounded-full text-sm font-semibold transition"
    >
      <TelegramIcon className="h-6 w-6 text-white" />
    </a>
  );
}
