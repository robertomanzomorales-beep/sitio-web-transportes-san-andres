"use client";

import Image from "next/image";
import { useRef } from "react";
import type { FormEvent } from "react";
import styles from "./QuickQuote.module.css";

function formatDate(value: string) {
  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${day}/${month}/${year}`;
}

function SwapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 7h11m0 0-3-3m3 3-3 3M17 17H6m0 0 3 3m-3-3 3-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function QuickQuote() {
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  function swapRoute() {
    if (!originRef.current || !destinationRef.current) {
      return;
    }

    const currentOrigin = originRef.current.value;

    originRef.current.value = destinationRef.current.value;
    destinationRef.current.value = currentOrigin;

    originRef.current.focus();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const service = String(formData.get("service") ?? "").trim();
    const origin = String(formData.get("origin") ?? "").trim();
    const destination = String(formData.get("destination") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const time = String(formData.get("time") ?? "").trim();
    const passengers = String(formData.get("passengers") ?? "").trim();

    const message = [
      "Hola, quisiera solicitar una cotización con Transportes San Andrés.",
      "",
      `Tipo de servicio: ${service}`,
      `Origen: ${origin}`,
      `Destino: ${destination}`,
      `Fecha: ${formatDate(date)}`,
      `Horario: ${time}`,
      `Cantidad de pasajeros: ${passengers}`,
      "",
      "Quedo atento(a) a la disponibilidad y valor del traslado.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/56926273108?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className={styles.quoteSection}
      aria-labelledby="quick-quote-title"
    >
      <div className={styles.container}>
        <div className={styles.quoteCard}>
          <div className={styles.quoteHeader}>
            <div className={styles.headingCopy}>
              <span className={styles.kicker}>
                COTIZADOR DE TRASLADOS
              </span>

              <h2 id="quick-quote-title">
                Planifique su recorrido
              </h2>
            </div>

            <p>
              Complete los datos principales. Confirmaremos disponibilidad y
              valor directamente por WhatsApp.
            </p>
          </div>

          <form className={styles.quoteForm} onSubmit={handleSubmit}>
            <label className={`${styles.field} ${styles.serviceField}`}>
              <span>Tipo de servicio</span>

              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Seleccione una alternativa
                </option>

                <option value="Transporte de pasajeros">
                  Transporte de pasajeros
                </option>

                <option value="Convenio con empresa o institución">
                  Empresa o institución
                </option>

                <option value="Traslado a faena minera">
                  Traslado a faena minera
                </option>

                <option value="Traslado turístico">
                  Traslado turístico
                </option>

                <option value="Viaje especial">
                  Viaje especial
                </option>

                <option value="Encomienda">
                  Encomienda
                </option>
              </select>
            </label>

            <div className={styles.routeGroup}>
              <label className={styles.field}>
                <span>Origen</span>

                <input
                  ref={originRef}
                  type="text"
                  name="origin"
                  required
                  placeholder="Ej. Calama"
                  autoComplete="address-level2"
                />
              </label>

              <button
                type="button"
                className={styles.swapButton}
                onClick={swapRoute}
                aria-label="Intercambiar origen y destino"
                title="Intercambiar origen y destino"
              >
                <SwapIcon />
              </button>

              <label className={styles.field}>
                <span>Destino</span>

                <input
                  ref={destinationRef}
                  type="text"
                  name="destination"
                  required
                  placeholder="Ej. San Pedro"
                />
              </label>
            </div>

            <label className={`${styles.field} ${styles.dateField}`}>
              <span>Fecha</span>

              <input type="date" name="date" required />
            </label>

            <label className={`${styles.field} ${styles.timeField}`}>
              <span>Horario</span>

              <input type="time" name="time" required />
            </label>

            <label className={`${styles.field} ${styles.passengersField}`}>
              <span>Pasajeros</span>

              <input
                type="number"
                name="passengers"
                min="1"
                required
                placeholder="1"
                inputMode="numeric"
              />
            </label>

            <div className={styles.action}>
              <button type="submit">
                <Image
                  src="/images/logo-whatsapp.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.whatsappLogo}
                />

                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          </form>

          <div className={styles.quoteFooter}>
            <span>
              Solicitud sujeta a confirmación de disponibilidad y valor.
            </span>

            <strong>Atención desde Calama</strong>
          </div>
        </div>
      </div>
    </section>
  );
}