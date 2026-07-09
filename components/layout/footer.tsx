"use client";

import { Container } from "@/components/ui/container";
import { TelegramIcon } from "@/components/ui/icons";
import { useSiteContent } from "@/lib/locale-provider";

export function Footer() {
  const content = useSiteContent();

  return (
    <footer className="relative border-t border-white/10 py-6 sm:py-7">
      <div className="absolute inset-0 bg-[#020506]/68" aria-hidden="true" />
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <div className="font-display text-lg font-semibold text-copy">TeamCash</div>
          <p className="mt-1.5 max-w-md text-sm font-medium leading-6 text-[#d6dee8]/90">{content.footer.description}</p>
        </div>

        <div className="relative flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {content.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#d6dee8]/90 transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://t.me/bigboyy_1"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_0_24px_rgba(34,158,217,0.24)] transition hover:-translate-y-0.5 hover:bg-[#35AEE2]"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
