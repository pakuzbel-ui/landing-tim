"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

const statIcons = [
  "/icons/hero-stats/partnership-formats.png",
  "/icons/hero-stats/countries.png",
  "/icons/hero-stats/support.png",
];

export function AboutSection() {
  const content = useSiteContent();

  return (
    <section id="about" className="mobile-premium-section border-y border-white/10 py-16 sm:py-20">
      <Container>
        <div className="mobile-stat-grid mb-14 grid gap-4 border-b border-primary/20 pb-8 sm:grid-cols-3 sm:gap-5">
          {content.hero.chips.map((stat, index) => (
            <div key={stat.label} className="mobile-stat-card flex min-h-20 items-center gap-3 sm:gap-4">
              <div className="flex h-14 w-16 shrink-0 items-center justify-center sm:h-16 sm:w-20">
                <Image
                  src={statIcons[index]}
                  alt=""
                  width={384}
                  height={384}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl font-semibold text-copy sm:text-3xl">{stat.value}</div>
                <p className="mt-0.5 text-sm leading-5 text-copy-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-20">
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.description}
          />

          <div className="mobile-about-list">
            {content.about.cards.map((card) => (
              <div
                key={card.title}
                className="mobile-about-card border-t border-white/15 py-6"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-copy">{card.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-copy-muted">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
