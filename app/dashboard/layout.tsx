import Link from "next/link";
import DashboardNav from "@/components/dashboard/DashboardNav";
import LogoutButton from "@/components/dashboard/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-vh-100 d-flex bg-light-gray">
      <aside
        className="bg-white border-end d-flex flex-column p-4"
        style={{ width: "260px", minHeight: "100vh" }}
      >
        <Link href="/dashboard" className="mb-8 d-block">
          <img
            src="/assets/images/logos/alhadi-business-logo.svg"
            alt="Al Hadi Business Setup"
            className="img-fluid"
            style={{ maxHeight: "40px", filter: "brightness(0)" }}
          />
        </Link>
        <p className="text-uppercase text-muted fw-medium small mb-3">
          Menu
        </p>
        <DashboardNav />
        <div className="mt-auto pt-4">
          <Link href="/" className="text-muted small fw-medium">
            ← Back to site
          </Link>
        </div>
      </aside>

      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <header className="bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between">
          <h2 className="h5 mb-0 fw-bold text-dark">Dashboard</h2>
          <LogoutButton />
        </header>
        <main className="flex-grow-1 p-4 p-lg-6">{children}</main>
      </div>
    </div>
  );
}
