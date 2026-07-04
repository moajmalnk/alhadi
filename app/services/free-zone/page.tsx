import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
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
import {
  serviceSeoJsonLd,
  serviceSeoMetadata,
} from "@/lib/seo/serviceSeo";

const SLUG = "free-zone";

export const metadata = serviceSeoMetadata(SLUG);

export default function FreeZonePage() {
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
    </>
  );
}
