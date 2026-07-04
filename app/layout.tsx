import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InitScripts from "../components/InitScripts";

export const metadata: Metadata = {
  title: "Studiova",
  description: "Studiova - Free Bootstrap Business Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/assets/images/logos/favicon.svg" />
        <link rel="stylesheet" href="/assets/libs/owl.carousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/libs/aos-master/dist/aos.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        <InitScripts />
        <Header />
        {children}
        <Footer />
        
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
