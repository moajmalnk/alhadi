import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import {
  ServiceBenefits,
  ServiceCta,
  ServiceDocuments,
  ServiceHero,
  ServiceIntro,
  ServiceOfferings,
  ServiceWhatIs,
  ServiceWhoCanApply,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";
import {
  serviceSeoJsonLd,
  serviceSeoMetadata,
} from "@/lib/seo/serviceSeo";

const SLUG = "vat-registration";

export const metadata = serviceSeoMetadata(SLUG);

export default function VatRegistrationPage() {
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
        <ServiceOfferings
          title={service.offeringsTitle || "Our Services"}
          intro={service.offeringsIntro}
          items={service.offerings!}
        />
        <ServiceWhatIs {...service.whatIs!} />
        <ServiceWhoCanApply {...service.whoCanApply!} />
        <ServiceBenefits {...service.benefits!} />
        <ServiceDocuments {...service.documents!} />
        <ServiceCta title={service.title} />
      </div>
    </>
  );
}
