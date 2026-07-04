import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteShell from "../components/SiteShell";
import InitScripts from "../components/InitScripts";

export const metadata: Metadata = {
  title: "Al Hadi Business Setup",
  description: "Al Hadi Business Setup - UAE Trade License Services in Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/logos/alhadi-business-logo.svg" />
        <link rel="stylesheet" href="/assets/libs/owl.carousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/libs/aos-master/dist/aos.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        <InitScripts />
        <SiteShell>{children}</SiteShell>
        
        <Script src="/assets/libs/jquery/dist/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/libs/owl.carousel/dist/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/libs/aos-master/dist/aos.js" strategy="beforeInteractive" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
