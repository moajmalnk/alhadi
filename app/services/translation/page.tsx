import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function TranslationPage() {
  const service = getServiceBySlug("translation");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
