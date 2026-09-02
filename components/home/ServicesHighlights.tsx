import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

import styles from "./ServicesHighlights.module.css";

const services = [
  {
    category: "PASAJEROS",
    title: "Transporte de pasajeros",
    description:
      "Traslados privados desde Calama hacia distintos puntos de la Región de Antofagasta.",
    image:
      "/images/servicioshome/transportes-de-pasajeros.webp",
  },
  {
    category: "EMPRESAS",
    title: "Servicios para empresas",
    description:
      "Soluciones de transporte coordinadas para empresas, instituciones y sus operaciones.",
    image:
      "/images/servicioshome/servicios-para-empresas.webp",
  },
  {
    category: "MINERÍA",
    title: "Traslados a faenas mineras",
    description:
      "Movilización de personal desde Calama hacia faenas y operaciones mineras de la región.",
    image:
      "/images/servicioshome/traslado-a-faena-minera.webp",
  },
  {
    category: "TURISMO",
    title: "Traslados turísticos",
    description:
      "Viajes desde Calama hacia San Pedro de Atacama y otros destinos turísticos.",
    image:
      "/images/servicioshome/traslado-turistico.webp",
  },
];

export default function ServicesHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ==================================================
            ENCABEZADO
        ================================================== */}

        <div className={styles.heading}>
          <Reveal direction="left" duration={900}>
            <div className={styles.headingMain}>
              <span className={styles.eyebrow}>
                NUESTROS SERVICIOS
              </span>

              <h2>
                Un servicio para cada
                <br />
                tipo de recorrido
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={100}
            duration={900}
          >
            <div className={styles.headingAside}>
              <p>
                Coordinamos soluciones de transporte
                para empresas, minería, turismo y
                pasajeros particulares desde Calama
                hacia distintos puntos de la Región de
                Antofagasta.
              </p>

              <Link
                href="/servicios"
                className={styles.allServices}
              >
                Ver todos los servicios
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ==================================================
            SERVICIOS
        ================================================== */}

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              direction="up"
              delay={index * 90}
              duration={850}
              className={styles.revealCard}
            >
              <Link
                href="/servicios"
                className={styles.card}
                aria-label={`Conocer ${service.title}`}
              >
                {/* IMAGEN */}

                <div className={styles.imageWrap}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="
                      (max-width: 760px) 100vw,
                      (max-width: 1050px) 50vw,
                      25vw
                    "
                    className={styles.image}
                  />

                  <span
                    className={styles.number}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                {/* CONTENIDO */}

                <div className={styles.cardBody}>
                  <span className={styles.category}>
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p>
                    {service.description}
                  </p>

                  <span
                    className={styles.cardLine}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}