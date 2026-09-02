import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./Coverage.module.css";

export default function Coverage() {
  return (
    <section className={styles.section} aria-labelledby="coverage-title">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.overlay} />

          <div className={styles.inner}>
            <Reveal
              direction="left"
              duration={900}
              className={styles.content}
            >
              <h2 id="coverage-title">
                Traslados desde Calama para empresas, turismo y minería
              </h2>

              <p>
                Coordinamos servicios de transporte privado hacia distintos
                destinos de la Región de Antofagasta, con atención cercana,
                planificación previa y una operación adaptada a cada recorrido.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={120}
              duration={900}
              className={styles.actions}
            >
              <Link
                href="/servicios#cotizacion"
                className={styles.primaryButton}
              >
                Cotizar servicio
              </Link>

              <Link href="/servicios" className={styles.secondaryButton}>
                Ver servicios
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}