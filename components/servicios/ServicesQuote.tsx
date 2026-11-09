"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TrackedWhatsAppLink from "@/components/ui/TrackedWhatsAppLink";
import styles from "./ServicesQuote.module.css";

export default function ServicesQuote({ initialService = "" }: { initialService?: string }) {
  const isCorporateQuote = initialService === "corporativo";
  const serviceRef = useRef<HTMLSelectElement>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get("servicio");
    if (
      requestedService &&
      ["corporativo", "mineria", "turismo", "especial", "encomienda"].includes(requestedService) &&
      serviceRef.current
    ) {
      serviceRef.current.value = requestedService;
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const query = new URLSearchParams(window.location.search);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      origin: String(formData.get("origin") ?? "").trim(),
      destination: String(formData.get("destination") ?? "").trim(),
      date: String(formData.get("date") ?? "").trim(),
      time: String(formData.get("time") ?? "").trim(),
      passengers: String(formData.get("passengers") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      adsClickIdPresent: ["gclid", "gbraid", "wbraid"].some((key) => query.has(key)),
    };

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "No fue posible enviar la solicitud. Intente nuevamente."
        );
      }

      form.reset();
      setSent(true);

      try {
        const gtag = (window as Window & {
          gtag?: (...args: unknown[]) => void;
        }).gtag;

        gtag?.("event", "generate_lead", {
          method: "website_form",
          service_type: payload.service,
        });
        gtag?.("event", "conversion", {
          send_to: "AW-17733887884/wM2TCPbGnMcbEIzPlohC",
        });
      } catch {
        // Un fallo de medición no debe afectar una solicitud ya enviada.
      }

      window.setTimeout(() => {
        document
          .getElementById("cotizacion")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible enviar la solicitud. Intente nuevamente."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="cotizacion" className={styles.quote}>
      <div className={styles.container}>
        <div className={styles.quoteGrid}>
          <Reveal
            direction="left"
            duration={1000}
            className={styles.quoteInfo}
          >
            <span className={styles.eyebrowLight}>
              SOLICITE UNA COTIZACIÓN
            </span>

            <h2>{isCorporateQuote ? "Cotice el traslado de su personal" : "Cuéntenos qué traslado necesita"}</h2>

            <p>
              {isCorporateQuote
                ? "Comparta su ruta, número de pasajeros y horarios. Revisaremos los antecedentes para coordinar una alternativa acorde con su operación."
                : "Díganos cómo contactarlo y qué recorrido necesita. Si todavía no conoce la fecha u horario, podremos coordinarlos después."}
            </p>

            <div className={styles.quoteFacts}>
              <div>
                <span>01</span>
                <p>Origen y destino</p>
              </div>
              <div>
                <span>02</span>
                <p>Fecha y horario</p>
              </div>
              <div>
                <span>03</span>
                <p>Cantidad de pasajeros</p>
              </div>
              <div>
                <span>04</span>
                <p>Tipo de servicio</p>
              </div>
            </div>

            <div className={styles.directContact}>
              <span>¿PREFIERE CONTACTO DIRECTO?</span>
              <TrackedWhatsAppLink
                href={isCorporateQuote
                  ? "https://wa.me/56926273108?text=Hola%2C%20necesito%20cotizar%20transporte%20de%20personal%20para%20una%20empresa%20desde%20Calama."
                  : "https://wa.me/56926273108?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20transporte."}
                target="_blank"
                rel="noopener noreferrer"
                location="services_quote"
              >
                +56 9 2627 3108
              </TrackedWhatsAppLink>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={130}
            duration={1000}
            className={styles.formWrap}
          >
            {!sent ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formHeading}>
                  <span>COTIZACIÓN</span>
                  <h3>{isCorporateQuote ? "Datos para cotizar" : "Datos del traslado"}</h3>
                </div>

                <div className={styles.twoColumns}>
                  <label>
                    <span>Nombre y apellido *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Nombre completo"
                    />
                  </label>

                  <label>
                    <span>Empresa o institución</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Opcional"
                    />
                  </label>
                </div>

                <div className={styles.twoColumns}>
                  <label>
                    <span>Teléfono *</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+56 9..."
                    />
                  </label>

                  <label>
                    <span>Correo electrónico (opcional)</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="correo@empresa.cl"
                    />
                  </label>
                </div>

                <label>
                  <span>Tipo de servicio *</span>
                  <select ref={serviceRef} name="service" required defaultValue={initialService}>
                    <option value="" disabled>
                      Seleccione una alternativa
                    </option>
                    <option value="corporativo">Corporativo / empresa</option>
                    <option value="mineria">Traslado a faena minera</option>
                    <option value="turismo">Turismo</option>
                    <option value="especial">Viaje especial</option>
                    <option value="encomienda">Encomienda</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                <div className={styles.twoColumns}>
                  <label>
                    <span>Origen *</span>
                    <input
                      type="text"
                      name="origin"
                      required
                      placeholder="Ej. Calama"
                    />
                  </label>

                  <label>
                    <span>Destino *</span>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder={isCorporateQuote ? "Ej. faena o punto de destino" : "Ej. San Pedro de Atacama"}
                    />
                  </label>
                </div>

                <div className={styles.threeColumns}>
                  <label>
                    <span>Fecha (si la conoce)</span>
                    <input type="date" name="date" />
                  </label>

                  <label>
                    <span>Horario (opcional)</span>
                    <input type="time" name="time" />
                  </label>

                  <label>
                    <span>Pasajeros (si corresponde)</span>
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      placeholder="1"
                    />
                  </label>
                </div>

                <label>
                  <span>Información adicional</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={isCorporateQuote
                      ? "Indique turnos, frecuencia, puntos de recogida u otra condición del traslado."
                      : "Indique condiciones especiales, recorrido, equipaje u otra información relevante."}
                  />
                </label>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={sending}
                >
                  {sending
                    ? "Enviando solicitud..."
                    : "Enviar solicitud de cotización"}
                </button>

                {error ? (
                  <p role="alert" className={styles.formError}>
                    {error}
                  </p>
                ) : null}

                <small className={styles.formNote}>
                  Los datos serán utilizados exclusivamente para responder esta
                  solicitud.
                </small>
              </form>
            ) : (
              <div className={styles.success}>
                <span className={styles.successNumber}>✓</span>
                <span className={styles.successLabel}>
                  SOLICITUD REGISTRADA
                </span>
                <h3>Hemos recibido su solicitud</h3>
                <p>
                  Nos comunicaremos con usted para revisar los detalles del
                  servicio.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setError("");
                  }}
                >
                  Realizar otra cotización
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
