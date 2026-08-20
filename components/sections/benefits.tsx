"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function BenefitsSection() {
  const content = useSiteContent();

  return (
    <section id="benefits" className="mobile-premium-section py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={content.benefits.eyebrow}
          title={content.benefits.title}
          description={content.benefits.description}
        />

        <div className="mobile-feature-grid mt-10 grid gap-x-8 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
          {content.benefits.items.map((item) => (
            <div key={item.title} className="mobile-feature-card border-t border-white/15 py-6">
              <h3 className="font-display text-xl font-semibold leading-tight text-copy sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-copy-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
