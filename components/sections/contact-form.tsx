"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRightIcon, FacebookIcon, InstagramIcon, TelegramIcon } from "@/components/ui/icons";
import { useLocale, useSiteContent } from "@/lib/locale-provider";
import type { Locale } from "@/data/i18n";

const socialLinks = [
  {
    label: "Telegram",
    textKey: "telegram",
    href: "https://t.me/bigboyy_1",
    icon: TelegramIcon,
    tone: "bg-[#229ED9] text-white",
  },
  {
    label: "Instagram",
    textKey: "instagram",
    href: "https://instagram.com/",
    icon: InstagramIcon,
    tone: "bg-[radial-gradient(circle_at_30%_110%,#FEDA75_0%,#FA7E1E_24%,#D62976_48%,#962FBF_72%,#4F5BD5_100%)] text-white",
  },
  {
    label: "Facebook",
    textKey: "facebook",
    href: "https://facebook.com/",
    icon: FacebookIcon,
    tone: "bg-[#1877F2] text-white",
  },
];

type ContactCopy = {
  openTelegram: string;
  quick: string;
  messageTelegram: string;
  socialEyebrow: string;
  socialTitle: string;
  socialDescription: string;
  links: Record<"telegram" | "instagram" | "facebook", string>;
};

const contactCopy: Record<Locale, ContactCopy> = {
  ru: {
    openTelegram: "Открыть контакт в Telegram",
    quick: "Быстрый контакт",
    messageTelegram: "Написать в Telegram",
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
    openTelegram: "Open Telegram contact",
    quick: "Quick contact",
    messageTelegram: "Message on Telegram",
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
    openTelegram: "Telegram холбоо нээх",
    quick: "Шуурхай холбоо",
    messageTelegram: "Telegram дээр бичих",
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
    openTelegram: "Кушодани тамос дар Telegram",
    quick: "Тамоси зуд",
    messageTelegram: "Дар Telegram нависед",
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
    openTelegram: "Telegram kontaktni ochish",
    quick: "Tezkor aloqa",
    messageTelegram: "Telegramda yozish",
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
    openTelegram: "Telegram əlaqəsini açmaq",
    quick: "Sürətli əlaqə",
    messageTelegram: "Telegram-da yazın",
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
    openTelegram: "Telegram aragatnaşygyny açmak",
    quick: "Çalt habarlaşmak",
    messageTelegram: "Telegram-da ýazmak",
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
    openTelegram: "Telegram байланышын ачуу",
    quick: "Тез байланыш",
    messageTelegram: "Telegram аркылуу жазуу",
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
    openTelegram: "باز کردن تماس تلگرام",
    quick: "تماس سریع",
    messageTelegram: "در تلگرام پیام بدهید",
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
          <Reveal>
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow={content.contact.eyebrow}
                title={content.contact.title}
                description={content.contact.description}
              />

              <Card className="mt-8 border-white/[0.07] bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.24)] ring-white/[0.025]">
                <div className="text-sm uppercase tracking-[0.24em] text-copy-muted">{copy.socialEyebrow}</div>
                <div className="mt-2 font-display text-xl font-semibold text-copy">{copy.socialTitle}</div>
                <p className="mt-2 text-sm leading-6 text-copy-muted">
                  {copy.socialDescription}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-3 rounded-full border border-white/[0.07] bg-black/32 px-4 py-3 transition hover:-translate-y-0.5 hover:border-primary/20 hover:bg-black/44"
                      >
                        <span className="flex items-center gap-3">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.tone}`}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-copy">{item.label}</span>
                            <span className="block text-xs text-copy-muted">
                              {copy.links[item.textKey as keyof typeof copy.links]}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-primary/70 transition group-hover:text-primary" />
                      </a>
                    );
                  })}
                </div>
              </Card>
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
