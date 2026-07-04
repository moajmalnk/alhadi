import { notFound } from "next/navigation";
import {
  ServiceCta,
  ServiceHero,
  ServiceIntro,
  ServiceOfferings,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function ProDocumentClearingPage() {
  const service = getServiceBySlug("pro-document-clearing");
  if (!service) notFound();

  return (
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
      <ServiceCta title={service.title} />
    </div>
  );
}
