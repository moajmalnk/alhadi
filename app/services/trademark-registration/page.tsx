import { notFound } from "next/navigation";
import ServiceDetailView from "../../../components/services/ServiceDetailView";
import { getServiceBySlug } from "../../../data/services";

export default function TrademarkRegistrationPage() {
  const service = getServiceBySlug("trademark-registration");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
