"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesCatalog.module.css";

const services = [
  {
    image: "/images/servicioshome/transportes-de-pasajeros.webp",
    category: "PASAJEROS",
    title: "Transporte de pasajeros",
    description:
      "Traslados privados en Calama y rutas regionales, coordinados según fecha, horario, origen y destino.",
    tone: "navy",
  },
  {
    image: "/images/servicioshome/servicios-para-empresas.webp",
    category: "EMPRESAS",
    title: "Convenios con empresas e instituciones",
    description:
      "Servicios programados o recurrentes para necesidades de movilidad corporativa e institucional.",
    tone: "red",
  },
  {
    image: "/images/servicioshome/traslado-a-faena-minera.webp",
    category: "MINERÍA",
    title: "Traslado de personal a faenas mineras",
    description:
      "Movilización desde Calama hacia faenas mineras de la Región de Antofagasta, según programación operacional.",
    tone: "yellow",
  },
  {
    image:
      "/images/servicioshome/Cambios-de-turno-y-contingencias.webp",
    category: "OPERACIÓN",
    title: "Cambios de turno y contingencias",
    description:
      "Traslados asociados a cambios de turno y requerimientos extraordinarios de personal.",
    tone: "navy",
  },
  {
    image: "/images/servicioshome/traslado-turistico.webp",
    category: "TURISMO",
    title: "Traslados turísticos",
    description:
      "Viajes desde Calama hacia San Pedro de Atacama y otros destinos turísticos para pasajeros o grupos.",
    tone: "red",
  },
  {
    image:
      "/images/servicioshome/viajes-especiales-calama-fuera.webp",
    category: "VIAJES",
    title: "Viajes especiales",
    description:
      "Recorridos dentro o fuera de Calama, coordinados según itinerario y características del servicio.",
    tone: "yellow",
  },
  {
    image: "/images/home/hero-encomiendas.webp",
    category: "ENCOMIENDAS",
    title: "Traslado de encomiendas",
    description:
      "Transporte coordinado de encomiendas según origen, destino y condiciones previamente informadas.",
    tone: "navy",
  },
];

function toneClass(tone: string) {
  if (tone === "red") return styles.toneRed;
  if (tone === "yellow") return styles.toneYellow;

  return styles.toneNavy;
}

export default function ServicesCatalog() {
  const sliderRef = useRef<HTMLDivElement>(null);

  function moveSlider(direction: "previous" | "next") {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>(
      `.${styles.serviceCard}`
    );

    const distance = firstCard
      ? firstCard.offsetWidth + 20
      : slider.clientWidth * 0.8;

    slider.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <Reveal direction="left" duration={950}>
            <span className={styles.eyebrow}>
              NUESTROS SERVICIOS
            </span>

            <h2>
              Soluciones de transporte para distintos requerimientos
            </h2>
          </Reveal>

          <Reveal
            direction="right"
            delay={100}
            duration={950}
            className={styles.introAside}
          >
            <p>
              Desde traslados corporativos y mineros hasta turismo,
              contingencias, viajes especiales y encomiendas.
              Coordinamos cada servicio según las necesidades
              informadas.
            </p>

            <div className={styles.sliderControls}>
              <button
                type="button"
                onClick={() => moveSlider("previous")}
                aria-label="Ver servicios anteriores"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => moveSlider("next")}
                aria-label="Ver servicios siguientes"
              >
                →
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={sliderRef}
        className={styles.servicesViewport}
      >
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              direction="up"
              delay={(index % 4) * 90}
              duration={900}
              className={`${styles.serviceCard} ${toneClass(
                service.tone
              )}`}
            >
              <div className={styles.serviceMedia}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 760px) 86vw, 360px"
                  className={styles.serviceImage}
                />

                <div
                  className={styles.serviceImageOverlay}
                />
              </div>

              <div className={styles.serviceBody}>
                <span className={styles.serviceCategory}>
                  {service.category}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div
                  className={styles.serviceFooter}
                  aria-hidden="true"
                >
                  <span className={styles.serviceLine} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}