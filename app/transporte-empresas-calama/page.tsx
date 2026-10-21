import type { Metadata } from "next";
import Link from "next/link";
import ServicesQuote from "@/components/servicios/ServicesQuote";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transporte para empresas y minería en Calama | Transportes San Andrés",
  description:
    "Solicite una cotización para traslados de personal, empresas y faenas mineras desde Calama. Indique origen, destino y datos de contacto para coordinar el servicio.",
};

export default function TransporteEmpresasCalamaPage() {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>TRANSPORTE DE PERSONAL DESDE CALAMA</span>
          <h1>Traslados para empresas y operaciones mineras</h1>
          <p>
            Coordinamos recorridos para personal, empresas e instituciones con
            origen en Calama y destinos de la región. Cuéntenos la ruta, cantidad
            de pasajeros y condiciones de su operación para revisar una propuesta.
          </p>
          <div className={styles.actions}>
            <a href="#cotizacion" className={styles.primary}>Solicitar cotización</a>
            <Link href="/servicios" className={styles.secondary}>Ver todos los servicios</Link>
          </div>
        </div>
      </section>
      <section className={styles.details} aria-label="Datos para coordinar su traslado">
        <div><strong>01 / Ruta</strong><p>Origen en Calama, destino y puntos de recogida.</p></div>
        <div><strong>02 / Operación</strong><p>Turnos, horarios y frecuencia, si ya están definidos.</p></div>
        <div><strong>03 / Pasajeros</strong><p>Cantidad de personas y requerimientos del servicio.</p></div>
      </section>
      <ServicesQuote initialService="corporativo" />
    </main>
  );
}
