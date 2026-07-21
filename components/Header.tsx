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
      <div className="top-utility-strip d-none d-lg-flex w-100">
        <div className="container d-flex align-items-center justify-content-between h-100">
          {/* Left spacer to match logo width */}
          <div style={{ width: "var(--logo-width)", flexShrink: 0 }}></div>
          
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
        <div className="container d-flex align-items-center">
          
          {/* Logo (normal flow — same left edge as hero content) */}
          <div className="navbar-logo-wrap d-none d-lg-flex align-items-center flex-shrink-0">
            <Link href="/">
              <img
                src="/assets/images/logos/alhadi-business-logo.svg"
                alt="Al Hadi Business Setup"
                className="desktop-logo"
              />
            </Link>
          </div>
          
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
                data-bs-toggle="collapse"
                data-bs-target="#headerNavbar"
                aria-controls="headerNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <iconify-icon
                  icon="solar:hamburger-menu-line-duotone"
                  className="menu-icon fs-8 text-white"
                ></iconify-icon>
              </button>
            </div>

            {/* Center: Links */}
            <div
              ref={mobileNavRef}
              className="collapse navbar-collapse justify-content-center"
              id="headerNavbar"
              onClick={handleMobileNavClick}
            >
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

      <style jsx global>{`
        :root {
          --top-bar-height: 48px;
          --logo-width: 260px;
        }

        .top-utility-strip {
          height: var(--top-bar-height);
          background-color: #FFFFFF;
        }
        
        .contact-strip {
          background-color: #FFFFFF;
        }

        .main-navigation {
          background-color: #FFFFFF;
          transition: box-shadow 0.3s ease;
        }

        .main-navigation.is-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
        }

        .navbar-logo-wrap {
          width: var(--logo-width);
          padding: 0;
          margin: 0;
        }

        .desktop-logo {
          width: 170px;
          height: auto;
          filter: invert(1);
          transition: width 0.3s ease;
        }

        .main-navigation.is-scrolled .desktop-logo {
          width: 140px;
        }

        .hover-gold:hover, .hover-gold:focus {
          color: var(--brand-gold-base) !important;
        }

        .transition-colors {
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .mobile-logo {
          filter: none;
        }

        @media (max-width: 991.98px) {
          .main-navigation {
            background-color: var(--bs-primary);
          }
          .main-navigation.is-scrolled {
            background-color: var(--bs-primary);
          }
          
          .toggle-menu {
            background-color: var(--brand-gold-base) !important;
          }
          
          .custom-nav-link {
            color: #ffffff !important;
          }
        }

        .demo-btn {
          background-color: var(--brand-gold-base) !important;
          border-color: var(--brand-gold-base) !important;
          color: #fff !important;
        }
        .demo-btn:hover,
        .demo-btn:focus-visible {
          background-color: var(--brand-gold-light) !important;
          border-color: var(--brand-gold-light) !important;
          color: #fff !important;
          transform: translateY(-1px);
        }
        
        .custom-nav-link {
          color: #4A4A4A !important;
          font-size: 15px !important;
          font-weight: 600 !important;
          letter-spacing: 0.2px;
          position: relative;
          text-transform: capitalize;
          transition: color 0.3s ease;
          padding-bottom: 6px;
          background: transparent;
          border: 0;
        }
        
        .custom-nav-link:hover, .custom-nav-link.active {
          color: var(--bs-dark) !important;
          font-weight: 700 !important;
        }
        
        .custom-nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--bs-dark);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .custom-nav-link.active::after,
        .custom-nav-link:hover::after {
          width: 100%;
        }

        /* Mega Menu CSS kept same */
        .services-mega-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          width: 720px;
          transform: translateX(-50%) translateY(8px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        }
        .services-mega-menu::before {
          content: "";
          position: absolute;
          top: -12px;
          left: 0;
          right: 0;
          height: 12px;
        }
        .services-mega-menu.is-open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .services-mega-panel {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .services-mega-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          padding: 16px;
        }
        .services-mega-link {
          display: block;
          padding: 12px 16px;
          color: var(--bs-primary) !important;
          text-decoration: none !important;
          font-size: 13.5px;
          font-weight: 500;
          line-height: 1.4;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .services-mega-link:hover,
        .services-mega-link.is-active {
          color: var(--brand-gold-base) !important;
          background: #FAFAFA;
        }
        .services-mega-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          background: #FAFAFA;
        }
        .services-mega-all {
          display: block;
          padding: 16px;
          color: var(--bs-primary) !important;
          text-decoration: none !important;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }
        .services-mega-all:hover,
        .services-mega-all.is-active {
          color: var(--brand-gold-base) !important;
        }
        .services-mobile-menu {
          display: grid;
          gap: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          margin-top: 0;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.25s ease;
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
          color: rgba(255, 255, 255, 0.85) !important;
          text-decoration: none !important;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .services-mobile-item:hover,
        .services-mobile-item.is-active {
          color: var(--brand-gold-light) !important;
        }
        .services-mobile-all {
          color: #fff !important;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 13px;
        }
      `}</style>
    </header>
  );
}
