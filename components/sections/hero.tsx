"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { useSiteContent } from "@/lib/locale-provider";

export function HeroSection() {
  const content = useSiteContent();

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28">
      <div className="hero-motion-glow" />
      <div className="hero-motion-lines" />
      <div className="absolute inset-x-0 top-0 h-[680px] bg-hero-grid bg-[size:100%_100%,34px_34px,34px_34px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),transparent)] opacity-35" />
      <div className="absolute left-[18%] top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="absolute right-[8%] top-24 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute right-[18%] top-36 h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/10" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <Reveal>
            <div className="max-w-3xl pt-2 lg:pt-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {content.hero.eyebrow}
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-copy sm:text-6xl lg:text-7xl">
                {content.hero.titleLead}
                <span className="block text-primary">{content.hero.titleAccent}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-copy-muted sm:text-xl">{content.hero.description}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">{content.hero.primaryCta}</Button>
                <Button href="#partners" variant="ghost">{content.hero.secondaryCta}</Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Model</div>
                  <div className="mt-2 font-display text-xl text-copy">Partner-led growth</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Core</div>
                  <div className="mt-2 font-display text-xl text-copy">Affiliate + TeamCash</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-copy-muted">Coverage</div>
                  <div className="mt-2 font-display text-xl text-copy">Traffic to Payments</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:pt-24">
            <div className="relative mx-auto max-w-[38rem] lg:max-w-none">
              <div className="absolute -left-10 top-20 hidden h-24 w-24 rounded-[26px] border border-primary/15 bg-primary/5 lg:block" />
              <Card className="relative overflow-hidden border-primary/15 p-0">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,212,71,0.12),transparent_36%,transparent_70%,rgba(255,212,71,0.08))]" />
                <div className="relative p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <div className="text-xs uppercase tracking-[0.28em] text-primary">
                        {content.hero.panelEyebrow}
                      </div>
                      <div className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-copy">
                        {content.hero.panelTitle}
                      </div>
                    </div>
                    <div className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {content.hero.panelStatus}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {content.hero.chips.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#091827] p-5"
                      >
                        <div className="text-[11px] uppercase tracking-[0.26em] text-copy-muted">
                          0{index + 1}
                        </div>
                        <div className="mt-3 font-display text-3xl font-semibold text-copy">
                          {stat.value}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-copy-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[24px] border border-white/10 bg-[#091827] p-5">
                      <div className="text-xs uppercase tracking-[0.26em] text-copy-muted">
                        {content.hero.stackTitle}
                      </div>
                      <div className="mt-4 space-y-3">
                        {content.hero.stackItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-copy"
                          >
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-primary/15 bg-primary/[0.08] p-5">
                      <div className="text-xs uppercase tracking-[0.26em] text-primary">
                        {content.hero.focusTitle}
                      </div>
                      <p className="mt-3 text-base leading-7 text-copy">{content.hero.focusDescription}</p>
                    </div>
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
