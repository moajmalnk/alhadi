import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteShell from "../components/SiteShell";
import InitScripts from "../components/InitScripts";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";
import { seoHead } from "@/lib/seo/seoHead";
import { siteConfig } from "@/lib/seo/site";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = seoHead({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "UAE business setup",
    "Dubai company formation",
    "trade license Dubai",
    "PRO services UAE",
    "Al Hadi Business Setup",
  ],
  isRoot: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="/assets/libs/owl.carousel/dist/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/aos-master/dist/aos.css"
        />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body suppressHydrationWarning>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <InitScripts />
        <SiteShell>{children}</SiteShell>
        <WhatsAppButton />

        <Script
          src="/assets/libs/jquery/dist/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/libs/owl.carousel/dist/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/libs/aos-master/dist/aos.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
