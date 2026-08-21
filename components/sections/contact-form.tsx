"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "@/components/ui/icons";
import { useLocale, useSiteContent } from "@/lib/locale-provider";
import type { Locale } from "@/data/i18n";
import { telegramByLocale } from "@/data/telegram";
import { trackContactClick, trackEvent } from "@/lib/analytics";

const socialLinks = [
  {
    label: "Telegram",
    textKey: "telegram",
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

const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbwh6YDVs_G_xCnRQSXaPdDDPkOBQr_CrlzlS2FdUvj0KM7AVVIG8LmgKhn_1YNxbnGrAQ/exec";

const submissionCopy: Record<Locale, { sending: string; success: string; error: string }> = {
  ru: {
    sending: "Отправляем заявку…",
    success: "Заявка отправлена. Мы скоро свяжемся с вами.",
    error: "Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.",
  },
  en: {
    sending: "Sending application…",
    success: "Application sent. We will contact you soon.",
    error: "Could not send the application. Check your connection and try again.",
  },
  mn: {
    sending: "Хүсэлтийг илгээж байна…",
    success: "Хүсэлт илгээгдлээ. Бид удахгүй холбогдоно.",
    error: "Хүсэлтийг илгээж чадсангүй. Дахин оролдоно уу.",
  },
  tg: {
    sending: "Дархост фиристода мешавад…",
    success: "Дархост фиристода шуд. Мо ба зудӣ тамос мегирем.",
    error: "Дархост фиристода нашуд. Лутфан боз кӯшиш кунед.",
  },
  uz: {
    sending: "Ariza yuborilmoqda…",
    success: "Ariza yuborildi. Tez orada siz bilan bog‘lanamiz.",
    error: "Arizani yuborib bo‘lmadi. Qayta urinib ko‘ring.",
  },
  az: {
    sending: "Müraciət göndərilir…",
    success: "Müraciət göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
    error: "Müraciət göndərilmədi. Yenidən cəhd edin.",
  },
  tk: {
    sending: "Arza iberilýär…",
    success: "Arza iberildi. Tiz wagtda siziň bilen habarlaşarys.",
    error: "Arza iberilmedi. Gaýtadan synanyşyň.",
  },
  ky: {
    sending: "Өтүнмө жөнөтүлүүдө…",
    success: "Өтүнмө жөнөтүлдү. Жакында сиз менен байланышабыз.",
    error: "Өтүнмө жөнөтүлгөн жок. Кайра аракет кылыңыз.",
  },
  fa: {
    sending: "درخواست در حال ارسال است…",
    success: "درخواست ارسال شد. به‌زودی با شما تماس می‌گیریم.",
    error: "درخواست ارسال نشد. دوباره تلاش کنید.",
  },
};

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
  const countryTelegram = telegramByLocale[locale];
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...form,
          website: "",
          locale,
          page: window.location.href,
        }),
      });

      setForm(initialState);
      setSubmitStatus("success");
      trackEvent("generate_lead", { form_name: "partner_application", locale });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mobile-premium-section py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="w-full">
            <SectionHeading
              eyebrow={content.contact.eyebrow}
              title={content.contact.title}
              description={content.contact.description}
            />

            <div className="mobile-social-panel mt-8">
              <div className="text-sm uppercase tracking-[0.24em] text-copy-muted">{copy.socialEyebrow}</div>
              <div className="mt-2 font-display text-xl font-semibold text-copy">{copy.socialTitle}</div>
              <p className="mt-2 text-sm leading-6 text-copy-muted">{copy.socialDescription}</p>

              <div className="mobile-social-list mt-5 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  const isTelegram = item.textKey === "telegram";

                  return (
                    <a
                      key={item.label}
                      href={isTelegram ? countryTelegram.href : item.href}
                      onClick={() => trackContactClick(item.textKey as "telegram" | "instagram" | "facebook", "contact_section", locale)}
                      target="_blank"
                      rel="noreferrer"
                      className="mobile-social-link flex items-center gap-3 py-2"
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center ${item.tone}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-copy">{item.label}</span>
                        <span className="block text-xs text-copy-muted">
                          {isTelegram ? countryTelegram.handle : copy.links[item.textKey as keyof typeof copy.links]}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mobile-contact-form py-2">
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
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black transition disabled:cursor-wait disabled:opacity-65"
                >
                  {isSubmitting ? submissionCopy[locale].sending : content.contact.submit}
                </button>
                {submitStatus !== "idle" ? (
                  <p
                    className={`text-center text-sm ${submitStatus === "success" ? "text-primary" : "text-red-400"}`}
                    role="status"
                    aria-live="polite"
                  >
                    {submissionCopy[locale][submitStatus]}
                  </p>
                ) : null}
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
