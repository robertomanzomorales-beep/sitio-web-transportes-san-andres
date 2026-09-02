import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="about-hero-title"
    >
      <Image
        src="/images/nosotros/fondo-calama-hero-nosotros.webp"
        alt="Paisaje de Calama, Región de Antofagasta"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <Reveal
          direction="left"
          duration={1000}
          className={styles.content}
        >
          <h1 id="about-hero-title">
            Empresa de transporte de pasajeros en Calama
          </h1>

          <p>
            Traslados corporativos, mineros, turísticos y particulares desde
            Calama hacia distintos destinos de la Región de Antofagasta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}