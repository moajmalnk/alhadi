import { getServiceBySlug } from "@/data/services";
import { seoHead } from "@/lib/seo/seoHead";
import {
  serviceBreadcrumbJsonLd,
  serviceJsonLd,
  type JsonLdObject,
} from "@/lib/seo/jsonLd";

const serviceKeywords: Record<string, string[]> = {
  "business-setup": [
    "UAE business setup",
    "Dubai company formation",
    "trade license Dubai",
    "Mainland company UAE",
  ],
  "free-zone": [
    "UAE free zone license",
    "Dubai free zone company",
    "free zone business setup",
  ],
  "pro-document-clearing": [
    "PRO services Dubai",
    "document clearing UAE",
    "government approvals Dubai",
  ],
  "family-visa": [
    "UAE family visa",
    "Dubai residence visa",
    "family sponsorship UAE",
  ],
  "vat-registration": [
    "VAT registration UAE",
    "Dubai VAT services",
    "corporate tax UAE",
  ],
  "trademark-registration": [
    "trademark registration Dubai",
    "UAE brand registration",
    "intellectual property UAE",
  ],
  "golden-visa": [
    "UAE Golden Visa",
    "Dubai Golden Visa",
    "long-term residency UAE",
  ],
  translation: [
    "translation services Dubai",
    "legal translation UAE",
    "certified translation Dubai",
  ],
  "virtual-ejari": [
    "virtual Ejari Dubai",
    "Ejari services UAE",
    "virtual office Dubai",
  ],
};

export function serviceSeoMetadata(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return seoHead({
    title: service.title,
    description: service.intro[0] ?? service.subtitle,
    path: `/services/${service.slug}`,
    keywords: serviceKeywords[slug] ?? [service.title, "Dubai", "UAE"],
    image: service.image,
  });
}

export function serviceSeoJsonLd(slug: string): JsonLdObject[] {
  const service = getServiceBySlug(slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return [serviceJsonLd(service), serviceBreadcrumbJsonLd(service)];
}
