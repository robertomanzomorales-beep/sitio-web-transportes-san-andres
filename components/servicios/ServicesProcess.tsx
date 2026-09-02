import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesProcess.module.css";

const steps = [
  {
    number: "01",
    title: "Tipo de traslado",
    description:
      "Indíquenos qué servicio necesita: empresa, minería, turismo, viaje especial, encomienda u otro.",
  },
  {
    number: "02",
    title: "Origen, destino y fecha",
    description:
      "Infórmenos desde dónde necesita viajar, hacia dónde, fecha, horario y cantidad de pasajeros.",
  },
  {
    number: "03",
    title: "Condiciones especiales",
    description:
      "Agregue cualquier requerimiento operacional o información relevante para el servicio.",
  },
  {
    number: "04",
    title: "Coordinación",
    description:
      "Revisaremos los antecedentes y nos comunicaremos para coordinar la alternativa correspondiente.",
  },
];

export default function ServicesProcess() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <Reveal direction="left" duration={950}>
          <div className={styles.processHeading}>
            <span className={styles.eyebrow}>
              CÓMO SOLICITAR UN SERVICIO
            </span>
            <h2>Cuatro pasos para coordinar su traslado</h2>
          </div>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              direction="up"
              delay={index * 120}
              duration={900}
              className={styles.step}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepLine} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
