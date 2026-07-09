"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function HowItWorksSection() {
  const content = useSiteContent();

  return (
    <section id="how-it-works" className="py-14 sm:py-18">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.process.eyebrow}
            title={content.process.title}
            description={content.process.description}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {content.process.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 110}>
              <Card className="h-full p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-copy sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-copy-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
