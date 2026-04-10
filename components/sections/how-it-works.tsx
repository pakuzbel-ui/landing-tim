"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function HowItWorksSection() {
  const content = useSiteContent();

  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.process.eyebrow}
            title={content.process.title}
            description={content.process.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.process.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 110}>
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {item.step}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-copy-muted">
                    Step
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-copy">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-copy-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
