import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesContact.module.css";

export default function ServicesContact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <Reveal direction="left" duration={950}>
            <span className={styles.eyebrow}>CONTACTO DIRECTO</span>

            <h2>¿Tiene una consulta?</h2>

            <p>
              También puede comunicarse directamente mediante nuestros canales
              de atención.
            </p>
          </Reveal>

          <div className={styles.contactCards}>
            <Reveal
              direction="up"
              duration={850}
              className={styles.contactCard}
            >
              <span>TELÉFONO / WHATSAPP</span>
              <a href="tel:+56926273108">+56 9 2627 3108</a>
            </Reveal>

            <Reveal
              direction="up"
              delay={100}
              duration={850}
              className={styles.contactCard}
            >
              <span>CORREO ELECTRÓNICO</span>

              <a href="mailto:admsandres@gmail.com">
                admsandres@gmail.com
              </a>
            </Reveal>

            <Reveal
              direction="up"
              delay={200}
              duration={850}
              className={styles.contactCard}
            >
              <span>BASE DE OPERACIONES</span>

              <strong>
                Calama
                <br />
                Región de Antofagasta
              </strong>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}