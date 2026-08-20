"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function HowItWorksSection() {
  const content = useSiteContent();

  return (
    <section id="how-it-works" className="mobile-premium-section py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow={content.process.eyebrow}
          title={content.process.title}
          description={content.process.description}
        />

        <div className="mobile-process-list mt-8 grid gap-x-8 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {content.process.steps.map((item) => (
            <div key={item.step} className="mobile-process-card py-2">
              <div>
                <h3 className="font-display text-xl font-semibold leading-tight text-copy sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-copy-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
