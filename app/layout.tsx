import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

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
      </body>
    </html>
  );
}