import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

import styles from "./Nosotros.module.css";

const values = [
  {
    number: "01",
    title: "Responsabilidad",
    text: "Coordinamos cada servicio considerando los datos y condiciones informadas por el cliente.",
  },
  {
    number: "02",
    title: "Compromiso",
    text: "Atendemos cada traslado con disposición para responder al requerimiento acordado.",
  },
  {
    number: "03",
    title: "Confianza",
    text: "Mantenemos una comunicación directa antes y durante la coordinación del servicio.",
  },
  {
    number: "04",
    title: "Adaptabilidad",
    text: "Evaluamos alternativas según destino, horario, cantidad de pasajeros y tipo de viaje.",
  },
  {
    number: "05",
    title: "Cercanía",
    text: "Entregamos una atención personalizada para empresas, instituciones y particulares.",
  },
];

export default function Nosotros() {
  return (
    <>
      {/* ==================================================
          HERO
      ================================================== */}

      <section className={styles.hero}>
        <Image
          src="/images/nosotros/vehiculo_06.webp"
          alt="Transportes San Andrés en Calama"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContainer}>
          <Reveal direction="left" duration={1000}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrowLight}>
                TRANSPORTES SAN ANDRÉS
              </span>

              <h1>Transporte de pasajeros con base en Calama</h1>

              <p>
                Traslados corporativos, mineros, turísticos y particulares
                desde Calama hacia distintos destinos de la Región de
                Antofagasta.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/servicios#cotizacion"
                  className={styles.primaryButton}
                >
                  Solicitar cotización
                </Link>

                <Link href="/servicios" className={styles.outlineButton}>
                  Ver servicios
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.heroBottomInner}>
            <span>Calama</span>
            <span>Empresas</span>
            <span>Minería</span>
            <span>Turismo</span>
          </div>
        </div>
      </section>

      {/* ==================================================
          QUIÉNES SOMOS
      ================================================== */}

      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <Reveal
              direction="left"
              duration={1000}
              className={styles.aboutImageColumn}
            >
              <div className={styles.aboutImage}>
                <Image
                  src="/images/nosotros/vehiculo_02.webp"
                  alt="Vehículo de Transportes San Andrés"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.locationCard}>
                <span>BASE OPERACIONAL</span>
                <strong>Calama</strong>
                <small>Región de Antofagasta</small>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={130}
              duration={1000}
              className={styles.aboutContent}
            >
              <span className={styles.eyebrow}>QUIÉNES SOMOS</span>

              <h2>
                Movilidad coordinada para empresas, personas y operaciones
              </h2>

              <p>
                Transportes San Andrés SpA es una empresa de transporte privado
                de pasajeros con base en Calama. Atendemos a empresas,
                instituciones, trabajadores, turistas y clientes particulares,
                coordinando recorridos hacia faenas mineras, San Pedro de
                Atacama y otros destinos de la Región de Antofagasta.
              </p>

              <p>
                Entregamos atención directa y coordinamos cada traslado según
                el destino, horario, cantidad de pasajeros y condiciones
                específicas del servicio.
              </p>

              <Link href="/servicios" className={styles.textLink}>
                Conocer nuestros servicios
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROPÓSITO
      ================================================== */}

      <section className={styles.purpose}>
        <div className={styles.container}>
          <div className={styles.purposeGrid}>
            <Reveal direction="left" duration={1000}>
              <div className={styles.purposeContent}>
                <span className={styles.eyebrowLight}>
                  NUESTRO PROPÓSITO
                </span>

                <h2>Movilidad para sus operaciones y viajes</h2>

                <p>
                  Facilitamos el desplazamiento de personas mediante servicios
                  coordinados y adaptables a operaciones empresariales,
                  traslados mineros, viajes particulares y recorridos
                  turísticos.
                </p>
              </div>
            </Reveal>

            <Reveal
              direction="scale"
              delay={130}
              duration={1000}
              className={styles.purposeImageWrap}
            >
              <div className={styles.purposeImage}>
                <Image
                  src="/images/nosotros/vehiculo_18.webp"
                  alt="Servicio de transporte de pasajeros"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.coverImage}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          MISIÓN / VISIÓN
      ================================================== */}

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <Reveal direction="up" duration={900}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>NUESTRA DIRECCIÓN</span>

              <h2>
                Cómo trabajamos hoy y hacia dónde queremos avanzar
              </h2>
            </div>
          </Reveal>

          <div className={styles.missionGrid}>
            <Reveal
              direction="left"
              duration={950}
              className={styles.missionBlock}
            >
              <div className={styles.missionTop}>
                <div className={styles.missionIcon}>
                  <Image
                    src="/images/nosotros/mision_500x500.webp"
                    alt="Misión de Transportes San Andrés"
                    width={500}
                    height={500}
                    sizes="86px"
                  />
                </div>

                <span className={styles.blockNumber}>01</span>
              </div>

              <span className={styles.blockLabel}>MISIÓN</span>

              <h3>Atención cercana y coordinación responsable</h3>

              <p>
                Brindar servicios de transporte de pasajeros desde Calama con
                atención cercana, coordinación responsable y capacidad de
                adaptación para empresas, instituciones y particulares.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={120}
              duration={950}
              className={styles.missionBlock}
            >
              <div className={styles.missionTop}>
                <div className={styles.missionIcon}>
                  <Image
                    src="/images/nosotros/vision_500x500.webp"
                    alt="Visión de Transportes San Andrés"
                    width={500}
                    height={500}
                    sizes="86px"
                  />
                </div>

                <span className={styles.blockNumber}>02</span>
              </div>

              <span className={styles.blockLabel}>VISIÓN</span>

              <h3>
                Una empresa reconocida por confianza y capacidad de respuesta
              </h3>

              <p>
                Consolidarnos como una empresa de transporte reconocida en
                Calama y la Región de Antofagasta por su atención, confianza y
                capacidad para responder a diferentes necesidades de traslado.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          VALORES
      ================================================== */}

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeading}>
            <Reveal direction="left" duration={950}>
              <span className={styles.eyebrow}>NUESTROS VALORES</span>

              <h2>Principios que acompañan cada servicio</h2>
            </Reveal>

            <Reveal direction="right" delay={100} duration={950}>
              <p>
                Una relación de transporte comienza antes de subir al vehículo:
                comienza coordinando correctamente cada requerimiento.
              </p>
            </Reveal>
          </div>

          <div className={styles.valuesList}>
            {values.map((value, index) => (
              <Reveal
                key={value.number}
                direction="up"
                delay={index * 100}
                duration={850}
                className={styles.value}
              >
                <span className={styles.valueNumber}>{value.number}</span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          COMPROMISO + CTA
      ================================================== */}

      <section className={styles.closing}>
        <div className={styles.container}>
          <div className={styles.closingGrid}>
            <Reveal direction="left" duration={1000}>
              <span className={styles.eyebrowLight}>
                COMPROMISO DE SERVICIO
              </span>

              <h2>Cada traslado comienza con una buena coordinación</h2>

              <p>
                Antes de confirmar cada servicio revisamos el recorrido,
                horario, cantidad de pasajeros y condiciones solicitadas para
                coordinar una alternativa adecuada.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={130}
              duration={1000}
              className={styles.closingActions}
            >
              <span>PLANIFIQUE SU PRÓXIMO TRASLADO</span>

              <Link href="/servicios" className={styles.closingSecondary}>
                Ver servicios
              </Link>

              <Link
                href="/servicios#cotizacion"
                className={styles.closingPrimary}
              >
                Solicitar cotización
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}