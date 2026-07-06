import type { Metadata } from "next";
import { seoHead } from "@/lib/seo/seoHead";

export const metadata: Metadata = seoHead({
  title: "Contact Us",
  description:
    "Contact Al Hadi Business Services in Dubai for business setup, trade licenses, PRO services, visas, and compliance. Call +971-4 431 2227 or email info@alhadibusiness.com.",
  path: "/contact",
  keywords: [
    "contact Al Hadi Dubai",
    "business setup consultation UAE",
    "PRO services contact",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
