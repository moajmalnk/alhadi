import type { Metadata } from "next";
import Link from "next/link";
import DashboardNav from "@/components/dashboard/DashboardNav";
import LogoutButton from "@/components/dashboard/LogoutButton";
import { seoHead } from "@/lib/seo/seoHead";
import "./dashboard.css";

export const metadata: Metadata = seoHead({
  title: "Dashboard",
  description: "Al Hadi Business Setup admin dashboard.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-shell min-vh-100 d-flex bg-light-gray">
      <aside className="dash-sidebar bg-white border-end d-none d-lg-flex flex-column">
        <Link href="/dashboard" className="d-block">
          <img
            src="/assets/images/logos/alhadi-business-logo.svg"
            alt="Al Hadi Business Setup"
            className="img-fluid dash-logo"
            style={{ filter: "brightness(0)" }}
          />
        </Link>
        <p className="dash-label mb-2">Menu</p>
        <DashboardNav variant="sidebar" />
        <div className="mt-auto pt-3">
          <Link href="/" className="text-muted fw-medium text-decoration-none">
            ← Back to site
          </Link>
        </div>
      </aside>

      <div className="dash-body flex-grow-1 d-flex flex-column min-vh-100 min-w-0">
        <header className="dash-header bg-white border-bottom d-flex align-items-center justify-content-between">
          <div className="dash-header-start d-flex align-items-center min-w-0">
            <Link href="/dashboard" className="dash-header-logo d-lg-none">
              <img
                src="/assets/images/logos/alhadi-business-logo.svg"
                alt="Al Hadi Business Setup"
                className="img-fluid"
                style={{ filter: "brightness(0)" }}
              />
            </Link>
            <h2 className="dash-header-title text-dark d-none d-lg-block">
              Dashboard
            </h2>
          </div>
          <div className="dash-header-actions d-flex align-items-center gap-3">
            <Link
              href="/"
              className="dash-header-site-link text-muted fw-medium text-decoration-none d-lg-none"
            >
              ← Site
            </Link>
            <LogoutButton />
          </div>
        </header>
        <main className="dash-main flex-grow-1">{children}</main>
      </div>

      <div className="dash-bottom-nav bg-white border-top d-lg-none">
        <DashboardNav variant="bottom" />
      </div>
    </div>
  );
}
