import Link from "next/link";

import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ==================================================
          FOOTER PRINCIPAL
      ================================================== */}

      <div className={styles.main}>
        <div className={styles.container}>
          {/* ==================================================
              MARCA
          ================================================== */}

          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.brandName}
              aria-label="Transportes San Andrés - Inicio"
            >
              <span className={styles.brandMain}>
                transportes
              </span>

              <span className={styles.brandSecondary}>
                SAN ANDRÉS
              </span>
            </Link>

            <p className={styles.description}>
              Transporte privado de pasajeros desde Calama para
              empresas, minería, turismo, grupos y viajes especiales.
            </p>
          </div>

          {/* ==================================================
              EMPRESA
          ================================================== */}

          <div className={styles.column}>
            <span className={styles.title}>
              EMPRESA
            </span>

            <nav
              className={styles.links}
              aria-label="Navegación del pie de página"
            >
              <Link href="/">
                Inicio
              </Link>

              <Link href="/nosotros">
                Nosotros
              </Link>

              <Link href="/servicios">
                Servicios
              </Link>

              <Link href="/servicios#cotizacion">
                Solicitar cotización
              </Link>
            </nav>
          </div>

          {/* ==================================================
              SERVICIOS
          ================================================== */}

          <div className={styles.column}>
            <span className={styles.title}>
              SERVICIOS
            </span>

            <div className={styles.links}>
              <Link href="/servicios">
                Transporte de pasajeros
              </Link>

              <Link href="/servicios">
                Servicios para empresas
              </Link>

              <Link href="/servicios">
                Traslados a faenas mineras
              </Link>

              <Link href="/servicios">
                Turismo y viajes especiales
              </Link>

              <Link href="/servicios">
                Encomiendas
              </Link>
            </div>
          </div>

          {/* ==================================================
              CONTACTO
          ================================================== */}

          <div className={styles.column}>
            <span className={styles.title}>
              CONTACTO
            </span>

            <div className={styles.contact}>
              <a
                href="tel:+56926273108"
                className={styles.contactMain}
              >
                +56 9 2627 3108
              </a>

              <a
                href="mailto:contacto@transportesanandres.cl"
                className={styles.contactMain}
              >
                contacto@transportesanandres.cl
              </a>

              <a
                href="https://wa.me/56926273108"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================
            LEGAL
        ================================================== */}

        <div className={styles.legalContainer}>
          <div className={styles.legalLine} />

          <div className={styles.legalContent}>
            <div className={styles.legal}>
              <span>
                © {year} Transportes San Andrés SpA
              </span>

              <Link href="/politica-de-privacidad">
                Política de privacidad
              </Link>
            </div>

            <span className={styles.developed}>
              Sitio desarrollado y potenciado por{" "}
              <a
                href="https://vialoop.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vialoop.cl
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* ==================================================
          FRANJA INFERIOR
      ================================================== */}

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <div className={styles.location}>
            <span className={styles.locationDot} />

            <span>
              Calama · Región de Antofagasta
            </span>
          </div>

          <div className={styles.bottomContact}>
            <a href="mailto:contacto@transportesanandres.cl">
              contacto@transportesanandres.cl
            </a>

            <span className={styles.separator} />

            <a href="tel:+56926273108">
              +56 9 2627 3108
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}