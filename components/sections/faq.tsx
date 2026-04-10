"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function FaqSection() {
  const content = useSiteContent();

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.faq.eyebrow}
            title={content.faq.title}
            description={content.faq.description}
          />
        </Reveal>

        <div className="mt-10 space-y-4">
          {content.faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <Card>
                <h3 className="font-display text-2xl font-semibold text-copy">{item.question}</h3>
                <p className="mt-4 max-w-4xl text-base leading-7 text-copy-muted">{item.answer}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
