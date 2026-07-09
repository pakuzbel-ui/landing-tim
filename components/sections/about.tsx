"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function AboutSection() {
  const content = useSiteContent();

  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.about.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 120}>
              <Card className="h-full">
                <h3 className="font-display text-2xl font-semibold text-copy">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-copy-muted">{card.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
