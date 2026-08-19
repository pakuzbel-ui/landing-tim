"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useSiteContent } from "@/lib/locale-provider";

export function HeroSection() {
  const content = useSiteContent();

  return (
    <section id="top" className="relative overflow-hidden pb-8 pt-8 sm:pb-10 sm:pt-10">
      <Container className="relative">
        <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1.32fr)_minmax(360px,0.68fr)] xl:gap-14">
          <div>
            <div className="inline-flex max-w-full items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs sm:tracking-[0.32em]">
              <span className="h-2 w-2 bg-primary" />
              {content.hero.eyebrow}
            </div>

            <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[0.98] tracking-tight text-copy drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)] sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {content.hero.titleLead}
              <span className="block text-primary">{content.hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-copy-muted drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-lg sm:leading-8">
              {content.hero.description}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-8">
              <Button href="#contact" className="text-base">
                {content.hero.primaryCta}
              </Button>
              <Button
                href="#calculator"
                variant="ghost"
                leadingIcon={<span className="font-display text-lg font-semibold">$</span>}
              >
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <aside className="border-t border-primary/35 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
              <span className="text-primary">{content.hero.panelEyebrow}</span>
              <span className="flex items-center gap-2 text-copy-muted">
                <span className="h-2 w-2 bg-primary shadow-[0_0_16px_rgba(255,210,0,0.55)]" />
                {content.hero.panelStatus}
              </span>
            </div>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight text-copy sm:text-3xl">
              {content.hero.panelTitle}
            </h2>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {content.hero.focusTitle}
              </div>
              <p className="mt-2 text-sm leading-6 text-copy-muted">{content.hero.focusDescription}</p>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-copy-muted">
                {content.hero.stackTitle}
              </div>
              <div className="mt-3 space-y-2.5">
                {content.hero.stackItems.map((item, index) => (
                  <div key={item} className="grid grid-cols-[24px_1fr] gap-3 text-sm leading-5 text-copy-muted">
                    <span className="font-display text-xs font-semibold text-primary">0{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
