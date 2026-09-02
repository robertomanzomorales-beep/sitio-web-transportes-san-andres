import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutClosing.module.css";

export function AboutClosing() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-closing-title"
    >
      <div className={styles.wrapper}>
        <Reveal
          direction="scale"
          duration={1000}
          className={styles.banner}
        >
          <div className={styles.overlay} />

          <div className={styles.container}>
            <Reveal
              direction="left"
              delay={120}
              duration={900}
              className={styles.content}
            >
              <span className={styles.eyebrow}>
                COMPROMISO DE SERVICIO
              </span>

              <h2 id="about-closing-title">
                Cada traslado comienza con una buena coordinación
              </h2>

              <p>
                Antes de confirmar cada servicio revisamos el recorrido,
                horario, cantidad de pasajeros y condiciones solicitadas para
                coordinar una alternativa adecuada.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={220}
              duration={900}
              className={styles.actions}
            >
              <span className={styles.actionsLabel}>
                PLANIFIQUE SU PRÓXIMO TRASLADO
              </span>

              <Link
                href="/servicios#cotizacion"
                className={styles.primary}
              >
                Solicitar cotización
              </Link>

              <Link
                href="/servicios"
                className={styles.secondary}
              >
                Ver servicios
              </Link>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}