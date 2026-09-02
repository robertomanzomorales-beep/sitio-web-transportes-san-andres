"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type {
  FormEvent,
  MouseEvent as ReactMouseEvent,
} from "react";

import styles from "./Header.module.css";

const navigationItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3C8.85 3 3 8.72 3 15.76c0 2.47.73 4.88 2.12 6.94L3 29l6.52-2.05a13.2 13.2 0 0 0 6.52 1.72C23.23 28.67 29 22.94 29 15.9 29 8.8 23.23 3 16.04 3Zm0 23.52a11.02 11.02 0 0 1-5.62-1.52l-.4-.24-3.87 1.22 1.26-3.75-.26-.4a10.6 10.6 0 0 1-1.74-5.83c0-5.9 4.78-10.73 10.66-10.73 5.86 0 10.62 4.82 10.62 10.73 0 5.86-4.78 10.52-10.65 10.52Zm5.85-7.87c-.32-.16-1.9-.92-2.2-1.03-.29-.1-.5-.16-.7.16-.21.32-.82 1.03-1 1.24-.19.22-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.56a9.55 9.55 0 0 1-1.78-2.2c-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.32-.25-.61-.51-.53-.7-.54h-.6c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.67.76.24 1.44.2 1.98.12.6-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navigationStartedFromHeader = useRef(false);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen && !quoteOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, quoteOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setQuoteOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Cuando la navegación fue iniciada desde el menú,
   * esperamos que la nueva página esté renderizada y
   * luego desplazamos hasta el inicio exacto.
   */
  useEffect(() => {
    if (!navigationStartedFromHeader.current) return;

    navigationStartedFromHeader.current = false;

    let secondFrame = 0;

    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openQuote() {
    setMenuOpen(false);
    setQuoteOpen(true);
  }

  function closeQuote() {
    setQuoteOpen(false);
  }

  function handleNavigation(
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const modifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (modifiedClick) return;

    event.preventDefault();
    closeMenu();

    if (pathname === href) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    navigationStartedFromHeader.current = true;

    router.push(href, {
      scroll: false,
    });
  }

  function handleWhatsAppQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const origin = String(formData.get("origin") ?? "").trim();
    const destination = String(formData.get("destination") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const passengers = String(formData.get("passengers") ?? "").trim();
    const detail = String(formData.get("detail") ?? "").trim();

    const message = [
      "Hola, quisiera cotizar un traslado con Transportes San Andrés.",
      "",
      `Nombre: ${name}`,
      `Origen: ${origin}`,
      `Destino: ${destination}`,
      date ? `Fecha: ${date}` : "",
      passengers ? `Cantidad de pasajeros: ${passengers}` : "",
      detail ? `Información adicional: ${detail}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/56926273108?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    form.reset();
    setQuoteOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.fixedHeader}
          data-scrolled={scrolled}
          data-menu-open={menuOpen}
        >
          <div className={styles.topBar}>
            <div className={styles.topBarContent}>
              <a
                href="mailto:admsandres@gmail.com"
                className={styles.emailLink}
              >
                <Image
                  src="/images/icono-correo.webp"
                  alt=""
                  width={18}
                  height={18}
                  className={styles.emailIcon}
                />

                <span>admsandres@gmail.com</span>
              </a>
            </div>
          </div>

          <div className={styles.mainBar}>
            <div className={styles.mainBarContent}>
              <Link
                href="/"
                className={styles.logoLink}
                onClick={(event) => handleNavigation(event, "/")}
                aria-label="Transportes San Andrés - Inicio"
              >
                <Image
                  src="/logo/logo-transportes-san-andres.webp"
                  alt="Transportes San Andrés"
                  width={260}
                  height={105}
                  priority
                  className={styles.logo}
                />
              </Link>

              <nav
                className={styles.desktopNavigation}
                aria-label="Navegación principal"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(event, item.href)
                    }
                    aria-current={
                      pathname === item.href ? "page" : undefined
                    }
                    className={
                      pathname === item.href
                        ? styles.activeLink
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                className={styles.whatsappButton}
                onClick={openQuote}
              >
                <span
                  className={styles.whatsappIcon}
                  aria-hidden="true"
                >
                  <WhatsAppIcon />
                </span>

                <span>Cotizar por WhatsApp</span>
              </button>

              <button
                type="button"
                className={styles.menuButton}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              >
                <span className={styles.menuButtonText}>
                  {menuOpen ? "Cerrar" : "Menú"}
                </span>

                <span className={styles.menuIcon} aria-hidden="true">
                  <span className={styles.menuLineTop} />
                  <span className={styles.menuLineMiddle} />
                  <span className={styles.menuLineBottom} />
                </span>
              </button>
            </div>
          </div>

          <div
            className={styles.mobileMenu}
            data-open={menuOpen}
            aria-hidden={!menuOpen}
          >
            <span
              className={styles.menuDecoration}
              aria-hidden="true"
            />

            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileMenuHeading}>
                <span />
                <p>Navegación</p>
              </div>

              <nav
                className={styles.mobileNavigation}
                aria-label="Navegación móvil"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(event, item.href)
                    }
                    tabIndex={menuOpen ? 0 : -1}
                    aria-current={
                      pathname === item.href ? "page" : undefined
                    }
                    className={
                      pathname === item.href
                        ? styles.mobileActiveLink
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className={styles.mobileMenuFooter}>
                <button
                  type="button"
                  className={styles.mobileWhatsappButton}
                  onClick={openQuote}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span
                    className={styles.whatsappIcon}
                    aria-hidden="true"
                  >
                    <WhatsAppIcon />
                  </span>

                  <span>Cotizar por WhatsApp</span>
                </button>

                <a
                  href="mailto:admsandres@gmail.com"
                  className={styles.mobileEmail}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  admsandres@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${styles.modalBackdrop} ${
          quoteOpen ? styles.modalBackdropOpen : ""
        }`}
        aria-hidden={!quoteOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeQuote();
          }
        }}
      >
        <div
          className={`${styles.quoteModal} ${
            quoteOpen ? styles.quoteModalOpen : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <div className={styles.modalHeader}>
            <div>
              <span className={styles.modalEyebrow}>
                COTIZACIÓN RÁPIDA
              </span>

              <h2 id="quote-modal-title">Cuéntenos su recorrido</h2>

              <p>
                Complete los datos principales y continuaremos la cotización
                directamente por WhatsApp.
              </p>
            </div>

            <button
              type="button"
              className={styles.modalClose}
              onClick={closeQuote}
              aria-label="Cerrar cotizador"
            >
              ×
            </button>
          </div>

          <form
            className={styles.quoteForm}
            onSubmit={handleWhatsAppQuote}
          >
            <label>
              <span>Nombre *</span>

              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Nombre y apellido"
              />
            </label>

            <div className={styles.formColumns}>
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
                  placeholder="Ej. San Pedro"
                />
              </label>
            </div>

            <div className={styles.formColumns}>
              <label>
                <span>Fecha</span>

                <input type="date" name="date" />
              </label>

              <label>
                <span>Pasajeros</span>

                <input
                  type="number"
                  name="passengers"
                  min="1"
                  placeholder="Ej. 4"
                />
              </label>
            </div>

            <label>
              <span>Otro detalle</span>

              <textarea
                name="detail"
                rows={2}
                placeholder="Horario, equipaje, requerimiento especial u otra información."
              />
            </label>

            <div className={styles.modalActions}>
              <button
                type="submit"
                className={styles.modalSubmit}
              >
                Continuar por WhatsApp
              </button>

              <small className={styles.modalNote}>
                Se abrirá WhatsApp con los datos de esta cotización.
              </small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}