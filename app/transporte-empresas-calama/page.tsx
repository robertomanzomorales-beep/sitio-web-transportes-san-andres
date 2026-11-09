import type { Metadata } from "next";
import Link from "next/link";
import ServicesQuote from "@/components/servicios/ServicesQuote";
import TrackedWhatsAppLink from "@/components/ui/TrackedWhatsAppLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transporte de personal y minería en Calama | Transportes San Andrés",
  description:
    "Cotice transporte de personal para empresas y faenas mineras desde Calama: cambios de turno, recorridos programados y traslados corporativos según su operación.",
  alternates: {
    canonical: "https://www.transportesanandres.cl/transporte-empresas-calama",
  },
};

export default function TransporteEmpresasCalamaPage() {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>TRASLADOS PARA EMPRESAS DESDE CALAMA</span>
          <h1>Transporte de personal para empresas y faenas mineras en Calama</h1>
          <p>
            Coordinamos el traslado de trabajadores, cambios de turno y recorridos
            programados desde Calama. Indíquenos ruta, horarios, frecuencia y
            cantidad de pasajeros para evaluar su requerimiento.
          </p>
          <div className={styles.actions}>
            <a href="#cotizacion" className={styles.primary}>Cotizar transporte de personal</a>
            <TrackedWhatsAppLink
              href="https://wa.me/56926273108?text=Hola%2C%20necesito%20cotizar%20transporte%20de%20personal%20para%20una%20empresa%20desde%20Calama."
              target="_blank"
              rel="noopener noreferrer"
              location="corporate_landing_hero"
              className={styles.secondary}
            >
              Consultar por WhatsApp
            </TrackedWhatsAppLink>
          </div>
          <p className={styles.contactNote}>También puede completar el formulario con los datos de su operación.</p>
        </div>
      </section>
      <div className={styles.quoteSection}>
        <ServicesQuote initialService="corporativo" />
      </div>
      <section className={styles.details} aria-labelledby="operacion-heading">
        <div className={styles.detailsHeading}>
          <span className={styles.detailsEyebrow}>DATOS PARA COTIZAR</span>
          <h2 id="operacion-heading">Un recorrido pensado para su operación</h2>
          <p>Podemos revisar estos antecedentes con usted, aunque todavía no tenga todo definido.</p>
        </div>
        <div className={styles.detailGrid}>
          <div><strong>01 / Ruta y puntos de encuentro</strong><p>Origen en Calama, destino hacia la faena u otro lugar y puntos de recogida.</p></div>
          <div><strong>02 / Turnos y frecuencia</strong><p>Horarios, cambios de turno y días en que necesita movilizar a su personal.</p></div>
          <div><strong>03 / Pasajeros y condiciones</strong><p>Cantidad de trabajadores y requerimientos particulares del traslado.</p></div>
        </div>
        <Link className={styles.servicesLink} href="/servicios">Conozca todos nuestros servicios →</Link>
      </section>
    </main>
  );
}
