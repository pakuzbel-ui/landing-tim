"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CoverageIcon, HeadsetIcon, MapPinIcon, NetworkIcon, TimerIcon, WalletIcon } from "@/components/ui/icons";
import { useSiteContent } from "@/lib/locale-provider";

const icons = [WalletIcon, TimerIcon, MapPinIcon, NetworkIcon, HeadsetIcon, CoverageIcon];

export function BenefitsSection() {
  const content = useSiteContent();

  return (
    <section id="benefits" className="py-14 sm:py-18">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.benefits.eyebrow}
            title={content.benefits.title}
            description={content.benefits.description}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.title} delay={index * 90}>
                <Card className="h-full p-5 sm:p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-copy sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-copy-muted">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
