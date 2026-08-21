import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ScrollReset } from "@/components/layout/scroll-reset";
import { SiteLoader } from "@/components/layout/site-loader";
import { LocaleProvider } from "@/lib/locale-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://melbet-partners.net"),
  title: {
    default: "TeamCash | Партнёрская сеть платёжных решений",
    template: "%s | TeamCash",
  },
  description:
    "TeamCash — международная партнёрская сеть для локальных платёжных агентов, e-payment команд и affiliate-партнёров.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "TeamCash",
    title: "TeamCash | Партнёрская сеть платёжных решений",
    description:
      "Партнёрская сеть для локальных платёжных агентов, e-payment команд и affiliate-партнёров.",
  },
  twitter: {
    card: "summary",
    title: "TeamCash | Партнёрская сеть платёжных решений",
    description:
      "Партнёрская сеть для локальных платёжных агентов, e-payment команд и affiliate-партнёров.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          id="scroll-reset-bootstrap"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{history.scrollRestoration="manual";}catch(e){}if(location.hash){history.replaceState(history.state,"",location.pathname+location.search);}var reset=function(){scrollTo(0,0);};reset();addEventListener("pageshow",reset);addEventListener("load",reset);}());`,
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <SiteLoader />
        <LocaleProvider>
          <ScrollReset />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
