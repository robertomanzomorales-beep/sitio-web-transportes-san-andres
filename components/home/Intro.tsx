import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal
          direction="left"
          duration={950}
          className={styles.content}
        >
          <span className={styles.eyebrow}>
            TRANSPORTES SAN ANDRÉS
          </span>

          <h2>
            Soluciones de transporte desde Calama para cada recorrido
          </h2>

          <p>
            En Transportes San Andrés SpA coordinamos servicios de transporte
            privado de pasajeros en Calama para empresas, instituciones y
            particulares. Atendemos traslados programados, viajes especiales y
            contingencias de personal con atención directa y personalizada.
          </p>

          <Link href="/nosotros" className={styles.link}>
            Conozca nuestra empresa
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal
          direction="right"
          delay={140}
          duration={1050}
          className={styles.visual}
        >
          <div className={styles.imagePrimary}>
            <Image
              src="/images/home/vehiculo_01.webp"
              alt="Vehículo de Transportes San Andrés"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>

          <div className={styles.detail}>
            <strong>Calama</strong>
            <span>Región de Antofagasta</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}