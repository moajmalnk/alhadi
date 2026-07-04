import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function ProDocumentClearingPage() {
  const service = getServiceBySlug("pro-document-clearing");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
