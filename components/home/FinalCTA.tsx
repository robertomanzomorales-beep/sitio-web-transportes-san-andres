import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.wrapper}>
        <Reveal
          direction="scale"
          duration={1000}
          className={styles.banner}
        >
          <div className={styles.overlay} />

          <div className={styles.inner}>
            {/* ==================================================
                TEXTO
            ================================================== */}

            <Reveal
              direction="left"
              delay={120}
              duration={900}
              className={styles.content}
            >
              <span className={styles.eyebrow}>
                PLANIFIQUE SU TRASLADO
              </span>

              <h2 id="final-cta-title">
                Cuéntenos qué traslado necesita
              </h2>

              <p>
                Indíquenos origen, destino, fecha y cantidad de
                pasajeros. Revisaremos su solicitud para coordinar
                una alternativa de transporte adecuada.
              </p>
            </Reveal>

            {/* ==================================================
                ACCIONES
            ================================================== */}

            <Reveal
              direction="right"
              delay={220}
              duration={900}
              className={styles.actions}
            >
              <Link
                href="/servicios#cotizacion"
                className={styles.primaryButton}
              >
                Cotizar servicio
              </Link>

              <a
                href="https://wa.me/56926273108?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20transporte."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Contactar por WhatsApp
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}