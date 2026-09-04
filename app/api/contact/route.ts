import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  origin?: string;
  destination?: string;
  date?: string;
  time?: string;
  passengers?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function serviceLabel(value: string) {
  const labels: Record<string, string> = {
    corporativo: "Corporativo / empresa",
    mineria: "Traslado a faena minera",
    turismo: "Turismo",
    especial: "Viaje especial",
    encomienda: "Encomienda",
    otro: "Otro",
  };

  return labels[value] ?? value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const company = clean(body.company);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const service = clean(body.service);
    const origin = clean(body.origin);
    const destination = clean(body.destination);
    const date = clean(body.date);
    const time = clean(body.time);
    const passengers = clean(body.passengers);
    const message = clean(body.message);

    if (
      !name ||
      !phone ||
      !email ||
      !service ||
      !origin ||
      !destination ||
      !date ||
      !time ||
      !passengers
    ) {
      return NextResponse.json(
        {
          ok: false,
          message: "Complete todos los campos obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Ingrese un correo electrónico válido.",
        },
        {
          status: 400,
        }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const mailTo =
      process.env.MAIL_TO || "contacto@transportesanandres.cl";

    const mailFromName =
      process.env.MAIL_FROM_NAME || "Transportes San Andrés";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("Faltan variables SMTP en el servidor.");

      return NextResponse.json(
        {
          ok: false,
          message:
            "El formulario todavía no tiene configurado el servicio de correo.",
        },
        {
          status: 500,
        }
      );
    }

    if (!Number.isFinite(smtpPort)) {
      console.error("El puerto SMTP configurado no es válido.");

      return NextResponse.json(
        {
          ok: false,
          message: "La configuración del correo no es válida.",
        },
        {
          status: 500,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company || "No informado"),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      service: escapeHtml(serviceLabel(service)),
      origin: escapeHtml(origin),
      destination: escapeHtml(destination),
      date: escapeHtml(date),
      time: escapeHtml(time),
      passengers: escapeHtml(passengers),
      message: escapeHtml(
        message || "Sin información adicional"
      ).replaceAll("\n", "<br />"),
    };

    /*
     * CORREO INTERNO PARA TRANSPORTES SAN ANDRÉS
     */
    await transporter.sendMail({
      from: `"${mailFromName}" <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `Nueva solicitud de cotización - ${name}`,
      text: [
        "Nueva solicitud de cotización",
        "",
        `Nombre: ${name}`,
        `Empresa o institución: ${company || "No informado"}`,
        `Teléfono: ${phone}`,
        `Correo: ${email}`,
        `Servicio: ${serviceLabel(service)}`,
        `Origen: ${origin}`,
        `Destino: ${destination}`,
        `Fecha: ${date}`,
        `Horario: ${time}`,
        `Pasajeros: ${passengers}`,
        "",
        "Información adicional:",
        message || "Sin información adicional",
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#10243a;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="padding:26px 30px;background:#061d35;color:#ffffff;">
              <div style="font-size:12px;font-weight:700;letter-spacing:.12em;color:#ffd400;">
                TRANSPORTES SAN ANDRÉS
              </div>

              <h1 style="margin:10px 0 0;font-size:24px;line-height:1.2;">
                Nueva solicitud de cotización
              </h1>
            </div>

            <div style="padding:30px;">
              <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
                <tr>
                  <td style="padding:9px 0;color:#657382;width:190px;">
                    Nombre
                  </td>
                  <td style="padding:9px 0;font-weight:700;">
                    ${safe.name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Empresa / institución
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.company}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Teléfono
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Correo
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Tipo de servicio
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.service}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Origen
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.origin}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Destino
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.destination}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Fecha
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.date}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Horario
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.time}
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#657382;">
                    Pasajeros
                  </td>
                  <td style="padding:9px 0;">
                    ${safe.passengers}
                  </td>
                </tr>
              </table>

              <div style="margin-top:24px;padding-top:22px;border-top:1px solid #e5e7eb;">
                <div style="margin-bottom:8px;font-size:12px;font-weight:700;letter-spacing:.08em;color:#e21b16;">
                  INFORMACIÓN ADICIONAL
                </div>

                <div style="font-size:14px;line-height:1.7;color:#334155;">
                  ${safe.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    /*
     * RESPUESTA AUTOMÁTICA PARA EL CLIENTE
     */
    await transporter.sendMail({
      from: `"${mailFromName}" <${smtpUser}>`,
      to: email,
      replyTo: mailTo,
      subject: "Recibimos su solicitud de cotización",
      text: [
        `Hola ${name},`,
        "",
        "Hemos recibido su solicitud de cotización.",
        "Revisaremos los antecedentes del traslado y nos comunicaremos con usted para coordinar los detalles.",
        "",
        `Servicio: ${serviceLabel(service)}`,
        `Origen: ${origin}`,
        `Destino: ${destination}`,
        `Fecha: ${date}`,
        `Horario: ${time}`,
        `Pasajeros: ${passengers}`,
        "",
        "Transportes San Andrés SpA",
        "Calama - Región de Antofagasta",
        "+56 9 2627 3108",
        "contacto@transportesanandres.cl",
      ].join("\n"),
      html: `
        <div style="margin:0;padding:32px;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#10243a;">
          <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="height:5px;background:#e21b16;"></div>

            <div style="padding:32px;">
              <div style="font-size:12px;font-weight:700;letter-spacing:.12em;color:#e21b16;">
                TRANSPORTES SAN ANDRÉS
              </div>

              <h1 style="margin:12px 0 18px;font-size:26px;line-height:1.2;color:#061d35;">
                Recibimos su solicitud
              </h1>

              <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#475569;">
                Hola ${safe.name}. Hemos recibido los antecedentes de su traslado y los revisaremos para coordinar una alternativa de acuerdo con lo solicitado.
              </p>

              <div style="margin:24px 0;padding:20px;background:#f8fafc;border-left:3px solid #ffd400;">
                <div style="font-size:14px;line-height:1.8;color:#334155;">
                  <strong>Servicio:</strong> ${safe.service}<br />
                  <strong>Origen:</strong> ${safe.origin}<br />
                  <strong>Destino:</strong> ${safe.destination}<br />
                  <strong>Fecha:</strong> ${safe.date}<br />
                  <strong>Horario:</strong> ${safe.time}<br />
                  <strong>Pasajeros:</strong> ${safe.passengers}
                </div>
              </div>

              <p style="margin:0;font-size:14px;line-height:1.7;color:#64748b;">
                Si necesita complementar la información, puede responder directamente este correo o comunicarse al
                <strong>+56 9 2627 3108</strong>.
              </p>

              <div style="margin-top:28px;padding-top:22px;border-top:1px solid #e5e7eb;">
                <div style="font-size:14px;font-weight:700;color:#061d35;">
                  Transportes San Andrés SpA
                </div>

                <div style="margin-top:5px;font-size:13px;line-height:1.6;color:#64748b;">
                  Calama · Región de Antofagasta<br />
                  contacto@transportesanandres.cl<br />
                  +56 9 2627 3108
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Error en /api/contact:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "No fue posible enviar la solicitud en este momento. Intente nuevamente.",
      },
      {
        status: 500,
      }
    );
  }
}