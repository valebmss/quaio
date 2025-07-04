import { ReactNode } from "react";
import "../globals.css";
import { getDictionary } from "../../lib/dictionary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const rawLang = resolvedParams.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const safeLang = lang === "es" || lang === "en" ? lang : "es";

  const dict = await getDictionary(safeLang);

  return (
    <html lang={safeLang} className={montserrat.variable}>
      <body>
        <Header dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}

