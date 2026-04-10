"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { useSiteContent } from "@/lib/locale-provider";

const initialState = {
  name: "",
  company: "",
  country: "",
  telegram: "",
  details: "",
};

export function ContactFormSection() {
  const content = useSiteContent();
  const [form, setForm] = useState(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(content.contact.emailSubject);
    const body = encodeURIComponent(
      [
        `${content.contact.fields.name}: ${form.name}`,
        `${content.contact.fields.company}: ${form.company}`,
        `${content.contact.fields.country}: ${form.country}`,
        `${content.contact.fields.telegram}: ${form.telegram}`,
        "",
        `${content.contact.fields.details}:`,
        form.details,
      ].join("\n"),
    );

    window.location.href = `mailto:partnerships@teamcash.global?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow={content.contact.eyebrow}
                title={content.contact.title}
                description={content.contact.description}
              />

              <div className="mt-8">
                <Card>
                  <div className="text-sm uppercase tracking-[0.24em] text-copy-muted">{content.contact.telegramLabel}</div>
                  <a
                    href="https://t.me/teamcash_partnerships"
                    className="mt-3 inline-flex items-center gap-2 font-display text-2xl text-copy transition hover:text-primary"
                  >
                    {content.contact.telegramHandle}
                    <ArrowUpRightIcon className="text-primary" />
                  </a>
                </Card>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label={content.contact.fields.name}
                    value={form.name}
                    onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                    placeholder={content.contact.fields.placeholders.name}
                  />
                  <Field
                    label={content.contact.fields.company}
                    value={form.company}
                    onChange={(value) => setForm((current) => ({ ...current, company: value }))}
                    placeholder={content.contact.fields.placeholders.company}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label={content.contact.fields.country}
                    value={form.country}
                    onChange={(value) => setForm((current) => ({ ...current, country: value }))}
                    placeholder={content.contact.fields.placeholders.country}
                  />
                  <Field
                    label={content.contact.fields.telegram}
                    value={form.telegram}
                    onChange={(value) => setForm((current) => ({ ...current, telegram: value }))}
                    placeholder={content.contact.fields.placeholders.telegram}
                  />
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-copy">{content.contact.fields.details}</span>
                  <textarea
                    required
                    rows={5}
                    value={form.details}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, details: event.target.value }))
                    }
                    placeholder={content.contact.fields.placeholders.details}
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-copy outline-none transition placeholder:text-copy-muted/70 focus:border-primary/40 focus:bg-white/[0.05]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ffe07a]"
                >
                  {content.contact.submit}
                </button>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

function Field({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-copy">{label}</span>
      <input
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-copy outline-none transition placeholder:text-copy-muted/70 focus:border-primary/40 focus:bg-white/[0.05]"
      />
    </label>
  );
}
