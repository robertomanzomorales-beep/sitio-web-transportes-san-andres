import Reveal from "@/components/ui/Reveal";

import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    title: "Coordinación directa",
    description:
      "Atención personalizada para revisar cada traslado, sus horarios, recorrido y condiciones antes de confirmar el servicio.",
  },
  {
    title: "Servicios adaptables",
    description:
      "Alternativas para empresas, instituciones y pasajeros particulares según el requerimiento de cada viaje.",
  },
  {
    title: "Cobertura regional",
    description:
      "Traslados urbanos, interurbanos, mineros y turísticos desde Calama hacia distintos destinos.",
  },
  {
    title: "Distintas necesidades",
    description:
      "Opciones de transporte para diferentes tamaños de grupo, recorridos y características del servicio.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-title"
    >
      <div className={styles.container}>
        {/* ==================================================
            ENCABEZADO
        ================================================== */}

        <div className={styles.heading}>
          <Reveal
            direction="left"
            duration={950}
          >
            <div className={styles.headingMain}>
              <span className={styles.eyebrow}>
                POR QUÉ ELEGIRNOS
              </span>

              <h2 id="why-title">
                Cada traslado comienza con una buena coordinación
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={110}
            duration={950}
          >
            <p className={styles.intro}>
              Coordinamos cada servicio considerando el destino,
              horario, cantidad de pasajeros y las condiciones
              específicas de cada requerimiento.
            </p>
          </Reveal>
        </div>

        {/* ==================================================
            TARJETAS
        ================================================== */}

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              direction="up"
              delay={index * 110}
              duration={900}
              className={styles.cardReveal}
            >
              <article className={styles.card}>
                <span
                  className={styles.accentLine}
                  aria-hidden="true"
                />

                <div className={styles.cardContent}>
                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}