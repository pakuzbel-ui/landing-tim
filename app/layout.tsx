import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ScrollReset } from "@/components/layout/scroll-reset";
import { LocaleProvider } from "@/lib/locale-provider";

export const metadata: Metadata = {
  title: "TeamCash | Агентская сеть альтернативных платежных решений",
  description:
    "Premium landing page для международной агентской команды TeamCash в экосистеме MelBet.",
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
        <LocaleProvider>
          <ScrollReset />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
