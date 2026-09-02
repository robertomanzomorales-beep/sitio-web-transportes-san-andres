import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutCompany.module.css";

export function AboutCompany() {
  return (
    <>
      <section className={styles.company}>
        <div className={styles.container}>
          <Reveal direction="left" duration={1000} className={styles.visual}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/nosotros/vehiculo_02.webp"
                alt="Servicio de Transportes San Andrés"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.badge}>
              <span>BASE OPERACIONAL</span>
              <strong>Calama</strong>
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} duration={1000}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>QUIÉNES SOMOS</span>

              <h2>
                Transporte coordinado según las necesidades de cada viaje
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
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.purpose}>
        <div className={styles.purposeContainer}>
          <Reveal direction="up" duration={950}>
            <span className={styles.purposeNumber}>01</span>
            <span className={styles.purposeLabel}>NUESTRO PROPÓSITO</span>

            <h2>Movilidad para sus operaciones y viajes</h2>

            <p>
              Facilitamos el desplazamiento de personas mediante servicios
              coordinados y adaptables a operaciones empresariales, traslados
              mineros, viajes particulares y recorridos turísticos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.missionVision}>
        <div className={styles.mvContainer}>
          <Reveal
            direction="left"
            duration={950}
            className={styles.mvBlock}
          >
            <div className={styles.mvTop}>
              <div className={styles.mvIconWrap}>
                <Image
                  src="/images/nosotros/mision_500x500.webp"
                  alt="Icono representativo de la misión"
                  width={500}
                  height={500}
                  sizes="92px"
                  className={styles.mvIcon}
                />
              </div>

              <span className={styles.mvNumber}>02</span>
            </div>

            <span className={styles.mvLabel}>MISIÓN</span>

            <h3>Servicio cercano y coordinación responsable</h3>

            <p>
              Brindar servicios de transporte de pasajeros desde Calama con
              atención cercana, coordinación responsable y capacidad de
              adaptación para empresas, instituciones y particulares.
            </p>
          </Reveal>

          <Reveal
            direction="right"
            delay={130}
            duration={950}
            className={styles.mvBlock}
          >
            <div className={styles.mvTop}>
              <div className={styles.mvIconWrap}>
                <Image
                  src="/images/nosotros/vision_500x500.webp"
                  alt="Icono representativo de la visión"
                  width={500}
                  height={500}
                  sizes="92px"
                  className={styles.mvIcon}
                />
              </div>

              <span className={styles.mvNumber}>03</span>
            </div>

            <span className={styles.mvLabel}>VISIÓN</span>

            <h3>Ser una alternativa reconocida en la región</h3>

            <p>
              Consolidarnos como una empresa de transporte reconocida en Calama
              y la Región de Antofagasta por su atención, confianza y capacidad
              para responder a diferentes necesidades de traslado.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
} 