"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesFleet.module.css";

const fleetGallery = [
  {
    image: "/images/home/vehiculo_07.webp",
    alt: "Vehículo de Transportes San Andrés junto a operación minera",
  },
  {
    image: "/images/home/vehiculo_09.webp",
    alt: "Minibús de Transportes San Andrés",
  },
  {
    image: "/images/home/vehiculo_11.webp",
    alt: "Vehículo para transporte de pasajeros",
  },
  {
    image: "/images/nosotros/vehiculo_18.webp",
    alt: "Vehículo corporativo de Transportes San Andrés",
  },
  {
    image: "/images/servicios/vehiculo_03.webp",
    alt: "Interior de vehículo para transporte de pasajeros",
  },
  {
    image: "/images/servicios/vehiculo_04.webp",
    alt: "Cabina de vehículo para traslado de personal",
  },
  {
    image: "/images/servicios/vehiculo_12.webp",
    alt: "Vehículos de Transportes San Andrés",
  },
];

export default function ServicesFleet() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const showPrevious = () => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === 0 ? fleetGallery.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === fleetGallery.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeImage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <section className={styles.fleetSection}>
        <div className={styles.container}>
          <div className={styles.fleetHeading}>
            <Reveal direction="left" duration={1000}>
              <span className={styles.eyebrow}>NUESTRA FLOTA</span>

              <h2>Comodidad y capacidad para cada traslado</h2>
            </Reveal>

            <Reveal direction="right" delay={120} duration={1000}>
              <p>
                Disponemos de vehículos para pasajeros, grupos y personal de
                empresas, con alternativas para recorridos urbanos, regionales
                y traslados hacia faenas.
              </p>
            </Reveal>
          </div>

          <div className={styles.fleetGallery}>
            {fleetGallery.map((item, index) => (
              <Reveal
                key={item.image}
                direction={
                  index === 0 ? "left" : index % 2 === 0 ? "up" : "right"
                }
                delay={index * 70}
                duration={900}
                className={`${styles.fleetItem} ${
                  index === 0 ? styles.featured : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.fleetButton}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Ampliar fotografía ${index + 1} de la flota`}
                >
                  <div className={styles.fleetImage}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 760px) 88vw, 50vw"
                          : "(max-width: 760px) 88vw, 25vw"
                      }
                      className={styles.fleetPhoto}
                    />

                    <span className={styles.expandIcon} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeImage !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada de nuestra flota"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          >
            ×
          </button>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.previousArrow}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Ver fotografía anterior"
          >
            ‹
          </button>

          <div
            className={styles.lightboxImage}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fleetGallery[activeImage].image}
              alt={fleetGallery[activeImage].alt}
              fill
              priority
              sizes="100vw"
              className={styles.lightboxPhoto}
            />
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.nextArrow}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Ver fotografía siguiente"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}