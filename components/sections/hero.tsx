"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { useSiteContent } from "@/lib/locale-provider";

export function HeroSection() {
  const content = useSiteContent();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pb-24">
      <div className="hero-motion-glow" />
      <div className="hero-motion-lines" />

      <Container className="relative">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <div className="max-w-4xl pt-2 xl:pt-8">
              <div className="inline-flex max-w-full items-center gap-3 rounded-md border border-primary/25 bg-primary/[0.08] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:px-4 sm:text-xs sm:tracking-[0.32em] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
                <span className="h-2 w-2 bg-primary shadow-[0_0_18px_rgba(255,210,0,0.8)]" />
                {content.hero.eyebrow}
              </div>

              <h1 className="mt-6 max-w-[13ch] font-display text-4xl font-semibold leading-[0.96] tracking-tight text-copy sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {content.hero.titleLead}
                <span className="block bg-gradient-to-r from-primary via-[#fff0a3] to-accent bg-clip-text text-transparent">
                  {content.hero.titleAccent}
                </span>
              </h1>

              <div className="mt-6 h-px w-40 bg-gradient-to-r from-primary via-accent to-transparent" />

              <p className="mt-6 max-w-2xl text-base leading-7 text-copy-muted sm:text-lg sm:leading-8">{content.hero.description}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contact">{content.hero.primaryCta}</Button>
                <Button href="#partners" variant="ghost">{content.hero.secondaryCta}</Button>
              </div>

              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {["Betting traffic", "Partner income", "Fast payouts"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-primary/20 bg-black/25 px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-primary/90"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="payment-badge rounded-lg p-4 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Model</div>
                  <div className="mt-2 font-display text-lg text-copy sm:text-xl">MelBet Payment Layer</div>
                </div>
                <div className="payment-badge rounded-lg p-4 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Flow</div>
                  <div className="mt-2 font-display text-lg text-copy sm:text-xl">Deposit + Withdrawal</div>
                </div>
                <div className="payment-badge rounded-lg p-4 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Network</div>
                  <div className="mt-2 font-display text-lg text-copy sm:text-xl">Local Agents</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="xl:pt-20">
            <div className="relative mx-auto max-w-[38rem] lg:max-w-none">
              <Card className="mesh-surface relative overflow-hidden border-white/10 bg-[#07111d]/84 p-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute inset-y-0 right-12 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,210,0,0.045),transparent_34%,transparent_68%,rgba(245,176,0,0.055))]" />
                <div className="relative p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <div className="text-xs uppercase tracking-[0.28em] text-primary">
                        {content.hero.panelEyebrow}
                      </div>
                      <div className="mt-3 max-w-lg font-display text-2xl font-semibold leading-tight text-copy sm:text-3xl">
                        {content.hero.panelTitle}
                      </div>
                    </div>
                    <div className="w-fit rounded-md border border-primary/25 bg-black/20 px-3 py-1 text-sm font-semibold text-primary">
                      {content.hero.panelStatus}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {content.hero.chips.map((stat) => (
                      <div
                        key={stat.label}
                        className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#050c14]/84 p-4 sm:p-5 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/80 to-transparent" />
                        <div className="font-display text-2xl font-semibold text-copy sm:text-3xl">
                          {stat.value}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-copy-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-lg border border-white/[0.08] bg-[#050c14]/84 p-4 sm:p-5">
                      <div className="text-xs uppercase tracking-[0.26em] text-copy-muted">
                        {content.hero.stackTitle}
                      </div>
                      <div className="mt-4 space-y-3">
                        {content.hero.stackItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-md border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-copy"
                          >
                            <span className="mt-1 h-2 w-2 bg-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-[#2f2a13]/84 p-4 sm:p-5">
                      <div className="text-xs uppercase tracking-[0.26em] text-primary">
                        {content.hero.focusTitle}
                      </div>
                      <p className="mt-3 text-base leading-7 text-copy">{content.hero.focusDescription}</p>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {["MelBet betting", "TeamCash income", "Agent commission"].map((item) => (
                      <div
                        key={item}
                        className="flex min-h-[58px] items-center rounded-md border border-white/[0.08] bg-black/20 px-4 py-3 text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-copy-muted"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
