"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BoltIcon, GlobeIcon, LayersIcon, ShieldIcon, UsersIcon } from "@/components/ui/icons";
import { useSiteContent } from "@/lib/locale-provider";

const icons = [BoltIcon, GlobeIcon, LayersIcon, UsersIcon, ShieldIcon, BoltIcon];

export function BenefitsSection() {
  const content = useSiteContent();

  return (
    <section id="benefits" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.benefits.eyebrow}
            title={content.benefits.title}
            description={content.benefits.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.title} delay={index * 90}>
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-copy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-copy-muted">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
