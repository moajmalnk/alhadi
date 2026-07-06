import NotFoundContent from "../../components/NotFoundContent";
import { seoHead } from "@/lib/seo/seoHead";

export const metadata = seoHead({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function Custom404() {
  return <NotFoundContent />;
}
