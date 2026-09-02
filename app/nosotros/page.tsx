import type { Metadata } from "next";

import { AboutHero } from "@/components/nosotros/AboutHero";
import { AboutCompany } from "@/components/nosotros/AboutCompany";
import { AboutValues } from "@/components/nosotros/AboutValues";
import { AboutClosing } from "@/components/nosotros/AboutClosing";

export const metadata: Metadata = {
  title: "Empresa de transporte en Calama | Transportes San Andrés",

  description:
    "Transportes San Andrés SpA ofrece servicios de transporte privado de pasajeros desde Calama para empresas, minería, turismo, grupos y viajes particulares en la Región de Antofagasta.",
};

export default function NosotrosPage() {
  return (
    <main>
      <AboutHero />

      <AboutCompany />

      <AboutValues />

      <AboutClosing />
    </main>
  );
}