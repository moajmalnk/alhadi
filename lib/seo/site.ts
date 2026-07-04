export const siteConfig = {
  name: "Al Hadi Business Setup",
  legalName: "Al Hadi Business Services",
  shortName: "Al Hadi",
  description:
    "Al Hadi Business Setup — expert UAE trade license, company formation, PRO, visa, VAT, and trademark services in Dubai.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.alhadibusiness.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_AE",
  language: "en",
  phone: "+97144312227",
  phoneDisplay: "+971-4 431 2227",
  emails: ["info@alhadibusiness.com", "alhadidxb@gmail.com"] as const,
  address: {
    streetAddress:
      "Shop No: 3, Al Ovaisi Bldg, Ground floor, Near Wholesale Plaza Building, Deira, Murshid Bazar",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    // Deira / Murshid Bazar area
    latitude: 25.2697,
    longitude: 55.3095,
  },
  social: [
    "https://www.facebook.com/Alhadidxb/",
    "https://www.instagram.com/alhadi_businessservices/",
    "https://www.linkedin.com/in/al-hadi-business-services-1085b0230",
  ] as const,
  logoPath: "/assets/images/logos/alhadi-business-logo.svg",
  faviconPath: "/assets/images/logos/AL-HADI-ICON.jpeg",
  defaultOgImage: "/assets/images/services/Company-Formation.jpg",
  titleTemplate: "%s | Al Hadi Business Setup",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
