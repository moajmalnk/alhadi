import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import {
  ServiceCta,
  ServiceDetailedOfferings,
  ServiceHero,
  ServiceIntro,
  ServiceRelated,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";
import {
  serviceSeoJsonLd,
  serviceSeoMetadata,
} from "@/lib/seo/serviceSeo";

const SLUG = "business-setup";

export const metadata = serviceSeoMetadata(SLUG);

export default function BusinessSetupPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSeoJsonLd(SLUG)} />
      <div className="page-wrapper overflow-hidden">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.image}
      />
      <ServiceIntro
        subtitle={service.subtitle}
        heroText={service.heroText}
        intro={service.intro}
      />
      <ServiceDetailedOfferings
        title={service.offeringsTitle || "Our Services"}
        offerings={service.detailedOfferings!}
      />
      <ServiceRelated items={service.related!} />
      <ServiceCta title={service.title} />
    </div>
    </>
  );
}
