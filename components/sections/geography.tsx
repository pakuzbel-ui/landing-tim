"use client";

import { MouseEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { TelegramIcon } from "@/components/ui/icons";
import { useSiteContent } from "@/lib/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlobeMap } from "@/components/sections/globe-map";

type GlowState = {
  x: number;
  y: number;
};

export function GeographySection() {
  const content = useSiteContent();

  return (
    <section id="geography" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow={content.geography.eyebrow}
                title={content.geography.title}
                description={content.geography.description}
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-[0.42fr_0.58fr]">
                <Card className="border-primary/15 bg-[#18170d]/86">
                  <div className="font-display text-5xl font-semibold leading-none text-copy">{content.geography.summaryValue}</div>
                  <p className="mt-3 text-sm leading-6 text-copy-muted">{content.geography.summaryDescription}</p>
                </Card>

                <Card className="relative overflow-hidden">
                  <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-accent/15 bg-accent/10 blur-2xl" />
                  <p className="max-w-md text-sm leading-7 text-copy-muted">{content.geography.summaryText}</p>
                </Card>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <Card className="relative overflow-hidden p-0">
                <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <GlobeMap countries={content.geography.countries} telegramLabel={content.geographyTelegramLabel} />
              </Card>
            </Reveal>

            {content.geography.countries.map((country, index) => (
              <Reveal
                key={country.name}
                delay={index * 70}
                className={index % 3 === 0 ? "sm:pt-6" : index % 3 === 1 ? "sm:-mt-2" : ""}
              >
                <GeoCard
                  country={country}
                  index={index}
                  wide={index === 6}
                  offset={index === 2 || index === 5}
                  telegramLabel={content.geographyTelegramLabel}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function GeoCard({
  country,
  index,
  wide,
  offset,
  telegramLabel,
}: {
  country: { name: string; note: string };
  index: number;
  wide: boolean;
  offset: boolean;
  telegramLabel: string;
}) {
  const [glow, setGlow] = useState<GlowState>({ x: 50, y: 50 });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  }

  return (
    <div
      onMouseMove={handleMove}
      className={[
        "group relative",
        wide ? "sm:col-span-2" : "",
        offset ? "sm:mt-8" : "",
      ].join(" ")}
    >
      <Card className="relative h-full overflow-hidden transition duration-500 group-hover:-translate-y-1 group-hover:border-primary/25 group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,210,0,0.17), transparent 24%), radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(245,176,0,0.12), transparent 40%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="h-2 w-2 rounded-full bg-accent/80 opacity-60 transition duration-500 group-hover:scale-150 group-hover:opacity-100" />
          </div>

          <h3 className="mt-3 font-display text-[2rem] font-semibold leading-none text-copy transition duration-500 group-hover:translate-x-1">
            {country.name}
          </h3>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-px w-10 bg-primary transition-all duration-500 group-hover:w-14" />
            <span className="h-px w-6 bg-accent/70 opacity-70 transition-all duration-500 group-hover:w-10" />
          </div>

          <p className="mt-5 max-w-[28rem] text-sm leading-7 text-copy-muted">{country.note}</p>

          <div className="mt-8 flex items-center justify-between gap-4 opacity-70 transition duration-500 group-hover:opacity-100">
            <div className="flex items-center gap-2 transition duration-500 group-hover:translate-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-px w-6 bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-px w-10 bg-accent/40" />
            </div>

            <a
              href="https://t.me/teamcash_partnerships"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_0_18px_rgba(34,158,217,0.22)] transition duration-500 hover:bg-[#35AEE2]"
              aria-label={`${telegramLabel} ${country.name}`}
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
