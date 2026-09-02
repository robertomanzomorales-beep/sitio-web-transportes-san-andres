import type { Metadata } from "next";

import Servicios from "@/components/servicios/Servicios";

export const metadata: Metadata = {
  title: "Servicios de transporte en Calama | Transportes San Andrés",
  description:
    "Servicios de transporte para empresas, minería, turismo, viajes especiales y encomiendas desde Calama y la Región de Antofagasta.",
};

export default function ServiciosPage() {
  return (
    <main>
      <Servicios />
    </main>
  );
}