"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";

export function FaqSection() {
  const content = useSiteContent();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="mobile-premium-section py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          description={content.faq.description}
        />

        <div className="mobile-faq-list mt-10 grid gap-x-12 gap-y-5 lg:grid-cols-2 xl:gap-x-20">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className="mobile-faq-item border-t border-white/15 pt-5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  className="group flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-display text-lg font-semibold leading-tight text-copy sm:text-xl">
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/45 text-lg font-light leading-none text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <p
                    id={answerId}
                    className="mt-4 max-w-2xl border-l border-primary/35 pl-4 text-sm leading-6 text-copy-muted sm:text-base"
                  >
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
