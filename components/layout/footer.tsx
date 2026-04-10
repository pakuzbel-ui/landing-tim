"use client";

import { Container } from "@/components/ui/container";
import { useSiteContent } from "@/lib/locale-provider";

export function Footer() {
  const content = useSiteContent();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-semibold text-copy">TeamCash</div>
          <p className="mt-2 max-w-md text-sm leading-6 text-copy-muted">{content.footer.description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {content.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-copy-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
