import Reveal from "@/components/ui/Reveal";
import styles from "./AboutValues.module.css";

const values = [
  {
    number: "01",
    title: "Responsabilidad",
    description:
      "Coordinamos cada servicio considerando los datos y condiciones informadas por el cliente.",
  },
  {
    number: "02",
    title: "Compromiso",
    description:
      "Atendemos cada traslado con disposición para responder al requerimiento acordado.",
  },
  {
    number: "03",
    title: "Confianza",
    description:
      "Mantenemos una comunicación directa antes y durante la coordinación del servicio.",
  },
  {
    number: "04",
    title: "Adaptabilidad",
    description:
      "Evaluamos alternativas según destino, horario, cantidad de pasajeros y tipo de viaje.",
  },
  {
    number: "05",
    title: "Cercanía",
    description:
      "Entregamos una atención personalizada para empresas, instituciones y particulares.",
  },
];

export function AboutValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal
          direction="left"
          duration={950}
          className={styles.heading}
        >
          <span className={styles.eyebrow}>
            NUESTROS VALORES
          </span>

          <h2>
            Una forma de trabajar basada en coordinación y confianza
          </h2>
        </Reveal>

        <div className={styles.values}>
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              direction="up"
              delay={index * 110}
              duration={900}
              className={styles.item}
            >
              <div className={styles.itemTop}>
                <span className={styles.number}>
                  {value.number}
                </span>

                <span className={styles.line} />
              </div>

              <div className={styles.itemContent}>
                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}