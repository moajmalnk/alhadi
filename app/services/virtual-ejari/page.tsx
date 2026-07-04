import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function VirtualEjariPage() {
  const service = getServiceBySlug("virtual-ejari");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
