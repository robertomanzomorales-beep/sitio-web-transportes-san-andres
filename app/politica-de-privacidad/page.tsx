import type { Metadata } from "next";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

import styles from "./PoliticaPrivacidad.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidad | Transportes San Andrés",
  description:
    "Conozca cómo Transportes San Andrés SpA recopila, utiliza y protege los datos personales proporcionados a través de su sitio web.",
};

const sections = [
  {
    number: "01",
    title: "Responsable del tratamiento",
    content: (
      <>
        <p>
          Los datos personales proporcionados a través de este sitio web serán
          tratados por <strong>Transportes San Andrés SpA</strong>, con base
          operacional en Calama, Región de Antofagasta.
        </p>

        <div className={styles.contactData}>
          <div>
            <span>Correo electrónico</span>
            <a href="mailto:admsandres@gmail.com">
              admsandres@gmail.com
            </a>
          </div>

          <div>
            <span>Teléfono / WhatsApp</span>
            <a href="tel:+56926273108">
              +56 9 2627 3108
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "02",
    title: "Datos que podemos solicitar",
    content: (
      <>
        <p>
          Cuando una persona solicita una cotización o se comunica mediante los
          canales disponibles en este sitio, podremos solicitar datos
          necesarios para comprender y gestionar correctamente su
          requerimiento.
        </p>

        <div className={styles.dataGrid}>
          <span>Nombre y apellido</span>
          <span>Empresa o institución</span>
          <span>Teléfono</span>
          <span>Correo electrónico</span>
          <span>Tipo de servicio</span>
          <span>Origen y destino</span>
          <span>Fecha y horario</span>
          <span>Cantidad de pasajeros</span>
          <span>Información adicional del traslado</span>
        </div>
      </>
    ),
  },
  {
    number: "03",
    title: "Finalidad del tratamiento",
    content: (
      <>
        <p>
          Los datos recopilados mediante el sitio web serán utilizados
          principalmente para gestionar solicitudes relacionadas con los
          servicios de Transportes San Andrés SpA.
        </p>

        <ul>
          <li>Responder consultas y solicitudes de información.</li>

          <li>
            Preparar, evaluar y gestionar solicitudes de cotización.
          </li>

          <li>
            Coordinar recorridos, horarios, destinos y requerimientos de
            transporte.
          </li>

          <li>
            Contactar al solicitante para complementar antecedentes necesarios
            para el servicio.
          </li>

          <li>
            Mantener comunicaciones relacionadas directamente con una solicitud
            realizada por el usuario.
          </li>
        </ul>

        <p>
          La información proporcionada no será utilizada para finalidades
          incompatibles con aquellas informadas al momento de su recopilación.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Tratamiento y resguardo de la información",
    content: (
      <>
        <p>
          Transportes San Andrés SpA adoptará medidas razonables de carácter
          técnico y organizativo destinadas a proteger la información personal
          frente a accesos no autorizados, pérdida, alteración, divulgación o
          uso indebido.
        </p>

        <p>
          El acceso a los datos estará limitado a quienes requieran conocerlos
          para gestionar la solicitud, prestación o coordinación del servicio
          correspondiente.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Comunicación de datos a terceros",
    content: (
      <>
        <p>
          Transportes San Andrés SpA no comercializa los datos personales
          proporcionados por los usuarios.
        </p>

        <p>
          La información podrá ser tratada mediante proveedores tecnológicos
          necesarios para el funcionamiento del sitio, correo electrónico,
          alojamiento web u otros servicios de infraestructura, únicamente en
          la medida necesaria para prestar dichas funcionalidades.
        </p>

        <p>
          También podrá comunicarse información cuando exista una obligación
          legal o un requerimiento válido emitido por una autoridad competente.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Conservación de los datos",
    content: (
      <>
        <p>
          Los datos serán conservados durante el tiempo razonablemente
          necesario para atender la solicitud, gestionar el servicio y cumplir
          las obligaciones legales o contractuales que pudieran corresponder.
        </p>

        <p>
          Cuando la información deje de ser necesaria para las finalidades que
          justificaron su tratamiento, podrá ser eliminada o anonimizada de
          acuerdo con los procedimientos aplicables.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Derechos de las personas",
    content: (
      <>
        <p>
          El titular de los datos podrá solicitar información respecto del
          tratamiento de sus datos personales y ejercer los derechos que le
          reconozca la legislación chilena vigente.
        </p>

        <p>
          Dependiendo de las condiciones establecidas por la normativa
          aplicable, estos derechos pueden comprender solicitudes de acceso,
          rectificación, supresión, oposición y otros derechos reconocidos por
          la legislación sobre protección de datos personales.
        </p>

        <div className={styles.rightsBox}>
          <span>CANAL PARA SOLICITUDES SOBRE DATOS PERSONALES</span>

          <a href="mailto:admsandres@gmail.com">
            admsandres@gmail.com
          </a>
        </div>
      </>
    ),
  },
  {
    number: "08",
    title: "Información proporcionada por terceros",
    content: (
      <>
        <p>
          Si una persona entrega datos personales correspondientes a terceros
          para coordinar un traslado o servicio, declara contar con una
          autorización o fundamento suficiente para proporcionar dicha
          información.
        </p>

        <p>
          Se recomienda entregar únicamente los datos estrictamente necesarios
          para la correcta coordinación del servicio solicitado.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Actualizaciones de esta política",
    content: (
      <>
        <p>
          Esta Política de Privacidad podrá ser modificada cuando resulte
          necesario debido a cambios en los servicios, procesos internos,
          tecnologías utilizadas o normativa aplicable.
        </p>

        <p>
          La versión vigente será aquella publicada en esta misma página.
        </p>
      </>
    ),
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      {/* ==================================================
          HERO
      ================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroDecorationOne} />
        <div className={styles.heroDecorationTwo} />

        <div className={styles.heroContainer}>
          <Reveal direction="left" duration={1000}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                INFORMACIÓN Y TRANSPARENCIA
              </span>

              <h1>Política de Privacidad</h1>

              <p>
                Información sobre la recopilación, utilización y protección de
                los datos personales proporcionados a Transportes San Andrés
                SpA mediante este sitio web.
              </p>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
            duration={1000}
            className={styles.heroMeta}
          >
            <span>ÚLTIMA ACTUALIZACIÓN</span>

            <strong>Agosto 2026</strong>

            <div className={styles.heroMetaLine} />

            <p>
              Transportes San Andrés SpA
              <br />
              Calama · Región de Antofagasta
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <Reveal direction="up" duration={950}>
            <div className={styles.introGrid}>
              <span className={styles.introNumber}>00</span>

              <div>
                <span className={styles.sectionLabel}>
                  SOBRE ESTA POLÍTICA
                </span>

                <h2>
                  Sus datos se utilizan para gestionar el servicio que usted
                  solicita
                </h2>
              </div>

              <p>
                Al completar un formulario o comunicarse con Transportes San
                Andrés SpA, puede ser necesario proporcionar ciertos datos
                personales. Esta política explica qué información se solicita,
                para qué se utiliza y cómo puede comunicarse con nosotros
                respecto de ella.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          CONTENIDO
      ================================================== */}

      <section className={styles.policy}>
        <div className={styles.container}>
          <div className={styles.policyLayout}>
            <aside className={styles.aside}>
              <div className={styles.asideInner}>
                <span>POLÍTICA DE PRIVACIDAD</span>

                <strong>
                  Transportes
                  <br />
                  San Andrés SpA
                </strong>

                <div className={styles.asideLine} />

                <p>
                  Documento informativo sobre el tratamiento de datos
                  personales realizado mediante este sitio web.
                </p>

                <Link
                  href="/servicios#cotizacion"
                  className={styles.asideLink}
                >
                  Solicitar cotización
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>

            <div className={styles.sections}>
              {sections.map((section, index) => (
                <Reveal
                  key={section.number}
                  direction="up"
                  delay={(index % 3) * 80}
                  duration={850}
                  className={styles.policySection}
                >
                  <div className={styles.sectionNumber}>
                    {section.number}
                  </div>

                  <div className={styles.sectionContent}>
                    <h2>{section.title}</h2>

                    <div className={styles.sectionText}>
                      {section.content}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MARCO NORMATIVO
      ================================================== */}

      <section className={styles.legal}>
        <div className={styles.container}>
          <Reveal direction="left" duration={950}>
            <div className={styles.legalGrid}>
              <div>
                <span className={styles.sectionLabel}>
                  MARCO NORMATIVO
                </span>

                <h2>Protección de datos personales en Chile</h2>
              </div>

              <div className={styles.legalText}>
                <p>
                  Esta política se aplica considerando la normativa chilena
                  vigente sobre protección de datos personales, especialmente
                  la Ley N.º 19.628 sobre protección de la vida privada y sus
                  modificaciones.
                </p>

                <p>
                  La Ley N.º 21.719, que introduce modificaciones al régimen de
                  protección de datos personales y crea la Agencia de
                  Protección de Datos Personales, contempla su entrada en
                  vigencia a partir del 1 de diciembre de 2026.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <Reveal direction="left" duration={950}>
              <span className={styles.contactEyebrow}>
                PRIVACIDAD Y DATOS PERSONALES
              </span>

              <h2>¿Tiene una consulta sobre sus datos?</h2>

              <p>
                Puede comunicarse directamente con Transportes San Andrés SpA
                para realizar una consulta relacionada con esta Política de
                Privacidad.
              </p>
            </Reveal>

            <Reveal
              direction="right"
              delay={120}
              duration={950}
              className={styles.contactActions}
            >
              <a
                href="mailto:admsandres@gmail.com"
                className={styles.primaryButton}
              >
                Enviar consulta
              </a>

              <Link
                href="/"
                className={styles.secondaryButton}
              >
                Volver al inicio
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}