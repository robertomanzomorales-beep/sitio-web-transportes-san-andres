"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import styles from "./Hero.module.css";

const AUTOPLAY_DELAY = 7000;

const slides = [
  {
    image: "/images/home/hero-mineria.webp",
    eyebrow: "TRANSPORTE PARA EMPRESAS Y MINERÍA",
    title: "Movilidad que acompaña su operación",
    description:
      "Coordinamos traslados de personal desde Calama hacia faenas mineras y operaciones industriales de la Región de Antofagasta.",
    button: "Cotizar traslado empresarial",
    href: "/servicios#cotizacion",
    position: "left",
    imagePosition: "center center",
  },
  {
    image: "/images/home/hero-turismo.webp",
    eyebrow: "CALAMA · SAN PEDRO DE ATACAMA",
    title: "Su viaje comienza con una buena coordinación",
    description:
      "Traslados privados para pasajeros, familias y grupos hacia San Pedro de Atacama y otros destinos turísticos de la región.",
    button: "Cotizar traslado turístico",
    href: "/servicios#cotizacion",
    position: "right",
    imagePosition: "center center",
  },
  {
    image: "/images/home/hero-encomiendas.webp",
    eyebrow: "ENVÍOS Y TRASLADOS ESPECIALES",
    title: "También movemos lo que necesita llegar",
    description:
      "Coordinamos el traslado de encomiendas y requerimientos especiales según origen, destino y condiciones del servicio.",
    button: "Consultar por encomiendas",
    href: "/servicios#cotizacion",
    position: "left",
    imagePosition: "center center",
  },
];

function Chevron({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {direction === "left" ? (
        <path
          d="M14.5 5.5 8 12l6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="m9.5 5.5 6.5 6.5-6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activeSlide]);

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  function selectSlide(index: number) {
    setActiveSlide(index);
  }

  const heroVariables = {
    "--autoplay-duration": `${AUTOPLAY_DELAY}ms`,
  } as CSSProperties;

  return (
    <section
      className={styles.hero}
      style={heroVariables}
      aria-label="Servicios destacados de Transportes San Andrés"
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <article
              key={slide.image}
              className={`${styles.slide} ${
                isActive ? styles.active : ""
              } ${
                slide.position === "right"
                  ? styles.slideRight
                  : styles.slideLeft
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                quality={88}
                sizes="(max-width: 760px) calc(100vw - 20px), calc(100vw - 48px)"
                className={styles.background}
                style={{
                  objectPosition: slide.imagePosition,
                }}
              />

              <div className={styles.overlay} />

              <div className={styles.container}>
                <div
                  className={`${styles.content} ${
                    slide.position === "right"
                      ? styles.contentRight
                      : styles.contentLeft
                  }`}
                >
                  <span className={styles.eyebrow}>
                    {slide.eyebrow}
                  </span>

                  <h1>{slide.title}</h1>

                  <p>{slide.description}</p>

                  <Link
                    href={slide.href}
                    className={styles.button}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className={styles.navigation}
        aria-label="Controles del slider"
      >
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={previousSlide}
          aria-label="Mostrar diapositiva anterior"
        >
          <Chevron direction="left" />
        </button>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextSlide}
          aria-label="Mostrar diapositiva siguiente"
        >
          <Chevron direction="right" />
        </button>
      </div>

      <div
        className={styles.pagination}
        aria-label="Seleccionar diapositiva"
      >
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <button
              key={slide.image}
              type="button"
              className={`${styles.dot} ${
                isActive ? styles.dotActive : ""
              }`}
              onClick={() => selectSlide(index)}
              aria-label={`Mostrar diapositiva ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive && (
                <span
                  key={`progress-${activeSlide}`}
                  className={styles.dotProgress}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}