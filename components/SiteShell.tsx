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

  if (isDashboardShell) {
    return <>{children}</>;
  }

  return (
    <LeadModalProvider>
      <Header />
      {children}
      <Footer />
    </LeadModalProvider>
  );
}
