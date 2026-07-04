import { notFound } from "next/navigation";
import {
  ServiceBenefits,
  ServiceCta,
  ServiceDetailedOfferings,
  ServiceDocuments,
  ServiceExtraList,
  ServiceHero,
  ServiceIntro,
  ServiceRelated,
  ServiceWhyChoose,
} from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function FreeZonePage() {
  const service = getServiceBySlug("free-zone");
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
      <ServiceBenefits {...service.benefits!} />
      <ServiceDocuments {...service.documents!} />
      {service.extraLists!.map((list, listIndex) => (
        <ServiceExtraList
          key={list.title}
          list={list}
          altBackground={listIndex % 2 === 0}
        />
      ))}
      <ServiceWhyChoose
        title={service.whyChoose!.title}
        items={service.whyChoose!.items}
      />
      <ServiceRelated items={service.related!} />
      <ServiceCta title={service.title} />
    </div>
  );
}
