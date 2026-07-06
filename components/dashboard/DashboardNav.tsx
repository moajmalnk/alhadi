"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: {
  href: string;
  label: string;
  icon: string;
  exact?: boolean;
}[] = [
  { href: "/dashboard", label: "Home", icon: "lucide:home", exact: true },
  { href: "/dashboard/leads", label: "Leads", icon: "lucide:users" },
  { href: "/dashboard/blogs", label: "Blogs", icon: "lucide:newspaper" },
];

type DashboardNavProps = {
  variant?: "sidebar" | "bottom";
};

export default function DashboardNav({
  variant = "sidebar",
}: DashboardNavProps) {
  const pathname = usePathname();
  const isBottom = variant === "bottom";

  return (
    <nav
      className={
        isBottom
          ? "dash-bottom-nav-items"
          : "dash-nav nav flex-column gap-1"
      }
      aria-label="Dashboard"
    >
      {navItems.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isBottom
                ? `dash-bottom-nav-link${isActive ? " is-active" : ""}`
                : `nav-link ${isActive ? "bg-dark text-white" : "text-dark"}`
            }
          >
            {isBottom && (
              <iconify-icon
                icon={item.icon}
                className="dash-bottom-nav-icon"
                aria-hidden="true"
              />
            )}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
