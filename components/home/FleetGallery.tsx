"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

import Reveal from "@/components/ui/Reveal";

import styles from "./FleetGallery.module.css";

const gallery = [
  {
    src: "/images/home/vehiculo_19.webp",
    alt: "Vehículo de Transportes San Andrés",
  },
  {
    src: "/images/home/vehiculo_17.webp",
    alt: "Vehículo de Transportes San Andrés en servicio",
  },
  {
    src: "/images/home/vehiculo_08.webp",
    alt: "Vehículo para transporte de pasajeros",
  },
  {
    src: "/images/servicios/vehiculo_05.webp",
    alt: "Vehículo de Transportes San Andrés para traslados",
  },
  {
    src: "/images/servicios/vehiculo_03.webp",
    alt: "Vehículo de la flota de Transportes San Andrés",
  },
  {
    src: "/images/servicios/vehiculo_15.webp",
    alt: "Vehículo para servicios de transporte en Calama",
  },
  {
    src: "/images/servicios/vehiculo_13.webp",
    alt: "Flota de Transportes San Andrés",
  },
  {
    src: "/images/servicios/vehiculo_10.webp",
    alt: "Vehículo para traslado de pasajeros y grupos",
  },
];

function ArrowIcon({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
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

export default function FleetGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  /* ======================================================
     ACTUALIZAR PROGRESO
  ====================================================== */

  function updateProgress() {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScroll =
      track.scrollWidth - track.clientWidth;

    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    const currentProgress =
      (track.scrollLeft / maxScroll) * 100;

    setProgress(
      Math.min(
        100,
        Math.max(0, currentProgress)
      )
    );
  }

  useEffect(() => {
    updateProgress();

    const handleResize = () => {
      updateProgress();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* ======================================================
     FLECHAS DEL CARRUSEL
  ====================================================== */

  function scrollCarousel(
    direction: "left" | "right"
  ) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstSlide =
      track.firstElementChild as
        | HTMLElement
        | null;

    const cardWidth =
      firstSlide?.offsetWidth ??
      track.clientWidth * 0.7;

    const computedStyles =
      window.getComputedStyle(track);

    const gap =
      Number.parseFloat(
        computedStyles.columnGap
      ) || 18;

    const movement =
      cardWidth + gap;

    track.scrollBy({
      left:
        direction === "right"
          ? movement
          : -movement,

      behavior: "smooth",
    });
  }

  /* ======================================================
     BARRA DE PROGRESO ARRASTRABLE
  ====================================================== */

  function handleProgressChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const value = Number(
      event.target.value
    );

    const maxScroll =
      track.scrollWidth -
      track.clientWidth;

    track.scrollLeft =
      maxScroll * (value / 100);

    setProgress(value);
  }

  /* ======================================================
     LIGHTBOX
  ====================================================== */

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function previousLightboxImage() {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === 0
        ? gallery.length - 1
        : current - 1;
    });
  }

  function nextLightboxImage() {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      return (
        (current + 1) %
        gallery.length
      );
    });
  }

  /* ======================================================
     TECLADO + BLOQUEO DE SCROLL
  ====================================================== */

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        previousLightboxImage();
      }

      if (
        event.key === "ArrowRight"
      ) {
        nextLightboxImage();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [lightboxIndex]);

  /* ======================================================
     CONTADOR VISUAL
  ====================================================== */

  const currentGalleryPosition =
    Math.min(
      gallery.length,
      Math.round(
        (progress / 100) *
          (gallery.length - 1)
      ) + 1
    );

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="fleet-title"
      >
        <div
          className={styles.container}
        >
          {/* ==================================================
              ENCABEZADO
          ================================================== */}

          <div
            className={styles.heading}
          >
            <Reveal
              direction="left"
              duration={950}
            >
              <div
                className={
                  styles.headingMain
                }
              >
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  NUESTRA FLOTA
                </span>

                <h2 id="fleet-title">
                  Flota preparada para
                  distintos tipos de
                  traslado
                </h2>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={110}
              duration={950}
            >
              <div
                className={
                  styles.headingAside
                }
              >
                <p>
                  Vehículos disponibles
                  para servicios
                  corporativos,
                  traslados de personal,
                  turismo, grupos y
                  viajes especiales,
                  coordinados de acuerdo
                  con cada
                  requerimiento.
                </p>

                <Link
                  href="/servicios#cotizacion"
                  className={styles.cta}
                >
                  Solicitar cotización
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ==================================================
              CARRUSEL
          ================================================== */}

          <Reveal
            direction="scale"
            delay={120}
            duration={1050}
          >
            <div
              className={
                styles.galleryShell
              }
            >
              <div
                ref={trackRef}
                className={styles.track}
                onScroll={
                  updateProgress
                }
              >
                {gallery.map(
                  (item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      className={
                        styles.slide
                      }
                      onClick={() =>
                        openLightbox(
                          index
                        )
                      }
                      aria-label={`Ampliar fotografía ${
                        index + 1
                      } de la flota`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="
                          (max-width: 650px) 84vw,
                          (max-width: 1000px) 46vw,
                          32vw
                        "
                        className={
                          styles.image
                        }
                      />
                    </button>
                  )
                )}
              </div>

              {/* ==================================================
                  CONTROLES
              ================================================== */}

              <div
                className={
                  styles.controls
                }
              >
                <div
                  className={
                    styles.arrowControls
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.arrowButton
                    }
                    onClick={() =>
                      scrollCarousel(
                        "left"
                      )
                    }
                    aria-label="Fotografías anteriores"
                  >
                    <ArrowIcon
                      direction="left"
                    />
                  </button>

                  <button
                    type="button"
                    className={
                      styles.arrowButton
                    }
                    onClick={() =>
                      scrollCarousel(
                        "right"
                      )
                    }
                    aria-label="Fotografías siguientes"
                  >
                    <ArrowIcon
                      direction="right"
                    />
                  </button>
                </div>

                <div
                  className={
                    styles.progressControl
                  }
                >
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={progress}
                    onChange={
                      handleProgressChange
                    }
                    className={
                      styles.progressRange
                    }
                    aria-label="Posición de la galería"
                    style={
                      {
                        "--progress": `${progress}%`,
                      } as CSSProperties
                    }
                  />
                </div>

                <span
                  className={
                    styles.counter
                  }
                >
                  {String(
                    currentGalleryPosition
                  ).padStart(
                    2,
                    "0"
                  )}

                  <span>/</span>

                  {String(
                    gallery.length
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      <div
        className={`${styles.lightbox} ${
          lightboxIndex !== null
            ? styles.lightboxOpen
            : ""
        }`}
        aria-hidden={
          lightboxIndex === null
        }
        onMouseDown={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            closeLightbox();
          }
        }}
      >
        {lightboxIndex !== null && (
          <div
            className={
              styles.lightboxInner
            }
            role="dialog"
            aria-modal="true"
            aria-label="Galería ampliada de la flota"
          >
            {/* CERRAR */}

            <button
              type="button"
              className={
                styles.lightboxClose
              }
              onClick={
                closeLightbox
              }
              aria-label="Cerrar galería"
            >
              ×
            </button>

            {/* ANTERIOR */}

            <button
              type="button"
              className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
              onClick={
                previousLightboxImage
              }
              aria-label="Fotografía anterior"
            >
              <ArrowIcon
                direction="left"
              />
            </button>

            {/* IMAGEN */}

            <div
              className={
                styles.lightboxImageWrap
              }
            >
              <Image
                src={
                  gallery[
                    lightboxIndex
                  ].src
                }
                alt={
                  gallery[
                    lightboxIndex
                  ].alt
                }
                fill
                sizes="95vw"
                className={
                  styles.lightboxImage
                }
                priority
              />
            </div>

            {/* SIGUIENTE */}

            <button
              type="button"
              className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
              onClick={
                nextLightboxImage
              }
              aria-label="Fotografía siguiente"
            >
              <ArrowIcon
                direction="right"
              />
            </button>

            {/* CONTADOR */}

            <div
              className={
                styles.lightboxCounter
              }
            >
              {String(
                lightboxIndex + 1
              ).padStart(
                2,
                "0"
              )}

              <span>/</span>

              {String(
                gallery.length
              ).padStart(
                2,
                "0"
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}