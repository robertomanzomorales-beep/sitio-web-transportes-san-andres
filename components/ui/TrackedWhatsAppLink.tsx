"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  location: string;
  children: ReactNode;
};

export default function TrackedWhatsAppLink({
  href,
  location,
  children,
  onClick,
  ...props
}: Props) {
  return (
    <a
      href={href}
      onClick={(event) => {
        trackWhatsAppClick(location);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
