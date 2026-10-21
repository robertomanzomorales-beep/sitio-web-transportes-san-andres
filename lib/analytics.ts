type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

/** Opening WhatsApp shows contact intent, not a submitted enquiry or sale. */
export function trackWhatsAppClick(location: string, service?: string) {
  try {
    (window as GtagWindow).gtag?.("event", "whatsapp_click", {
      contact_location: location,
      ...(service ? { service_type: service } : {}),
    });
  } catch {
    // Contact remains available if analytics is blocked.
  }
}
