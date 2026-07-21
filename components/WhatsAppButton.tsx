"use client";

import { siteConfig } from "@/lib/seo/site";

export default function WhatsAppButton() {
  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "");
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float d-flex align-items-center justify-content-center shadow-lg"
      aria-label="Chat with us on WhatsApp"
    >
      <iconify-icon icon="logos:whatsapp-icon" width="36" height="36"></iconify-icon>
    </a>
  );
}
