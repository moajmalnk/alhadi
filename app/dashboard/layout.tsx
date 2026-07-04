import Link from "next/link";
import DashboardNav from "@/components/dashboard/DashboardNav";
import LogoutButton from "@/components/dashboard/LogoutButton";
import "./dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-shell min-vh-100 d-flex bg-light-gray">
      <aside className="dash-sidebar bg-white border-end d-flex flex-column">
        <Link href="/dashboard" className="d-block">
          <img
            src="/assets/images/logos/alhadi-business-logo.svg"
            alt="Al Hadi Business Setup"
            className="img-fluid dash-logo"
            style={{ filter: "brightness(0)" }}
          />
        </Link>
        <p className="dash-label mb-2">Menu</p>
        <DashboardNav />
        <div className="mt-auto pt-3">
          <Link href="/" className="text-muted fw-medium text-decoration-none">
            ← Back to site
          </Link>
        </div>
      </aside>

      <div className="flex-grow-1 d-flex flex-column min-vh-100 min-w-0">
        <header className="dash-header bg-white border-bottom d-flex align-items-center justify-content-between">
          <h2 className="dash-header-title text-dark">Dashboard</h2>
          <LogoutButton />
        </header>
        <main className="dash-main flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
