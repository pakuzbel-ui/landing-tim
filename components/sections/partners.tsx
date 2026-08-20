"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Locale } from "@/data/i18n";
import { useLocale } from "@/lib/locale-provider";

const sectionCopy: Record<Locale, { eyebrow: string; title: string; description: string; network: string }> = {
  ru: {
    eyebrow: "Международные партнёрства",
    title: "Сильные имена в одной партнёрской сети",
    description:
      "TeamCash соединяет локальную платёжную экспертизу с глобальной экосистемой MelBet — от мирового футбола до единоборств и киберспорта.",
    network: "Партнёрская сеть",
  },
  en: {
    eyebrow: "International partnerships",
    title: "Strong names. One partner network.",
    description:
      "TeamCash connects local payment expertise with the global MelBet ecosystem — from world football to combat sports and esports.",
    network: "Partner network",
  },
  mn: {
    eyebrow: "Олон улсын түншлэл",
    title: "Хүчтэй нэрс нэг түншийн сүлжээнд",
    description: "TeamCash нь орон нутгийн төлбөрийн туршлагыг MelBet-ийн дэлхийн экосистемтэй холбодог.",
    network: "Түншийн сүлжээ",
  },
  tg: {
    eyebrow: "Шарикии байналмилалӣ",
    title: "Номҳои қавӣ дар як шабакаи шарикӣ",
    description: "TeamCash таҷрибаи пардохтии маҳаллиро бо экосистемаи ҷаҳонии MelBet мепайвандад.",
    network: "Шабакаи шарикӣ",
  },
  uz: {
    eyebrow: "Xalqaro hamkorlik",
    title: "Kuchli nomlar — yagona hamkorlik tarmog‘ida",
    description: "TeamCash mahalliy to‘lov tajribasini MelBet global ekotizimi bilan bog‘laydi.",
    network: "Hamkorlik tarmog‘i",
  },
  az: {
    eyebrow: "Beynəlxalq tərəfdaşlıqlar",
    title: "Güclü adlar vahid tərəfdaş şəbəkəsində",
    description: "TeamCash yerli ödəniş təcrübəsini MelBet-in qlobal ekosistemi ilə birləşdirir.",
    network: "Tərəfdaş şəbəkəsi",
  },
  tk: {
    eyebrow: "Halkara hyzmatdaşlyk",
    title: "Güýçli atlar bir hyzmatdaşlyk ulgamynda",
    description: "TeamCash ýerli töleg tejribesini MelBet-iň global ekoulgamy bilen birleşdirýär.",
    network: "Hyzmatdaşlyk ulgamy",
  },
  ky: {
    eyebrow: "Эл аралык өнөктөштүк",
    title: "Күчтүү аттар бир өнөктөштүк тармагында",
    description: "TeamCash жергиликтүү төлөм тажрыйбасын MelBet глобалдык экосистемасы менен бириктирет.",
    network: "Өнөктөштүк тармагы",
  },
  fa: {
    eyebrow: "همکاری‌های بین‌المللی",
    title: "نام‌های قدرتمند در یک شبکه همکاری",
    description: "TeamCash تجربه پرداخت محلی را با اکوسیستم جهانی MelBet پیوند می‌دهد.",
    network: "شبکه همکاری",
  },
};

const partners = [
  {
    name: "LaLiga",
    image: "/partners/laliga-hd.png",
    className: "partner-card--outer",
    logoClassName: "partner-card__logo--mono",
  },
  {
    name: "Juventus",
    image: "/partners/juventus-hd.png",
    className: "partner-card--inner",
    logoClassName: "partner-card__logo--mono",
  },
  {
    name: "Kamaru Usman",
    image: "/partners/kamaru-usman-hd.png",
    className: "partner-card--inner",
    logoClassName: "partner-card__logo--portrait",
  },
  {
    name: "OG Esports",
    image: "/partners/og-esports-hd-transparent.png",
    className: "partner-card--outer",
    logoClassName: "",
  },
] as const;

export function PartnersSection() {
  const { locale } = useLocale();
  const copy = sectionCopy[locale];

  return (
    <section id="brand-partners" className="mobile-premium-section overflow-hidden border-y border-white/10 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          mobileAlign="center"
        />

        <div className="partner-deck mt-12" aria-label={copy.eyebrow} dir="ltr">
          {partners.slice(0, 2).map((partner) => (
            <article key={partner.name} className={`partner-card ${partner.className}`}>
              <div className="partner-card__glow" />
              <Image
                src={partner.image}
                alt={partner.name}
                width={640}
                height={640}
                quality={95}
                className={`partner-card__logo ${partner.logoClassName}`}
              />
              <span className="partner-card__name">{partner.name}</span>
            </article>
          ))}

          <article className="partner-card partner-card--center">
            <div className="partner-card__glow" />
            <div className="melbet-partner-mark" aria-label="MelBet Partners">
              <div className="melbet-partner-mark__name">
                <span>MEL</span><span>BET</span>
              </div>
              <div className="melbet-partner-mark__suffix">Partners</div>
            </div>
          </article>

          {partners.slice(2).map((partner) => (
            <article key={partner.name} className={`partner-card ${partner.className}`}>
              <div className="partner-card__glow" />
              <Image
                src={partner.image}
                alt={partner.name}
                width={640}
                height={640}
                quality={95}
                className={`partner-card__logo ${partner.logoClassName}`}
              />
              <span className="partner-card__name">{partner.name}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
