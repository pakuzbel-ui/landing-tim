"use client";

import { useState } from "react";
import { localeOptions } from "@/data/i18n";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocale, useSiteContent } from "@/lib/locale-provider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const content = useSiteContent();
  const activeLocale = localeOptions.find((item) => item.code === locale);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06111F]">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#top" className="flex items-center">
            <div className="min-w-0">
              <div className="flex items-end">
                <div className="inline-flex items-center">
                  <span className="font-display text-[1.85rem] font-semibold leading-none tracking-[-0.05em] sm:text-[2rem]">
                    <span className="text-copy">Team</span>
                    <span className="text-[#FFD33D]">Cash</span>
                  </span>
                </div>
              </div>
              <div className="mt-1 flex items-center gap-3">
                <span className="h-px w-8 bg-primary/45" />
                <div className="text-[11px] uppercase tracking-[0.36em] text-copy-muted sm:text-xs">
                  {content.brand.suffix}
                </div>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {content.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-copy-muted transition hover:text-copy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="inline-flex min-w-[84px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-copy-muted transition hover:border-primary/30 hover:text-copy"
              >
                {activeLocale?.short}
              </button>

              {open ? (
                <div className="absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-[156px] rounded-2xl border border-white/10 bg-[#0B1626] p-2 shadow-card">
                  {localeOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLocale(item.code);
                        setOpen(false);
                      }}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-copy-muted transition hover:bg-white/[0.04] hover:text-copy"
                    >
                      <span>{item.label}</span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-primary/80">
                        {item.short}
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <Button href="#contact">{content.header.cta}</Button>
          </div>
        </div>

        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-4 lg:hidden">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-copy-muted transition hover:border-primary/30 hover:text-copy"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLocale(localeOptions[(localeOptions.findIndex((item) => item.code === locale) + 1) % localeOptions.length].code)}
            className="whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            {activeLocale?.short}
          </button>
        </div>
      </Container>
    </header>
  );
}
