"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: { href: string; label: string; exact?: boolean }[] = [
  { href: "/dashboard", label: "Home", exact: true },
  { href: "/dashboard/leads", label: "Leads" },
  { href: "/dashboard/blogs", label: "Blogs" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="nav flex-column gap-1">
      {navItems.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link rounded px-3 py-2 fw-medium ${
              isActive
                ? "bg-dark text-white"
                : "text-dark"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
