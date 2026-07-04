import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import {
  ServiceCta,
  ServiceGroupedOfferings,
  ServiceHero,
  ServiceIntro,
  ServiceRelated,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";
import {
  serviceSeoJsonLd,
  serviceSeoMetadata,
} from "@/lib/seo/serviceSeo";

const SLUG = "translation";

export const metadata = serviceSeoMetadata(SLUG);

export default function TranslationPage() {
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
        <ServiceGroupedOfferings
          title={service.offeringsTitle || "Our Services"}
          groups={service.groupedOfferings!}
        />
        <ServiceRelated items={service.related!} />
        <ServiceCta title={service.title} />
      </div>
    </>
  );
}
