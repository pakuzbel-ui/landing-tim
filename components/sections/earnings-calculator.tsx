"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { useLocale } from "@/lib/locale-provider";
import type { Locale } from "@/data/i18n";

const AGENT_PERCENT = 8;
const AFFILIATE_PERCENT = 35;

type CalculatorCopy = {
  eyebrow: string;
  title: string;
  description: string;
  deposit: string;
  losses: string;
  agent: string;
  affiliate: string;
  total: string;
  agentNote: string;
  affiliateNote: string;
  totalNote: string;
  level: string;
};

const copy: Record<Locale, CalculatorCopy> = {
  ru: {
    eyebrow: "Income calculator",
    title: "Посчитайте потенциальный доход",
    description:
      "Калькулятор показывает примерный доход по двум моделям: процент от депозитов для Agent и RevShare от проигрыша игроков для Affiliate.",
    deposit: "Депозиты",
    losses: "Проигрыш игроков",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "8% от объема депозитов",
    affiliateNote: "35% RevShare от проигрыша игроков",
    totalNote: "Процент от депозитов + RevShare",
    level: "Top level",
  },
  en: {
    eyebrow: "Income calculator",
    title: "Estimate your potential income",
    description:
      "The calculator shows a sample income model: deposit percentage for Agent and RevShare from player losses for Affiliate.",
    deposit: "Deposits",
    losses: "Players' losses",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "8% from deposit volume",
    affiliateNote: "35% RevShare from player losses",
    totalNote: "Deposit percentage + RevShare",
    level: "Top level",
  },
  mn: {
    eyebrow: "Орлогын тооцоолуур",
    title: "Боломжит орлогоо тооцоолоорой",
    description: "Agent-д депозитын хувь, Affiliate-д тоглогчийн алдагдлаас RevShare тооцно.",
    deposit: "Депозит",
    losses: "Тоглогчийн алдагдал",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "Депозитын 8%",
    affiliateNote: "Тоглогчийн алдагдлын 35% RevShare",
    totalNote: "Депозитын хувь + RevShare",
    level: "Top level",
  },
  tg: {
    eyebrow: "Ҳисобкунаки даромад",
    title: "Даромади эҳтимолиро ҳисоб кунед",
    description: "Барои Agent фоиз аз депозитҳо ва барои Affiliate RevShare аз бохти бозингарон ҳисоб мешавад.",
    deposit: "Депозитҳо",
    losses: "Бохти бозингарон",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "8% аз ҳаҷми депозитҳо",
    affiliateNote: "35% RevShare аз бохти бозингарон",
    totalNote: "Фоиз аз депозитҳо + RevShare",
    level: "Top level",
  },
  uz: {
    eyebrow: "Daromad kalkulyatori",
    title: "Potensial daromadni hisoblang",
    description: "Agent uchun depozitlardan foiz, Affiliate uchun o'yinchilar yo'qotishidan RevShare hisoblanadi.",
    deposit: "Depozitlar",
    losses: "O'yinchilar yo'qotishi",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "Depozit hajmidan 8%",
    affiliateNote: "O'yinchilar yo'qotishidan 35% RevShare",
    totalNote: "Depozit foizi + RevShare",
    level: "Top level",
  },
  az: {
    eyebrow: "Gəlir kalkulyatoru",
    title: "Potensial gəliri hesablayın",
    description: "Agent üçün depozit faizi, Affiliate üçün oyunçu itkilərindən RevShare hesablanır.",
    deposit: "Depozitlər",
    losses: "Oyunçu itkiləri",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "Depozit həcmindən 8%",
    affiliateNote: "Oyunçu itkilərindən 35% RevShare",
    totalNote: "Depozit faizi + RevShare",
    level: "Top level",
  },
  tk: {
    eyebrow: "Girdeji kalkulýatory",
    title: "Mümkin girdejini hasaplaň",
    description: "Agent üçin depozitden göterim, Affiliate üçin oýunçy ýitgilerinden RevShare hasaplanýar.",
    deposit: "Depozitler",
    losses: "Oýunçy ýitgileri",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "Depozit möçberinden 8%",
    affiliateNote: "Oýunçy ýitgilerinden 35% RevShare",
    totalNote: "Depozit göterimi + RevShare",
    level: "Top level",
  },
  ky: {
    eyebrow: "Киреше калькулятору",
    title: "Мүмкүн болгон кирешени эсептеңиз",
    description: "Agent үчүн депозиттен пайыз, Affiliate үчүн оюнчулардын жоготуусунан RevShare эсептелет.",
    deposit: "Депозиттер",
    losses: "Оюнчулардын жоготуусу",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "Депозит көлөмүнөн 8%",
    affiliateNote: "Оюнчулардын жоготуусунан 35% RevShare",
    totalNote: "Депозит пайызы + RevShare",
    level: "Top level",
  },
  fa: {
    eyebrow: "محاسبه درآمد",
    title: "درآمد احتمالی را حساب کنید",
    description: "برای Agent درصد از دیپازیت و برای Affiliate سهم RevShare از باخت بازیکنان محاسبه می‌شود.",
    deposit: "دیپازیت‌ها",
    losses: "باخت بازیکنان",
    agent: "Agent",
    affiliate: "Affiliate",
    total: "Agent + Affiliate",
    agentNote: "۸٪ از حجم دیپازیت",
    affiliateNote: "۳۵٪ RevShare از باخت بازیکنان",
    totalNote: "درصد دیپازیت + RevShare",
    level: "Top level",
  },
};

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));
}

function readAmount(event: ChangeEvent<HTMLInputElement>) {
  return Math.max(0, Number(event.target.value) || 0);
}

export function EarningsCalculatorSection() {
  const { locale } = useLocale();
  const text = copy[locale];
  const [deposit, setDeposit] = useState(1000);
  const [losses, setLosses] = useState(1000);

  const values = useMemo(() => {
    const agent = deposit * (AGENT_PERCENT / 100);
    const affiliate = losses * (AFFILIATE_PERCENT / 100);

    return {
      agent,
      affiliate,
      total: agent + affiliate,
    };
  }, [deposit, losses]);

  return (
    <section id="calculator" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{text.eyebrow}</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-primary sm:text-5xl lg:text-6xl">
              {text.title}
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-copy-muted sm:text-lg">
              {text.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <AmountField label={text.deposit} value={deposit} onChange={setDeposit} />
              <AmountField label={text.losses} value={losses} onChange={setLosses} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ResultCard title={text.agent} value={values.agent} note={text.agentNote} />
              <ResultCard title={text.affiliate} value={values.affiliate} note={text.affiliateNote} />
            </div>

            <div className="rounded-xl border border-primary/35 bg-[#2e2707]/72 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-7">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-[0.34em] text-primary">{text.total}</div>
                <div className="mt-2 font-display text-5xl font-semibold leading-none text-primary sm:text-6xl">
                  {formatUsd(values.total)}
                </div>
              </div>
              <div className="my-6 h-px bg-white/10" />
              <p className="text-center text-base leading-7 text-copy-muted">{text.totalNote}</p>
              <div className="mt-6 rounded-md bg-primary py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-black">
                {text.level}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AmountField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="rounded-xl border border-white/10 bg-[#050505]/76 p-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
      <span className="block font-display text-2xl font-semibold uppercase text-primary">{label}</span>
      <span className="mt-4 flex items-center justify-center rounded-lg border border-white/15 bg-black/70 px-4 py-4">
        <span className="mr-2 text-2xl font-semibold text-copy">$</span>
        <input
          value={value}
          onChange={(event) => onChange(readAmount(event))}
          type="number"
          min="0"
          inputMode="numeric"
          className="w-full bg-transparent text-center font-display text-3xl font-semibold text-copy outline-none"
        />
      </span>
    </label>
  );
}

function ResultCard({ title, value, note }: { title: string; value: number; note: string }) {
  return (
    <div className="rounded-xl border border-white/12 bg-white/[0.075] p-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:p-7">
      <div className="text-xs font-bold uppercase tracking-[0.34em] text-copy-muted">{title}</div>
      <div className="mt-2 font-display text-4xl font-semibold text-copy sm:text-5xl">{formatUsd(value)}</div>
      <div className="my-6 h-px bg-white/10" />
      <p className="text-sm leading-6 text-copy-muted">{note}</p>
    </div>
  );
}
