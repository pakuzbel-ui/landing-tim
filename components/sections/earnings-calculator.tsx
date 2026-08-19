"use client";

import { type ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/lib/locale-provider";
import type { Locale } from "@/data/i18n";

const AGENT_PERCENT = 8;
const AFFILIATE_PERCENT = 35;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 100_000;
const STEP_AMOUNT = 1_000;
const DEFAULT_AMOUNT = 10_000;

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
    <section id="calculator" className="py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.45fr)] lg:items-center lg:gap-12">
          <div className="text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{text.eyebrow}</div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-copy sm:text-4xl">
              {text.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-copy-muted sm:text-base">
              {text.description}
            </p>
          </div>

          <div className="min-w-0 border-y border-white/15 py-4 sm:py-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <AmountField label={text.deposit} value={deposit} onChange={setDeposit} />
              <AmountField label={text.losses} value={losses} onChange={setLosses} />
            </div>

            <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-3 sm:mt-5 sm:pt-4">
              <ResultSummary title={text.agent} value={values.agent} note={text.agentNote} />
              <ResultSummary title={text.affiliate} value={values.affiliate} note={text.affiliateNote} />
              <ResultSummary title={text.total} value={values.total} note={text.totalNote} accent />
            </div>

            <div className="mt-3 text-right text-[9px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[10px]">
              {text.level}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type EarningsCalculatorModalProps = {
  open: boolean;
  onClose: () => void;
};

export function EarningsCalculatorModal({ open, onClose }: EarningsCalculatorModalProps) {
  const { locale } = useLocale();
  const text = copy[locale];
  const [mounted, setMounted] = useState(false);
  const [deposit, setDeposit] = useState(DEFAULT_AMOUNT);
  const [losses, setLosses] = useState(DEFAULT_AMOUNT);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const values = useMemo(() => {
    const agent = deposit * (AGENT_PERCENT / 100);
    const affiliate = losses * (AFFILIATE_PERCENT / 100);

    return {
      agent,
      affiliate,
      total: agent + affiliate,
    };
  }, [deposit, losses]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="income-calculator-title"
        className="max-h-[calc(100vh-3rem)] w-full max-w-[560px] overflow-y-auto rounded-lg border border-white/10 bg-[#080b0d] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.65)] sm:p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              {text.eyebrow}
            </div>
            <h2 id="income-calculator-title" className="mt-1 font-display text-xl font-semibold leading-tight text-copy sm:text-2xl">
              {text.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close income calculator"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111417] text-xl leading-none text-copy-muted transition hover:bg-[#181c20] hover:text-copy"
          >
            ×
          </button>
        </div>

        <p className="mt-2 text-xs leading-5 text-copy-muted sm:text-sm">{text.description}</p>

        <div className="mt-4 grid gap-3">
          <AmountRange label={text.deposit} value={deposit} onChange={setDeposit} />
          <AmountRange label={text.losses} value={losses} onChange={setLosses} />
        </div>

        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0e1215] sm:grid-cols-3">
          <ResultMetric title={text.agent} value={values.agent} note={text.agentNote} />
          <ResultMetric
            title={text.affiliate}
            value={values.affiliate}
            note={text.affiliateNote}
            className="border-l border-white/[0.08]"
          />
          <ResultMetric
            title={text.total}
            value={values.total}
            note={text.totalNote}
            accent
            className="col-span-2 border-t border-white/[0.08] sm:col-span-1 sm:border-l sm:border-t-0"
          />
        </div>

        <div className="mt-3 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          {text.level}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function AmountRange({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const progress = ((value - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  return (
    <label className="block rounded-lg border border-white/[0.08] bg-[#0e1215] px-3 py-3">
      <span className="flex items-center justify-between gap-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-copy-muted">{label}</span>
        <span className="font-display text-lg font-semibold text-copy">{formatUsd(value)}</span>
      </span>

      <input
        value={value}
        onInput={(event) => onChange(Number(event.currentTarget.value))}
        onChange={(event) => onChange(Number(event.target.value))}
        type="range"
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step={STEP_AMOUNT}
        aria-label={label}
        className="income-range mt-3"
        style={{
          background: `linear-gradient(to right, #fede33 0%, #fede33 ${progress}%, rgba(255,255,255,0.14) ${progress}%, rgba(255,255,255,0.14) 100%)`,
        }}
      />

      <span className="mt-1.5 flex justify-between text-[10px] text-copy-muted/70">
        <span>{formatUsd(MIN_AMOUNT)}</span>
        <span>{formatUsd(MAX_AMOUNT)}</span>
      </span>
    </label>
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
    <label className="block min-w-0">
      <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-copy-muted sm:text-xs">
        {label}
      </span>
      <span className="mt-2 flex min-w-0 items-center border-b border-white/25 pb-2">
        <span className="mr-1.5 text-lg font-semibold text-primary sm:text-xl">$</span>
        <input
          value={value}
          onChange={(event) => onChange(readAmount(event))}
          type="number"
          min="0"
          inputMode="numeric"
          aria-label={`${label} $`}
          className="min-w-0 w-full bg-transparent font-display text-xl font-semibold text-copy outline-none sm:text-2xl"
        />
      </span>
    </label>
  );
}

function ResultSummary({
  title,
  value,
  note,
  accent = false,
}: {
  title: string;
  value: number;
  note: string;
  accent?: boolean;
}) {
  return (
    <div className="min-w-0 px-2 py-1.5 text-left sm:px-4 sm:py-2">
      <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-copy-muted sm:text-[10px]">
        {title}
      </div>
      <div
        className={`mt-1 whitespace-nowrap font-display text-lg font-semibold sm:text-2xl ${
          accent ? "text-primary" : "text-copy"
        }`}
      >
        {formatUsd(value)}
      </div>
      <p className="mt-1 hidden text-xs leading-5 text-copy-muted sm:block">{note}</p>
    </div>
  );
}

function ResultMetric({
  title,
  value,
  note,
  accent = false,
  className = "",
}: {
  title: string;
  value: number;
  note: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className={`min-w-0 px-3 py-3 ${className}`}>
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-copy-muted">{title}</div>
      <div className={`mt-1 font-display text-2xl font-semibold ${accent ? "text-primary" : "text-copy"}`}>
        {formatUsd(value)}
      </div>
      <p className="mt-1 text-xs leading-5 text-copy-muted">{note}</p>
    </div>
  );
}
