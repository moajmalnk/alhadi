import { notFound } from "next/navigation";
import {
  ServiceCta,
  ServiceGroupedOfferings,
  ServiceHero,
  ServiceIntro,
  ServiceRelated,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function TranslationPage() {
  const service = getServiceBySlug("translation");
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
      <ServiceGroupedOfferings
        title={service.offeringsTitle || "Our Services"}
        groups={service.groupedOfferings!}
      />
      <ServiceRelated items={service.related!} />
      <ServiceCta title={service.title} />
    </div>
  );
}
