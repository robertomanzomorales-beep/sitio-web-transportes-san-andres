"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./ServicesQuote.module.css";

export default function ServicesQuote() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

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

            <h2>Cuéntenos qué traslado necesita</h2>

            <p>
              Complete los antecedentes principales del recorrido. Revisaremos
              la información para preparar una respuesta de acuerdo con el
              servicio solicitado.
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
              <a
                href="https://wa.me/56926273108?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20transporte."
                target="_blank"
                rel="noopener noreferrer"
              >
                +56 9 2627 3108
              </a>
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
                  <h3>Datos del traslado</h3>
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
                    <span>Correo electrónico *</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="correo@empresa.cl"
                    />
                  </label>
                </div>

                <label>
                  <span>Tipo de servicio *</span>
                  <select name="service" required defaultValue="">
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
                      placeholder="Ej. San Pedro de Atacama"
                    />
                  </label>
                </div>

                <div className={styles.threeColumns}>
                  <label>
                    <span>Fecha *</span>
                    <input type="date" name="date" required />
                  </label>

                  <label>
                    <span>Horario *</span>
                    <input type="time" name="time" required />
                  </label>

                  <label>
                    <span>Pasajeros *</span>
                    <input
                      type="number"
                      name="passengers"
                      required
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
                    placeholder="Indique condiciones especiales, recorrido, equipaje u otra información relevante."
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
