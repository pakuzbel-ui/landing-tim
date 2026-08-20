"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { useSiteContent } from "@/lib/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

const GlobeMap = dynamic(
  () => import("@/components/sections/globe-map").then((module) => module.GlobeMap),
  {
    ssr: false,
    loading: () => <div className="aspect-[1.58] min-h-[220px] bg-transparent sm:min-h-[360px]" />,
  },
);

export function GeographySection() {
  const content = useSiteContent();

  return (
    <section id="geography" className="mobile-premium-section relative py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow={content.geography.eyebrow}
                title={content.geography.title}
                description={content.geography.description}
              />

              <div className="mobile-geography-summary mt-8 grid gap-4 sm:grid-cols-[0.42fr_0.58fr]">
                <div className="mobile-geography-stat py-2">
                  <div className="font-display text-5xl font-semibold leading-none text-copy">{content.geography.summaryValue}</div>
                  <p className="mt-3 text-sm leading-6 text-copy-muted">{content.geography.summaryDescription}</p>
                </div>

                <div className="mobile-geography-note py-2">
                  <p className="text-sm leading-7 text-copy-muted">{content.geography.summaryText}</p>
                </div>
              </div>
            </div>

          <div>
            <LazyGlobeMap
              countries={content.geography.countries}
              telegramLabel={content.geographyTelegramLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function LazyGlobeMap({
  countries,
  telegramLabel,
}: {
  countries: { name: string; note: string }[];
  telegramLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <GlobeMap countries={countries} telegramLabel={telegramLabel} />
      ) : (
        <div className="aspect-[1.58] min-h-[220px] bg-transparent sm:min-h-[360px]" />
      )}
    </div>
  );
}
