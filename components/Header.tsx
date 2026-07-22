"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceDetails } from "../data/services";
import { siteConfig } from "@/lib/seo/site";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMobileNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a[href]")) {
      closeMobileMenu();
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
    const updateScroll = () => setIsScrolled(window.scrollY >= 40);

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
    <header className="header w-100 z-3 transition-all" style={{ display: "contents" }}>
      {/* Top Utility Strip (Desktop Only) */}
      <div className="top-utility-strip d-none d-lg-flex w-100 position-relative">
        <div className="container d-flex align-items-center justify-content-between h-100 position-relative">
          {/* Left spacer to match logo width */}
          <div className="logo-spacer"></div>
          
          {/* Right: contact info */}
          <div className="d-flex align-items-center gap-4 ms-auto">
            <div className="social-icons d-flex align-items-center gap-3 me-2">
              <Link href={siteConfig.social[0]} target="_blank" className="text-secondary hover-gold transition-colors d-flex align-items-center">
                <iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
              </Link>
              <Link href={siteConfig.social[1]} target="_blank" className="text-secondary hover-gold transition-colors d-flex align-items-center">
                <iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
              </Link>
              <Link href={siteConfig.social[2]} target="_blank" className="text-secondary hover-gold transition-colors d-flex align-items-center">
                <iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
              </Link>
              <Link href="#" className="text-secondary hover-gold transition-colors d-flex align-items-center">
                <iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
              </Link>
            </div>
            
            <a href={`mailto:${siteConfig.emails[0]}`} className="d-flex align-items-center gap-2 text-decoration-none text-secondary hover-gold transition-colors" style={{ fontSize: "13px" }}>
              <iconify-icon icon="lucide:mail" width="16" className="text-primary"></iconify-icon>
              {siteConfig.emails[0]}
            </a>
            <span className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: "13px" }}>
              <iconify-icon icon="lucide:clock" width="16" className="text-primary"></iconify-icon>
              Open hours: Mon - Sat 8:00 am - 8:00 pm
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className={`main-navigation w-100 ${isScrolled ? "is-scrolled shadow-sm" : ""}`} style={{ position: 'sticky', top: 0, zIndex: 1030 }}>
        <div className="container d-flex align-items-center position-relative">
          
          {/* Asymmetrical Logo Block (Desktop) */}
          <div className="logo-block d-none d-lg-flex align-items-center justify-content-center px-3 bg-white shadow-sm">
            <Link href="/" className="d-flex align-items-center justify-content-center">
              <img
                src="/assets/images/logos/alhadi-business-logo.svg"
                alt="Al Hadi Business Setup"
                className="desktop-logo"
              />
            </Link>
          </div>

          <div className="logo-spacer d-none d-lg-block"></div>
          
          <nav className="navbar navbar-expand-lg flex-grow-1 py-2 py-lg-3 header-wrapper d-flex align-items-center justify-content-between">
            {/* Mobile Logo & Toggle */}
            <div className="d-flex d-lg-none align-items-center justify-content-between w-100">
              <Link href="/">
                <img
                  src="/assets/images/logos/alhadi-business-logo.svg"
                  alt="Al Hadi Business Setup"
                  className="mobile-logo"
                  width={140}
                />
              </Link>
              <button
                className="navbar-toggler btn btn-secondary toggle-menu round-45 p-2 d-flex align-items-center justify-content-center rounded-circle border-0 shadow-none"
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation"
              >
                <iconify-icon
                  icon="solar:hamburger-menu-line-duotone"
                  className="menu-icon fs-8 text-white"
                ></iconify-icon>
              </button>
            </div>

            {/* Center: Links (Fullscreen on Mobile) */}
            <div
              className={`mobile-menu-overlay ${isMobileMenuOpen ? "is-open" : ""} d-lg-flex flex-lg-grow-1 justify-content-center`}
              id="headerNavbar"
              onClick={handleMobileNavClick}
            >
              {/* Mobile overlay header with close button */}
              <div className="mobile-menu-header d-flex d-lg-none align-items-center justify-content-between p-3 border-bottom">
                <img
                  src="/assets/images/logos/alhadi-business-logo.svg"
                  alt="Al Hadi Business Setup"
                  className="mobile-logo-inside"
                  width={140}
                />
                <button
                  className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center border-0 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ width: "40px", height: "40px" }}
                >
                  <iconify-icon icon="lucide:x" width="20"></iconify-icon>
                </button>
              </div>

              <div className="mobile-menu-body p-4 p-lg-0">
              <ul className="navbar-nav header-menu mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-2 gap-lg-4 align-items-lg-center mt-4 mt-lg-0">
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
                
                {/* Services Mega Menu */}
                <li
                  className={`nav-item header-item services-nav-item ${servicesOpen ? "is-open" : ""}`}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <Link
                    href="/services"
                    className={`nav-link custom-nav-link services-trigger d-none d-lg-inline-flex align-items-center gap-1 ${servicesActive || servicesOpen ? "active" : ""}`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-controls="servicesMegaMenu"
                    onClick={() => setServicesOpen(false)}
                    onFocus={openServices}
                  >
                    Services
                  </Link>

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
                    className={`services-mega-menu shadow-lg d-none d-lg-block ${servicesOpen ? "is-open" : ""}`}
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
                    href="/blog"
                    aria-current={pathname === "/blog" ? "true" : undefined}
                    className={`nav-link custom-nav-link ${pathname === "/blog" ? "active" : ""}`}
                  >
                    Blogs
                  </Link>
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
                    className="btn btn-secondary demo-btn fs-6 px-3 py-2 w-100 hstack justify-content-center rounded-pill fw-medium border-0 shadow-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="d-none d-lg-flex align-items-center gap-4 flex-shrink-0 ms-4 ps-4 border-start">
              <Link
                href="/contact"
                className="btn btn-secondary demo-btn px-4 py-2 rounded-pill fw-bold border-0 shadow-sm"
                style={{ fontSize: "14px", letterSpacing: "0.5px" }}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>

    </header>
  );
}
