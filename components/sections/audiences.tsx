"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";
import { trackEvent } from "@/lib/analytics";

export function AudiencesSection() {
  const content = useSiteContent();

  return (
    <section id="partners" className="mobile-premium-section border-y border-white/10 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={content.audiences.eyebrow}
          title={content.audiences.title}
          description={content.audiences.description}
        />

        <div className="mobile-role-grid mt-10 grid gap-0 border-t border-white/15 lg:grid-cols-3">
          {content.audiences.items.map((audience, index) => (
            <div
              key={audience.title}
              className="mobile-role-card flex h-full flex-col border-b border-white/15 py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Role 0{index + 1}
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-copy xl:text-3xl">
                {audience.title}
              </h3>

              <div className="mt-6 flex-1 space-y-4">
                {audience.items.map((item) => (
                  <div key={item} className="grid grid-cols-[8px_1fr] gap-3 text-sm leading-6 text-copy-muted">
                    <span className="mt-2 h-1.5 w-1.5 bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button href="#contact" className="mt-6" onClick={() => trackEvent("cta_click", { placement: "audience_card", audience: audience.title, target: "contact" })}>
                {audience.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
