"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import LeadModalProvider from "./LeadModalProvider";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardShell =
    pathname.startsWith("/dashboard") || pathname === "/sign-in";
  const is404Page = pathname === "/404";

  if (isDashboardShell) {
    return <>{children}</>;
  }

  return (
    <LeadModalProvider>
      {!is404Page && <Header />}
      {children}
      <Footer />
    </LeadModalProvider>
  );
}
