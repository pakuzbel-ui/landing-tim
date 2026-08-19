"use client";

import type { Locale } from "@/data/i18n";
import { TelegramIcon } from "@/components/ui/icons";
import { useLocale } from "@/lib/locale-provider";

const topAgent = {
  name: "Agent #021",
  earnings: "$18,450",
  telegram: "@bigboyy_1",
  telegramUrl: "https://t.me/bigboyy_1",
};

const topAgentLabel: Record<Locale, { status: string; earnings: string }> = {
  ru: { status: "Топ-агент этого месяца", earnings: "Заработок" },
  en: { status: "Top agent this month", earnings: "Earnings" },
  mn: { status: "Энэ сарын шилдэг агент", earnings: "Орлого" },
  tg: { status: "Агенти беҳтарини моҳ", earnings: "Даромад" },
  uz: { status: "Oyning top agenti", earnings: "Daromad" },
  az: { status: "Ayın top agenti", earnings: "Gəlir" },
  tk: { status: "Aýyň top agenti", earnings: "Girdeji" },
  ky: { status: "Айдын мыкты агенти", earnings: "Киреше" },
  fa: { status: "نماینده برتر این ماه", earnings: "درآمد" },
};

export function TopAgentTicker() {
  const { locale } = useLocale();
  const text = topAgentLabel[locale];
  const accessibleLabel = `${text.status}: ${topAgent.name}, ${text.earnings} ${topAgent.earnings}, Telegram ${topAgent.telegram}`;

  return (
    <div className="top-agent-ticker">
      <a
        href={topAgent.telegramUrl}
        target="_blank"
        rel="noreferrer"
        className="top-agent-ticker__link"
        aria-label={accessibleLabel}
      >
        <span className="top-agent-ticker__track">
          {[0, 1, 2, 3].map((copyIndex) => (
            <span key={copyIndex} className="top-agent-ticker__item" aria-hidden={copyIndex > 0}>
              <span className="top-agent-ticker__dot" />
              <span className="top-agent-ticker__status">{text.status}</span>
              <span className="top-agent-ticker__separator" />
              <span>{topAgent.name}</span>
              <span className="top-agent-ticker__separator" />
              <span>
                {text.earnings} <strong>{topAgent.earnings}</strong>
              </span>
              <span className="top-agent-ticker__separator" />
              <span className="top-agent-ticker__contact">
                <TelegramIcon className="h-4 w-4" />
                {topAgent.telegram}
              </span>
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}
