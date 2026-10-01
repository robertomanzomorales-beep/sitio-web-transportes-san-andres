import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const googleTagId = "G-L60FMRDGF5";
const googleAdsId = "AW-17733887884";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transportes San Andrés | Transporte de pasajeros en Calama",
  description:
    "Servicios de transporte de pasajeros en Calama para empresas, minería, turismo, viajes especiales y encomiendas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />

        {children}

        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
            gtag('config', '${googleAdsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
