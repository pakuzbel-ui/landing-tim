import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
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
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
