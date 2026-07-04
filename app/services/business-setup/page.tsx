import { notFound } from "next/navigation";
import {
  ServiceCta,
  ServiceDetailedOfferings,
  ServiceHero,
  ServiceIntro,
  ServiceRelated,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function BusinessSetupPage() {
  const service = getServiceBySlug("business-setup");
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
      <ServiceDetailedOfferings
        title={service.offeringsTitle || "Our Services"}
        offerings={service.detailedOfferings!}
      />
      <ServiceRelated items={service.related!} />
      <ServiceCta title={service.title} />
    </div>
  );
}
