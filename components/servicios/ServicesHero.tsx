import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/servicioshome/hero-servicios-t-s-a.webp"
        alt="Servicios de transporte de Transportes San Andrés"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <Reveal direction="left" duration={1000}>
          <div className={styles.heroContent}>
            <h1>
              Servicios de transporte en Calama y la Región de Antofagasta
            </h1>

            <p>
              Coordinamos traslados para empresas, instituciones, trabajadores,
              turistas y particulares desde Calama hacia faenas mineras, San
              Pedro de Atacama y otros destinos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
