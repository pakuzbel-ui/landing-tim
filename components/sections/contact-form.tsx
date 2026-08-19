"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "@/components/ui/icons";
import { useLocale, useSiteContent } from "@/lib/locale-provider";
import type { Locale } from "@/data/i18n";

const socialLinks = [
  {
    label: "Telegram",
    textKey: "telegram",
    href: "https://t.me/bigboyy_1",
    icon: TelegramIcon,
    tone: "text-[#54bcec]",
  },
  {
    label: "Instagram",
    textKey: "instagram",
    href: "https://instagram.com/",
    icon: InstagramIcon,
    tone: "text-[#e85b9c]",
  },
  {
    label: "Facebook",
    textKey: "facebook",
    href: "https://facebook.com/",
    icon: FacebookIcon,
    tone: "text-[#5a9df5]",
  },
];

type ContactCopy = {
  socialEyebrow: string;
  socialTitle: string;
  socialDescription: string;
  links: Record<"telegram" | "instagram" | "facebook", string>;
};

const contactCopy: Record<Locale, ContactCopy> = {
  ru: {
    socialEyebrow: "Социальные каналы",
    socialTitle: "Подпишитесь на наши соцсети",
    socialDescription:
      "Следите за новостями TeamCash, обновлениями по странам и быстрыми контактами для партнеров.",
    links: {
      telegram: "Новости и быстрый контакт",
      instagram: "Публикации и обновления",
      facebook: "Канал для новостей",
    },
  },
  en: {
    socialEyebrow: "Social channels",
    socialTitle: "Follow our social channels",
    socialDescription: "Get TeamCash updates, country news and quick partner contacts.",
    links: {
      telegram: "News and quick contact",
      instagram: "Posts and updates",
      facebook: "News channel",
    },
  },
  mn: {
    socialEyebrow: "Сошиал сувгууд",
    socialTitle: "Манай сошиал сувгуудыг дагаарай",
    socialDescription: "TeamCash-ийн мэдээ, улс орнуудын шинэчлэл болон түншүүдийн шуурхай холбоог аваарай.",
    links: {
      telegram: "Мэдээ ба шуурхай холбоо",
      instagram: "Пост ба шинэчлэл",
      facebook: "Мэдээний суваг",
    },
  },
  tg: {
    socialEyebrow: "Шабакаҳои иҷтимоӣ",
    socialTitle: "Ба каналҳои иҷтимоии мо обуна шавед",
    socialDescription: "Навигариҳои TeamCash, хабарҳои кишварҳо ва тамосҳои зуд барои шариконро пайгирӣ кунед.",
    links: {
      telegram: "Хабарҳо ва тамоси зуд",
      instagram: "Постҳо ва навигариҳо",
      facebook: "Канали хабарҳо",
    },
  },
  uz: {
    socialEyebrow: "Ijtimoiy kanallar",
    socialTitle: "Ijtimoiy kanallarimizga obuna bo'ling",
    socialDescription: "TeamCash yangiliklari, mamlakatlar bo'yicha xabarlar va hamkorlar uchun tezkor kontaktlarni kuzatib boring.",
    links: {
      telegram: "Yangiliklar va tezkor aloqa",
      instagram: "Postlar va yangilanishlar",
      facebook: "Yangiliklar kanali",
    },
  },
  az: {
    socialEyebrow: "Sosial kanallar",
    socialTitle: "Sosial kanallarımıza abunə olun",
    socialDescription: "TeamCash yeniliklərini, ölkələr üzrə xəbərləri və tərəfdaşlar üçün sürətli əlaqələri izləyin.",
    links: {
      telegram: "Xəbərlər və sürətli əlaqə",
      instagram: "Paylaşımlar və yeniliklər",
      facebook: "Xəbər kanalı",
    },
  },
  tk: {
    socialEyebrow: "Sosial kanallar",
    socialTitle: "Sosial kanallarymyza ýazylyň",
    socialDescription: "TeamCash täzeliklerini, ýurtlar boýunça habarlary we hyzmatdaşlar üçin çalt kontaktlary yzarlaň.",
    links: {
      telegram: "Täzelikler we çalt habarlaşmak",
      instagram: "Postlar we täzelenmeler",
      facebook: "Täzelikler kanaly",
    },
  },
  ky: {
    socialEyebrow: "Социалдык каналдар",
    socialTitle: "Биздин социалдык каналдарга жазылыңыз",
    socialDescription: "TeamCash жаңылыктарын, өлкөлөр боюнча маалыматтарды жана өнөктөштөр үчүн тез байланыштарды көрүп туруңуз.",
    links: {
      telegram: "Жаңылыктар жана тез байланыш",
      instagram: "Посттор жана жаңыртуулар",
      facebook: "Жаңылыктар каналы",
    },
  },
  fa: {
    socialEyebrow: "کانال‌های اجتماعی",
    socialTitle: "کانال‌های اجتماعی ما را دنبال کنید",
    socialDescription: "تازه‌های TeamCash، خبرهای کشورها و تماس‌های سریع برای شریکان را دنبال کنید.",
    links: {
      telegram: "خبرها و تماس سریع",
      instagram: "پست‌ها و تازه‌ها",
      facebook: "کانال خبرها",
    },
  },
};

const initialState = {
  name: "",
  company: "",
  country: "",
  telegram: "",
  details: "",
};

export function ContactFormSection() {
  const content = useSiteContent();
  const { locale } = useLocale();
  const copy = contactCopy[locale];
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
          <div className="w-full">
            <SectionHeading
              eyebrow={content.contact.eyebrow}
              title={content.contact.title}
              description={content.contact.description}
            />

            <div className="mt-8">
              <div className="text-sm uppercase tracking-[0.24em] text-copy-muted">{copy.socialEyebrow}</div>
              <div className="mt-2 font-display text-xl font-semibold text-copy">{copy.socialTitle}</div>
              <p className="mt-2 text-sm leading-6 text-copy-muted">{copy.socialDescription}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 py-2"
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center ${item.tone}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-copy">{item.label}</span>
                        <span className="block text-xs text-copy-muted">
                          {copy.links[item.textKey as keyof typeof copy.links]}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="py-2">
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
                    className="w-full resize-y border-b border-white/25 bg-transparent px-0 py-3 text-base text-copy outline-none placeholder:text-copy-muted/70 focus:border-primary"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black"
                >
                  {content.contact.submit}
                </button>
            </form>
          </div>
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
        className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-base text-copy outline-none placeholder:text-copy-muted/70 focus:border-primary"
      />
    </label>
  );
}
