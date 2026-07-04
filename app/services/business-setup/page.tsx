import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function BusinessSetupPage() {
  const service = getServiceBySlug("business-setup");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
