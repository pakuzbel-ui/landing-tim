"use client";

import { useEffect, useRef, useState } from "react";
import { Locale, localeOptions } from "@/data/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useLocale, useSiteContent } from "@/lib/locale-provider";
import { TelegramIcon, WhatsAppIcon } from "@/components/ui/icons";

const whatsappHref = "https://wa.me/?text=Hello%20TeamCash";
const telegramHref = "https://t.me/bigboyy_1";
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

export function Header() {
  const [open, setOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLocale();
  const content = useSiteContent();
  const activeLocale = localeOptions.find((item) => item.code === locale);

  function changeLocale(nextLocale: typeof locale) {
    setLocale(nextLocale);
    setOpen(false);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!languageRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[linear-gradient(180deg,rgba(3,6,10,0.78),rgba(3,6,10,0.48)_62%,rgba(3,6,10,0))] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
      <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          <a href="/" className="flex items-center">
            <div className="inline-flex min-w-0 flex-col rounded-xl bg-black/[0.24] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_42px_rgba(0,0,0,0.18)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
              <span className="font-display text-[1.35rem] font-semibold leading-none sm:text-[2rem]">
                <span className="text-copy">Team</span>
                <span className="text-[#FFD33D]">Cash</span>
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-copy-muted sm:text-xs sm:tracking-[0.34em]">
                {content.brand.suffix}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1.5 rounded-full bg-black/[0.14] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] xl:flex 2xl:gap-2">
            {content.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-copy-muted transition hover:bg-white/[0.07] hover:text-copy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <div
              className="relative"
              ref={languageRef}
              onPointerLeave={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="inline-flex min-w-[74px] items-center justify-center gap-2 rounded-lg bg-black/[0.2] px-3 py-2 text-xs font-semibold text-copy-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:bg-black/[0.3] hover:text-copy [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]"
              >
                <span className="text-base leading-none">{localeFlags[locale]}</span>
                {activeLocale?.short}
              </button>

              {open ? (
                <div className="absolute right-0 top-full z-20 min-w-[220px] overflow-hidden rounded-xl bg-[#07111d]/92 p-2 pt-3 shadow-[0_22px_60px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {localeOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        changeLocale(item.code);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-sm text-copy-muted transition hover:bg-white/[0.05] hover:text-copy",
                        item.code === locale && "bg-white/[0.045] text-copy",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-lg leading-none">
                        {localeFlags[item.code]}
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <a
              href={telegramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Telegram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_0_22px_rgba(34,158,217,0.24)] transition hover:bg-[#35AEE2]"
            >
              <TelegramIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_22px_rgba(37,211,102,0.22)] transition hover:bg-[#35E276]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>

            <Button href="#contact" className="px-4 py-2.5">{content.header.cta}</Button>
          </div>
        </div>

        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-4 xl:hidden">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-copy-muted transition hover:border-primary/30 hover:text-copy"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => changeLocale(localeOptions[(localeOptions.findIndex((item) => item.code === locale) + 1) % localeOptions.length].code)}
            className="whitespace-nowrap rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            <span className="mr-2">{localeFlags[locale]}</span>
            {activeLocale?.short}
          </button>
        </div>
      </div>
    </header>
  );
}
