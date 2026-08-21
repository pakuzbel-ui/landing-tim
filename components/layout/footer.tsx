"use client";

import { Container } from "@/components/ui/container";
import { useSiteContent } from "@/lib/locale-provider";
import { trackContactClick } from "@/lib/analytics";

export function Footer() {
  const content = useSiteContent();

  return (
    <footer className="relative py-6 sm:py-7">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-lg font-semibold text-copy">TeamCash</div>
          <p className="mt-1.5 text-sm font-medium leading-6 text-[#d6dee8]/90">{content.footer.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {content.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                if (link.href.includes("t.me")) trackContactClick("telegram", "footer");
                if (link.href.startsWith("mailto:")) trackContactClick("email", "footer");
              }}
              className="text-sm font-medium text-[#d6dee8]/90 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
