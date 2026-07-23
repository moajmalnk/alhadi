import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceBySlug } from "../../../data/services";
import {
  serviceSeoJsonLd,
  serviceSeoMetadata,
} from "@/lib/seo/serviceSeo";

const SLUG = "vat-registration";

export const metadata = serviceSeoMetadata(SLUG);

/* ─── Reusable icon mapping for service cards ─── */
const SERVICE_ICONS = [
  "lucide:file-check",
  "lucide:file-plus",
  "lucide:shield-check",
  "lucide:file-edit",
  "lucide:file-minus",
  "lucide:file-output",
  "lucide:receipt",
  "lucide:scale",
  "lucide:message-square",
  "lucide:search-check",
  "lucide:hash",
  "lucide:monitor",
];

/* ─── Eligibility icons ─── */
const ELIGIBILITY_ICONS = [
  "lucide:shopping-cart",
  "lucide:store",
  "lucide:briefcase",
  "lucide:globe-2",
  "lucide:ship",
  "lucide:factory",
  "lucide:utensils",
  "lucide:shopping-bag",
  "lucide:hard-hat",
  "lucide:building-2",
  "lucide:truck",
  "lucide:landmark",
  "lucide:stethoscope",
  "lucide:graduation-cap",
  "lucide:user-check",
];

export default function VatRegistrationPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();

  const offerings = service.offerings || [];
  const whoItems =
    service.whoCanApply?.items.map((item) =>
      typeof item === "string" ? item : item.title
    ) || [];
  const benefits = service.benefits?.items || [];
  const documents = service.documents?.items || [];

  return (
    <>
      <JsonLd data={serviceSeoJsonLd(SLUG)} />
      <div className="page-wrapper overflow-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO (Split Layout: Heading Left, Image Right in Box)
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="vat-hero py-6 py-lg-11">
          {/* Subtle Background Graphic */}
          <div
            className="position-absolute top-0 end-0 opacity-25"
            style={{
              width: "600px",
              height: "600px",
              transform: "translate(15%, -15%)",
              zIndex: 1,
            }}
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="row g-5 align-items-center">
              {/* Left Column: Text */}
              <div className="col-lg-6 pe-lg-5">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {/* Section Badge */}
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <span
                      className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm"
                      style={{
                        width: "45px",
                        height: "45px",
                        fontSize: "1.1rem",
                      }}
                    >
                      01
                    </span>
                    <div
                      className="bg-dark opacity-25"
                      style={{ width: "40px", height: "2px" }}
                    ></div>
                    <span
                      className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                      style={{
                        letterSpacing: "1px",
                        fontSize: "0.85rem",
                        borderRadius: "100px",
                      }}
                    >
                      VAT Services
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p
                    className="mb-0 fw-medium"
                    style={{ color: "var(--brand-gold-base, #C29328)" }}
                  >
                    {service.subtitle}
                  </p>

                  {/* Main Heading */}
                  <h1
                    className="display-4 fw-bolder text-dark mb-0 lh-sm"
                    style={{ fontWeight: 800 }}
                  >
                    VAT Registration{" "}
                    <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                      Services in UAE
                    </span>
                  </h1>

                  {/* Featured Quote Box */}
                  <div
                    className="p-4 rounded-4 shadow-sm"
                    style={{
                      background: "rgba(194, 147, 40, 0.05)",
                      borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                    }}
                  >
                    <p
                      className="fs-5 mb-0 text-dark lh-base text-opacity-75"
                      style={{ lineHeight: "1.7" }}
                    >
                      {service.intro[0]}
                    </p>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="d-flex flex-wrap gap-3">
                    <div className="d-flex align-items-center px-3 py-2 rounded-3 bg-light border border-secondary border-opacity-10">
                      <span className="fw-bold fs-6 text-dark">
                        FTA Compliant
                      </span>
                    </div>
                    <div className="d-flex align-items-center px-3 py-2 rounded-3 bg-light border border-secondary border-opacity-10">
                      <span className="fw-bold fs-6 text-dark">
                        Expert Tax Consultants
                      </span>
                    </div>
                    <div className="d-flex align-items-center px-3 py-2 rounded-3 bg-light border border-secondary border-opacity-10">
                      <span className="fw-bold fs-6 text-dark">
                        Fast Registration
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="btn"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <span className="btn-text">Enquire Now</span>
                      <iconify-icon
                        icon="lucide:arrow-up-right"
                        className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                      ></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Image in Box */}
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div
                  className="position-relative"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <div className="vat-hero__img-box">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid w-100"
                    />
                    {/* Subtle gradient overlay */}
                    <div
                      className="position-absolute bottom-0 start-0 w-100"
                      style={{
                        height: "40%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)",
                      }}
                    ></div>
                  </div>
                  {/* Floating Badge */}
                  <div className="vat-hero__floating-badge">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 px-3 py-2"
                      style={{
                        backgroundColor: "rgba(194, 147, 40, 0.1)",
                      }}
                    >
                      <iconify-icon
                        icon="lucide:shield-check"
                        style={{
                          fontSize: "1.5rem",
                          color: "var(--brand-gold-base, #C29328)",
                        }}
                      ></iconify-icon>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fw-bolder text-dark fs-6 lh-sm mb-1">
                        FTA Registered
                      </span>
                      <span className="text-secondary lh-sm" style={{ fontSize: "0.85rem" }}>
                        UAE Tax Authority
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — TRUST MARQUEE STRIP
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="trust-strip py-3 bg-dark overflow-hidden position-relative">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[
                "FTA Compliant",
                "Expert Tax Consultants",
                "Fast Registration",
                "Transparent Pricing",
                "TRN Assistance",
                "VAT Return Filing",
                "Compliance Review",
                "FTA Compliant",
                "Expert Tax Consultants",
                "Fast Registration",
                "Transparent Pricing",
                "TRN Assistance",
                "VAT Return Filing",
                "Compliance Review",
                "FTA Compliant",
                "Expert Tax Consultants",
                "Fast Registration",
                "Transparent Pricing",
                "TRN Assistance",
                "VAT Return Filing",
              ].map((item, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center gap-2 px-4 py-2 flex-shrink-0"
                  style={{
                    borderRight: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "var(--brand-gold-base, #C29328)",
                      minWidth: "22px",
                    }}
                  >
                    <iconify-icon
                      icon="lucide:check"
                      style={{ fontSize: "13px", color: "#fff" }}
                    ></iconify-icon>
                  </span>
                  <span className="text-white fw-medium fs-6 text-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — WHAT IS VAT (Overview Card)
           ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-6 py-lg-10 position-relative overflow-hidden bg-white"
        >
          <div
            className="position-absolute top-0 end-0 opacity-10"
            style={{
              width: "350px",
              height: "350px",
              transform: "translate(10%, -10%)",
              zIndex: 1,
            }}
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="row align-items-center g-5">
              {/* Left Column: Heading */}
              <div className="col-lg-5 pe-lg-5">
                <div
                  className="d-flex flex-column"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span
                      className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm"
                      style={{
                        width: "45px",
                        height: "45px",
                        fontSize: "1.1rem",
                      }}
                    >
                      02
                    </span>
                    <div
                      className="bg-dark opacity-25"
                      style={{ width: "40px", height: "2px" }}
                    ></div>
                    <span
                      className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                      style={{
                        letterSpacing: "1px",
                        fontSize: "0.85rem",
                        borderRadius: "100px",
                      }}
                    >
                      Overview
                    </span>
                  </div>

                  <h2 className="display-4 fw-bolder text-dark mb-4 lh-sm">
                    What is{" "}
                    <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                      VAT?
                    </span>
                  </h2>

                  <p className="fs-5 text-secondary lh-base mb-0">
                    Understanding Value Added Tax and its importance for your
                    UAE business.
                  </p>
                </div>
              </div>

              {/* Right Column: Content Card */}
              <div className="col-lg-7">
                <div
                  className="p-4 p-md-5 bg-white rounded-4 shadow-lg"
                  style={{
                    borderTop:
                      "4px solid var(--brand-gold-base, #C29328)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <div
                    className="p-4 rounded-4 mb-4"
                    style={{
                      background: "rgba(194, 147, 40, 0.05)",
                      borderLeft:
                        "4px solid var(--brand-gold-base, #C29328)",
                    }}
                  >
                    <p
                      className="fs-5 mb-0 text-dark lh-base text-opacity-75"
                      style={{ lineHeight: "1.7" }}
                    >
                      {service.whatIs?.description}
                    </p>
                  </div>

                  {service.intro.slice(1).map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="fs-5 text-dark lh-base text-opacity-75 mb-3"
                      style={{ lineHeight: "1.7" }}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="mt-4">
                    <a href="/contact" className="btn">
                      <span className="btn-text">Get Expert Advice</span>
                      <iconify-icon
                        icon="lucide:arrow-up-right"
                        className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                      ></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — OUR VAT SERVICES (Dark Premium Cards Grid)
           ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-6 py-lg-10 position-relative overflow-hidden"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div
            className="position-absolute top-0 end-0 opacity-25"
            style={{
              width: "600px",
              height: "600px",
              transform: "translate(15%, -15%)",
              zIndex: 1,
            }}
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              {/* Section Header */}
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-3 mb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span
                      className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm"
                      style={{
                        width: "45px",
                        height: "45px",
                        fontSize: "1.1rem",
                      }}
                    >
                      03
                    </span>
                    <div
                      className="bg-dark opacity-25"
                      style={{ width: "40px", height: "2px" }}
                    ></div>
                    <span
                      className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                      style={{
                        letterSpacing: "1px",
                        fontSize: "0.85rem",
                        borderRadius: "100px",
                      }}
                    >
                      Our Services
                    </span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-10">
                      <div
                        className="d-flex flex-column gap-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="display-4 fw-bolder text-dark mb-2 lh-sm">
                          Complete VAT{" "}
                          <span
                            style={{
                              color: "var(--brand-gold-base, #C29328)",
                            }}
                          >
                            Solutions
                          </span>
                        </h2>
                        <p className="fs-5 mb-0 text-secondary lh-base">
                          {service.offeringsIntro}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="row g-4">
                {offerings.map((item, index) => {
                  const title =
                    typeof item === "string" ? item : item.title;
                  return (
                    <div
                      key={title}
                      className="col-md-6 col-xl-4"
                      data-aos="fade-up"
                      data-aos-delay={(index % 3) * 100 + 100}
                      data-aos-duration="1000"
                    >
                      <div className="vat-service-card">
                        <div className="d-flex align-items-start justify-content-between gap-3">
                          <div className="vat-service-card__icon">
                            <iconify-icon
                              icon={
                                SERVICE_ICONS[
                                  index % SERVICE_ICONS.length
                                ]
                              }
                            ></iconify-icon>
                          </div>
                          <span className="vat-service-card__index">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="vat-service-card__title">
                          {title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — WHO NEEDS VAT REGISTRATION (Dark Section)
           ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-6 py-lg-10 position-relative overflow-hidden"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <div
            className="service-who__glow position-absolute top-0 end-0"
            aria-hidden="true"
          />
          <div className="container position-relative z-2">
            {/* Section Header */}
            <div className="row gap-7 gap-xl-0 mb-5 mb-xl-8">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-3 mb-4"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <span
                    className="d-flex align-items-center justify-content-center text-dark bg-white rounded-circle fw-bold shadow-sm"
                    style={{
                      width: "45px",
                      height: "45px",
                      fontSize: "1.1rem",
                    }}
                  >
                    04
                  </span>
                  <div
                    className="bg-white opacity-25"
                    style={{ width: "40px", height: "2px" }}
                  ></div>
                  <span
                    className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                    style={{
                      letterSpacing: "1px",
                      fontSize: "0.85rem",
                      borderRadius: "100px",
                    }}
                  >
                    Eligibility
                  </span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2 className="display-5 fw-bolder text-white mb-0 lh-sm">
                    Who Needs VAT{" "}
                    <span
                      style={{ color: "var(--brand-gold-base, #C29328)" }}
                    >
                      Registration?
                    </span>
                  </h2>
                  {service.whoCanApply?.intro && (
                    <p className="fs-5 text-white text-opacity-70 mb-0">
                      {service.whoCanApply.intro}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Eligibility Cards */}
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
              {whoItems.map((item, index) => (
                <div
                  key={item}
                  className="col"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100 + 100}
                  data-aos-duration="1000"
                >
                  <div className="service-who-card h-100">
                    <div className="service-who-card__icon">
                      <iconify-icon
                        icon={
                          ELIGIBILITY_ICONS[
                            index % ELIGIBILITY_ICONS.length
                          ]
                        }
                      ></iconify-icon>
                    </div>
                    <div className="service-who-card__body">
                      <h3 className="service-who-card__title">{item}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            {service.whoCanApply?.footer && (
              <div
                className="service-who-note mt-5 mt-xl-8"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <span className="service-who-note__icon">
                  <iconify-icon icon="lucide:info"></iconify-icon>
                </span>
                <p className="mb-0">{service.whoCanApply.footer}</p>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — BENEFITS OF VAT REGISTRATION
           ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-6 py-lg-10 position-relative overflow-hidden"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div className="container position-relative z-2">
            {/* Section Header */}
            <div className="row gap-7 gap-xl-0 mb-5 mb-xl-8">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-3 mb-4"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <span
                    className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm"
                    style={{
                      width: "45px",
                      height: "45px",
                      fontSize: "1.1rem",
                    }}
                  >
                    05
                  </span>
                  <div
                    className="bg-dark opacity-25"
                    style={{ width: "40px", height: "2px" }}
                  ></div>
                  <span
                    className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                    style={{
                      letterSpacing: "1px",
                      fontSize: "0.85rem",
                      borderRadius: "100px",
                    }}
                  >
                    Benefits
                  </span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2 className="display-4 fw-bolder text-dark mb-2 lh-sm">
                    Benefits of VAT{" "}
                    <span
                      style={{
                        color: "var(--brand-gold-base, #C29328)",
                      }}
                    >
                      Registration
                    </span>
                  </h2>
                  {service.benefits?.intro && (
                    <p className="fs-5 mb-0 text-secondary lh-base">
                      {service.benefits.intro}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div
              className="row g-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {benefits.map((item, index) => (
                <div key={item} className="col-md-6 col-xl-4">
                  <div className="vat-benefit-card">
                    <div className="vat-benefit-card__icon">
                      <iconify-icon
                        icon="lucide:check"
                        style={{ fontSize: "18px", color: "#fff" }}
                      ></iconify-icon>
                    </div>
                    <span className="text-dark fw-medium lh-sm fs-5">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 — DOCUMENTS REQUIRED
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-6 py-lg-10 bg-white position-relative overflow-hidden">
          <div className="container position-relative z-2">
            {/* Section Header */}
            <div className="row gap-7 gap-xl-0 mb-5 mb-xl-8">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-3 mb-4"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <span
                    className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm"
                    style={{
                      width: "45px",
                      height: "45px",
                      fontSize: "1.1rem",
                    }}
                  >
                    06
                  </span>
                  <div
                    className="bg-dark opacity-25"
                    style={{ width: "40px", height: "2px" }}
                  ></div>
                  <span
                    className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                    style={{
                      letterSpacing: "1px",
                      fontSize: "0.85rem",
                      borderRadius: "100px",
                    }}
                  >
                    Documents
                  </span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2 className="display-4 fw-bolder text-dark mb-2 lh-sm">
                    Documents{" "}
                    <span
                      style={{
                        color: "var(--brand-gold-base, #C29328)",
                      }}
                    >
                      Required
                    </span>
                  </h2>
                  {service.documents?.intro && (
                    <p className="fs-5 mb-0 text-secondary lh-base">
                      {service.documents.intro}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="row g-4">
              {documents.map((item, index) => (
                <div
                  key={item}
                  className="col-md-6 col-xl-4"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100 + 100}
                  data-aos-duration="1000"
                >
                  <div className="vat-doc-card">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{
                        width: "36px",
                        height: "36px",
                        minWidth: "36px",
                        background: "var(--brand-gold-base, #C29328)",
                      }}
                    >
                      <iconify-icon
                        icon="lucide:file-text"
                        style={{ fontSize: "16px", color: "#fff" }}
                      ></iconify-icon>
                    </span>
                    <div className="d-flex flex-column gap-1 min-w-0">
                      <span className="vat-doc-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-dark fw-medium lh-sm">
                        {item}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            {service.documents?.footer && (
              <div
                className="d-flex align-items-start gap-3 p-4 mt-5 rounded-4 shadow-sm"
                style={{
                  background: "rgba(194, 147, 40, 0.05)",
                  borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <span
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: "36px",
                    height: "36px",
                    minWidth: "36px",
                    background: "var(--brand-gold-base, #C29328)",
                  }}
                >
                  <iconify-icon
                    icon="lucide:info"
                    style={{ fontSize: "18px", color: "#fff" }}
                  ></iconify-icon>
                </span>
                <p className="mb-0 text-dark text-opacity-75 fs-5">
                  {service.documents.footer}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 — CTA SECTION
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="vat-cta-section py-6 py-lg-10">
          <div className="container">
            <div className="vat-cta-card p-5 p-lg-8">
              <div className="row align-items-center g-5 position-relative z-2">
                {/* Left Column: CTA Text */}
                <div className="col-lg-7">
                  <div
                    className="d-flex flex-column gap-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span
                        className="d-flex align-items-center justify-content-center text-dark bg-white rounded-circle fw-bold shadow-sm"
                        style={{
                          width: "45px",
                          height: "45px",
                          fontSize: "1.1rem",
                        }}
                      >
                        07
                      </span>
                      <div
                        className="bg-white opacity-25"
                        style={{ width: "40px", height: "2px" }}
                      ></div>
                      <span
                        className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                        style={{
                          letterSpacing: "1px",
                          fontSize: "0.85rem",
                          borderRadius: "100px",
                        }}
                      >
                        Next Step
                      </span>
                    </div>

                    <h2
                      className="display-5 fw-bolder text-white mb-0 lh-sm"
                      style={{ fontWeight: 800 }}
                    >
                      Ready to Register{" "}
                      <span
                        style={{
                          color: "var(--brand-gold-base, #C29328)",
                        }}
                      >
                        for VAT?
                      </span>
                    </h2>

                    <p
                      className="fs-5 text-white text-opacity-70 mb-0 lh-base"
                      style={{ lineHeight: "1.7" }}
                    >
                      Share your requirements and our tax professionals will
                      outline the documents, timeline, and next steps for your
                      VAT registration.
                    </p>

                    <div className="d-flex flex-wrap gap-3 pt-2">
                      <a
                        href="/contact"
                        className="btn d-inline-flex align-items-center justify-content-center gap-2 rounded-pill px-5 py-3 fw-bold border-0"
                        style={{
                          backgroundColor:
                            "var(--brand-gold-base, #C29328)",
                          color: "#fff",
                          boxShadow:
                            "0 4px 14px rgba(194, 147, 40, 0.3)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Book a Discovery Call
                        <iconify-icon
                          icon="lucide:arrow-right"
                          width="18"
                        ></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Quick Contact Info */}
                <div className="col-lg-5">
                  <div
                    className="d-flex flex-column gap-4 p-4 p-lg-5 rounded-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <h4 className="text-white fw-bold mb-0">
                      Why choose Al Hadi?
                    </h4>
                    <div className="d-flex flex-column gap-3">
                      {[
                        "Experienced Tax Professionals",
                        "FTA Portal Expertise",
                        "Fast & Hassle-Free Process",
                        "Ongoing Compliance Support",
                        "Transparent Pricing",
                      ].map((reason) => (
                        <div
                          key={reason}
                          className="d-flex align-items-center gap-3"
                        >
                          <span
                            className="rounded-circle flex-shrink-0 hstack justify-content-center"
                            style={{
                              width: "24px",
                              height: "24px",
                              background:
                                "var(--brand-gold-base, #C29328)",
                            }}
                          >
                            <iconify-icon
                              icon="lucide:check"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            ></iconify-icon>
                          </span>
                          <span
                            className="text-white text-opacity-75 fw-medium"
                            style={{ fontSize: "0.95rem" }}
                          >
                            {reason}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
