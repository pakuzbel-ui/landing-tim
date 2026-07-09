"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function AudiencesSection() {
  const content = useSiteContent();

  return (
    <section id="partners" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.audiences.eyebrow}
            title={content.audiences.title}
            description={content.audiences.description}
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.audiences.items.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 120}>
              <Card className="h-full">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-copy xl:text-3xl">
                    {audience.title}
                  </h3>
                  <div className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                    TeamCash
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {audience.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-copy-muted"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Button href="#contact" className="mt-7">
                  {audience.cta}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
