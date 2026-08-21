"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Locale, localeOptions } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { EarningsCalculatorModal } from "@/components/sections/earnings-calculator";
import { cn } from "@/lib/cn";
import { useLocale, useSiteContent } from "@/lib/locale-provider";
import { TelegramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { WavingFlag } from "@/components/ui/waving-flag";
import { TopAgentTicker } from "@/components/layout/top-agent-ticker";
import { telegramByLocale } from "@/data/telegram";
import { trackContactClick, trackEvent } from "@/lib/analytics";

const whatsappHref = "https://wa.me/?text=Hello%20TeamCash";
const utilityButtonClass = "inline-flex min-w-[48px] items-center justify-center gap-2 px-2 py-2 text-xs font-semibold text-copy-muted transition hover:text-copy";
const localeFlags: Record<Locale, string> = {
  ru: "🇷🇺",
  en: "🇬🇧",
  mn: "🇲🇳",
  tg: "🇹🇯",
  uz: "🇺🇿",
  az: "🇦🇿",
  tk: "🇹🇲",
  ky: "🇰🇬",
  fa: "🇦🇫",
};

function LocaleMenu({
  activeLocale,
  onSelect,
  className,
}: {
  activeLocale: Locale;
  onSelect: (locale: Locale) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "z-[70] min-w-[220px] overflow-hidden rounded-xl bg-[#07111d] p-2 shadow-[0_22px_60px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)]",
        className,
      )}
    >
      {localeOptions.map((item, index) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onSelect(item.code)}
          className={cn(
            "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-sm text-copy-muted transition hover:bg-[#111c26] hover:text-copy",
            item.code === activeLocale && "bg-[#14202a] text-copy",
          )}
        >
          <span>{item.label}</span>
          <WavingFlag flag={localeFlags[item.code]} className="text-lg" delay={index * -0.12} />
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  const calculatorTriggerRef = useRef<HTMLButtonElement | null>(null);
  const { locale, setLocale } = useLocale();
  const content = useSiteContent();
  const activeLocale = localeOptions.find((item) => item.code === locale);
  const telegramHref = telegramByLocale[locale].href;

  const closeCalculator = useCallback(() => {
    setCalculatorOpen(false);
    window.requestAnimationFrame(() => calculatorTriggerRef.current?.focus());
  }, []);

  function openCalculator(trigger: HTMLButtonElement) {
    calculatorTriggerRef.current = trigger;
    setOpen(false);
    setMobileMenuOpen(false);
    setCalculatorOpen(true);
  }

  function changeLocale(nextLocale: typeof locale) {
    setLocale(nextLocale);
    setOpen(false);
    setMobileMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }

  useEffect(() => {
    if (!open && !mobileMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        open &&
        !languageRef.current?.contains(target) &&
        !mobileLanguageRef.current?.contains(target)
      ) {
        setOpen(false);
      }

      if (mobileMenuOpen && !headerRef.current?.contains(target)) {
        setMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#030506] shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          <Link href="/" className="flex items-center">
            <div className="info-panel inline-flex min-w-0 flex-col rounded-xl px-3 py-2 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
              <span className="font-display text-[1.35rem] font-semibold leading-none sm:text-[2rem]">
                <span className="text-copy">Team</span>
                <span className="text-[#FFD33D]">Cash</span>
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-copy-muted sm:text-xs sm:tracking-[0.34em]">
                {content.brand.suffix}
              </span>
            </div>
          </Link>

          <nav className="info-panel hidden items-center gap-1.5 rounded-full px-2 py-1.5 xl:flex 2xl:gap-2">
            {content.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => trackEvent("navigation_click", { section: item.href.slice(1), placement: "header" })}
                className="rounded-full px-3 py-1.5 text-sm text-copy-muted transition hover:bg-white/[0.07] hover:text-copy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 xl:hidden">
            <button
              type="button"
              onClick={(event) => openCalculator(event.currentTarget)}
              className="inline-flex h-10 w-10 items-center justify-center text-primary transition hover:text-copy"
              aria-label="Income calculator"
              aria-haspopup="dialog"
              aria-expanded={calculatorOpen}
            >
              <span className="header-dollar-spin font-display text-lg font-semibold leading-none">$</span>
            </button>

            <div className="relative" ref={mobileLanguageRef}>
              <button
                type="button"
                onClick={() => {
                  setCalculatorOpen(false);
                  setMobileMenuOpen(false);
                  setOpen((current) => !current);
                }}
                className="inline-flex h-10 items-center justify-center gap-1.5 px-1.5 text-xs font-semibold text-copy-muted transition hover:text-copy"
                aria-label={content.header.languages}
                aria-haspopup="menu"
                aria-expanded={open}
              >
                <WavingFlag flag={localeFlags[locale]} className="text-base" />
                {activeLocale?.short}
              </button>

              {open ? (
                <LocaleMenu
                  activeLocale={locale}
                  onSelect={changeLocale}
                  className="absolute right-0 top-[calc(100%+10px)]"
                />
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setCalculatorOpen(false);
                setMobileMenuOpen((current) => !current);
              }}
              className="group inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-copy"
              aria-label="Открыть меню"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={cn(
                  "h-px w-5 bg-current transition",
                  mobileMenuOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span className={cn("h-px w-5 bg-current transition", mobileMenuOpen && "opacity-0")} />
              <span
                className={cn(
                  "h-px w-5 bg-current transition",
                  mobileMenuOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </button>
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <button
              type="button"
              onClick={(event) => openCalculator(event.currentTarget)}
              className={utilityButtonClass}
              aria-label="Income calculator"
              aria-haspopup="dialog"
              aria-expanded={calculatorOpen}
            >
              <span className="header-dollar-spin font-display text-lg font-semibold leading-none text-primary">$</span>
            </button>

            <div
              className="relative"
              ref={languageRef}
              onPointerLeave={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setCalculatorOpen(false);
                  setOpen((current) => !current);
                }}
                className={utilityButtonClass}
              >
                <WavingFlag flag={localeFlags[locale]} className="text-base" />
                {activeLocale?.short}
              </button>

              {open ? (
                <LocaleMenu
                  activeLocale={locale}
                  onSelect={changeLocale}
                  className="absolute right-0 top-full pt-3"
                />
              ) : null}
            </div>

            <a
              href={telegramHref}
              onClick={() => trackContactClick("telegram", "header", locale)}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Telegram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_0_22px_rgba(34,158,217,0.24)] transition hover:bg-[#35AEE2]"
            >
              <TelegramIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href={whatsappHref}
              onClick={() => trackContactClick("whatsapp", "header", locale)}
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_22px_rgba(37,211,102,0.22)] transition hover:bg-[#35E276]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>

            <Button href="#contact" compact onClick={() => trackEvent("cta_click", { placement: "header", target: "contact" })}>{content.header.cta}</Button>
          </div>
        </div>
      </div>
      <TopAgentTicker />

      {mobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-50 border-t border-primary/20 bg-[#030506] shadow-[0_28px_70px_rgba(0,0,0,0.72)] xl:hidden"
        >
          <nav className="px-4 py-3 sm:px-6">
            {content.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackEvent("navigation_click", { section: item.href.slice(1), placement: "mobile_menu" });
                  setMobileMenuOpen(false);
                }}
                className="flex min-h-12 items-center border-b border-white/10 py-3 text-base font-medium text-copy-muted transition hover:text-copy"
              >
                <span>{item.label}</span>
              </a>
            ))}

            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-2">
                <a
                  href={telegramHref}
                  onClick={() => trackContactClick("telegram", "mobile_menu", locale)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Telegram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#229ED9] text-white"
                >
                  <TelegramIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={whatsappHref}
                  onClick={() => trackContactClick("whatsapp", "mobile_menu", locale)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open WhatsApp"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <Button href="#contact" compact className="text-sm" onClick={() => trackEvent("cta_click", { placement: "mobile_menu", target: "contact" })}>
                  {content.header.cta}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      ) : null}

      <EarningsCalculatorModal open={calculatorOpen} onClose={closeCalculator} />
    </header>
  );
}
