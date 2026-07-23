"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

interface AlHadiService {
  id: string;
  slug: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  tags: string[];
}

const AL_HADI_SERVICES: AlHadiService[] = [
  {
    id: "business-setup",
    slug: "business-setup",
    shortTitle: "Business Setup",
    title: "Business Setup & Company Formation",
    subtitle: "Mainland, Free Zone & Offshore Company Registration",
    description:
      "Al Hadi Business Services provides complete trade license solutions for entrepreneurs, startups, SMEs, and international investors in the UAE. Whether establishing a Mainland, Free Zone, or Offshore entity, our experienced consultants ensure a smooth, fast 48-hour approval process.",
    image: "/assets/images/services/business_setup_service.png",
    icon: "lucide:building-2",
    tags: ["100% Legal Ownership", "48-Hour Approval", "Corporate Banking", "DED Compliance"],
  },
  {
    id: "free-zone",
    slug: "free-zone",
    shortTitle: "Free Zone License",
    title: "UAE Free Zone License Services",
    subtitle: "Free Zone Company Formation Across All Emirates",
    description:
      "Start your business in leading UAE Free Zones with 100% foreign ownership, tax exemption, and fast registration. We assist in choosing the ideal Free Zone based on your business activity, budget, flexi-desk office, and visa requirements.",
    image: "/assets/images/services/business_setup_card.png",
    icon: "lucide:briefcase",
    tags: ["100% Foreign Ownership", "Tax-Friendly Setup", "Flexi-Desk Office", "Fast Licensing"],
  },
  {
    id: "pro-document-clearing",
    slug: "pro-document-clearing",
    shortTitle: "PRO & Document Clearing",
    title: "PRO & Document Clearing Services",
    subtitle: "Government Department Approvals & Document Processing",
    description:
      "Our professional PRO team handles all government liaison including MOHRE labour quotas, GDRFA immigration clearances, Emirates ID typing, medical fitness scheduling, MOFA document attestation, and company establishment card renewals.",
    image: "/assets/images/services/pro_services_new.png",
    icon: "lucide:file-text",
    tags: ["MOHRE Labour Cards", "GDRFA Immigration", "Emirates ID", "MOFA Attestation"],
  },
  {
    id: "family-visa",
    slug: "family-visa",
    shortTitle: "Family Visa",
    title: "Family Visa & UAE Residency Services",
    subtitle: "Spouse, Children, Parents & Dependent Visa Sponsorship",
    description:
      "We provide complete UAE residency visa assistance for business owners, investors, and employees sponsoring their families. From entry permits and status changes to medical tests, Emirates ID, and visa stamping, we manage every detail.",
    image: "/assets/images/services/visa_services_new.png",
    icon: "lucide:users",
    tags: ["Spouse & Children Visa", "Parent Sponsorship", "Express Processing", "Hassle-Free"],
  },
  {
    id: "vat-registration",
    slug: "vat-registration",
    shortTitle: "Corporate Tax & VAT",
    title: "Corporate Tax & VAT Services",
    subtitle: "FTA Registration, Filing & Tax Advisory Services",
    description:
      "Stay 100% compliant with UAE tax regulations. We handle Federal Tax Authority (FTA) Corporate Tax Registration (9%), quarterly VAT return filing, TRN certificates, tax audit representation, and strategic tax planning.",
    image: "/assets/images/services/tax_vat_service_new.png",
    icon: "lucide:calculator",
    tags: ["9% Corporate Tax", "VAT TRN Registration", "Quarterly FTA Filing", "Tax Audit"],
  },
  {
    id: "trademark-registration",
    slug: "trademark-registration",
    shortTitle: "Trademark Registration",
    title: "Trademark & Intellectual Property Protection",
    subtitle: "MOEC Brand Search, Registration & IP Defense",
    description:
      "Protect your business identity, brand name, and logo across the UAE and GCC region. We conduct official trademark searches, submit Ministry of Economy (MOEC) registrations, and handle IP enforcement.",
    image: "/assets/images/services/trademark_service_new.png",
    icon: "lucide:shield",
    tags: ["MOEC Brand Registration", "Logo & Name Protection", "IP Defense", "GCC Coverage"],
  },
  {
    id: "golden-visa",
    slug: "golden-visa",
    shortTitle: "Golden Visa",
    title: "UAE 10-Year Golden Visa Services",
    subtitle: "Long-Term Residency for Investors, Entrepreneurs & Talents",
    description:
      "Obtain a 10-year self-sponsored UAE Golden Visa. Our specialists assist real estate investors (AED 2M+), business owners, senior executives, doctors, engineers, and specialized talents with VIP medical & ID processing.",
    image: "/assets/images/services/golden_visa_service_new.png",
    icon: "lucide:crown",
    tags: ["10-Year Self Sponsorship", "No Local Sponsor", "Family & Parents Included", "VIP Medical & ID"],
  },
  {
    id: "translation",
    slug: "translation",
    shortTitle: "Translation Services",
    title: "Legal Translation & Notary Services",
    subtitle: "MOJ Certified Legal Translation in Dubai",
    description:
      "Ministry of Justice (MOJ) certified legal translation for court documents, contracts, powers of attorney, trade licenses, and personal certificates in Arabic, English, and 50+ languages accepted across all UAE courts.",
    image: "/assets/images/services/translation_services_new.png",
    icon: "lucide:languages",
    tags: ["MOJ Certified Arabic", "50+ Languages", "Court & Legal Documents", "Express Delivery"],
  },
  {
    id: "virtual-ejari",
    slug: "virtual-ejari",
    shortTitle: "Virtual Ejari",
    title: "Virtual Ejari & Office Solutions",
    subtitle: "Smart Desk, Ejari Lease Contracts & Physical Offices",
    description:
      "Secure an official Ejari contract and physical office address required for trade license issuance and renewal in Dubai. We offer cost-effective Virtual Ejari, smart desks, flexi-desks, and executive office spaces.",
    image: "/assets/images/services/virtual_ejari_service_new.png",
    icon: "lucide:building",
    tags: ["Official Ejari Lease", "Smart Desk Solutions", "DED License Compliant", "Prime Dubai Location"],
  },
];

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const selectService = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setFading(true);
      setTimeout(() => {
        setActiveIndex(index);
        setStartIndex((prev) => {
          if (index < prev) return index;
          if (index >= prev + 5) return Math.min(index - 4, AL_HADI_SERVICES.length - 5);
          return prev;
        });
        setTimeout(() => setFading(false), 50);
      }, 200);
    },
    [activeIndex]
  );

  const nextService = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex((prevActive) => {
        const nextIdx = (prevActive + 1) % AL_HADI_SERVICES.length;
        setStartIndex((prevStart) => {
          if (nextIdx === 0) return 0;
          if (nextIdx >= prevStart + 5) return Math.min(nextIdx - 4, AL_HADI_SERVICES.length - 5);
          return prevStart;
        });
        return nextIdx;
      });
      setTimeout(() => setFading(false), 50);
    }, 200);
  }, []);

  const prevService = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex((prevActive) => {
        const prevIdx = (prevActive - 1 + AL_HADI_SERVICES.length) % AL_HADI_SERVICES.length;
        setStartIndex((prevStart) => {
          if (prevIdx < prevStart) return prevIdx;
          if (prevIdx >= prevStart + 5) return Math.min(prevIdx - 4, AL_HADI_SERVICES.length - 5);
          return prevStart;
        });
        return prevIdx;
      });
      setTimeout(() => setFading(false), 50);
    }, 200);
  }, []);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextService();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextService, activeIndex]);

  const activeService = AL_HADI_SERVICES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="services py-6 py-lg-10 position-relative overflow-hidden"
      id="services"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div 
        className="container position-relative z-2"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Full-Width Dynamic Service Image Container */}
          <div className="col-lg-4 d-flex flex-column justify-content-between position-relative pe-lg-4">
            <div className="d-flex flex-column z-3 position-relative pt-2">
              {/* Section Badge */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <span
                  className="d-flex align-items-center justify-content-center text-dark bg-white rounded-circle fw-bold shadow-sm"
                  style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}
                >
                  03
                </span>
                <div
                  className="bg-white opacity-25"
                  style={{ width: "40px", height: "2px" }}
                ></div>
                <span
                  className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                  style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}
                >
                  Services
                </span>
              </div>

              {/* Main Title */}
              <h2 className="display-4 fw-bolder text-white mb-3 lh-sm">
                What We <br />
                <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                  Do
                </span>
              </h2>

              <p className="fs-6 text-white text-opacity-75 lh-base mb-4" style={{ lineHeight: "1.6" }}>
                Comprehensive business setup and consultancy services tailored for entrepreneurs and investors in the UAE.
              </p>
            </div>

            {/* Hand-drawn Floating Curved Directional Arrow SVG pointing up-right */}
            <div
              className="position-absolute d-none d-md-block"
              style={{
                top: "140px",
                left: "220px",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <svg
                width="95"
                height="75"
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 70 C 25 50, 45 30, 85 15"
                  stroke="var(--brand-gold-base, #C29328)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="6 4"
                />
                <path
                  d="M72 12 L 87 14 L 82 28"
                  stroke="var(--brand-gold-base, #C29328)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Full-Width Dynamic Service Image Container in Left Column */}
            <div
              className="w-100 rounded-4 overflow-hidden shadow-lg position-relative border border-secondary border-opacity-25 mt-auto"
              style={{ zIndex: 2, height: "300px" }}
            >
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="w-100 h-100 object-fit-cover"
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? "scale(0.98)" : "scale(1)",
                  transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
                }}
              />
            </div>
          </div>

          {/* Right Column: Interactive Service Hub */}
          <div className="col-lg-8">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{
                backgroundColor: "#151515",
                border: "1px solid rgba(194, 147, 40, 0.25)",
              }}
            >
              {/* Top Banner Ribbon */}
              <div
                className="w-100 py-3 px-4 rounded-3 mb-4 d-flex align-items-center justify-content-between"
                style={{
                  background: "linear-gradient(90deg, var(--brand-gold-base, #C29328) 0%, #a87b1c 100%)",
                  boxShadow: "0 6px 20px rgba(194, 147, 40, 0.2)",
                }}
              >
                <span className="fw-bold text-dark fs-6 text-uppercase tracking-wider">
                  AL HADI BUSINESS SERVICES
                </span>
                <span className="badge bg-dark text-white rounded-pill px-3 py-1 fs-7 font-monospace">
                  0{activeIndex + 1} / 0{AL_HADI_SERVICES.length}
                </span>
              </div>

              {/* Horizontal Category Ribbon for 5 Visible Options */}
              <div className="position-relative mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  {/* Left Scroll Arrow vertically centered with full options row */}
                  <button
                    onClick={prevService}
                    type="button"
                    aria-label="Previous Service"
                    className="btn p-0 d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0 me-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.2s ease",
                      alignSelf: "center",
                      zIndex: 5,
                    }}
                  >
                    <iconify-icon icon="lucide:arrow-left" style={{ fontSize: "18px" }}></iconify-icon>
                  </button>

                  {/* 5-Visible-Option Outer Overflow-Hidden Container */}
                  <div className="overflow-hidden w-100 py-1">
                    {/* Inner Sliding Track with 20% width per item */}
                    <div
                      className="d-flex align-items-start"
                      style={{
                        transform: `translateX(-${startIndex * 20}%)`,
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {AL_HADI_SERVICES.map((srv, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                          <button
                            key={srv.id}
                            onClick={() => selectService(idx)}
                            type="button"
                            className="d-flex flex-column align-items-center border-0 bg-transparent flex-shrink-0 group-cat px-1"
                            style={{
                              cursor: "pointer",
                              flex: "0 0 20%",
                              maxWidth: "20%",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {/* Circular Service Icon Container */}
                            <div
                              className="d-flex align-items-center justify-content-center rounded-circle transition-all mb-2"
                              style={{
                                width: "54px",
                                height: "54px",
                                background: isActive
                                  ? "var(--brand-gold-base, #C29328)"
                                  : "rgba(255, 255, 255, 0.06)",
                                border: isActive
                                  ? "2px solid var(--brand-gold-base, #C29328)"
                                  : "1px solid rgba(255, 255, 255, 0.15)",
                                color: isActive ? "#000" : "#fff",
                                boxShadow: "none",
                              }}
                            >
                              <iconify-icon icon={srv.icon} style={{ fontSize: "24px" }}></iconify-icon>
                            </div>

                            {/* Uniform Height Text Label Container */}
                            <div
                              className="w-100 d-flex align-items-start justify-content-center text-center px-1"
                              style={{ height: "36px" }}
                            >
                              <span
                                className="text-center tracking-tight"
                                style={{
                                  fontSize: "0.75rem",
                                  lineHeight: "1.2",
                                  fontWeight: isActive ? 700 : 500,
                                  color: isActive ? "var(--brand-gold-base, #C29328)" : "#A0AEC0",
                                  transition: "color 0.2s ease",
                                }}
                              >
                                {srv.shortTitle}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Scroll Arrow vertically centered with full options row */}
                  <button
                    onClick={nextService}
                    type="button"
                    aria-label="Next Service"
                    className="btn p-0 d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0 ms-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.2s ease",
                      alignSelf: "center",
                      zIndex: 5,
                    }}
                  >
                    <iconify-icon icon="lucide:arrow-right" style={{ fontSize: "18px" }}></iconify-icon>
                  </button>
                </div>
              </div>

              {/* Main Service Description Showcase Panel */}
              <div
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? "translateY(8px)" : "translateY(0px)",
                  transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
                }}
              >
                {/* Header: Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="fs-3 fw-bold text-white mb-1">
                    {activeService.title}
                  </h3>
                  <span
                    className="fs-6 fw-medium"
                    style={{ color: "var(--brand-gold-base, #C29328)" }}
                  >
                    {activeService.subtitle}
                  </span>
                </div>

                {/* Single Rich Description Box with 4px Gold Left Border */}
                <div
                  className="p-4 p-md-5 rounded-4 mb-4"
                  style={{
                    background: "rgba(194, 147, 40, 0.08)",
                    borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                  }}
                >
                  <p className="fs-5 mb-0 text-white lh-base text-opacity-90" style={{ lineHeight: "1.8" }}>
                    {activeService.description}
                  </p>
                </div>

                {/* Explore Service CTA Button */}
                <div>
                  <Link href={`/services/${activeService.slug}`} className="btn">
                    <span className="btn-text">Explore {activeService.shortTitle}</span>
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                    ></iconify-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
