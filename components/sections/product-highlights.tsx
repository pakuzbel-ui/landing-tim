"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function ProductHighlightsSection() {
  const content = useSiteContent();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={content.product.eyebrow}
          title={content.product.title}
          description={content.product.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.product.items.map((item) => (
            <div key={item.title} className="py-2">
              <h3 className="font-display text-2xl font-semibold text-copy">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-copy-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
