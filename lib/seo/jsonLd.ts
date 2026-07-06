import type { BlogPost } from "@/lib/blogs";
import type { ServiceDetail } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";

export type JsonLdObject = Record<string, unknown>;

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    sameAs: [...siteConfig.social],
    priceRange: "$$",
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: ServiceDetail): JsonLdObject {
  const description = service.intro[0] ?? service.subtitle;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    serviceType: service.title,
  };
}

export function serviceBreadcrumbJsonLd(service: ServiceDetail): JsonLdObject {
  return breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);
}

export function blogPostingJsonLd(post: BlogPost): JsonLdObject {
  const published = post.publishedAt ?? post.createdAt;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? absoluteUrl(post.coverImage) : absoluteUrl(siteConfig.defaultOgImage),
    datePublished: published,
    dateModified: post.updatedAt || published,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPath),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags?.join(", "),
    articleSection: post.category || undefined,
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** FAQs shown on the home page accordion. */
export const homeFaqs = [
  {
    question: "What services does AL HADI BUSINESS SERVICES offer?",
    answer:
      "We provide complete business setup solutions, including Mainland, Free Zone, and Offshore company formation, trade license issuance, PRO & document clearing services, visa processing, VAT & Corporate Tax services, and trademark registration.",
  },
  {
    question: "Can you assist with UAE Family Visas?",
    answer:
      "Yes, we provide comprehensive UAE Family Visa services for residents, investors, and business owners. We handle everything from document preparation to application submission, Emirates ID processing, and residence visa issuance.",
  },
  {
    question: "What are the benefits of setting up a Free Zone company?",
    answer:
      "Establishing a Free Zone company offers 100% foreign ownership, full repatriation of capital and profits, fast company registration, flexible office solutions, and investor/employee visa eligibility in a tax-friendly environment.",
  },
  {
    question: "Do I need to register for Corporate Tax and VAT?",
    answer:
      "Depending on your business's taxable supplies and structure, VAT or Corporate Tax registration may be mandatory. Our expert tax professionals provide full assistance with Corporate Tax Registration, VAT Registration, filing, and advisory services.",
  },
  {
    question: "Who is eligible for a UAE Golden Visa?",
    answer:
      "The UAE Golden Visa is available to eligible property investors, business investors, entrepreneurs, skilled professionals, exceptional talents, and outstanding students. It offers long-term, renewable residency without requiring a local sponsor.",
  },
] as const;
