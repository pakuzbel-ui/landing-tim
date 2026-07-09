"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteContent } from "@/lib/locale-provider";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const content = useSiteContent();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-14 sm:py-18">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.faq.eyebrow}
            title={content.faq.title}
            description={content.faq.description}
          />
        </Reveal>

        <div className="mt-7 space-y-3">
          {content.faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <Card className="p-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-lg font-semibold leading-tight text-copy sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-xl font-light leading-none text-primary transition duration-300 group-hover:border-primary/45 group-hover:bg-primary/15 sm:h-9 sm:w-9",
                      openIndex === index ? "rotate-45 bg-primary/15" : "",
                    )}
                  >
                    +
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-4xl px-4 pb-4 text-sm leading-6 text-copy-muted sm:px-5 sm:pb-5 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
