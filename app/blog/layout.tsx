import type { Metadata } from "next";
import { seoHead } from "@/lib/seo/seoHead";

export const metadata: Metadata = seoHead({
  title: "Blog",
  description:
    "UAE business setup insights from Al Hadi Business Services — company formation, free zones, visas, VAT, trademarks, and compliance in Dubai.",
  path: "/blog",
  keywords: [
    "UAE business blog",
    "Dubai company formation tips",
    "Al Hadi Business Services news",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
