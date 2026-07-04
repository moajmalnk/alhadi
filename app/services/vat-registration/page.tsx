import { notFound } from "next/navigation";
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

export default function VatRegistrationPage() {
  const service = getServiceBySlug("vat-registration");
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
      <ServiceWhatIs {...service.whatIs!} />
      <ServiceWhoCanApply {...service.whoCanApply!} />
      <ServiceBenefits {...service.benefits!} />
      <ServiceDocuments {...service.documents!} />
      <ServiceCta title={service.title} />
    </div>
  );
}
