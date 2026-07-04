import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function GoldenVisaPage() {
  const service = getServiceBySlug("golden-visa");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
