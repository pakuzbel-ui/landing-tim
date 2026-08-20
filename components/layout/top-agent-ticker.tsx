"use client";

import type { CSSProperties } from "react";
import type { Locale } from "@/data/i18n";
import { useLocale } from "@/lib/locale-provider";

type CountryLocale = Exclude<Locale, "ru" | "en">;

type TickerAgent = {
  name: string;
  earnings: string;
  flag: string;
};

const agentsByLocale: Record<CountryLocale, TickerAgent[]> = {
  mn: [
    { name: "Agent MN-014", earnings: "$12,840", flag: "🇲🇳" },
    { name: "Agent MN-027", earnings: "$9,675", flag: "🇲🇳" },
    { name: "Agent MN-041", earnings: "$16,290", flag: "🇲🇳" },
  ],
  tg: [
    { name: "Agent TJ-018", earnings: "$8,940", flag: "🇹🇯" },
    { name: "Agent TJ-032", earnings: "$11,360", flag: "🇹🇯" },
    { name: "Agent TJ-047", earnings: "$7,815", flag: "🇹🇯" },
  ],
  uz: [
    { name: "Agent UZ-021", earnings: "$18,450", flag: "🇺🇿" },
    { name: "Agent UZ-038", earnings: "$14,720", flag: "🇺🇿" },
    { name: "Agent UZ-052", earnings: "$20,180", flag: "🇺🇿" },
  ],
  az: [
    { name: "Agent AZ-012", earnings: "$15,630", flag: "🇦🇿" },
    { name: "Agent AZ-029", earnings: "$19,240", flag: "🇦🇿" },
    { name: "Agent AZ-044", earnings: "$13,975", flag: "🇦🇿" },
  ],
  tk: [
    { name: "Agent TM-016", earnings: "$9,420", flag: "🇹🇲" },
    { name: "Agent TM-031", earnings: "$12,150", flag: "🇹🇲" },
    { name: "Agent TM-048", earnings: "$10,785", flag: "🇹🇲" },
  ],
  ky: [
    { name: "Agent KG-019", earnings: "$10,960", flag: "🇰🇬" },
    { name: "Agent KG-035", earnings: "$13,480", flag: "🇰🇬" },
    { name: "Agent KG-053", earnings: "$8,725", flag: "🇰🇬" },
  ],
  fa: [
    { name: "Agent AF-011", earnings: "$7,640", flag: "🇦🇫" },
    { name: "Agent AF-026", earnings: "$9,180", flag: "🇦🇫" },
    { name: "Agent AF-043", earnings: "$6,950", flag: "🇦🇫" },
  ],
};

const allAgents = Object.values(agentsByLocale).flat();

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
  const isInternationalFeed = locale === "ru" || locale === "en";
  const agents = isInternationalFeed ? allAgents : agentsByLocale[locale];
  const secondsPerAgent = isInternationalFeed ? 4.6 : 5.3;
  const tickerStyle = {
    "--ticker-duration": `${agents.length * secondsPerAgent}s`,
  } as CSSProperties;

  return (
    <div className="top-agent-ticker">
      <span className="top-agent-ticker__track" style={tickerStyle} dir="ltr">
        {[0, 1].map((copyIndex) =>
          agents.map((agent) => (
            <span key={`${copyIndex}-${agent.name}`} className="top-agent-ticker__item" aria-hidden={copyIndex > 0}>
              <span className="top-agent-ticker__dot" />
              <span className="top-agent-ticker__status" dir="auto">
                {text.status}
              </span>
              <span className="top-agent-ticker__separator" />
              <span className="top-agent-ticker__agent">
                <span aria-hidden="true">{agent.flag}</span>
                {agent.name}
              </span>
              <span className="top-agent-ticker__separator" />
              <span dir="auto">
                {text.earnings} <strong>{agent.earnings}</strong>
              </span>
            </span>
          )),
        )}
      </span>
    </div>
  );
}
