"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceDetails } from "../data/services";

const serviceMenuLabels: Record<string, string> = {
  "business-setup": "Business Setup",
  "free-zone": "Free Zone License",
  "pro-document-clearing": "PRO & Document Clearing",
  "family-visa": "Family Visa",
  "vat-registration": "Corporate Tax & VAT",
  "trademark-registration": "Trademark Registration",
  "golden-visa": "Golden Visa",
  translation: "Translation Services",
  "virtual-ejari": "Virtual Ejari",
};

const menuServices = serviceDetails.map((service) => ({
  slug: service.slug,
  href: `/services/${service.slug}`,
  label: serviceMenuLabels[service.slug] ?? service.title,
}));

type BootstrapCollapse = {
  getOrCreateInstance: (element: Element) => { hide: () => void };
};

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const showSolidHeader = isMobile || isScrolled;

  const closeMobileMenu = () => {
    const el = mobileNavRef.current;
    if (!el) return;

    const Collapse = (
      window as Window & { bootstrap?: { Collapse: BootstrapCollapse } }
    ).bootstrap?.Collapse;
    if (Collapse) {
      Collapse.getOrCreateInstance(el).hide();
      return;
    }

    el.classList.remove("show");
  };

  const handleMobileNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a[href]")) {
      closeMobileMenu();
      setMobileServicesOpen(false);
    }
  };

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 991.98px)");
    const updateViewport = () => setIsMobile(mobileQuery.matches);
    const updateScroll = () => setIsScrolled(window.scrollY >= 60);

    updateViewport();
    updateScroll();

    mobileQuery.addEventListener("change", updateViewport);
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      mobileQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header
      className={`header ${showSolidHeader ? "fixed-header" : ""} border-4 border-primary border-top position-fixed start-0 top-0 w-100 z-3`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg py-0 header-wrapper d-flex align-items-center justify-content-between">
          <div className="logo me-auto flex-shrink-0">
            <Link href="/" className="logo-white">
              <img
                src="/assets/images/logos/alhadi-business-logo.svg"
                alt="Al Hadi Business Setup"
                className="header-logo-img"
                width={160}
                height={81}
              />
            </Link>
            <Link href="/" className="logo-dark">
              <img
                src="/assets/images/logos/alhadi-business-logo.svg"
                alt="Al Hadi Business Setup"
                className="header-logo-img"
                width={160}
                height={81}
              />
            </Link>
          </div>

          <button
            className="navbar-toggler d-lg-none btn btn-secondary toggle-menu round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle ms-3 border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <iconify-icon
              icon="solar:hamburger-menu-line-duotone"
              className="menu-icon fs-8 text-dark"
            ></iconify-icon>
          </button>

          <div
            ref={mobileNavRef}
            className="collapse navbar-collapse"
            id="headerNavbar"
            onClick={handleMobileNavClick}
          >
            <ul className="navbar-nav header-menu ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-2 gap-lg-4 align-items-lg-center mt-4 mt-lg-0">
              <li className="nav-item header-item">
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "true" : undefined}
                  className={`nav-link custom-nav-link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item header-item">
                <Link
                  href="/about-us"
                  aria-current={pathname === "/about-us" ? "true" : undefined}
                  className={`nav-link custom-nav-link ${pathname === "/about-us" ? "active" : ""}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item header-item">
                <Link
                  href="/blog"
                  aria-current={pathname === "/blog" ? "true" : undefined}
                  className={`nav-link custom-nav-link ${pathname === "/blog" ? "active" : ""}`}
                >
                  Blog
                </Link>
              </li>

              <li
                className={`nav-item header-item services-nav-item ${servicesOpen ? "is-open" : ""}`}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className={`nav-link custom-nav-link services-trigger d-none d-lg-inline-flex align-items-center gap-1 ${servicesActive || servicesOpen ? "active" : ""}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="servicesMegaMenu"
                  onClick={() => setServicesOpen((open) => !open)}
                  onFocus={openServices}
                >
                  Services
                </button>

                <button
                  type="button"
                  className={`nav-link custom-nav-link services-trigger d-lg-none d-inline-flex align-items-center gap-1 ${servicesActive || mobileServicesOpen ? "active" : ""}`}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="servicesMobileMenu"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                </button>

                {/* Desktop mega menu panel */}
                <div
                  id="servicesMegaMenu"
                  className={`services-mega-menu d-none d-lg-block ${servicesOpen ? "is-open" : ""}`}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <div className="services-mega-panel">
                    <div className="services-mega-grid">
                      {menuServices.map((service) => {
                        const isActive = pathname === service.href;
                        return (
                          <Link
                            key={service.slug}
                            href={service.href}
                            className={`services-mega-link ${isActive ? "is-active" : ""}`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="services-mega-footer">
                      <Link
                        href="/services"
                        className={`services-mega-all ${pathname === "/services" ? "is-active" : ""}`}
                        onClick={() => setServicesOpen(false)}
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile services list */}
                <div
                  id="servicesMobileMenu"
                  className={`services-mobile-menu d-lg-none ${mobileServicesOpen ? "is-open" : ""}`}
                >
                  <Link
                    href="/services"
                    className={`services-mobile-item services-mobile-all ${pathname === "/services" ? "is-active" : ""}`}
                    onClick={() => setMobileServicesOpen(false)}
                  >
                    View all services
                  </Link>
                  {menuServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className={`services-mobile-item ${pathname === service.href ? "is-active" : ""}`}
                      onClick={() => setMobileServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="nav-item header-item">
                <Link
                  href="/contact"
                  aria-current={pathname === "/contact" ? "true" : undefined}
                  className={`nav-link custom-nav-link ${pathname === "/contact" ? "active" : ""}`}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item d-lg-none mt-3 pb-3">
                <Link
                  href="/contact"
                  className="btn btn-secondary demo-btn fs-6 px-3 py-2 w-100 hstack justify-content-center rounded-pill fw-medium border-0"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3 ms-lg-4">
              <Link
                href="/contact"
                className="btn btn-secondary demo-btn px-4 py-2 rounded-pill fw-medium border-0"
                style={{ fontSize: "14px" }}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        .header .logo {
          flex-shrink: 0;
        }

        .header-logo-img {
          display: block;
          width: 160px;
          height: auto;
        }

        @media (max-width: 991.98px) {
          .header {
            background-color: var(--bs-primary);
            padding-top: calc(1.5rem + env(safe-area-inset-top, 0px));
            padding-bottom: 1rem;
          }

          .header.fixed-header {
            padding-top: calc(1.5rem + env(safe-area-inset-top, 0px));
            padding-bottom: 1rem;
          }

          .header-logo-img {
            width: 130px;
          }

          .header .logo .logo-dark {
            display: block;
          }

          .header .logo .logo-white {
            display: none;
          }

          .header .toggle-menu {
            background-color: var(--bs-dark) !important;
          }

          .header .toggle-menu .menu-icon {
            color: var(--bs-white) !important;
          }
        }

        .demo-btn {
          background-color: var(--sunset-orange) !important;
          border-color: var(--sunset-orange) !important;
          color: #fff !important;
        }
        .demo-btn:hover,
        .demo-btn:focus-visible {
          background-color: var(--sunset-golden) !important;
          border-color: var(--sunset-golden) !important;
          color: #fff !important;
        }
        .custom-nav-link {
          color: #ffffff !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          letter-spacing: 0.5px;
          position: relative;
          text-transform: uppercase;
          transition: color 0.3s ease;
          padding-bottom: 4px;
          background: transparent;
          border: 0;
        }
        .custom-nav-link:hover {
          color: #ffffff !important;
        }
        .custom-nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--bs-secondary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .custom-nav-link.active::after,
        .custom-nav-link:hover::after {
          width: 100%;
        }
        .custom-nav-link.active {
          color: #ffffff !important;
        }

        .services-nav-item {
          position: relative;
        }

        .services-trigger {
          cursor: pointer;
        }

        .services-mega-menu {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          width: 640px;
          transform: translateX(-50%) translateY(6px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: 50;
          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s;
        }

        .services-mega-menu::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 0;
          right: 0;
          height: 18px;
        }

        .services-mega-menu.is-open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .services-mega-panel {
          background: var(--bs-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
        }

        .services-mega-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          padding: 8px;
        }

        .services-mega-link {
          display: block;
          padding: 12px 14px;
          color: #ffffff !important;
          text-decoration: none !important;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: 0.01em;
          border: 1px solid transparent;
          transition:
            color 0.2s ease,
            background-color 0.2s ease;
        }

        .services-mega-link:hover,
        .services-mega-link.is-active {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.06);
        }

        .services-mega-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .services-mega-all {
          display: block;
          padding: 12px 14px;
          color: #ffffff !important;
          text-decoration: none !important;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition:
            color 0.2s ease,
            background-color 0.2s ease;
        }

        .services-mega-all:hover,
        .services-mega-all:focus,
        .services-mega-all.is-active {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.06);
        }

        .services-mobile-menu {
          display: grid;
          gap: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          margin-top: 0;
          transition:
            max-height 0.3s ease,
            opacity 0.25s ease,
            margin-top 0.25s ease;
        }

        .services-mobile-menu.is-open {
          max-height: 520px;
          opacity: 1;
          margin-top: 8px;
        }

        .services-mobile-item {
          display: block;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.82) !important;
          text-decoration: none !important;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .services-mobile-item:hover,
        .services-mobile-item.is-active {
          color: #fff !important;
        }

        .services-mobile-all {
          color: #fff !important;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 12px;
        }
      `}</style>
    </header>
  );
}
