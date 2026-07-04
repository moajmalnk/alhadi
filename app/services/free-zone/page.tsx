import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function FreeZonePage() {
  const service = getServiceBySlug("free-zone");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
