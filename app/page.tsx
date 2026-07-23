"use client";
import React, { useState } from "react";
import AnimatedButton from "../components/AnimatedButton";
import BannerConsultationForm from "../components/BannerConsultationForm";
import ConsultationBottomSheet from "../components/ConsultationBottomSheet";
import Toast from "../components/Toast";
import HeroCarousel from "../components/HeroCarousel";
import ServicesSlider from "@/components/services/ServicesSlider";
import WhyChooseUsParallax from "@/components/WhyChooseUsParallax";
import JsonLd from "@/components/seo/JsonLd";
import { createLead } from "@/lib/leads";
import { faqPageJsonLd, homeFaqs } from "@/lib/seo/jsonLd";

type PackageFeature = {
  text: string;
  tag?: string;
};

type PackagePlan = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  features: PackageFeature[];
};

const packagePlans: PackagePlan[] = [
  {
    name: "Freedom Package",
    price: "8,888",
    description:
      "Complete employment visa solution for individuals and professionals in the UAE.",
    features: [
      { text: "Work Permit", tag: "STANDARD" },
      { text: "Medical fitness" },
      { text: "Change in immigration status" },
      { text: "Emirates ID" },
      { text: "Employment Visa" },
    ],
  },
  {
    name: "Ecommerce License",
    price: "4,444",
    description:
      "Launch your online business in the UAE with a fully compliant ecommerce trade license.",
    featured: true,
    features: [
      { text: "Trade License", tag: "STANDARD" },
      { text: "Consulting" },
      { text: "Real Estate" },
      { text: "International Trade" },
      { text: "Logistics Services" },
    ],
  },
  {
    name: "Dubai Mainland License",
    price: "10,499",
    description:
      "Establish your business on Dubai mainland with full market access and professional licensing.",
    features: [
      { text: "Trade License", tag: "PROFESSIONAL" },
      { text: "Shareholding" },
      { text: "Provisional Approval" },
      { text: "Job Offer/Contract" },
      { text: "Execution File" },
    ],
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isConsultationSheetOpen, setIsConsultationSheetOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    createLead({
      source: "home",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    });

    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setIsConsultationSheetOpen(false);
      setShowToast(true);
    }, 800);
  };

  return (
    <>
      <JsonLd data={faqPageJsonLd([...homeFaqs])} />
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        message="Thank you! Our experts will contact you shortly."
      />
      <ConsultationBottomSheet
        isOpen={isConsultationSheetOpen}
        onClose={() => setIsConsultationSheetOpen(false)}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      {/*  Page Wrapper */}
      <div className="page-wrapper overflow-hidden">
        {/*  Hero Carousel Section */}
        <HeroCarousel />

        {/* Introduction / About Section Redesign */}
        <section className="introduction-section py-6 py-lg-11 position-relative overflow-hidden bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              {/* Left Column: Text & CTAs */}
              <div className="col-lg-7 pe-lg-5">
                <div
                  className="d-flex flex-column gap-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {/* Indicator matching the 'Our Approach' section */}
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      01
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      About Us
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2 className="display-5 fw-bolder text-dark mb-2 lh-sm" style={{ fontWeight: 800 }}>
                    Your Trusted Partner for{" "}
                    <span style={{ color: "var(--brand-gold-base, #C29328)" }}>UAE Business Growth</span>
                  </h2>

                  {/* Combined Paragraphs in Featured Quote Box */}
                  <div
                    className="p-4 p-md-5 rounded-4 shadow-sm mb-2"
                    style={{
                      background: "rgba(194, 147, 40, 0.05)",
                      borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                    }}
                  >
                    <p className="fs-5 mb-4 text-dark lh-base text-opacity-75" style={{ lineHeight: "1.7" }}>
                      Start your UAE business registration with a free expert
                      consultation from{" "}
                      <strong className="text-dark fw-bold">
                        Al Hadi Business Services
                      </strong>
                      . We deliver tailored solutions designed specifically for
                      your business model, ensuring a smooth and hassle-free
                      setup process aligned with your goals.
                    </p>
                    <p className="fs-5 text-dark lh-base text-opacity-75 mb-0" style={{ lineHeight: "1.7" }}>
                      From securing your business licensing in Dubai to receiving
                      complete support with legal procedures through the Dubai
                      Economic Department, our expert guidance allows you to
                      launch your company with complete confidence.
                    </p>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="d-flex flex-wrap gap-3 mb-2">
                    <div className="d-flex align-items-center px-3 py-2 rounded-3 bg-light border border-secondary border-opacity-10">
                      <span className="fw-bold fs-6 text-dark">
                        100% Legal & DED Compliance
                      </span>
                    </div>
                    <div className="d-flex align-items-center px-3 py-2 rounded-3 bg-light border border-secondary border-opacity-10">
                      <span className="fw-bold fs-6 text-dark">
                        Fast 48-Hour Approval
                      </span>
                    </div>
                  </div>

                  {/* Consult Now Button - UNCHANGED */}
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="btn"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <span className="btn-text">Consult Now</span>
                      <iconify-icon
                        icon="lucide:arrow-up-right"
                        className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                      ></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Image Showcase */}
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div
                  className="position-relative ps-lg-4"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {/* Main Image Frame */}
                  <div className="rounded-4 overflow-hidden shadow-lg position-relative border border-light">
                    <img
                      src="/assets/images/about/about-us.jpg"
                      alt="Al Hadi Business Services Consultants"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ minHeight: "450px" }}
                    />
                    {/* Subtle gradient overlay to enhance badge contrast */}
                    <div 
                      className="position-absolute bottom-0 start-0 w-100" 
                      style={{ height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)" }}
                    ></div>
                  </div>

                  {/* Minimal Floating Experience Badge */}
                  <div
                    className="position-absolute bottom-0 start-0 ms-4 px-4 py-3 rounded-4 shadow-lg bg-white d-flex align-items-center gap-4"
                    style={{ zIndex: 3, transform: "translateX(-2rem) translateY(50%)" }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 px-3 py-2" 
                      style={{ backgroundColor: "rgba(194, 147, 40, 0.1)" }}
                    >
                      <span className="fw-bolder display-6 mb-0" style={{ color: "var(--brand-gold-base, #C29328)" }}>10+</span>
                    </div>
                    <div className="d-flex flex-column pe-3">
                      <span className="fw-bolder text-dark fs-5 lh-sm mb-1">Years Experience</span>
                      <span className="text-secondary fs-6 lh-sm mb-0">UAE Business Setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip Section (Infinite Marquee Moving Left) */}
        <section className="trust-strip py-3 bg-dark overflow-hidden position-relative">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[
                "UAE Business Experts",
                "Fast Processing",
                "Transparent Pricing",
                "End-to-End Support",
                "Dedicated Consultant",
                "UAE Business Experts",
                "Fast Processing",
                "Transparent Pricing",
                "End-to-End Support",
                "Dedicated Consultant",
                "UAE Business Experts",
                "Fast Processing",
                "Transparent Pricing",
                "End-to-End Support",
                "Dedicated Consultant",
                "UAE Business Experts",
                "Fast Processing",
                "Transparent Pricing",
                "End-to-End Support",
                "Dedicated Consultant",
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

        {/*  Our Approach Section Redesign */}
        <section className="our-approach py-6 py-lg-10 position-relative overflow-hidden bg-light" style={{ backgroundColor: "#F8F9FA" }}>
          {/* Subtle Background Graphic */}
          <div
            className="position-absolute top-0 end-0 opacity-25"
            style={{ width: "600px", height: "600px", transform: "translate(15%, -15%)", zIndex: 1 }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="row align-items-center g-5">
              
              {/* Left Column: Heading & Visuals */}
              <div className="col-lg-5 pe-lg-5">
                <div
                  className="d-flex flex-column"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      02
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem" }}>
                      Our Approach
                    </span>
                  </div>
                  
                  <h2 className="display-4 fw-bolder text-dark mb-4 lh-sm">
                    A Partner in <br />
                    <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Your Success</span>
                  </h2>
                  
                  <p className="fs-5 text-secondary lh-base mb-0">
                    We don't just process paperwork. We engineer your entire business foundation in the UAE.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Content Card */}
              <div className="col-lg-7">
                <div 
                  className="p-4 p-md-5 bg-white rounded-4 shadow-lg"
                  style={{ borderTop: "4px solid var(--brand-gold-base, #C29328)" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <h3 className="fs-6 fw-bold text-dark mb-4">Building tailored frameworks</h3>
                  
                  <div
                    className="p-4 rounded-4 mb-5"
                    style={{
                      background: "rgba(194, 147, 40, 0.05)",
                      borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                    }}
                  >
                    <p className="fs-5 mb-0 text-dark lh-base text-opacity-75" style={{ lineHeight: "1.7" }}>
                      With a handshake approach, we establish a personal
                      connection with each client. Our team of experts and
                      specialized departments work tirelessly to develop
                      tailor-made frameworks for every phase of company
                      formation. This ensures that our clients not only meet
                      but exceed their business goals.
                    </p>
                  </div>
                  
                  {/* Keep the Learn More button exactly as it is */}
                  <div>
                    <a
                      href="/about-us"
                      className="btn"
                    >
                      <span className="btn-text">Learn more</span>
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

        {/* Services Section */}
        <ServicesSlider />
        {/* Featured Projects Section
    <section className="featured-projects py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="d-flex flex-column gap-5 gap-xl-11">
        <div className="container">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">02</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">Portfolio</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Featured projects</h2>
                    <p className="fs-5 mb-0">A glimpse into our creativity—exploring innovative designs, successful
                      collaborations, and transformative digital experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-projects-slider px-3">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-1.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">Snapclear</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">UX Strategy</span>
                    <span className="badge text-dark border">UI Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-2.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">Amber Bottle</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">Web development</span>
                    <span className="badge text-dark border">Digital design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-3.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">Pixelforge</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">UI/UX design</span>
                    <span className="badge text-dark border">Web development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-4.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">BioTrack LIMS</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">Brand identity</span>
                    <span className="badge text-dark border">Digital design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-5.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">Amber Bottle</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">Photography</span>
                    <span className="badge text-dark border">Studio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="portfolio d-flex flex-column gap-6">
                <div className="portfolio-img position-relative overflow-hidden">
                  <img src="/assets/images/portfolio/portfolio-img-6.jpg" alt="" className="img-fluid" />
                  <div className="portfolio-overlay">
                    <a href="/projects-detail"
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-3">
                  <h3 className="mb-0">Digital Magazine</h3>
                  <div className="hstack gap-2">
                    <span className="badge text-dark border">Digital design</span>
                    <span className="badge text-dark border">Web development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

        {/* Why Choose Us Parallax Section */}
        <WhyChooseUsParallax />

        {/*  Pricing Section */}
        <section className="pricing-section py-6 py-lg-10 position-relative overflow-hidden bg-light" style={{ backgroundColor: "#F8F9FA" }}>
          {/* Subtle Background Graphic */}
          <div
            className="position-absolute top-0 end-0 opacity-25"
            style={{ width: "600px", height: "600px", transform: "translate(15%, -15%)", zIndex: 1 }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="d-flex flex-column gap-5 gap-xl-11">
                <div className="row gap-7 gap-xl-0">
                  <div className="col-xl-4 col-xxl-4">
                    <div
                      className="d-flex align-items-center gap-3 mb-4"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                        05
                      </span>
                      <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                      <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                        Pricing
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
                            Affordable <br />
                            <span style={{ color: "var(--brand-gold-base, #C29328)" }}>business packages</span>
                          </h2>
                          <p className="fs-5 mb-0 text-secondary lh-base">
                            Special offer — split your payments into 4
                            installments with tabby. Transparent pricing for
                            company formation, visas, and licenses in the UAE.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {packagePlans.map((plan, index) => (
                    <div
                      key={plan.name}
                      className="col-lg-6 col-xl-4 mb-7 mb-xl-0 d-flex align-items-stretch"
                    >
                      <div
                        className={`card w-100 border-0 rounded-4 shadow-lg h-100 position-relative ${plan.featured ? 'z-3' : 'z-2'}`}
                        style={{
                          backgroundColor: "#151515",
                          borderTop: plan.featured ? "4px solid var(--brand-gold-base, #C29328)" : "4px solid #2A2A2A",
                          transform: plan.featured ? "scale(1.03)" : "scale(1)",
                        }}
                        data-aos="fade-up"
                        data-aos-delay={100 + index * 100}
                        data-aos-duration="1000"
                      >
                        {plan.featured && (
                          <div className="position-absolute" style={{ top: "-16px", right: "24px" }}>
                            <span className="badge bg-white text-dark hstack gap-2 rounded-pill px-3 py-2 shadow" style={{ fontSize: "0.8rem", border: "1px solid rgba(194, 147, 40, 0.3)" }}>
                              <iconify-icon
                                icon="lucide:flame"
                                className="fs-6"
                                style={{ color: "var(--brand-gold-base, #C29328)" }}
                              ></iconify-icon>
                              Most popular
                            </span>
                          </div>
                        )}
                        <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between gap-5 h-100">
                          <div className="d-flex flex-column gap-4">
                            <div className="d-flex align-items-center" style={{ minHeight: "56px" }}>
                              <h5 className="mb-0 fw-bold text-white lh-base">{plan.name}</h5>
                            </div>
                            
                            <div className="hstack gap-2 align-items-baseline flex-wrap">
                              <p className="mb-0 text-white-50 fw-medium">
                                Starts from
                              </p>
                              <h3 className="mb-0 text-white display-6 fw-bold">{plan.price}</h3>
                              <p className="mb-0 text-white-50 fw-medium">AED</p>
                            </div>
                            
                            <div
                              className="p-4 rounded-4"
                              style={{
                                background: "rgba(194, 147, 40, 0.08)",
                              }}
                            >
                              <p className="mb-0 text-white text-opacity-90 lh-base" style={{ fontSize: "0.95rem" }}>
                                {plan.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column gap-4 mt-auto">
                            <h6 className="mb-0 fw-semibold text-white">
                              What&apos;s Included:
                            </h6>
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                              {plan.features.map((feature) => (
                                <li key={feature.text} className="hstack gap-3 align-items-center">
                                  <span 
                                    className="rounded-circle flex-shrink-0 hstack justify-content-center"
                                    style={{ width: "20px", height: "20px", background: "var(--brand-gold-base, #C29328)" }}
                                  >
                                    <iconify-icon
                                      icon="lucide:check"
                                      className="text-white"
                                      style={{ fontSize: "13px" }}
                                    ></iconify-icon>
                                  </span>
                                  <h6 className="mb-0 fw-normal text-white-50 lh-base" style={{ fontSize: "0.95rem" }}>
                                    {feature.text}
                                    {feature.tag ? (
                                      <span className="badge ms-2 rounded-2 fw-semibold px-2 py-1" style={{ backgroundColor: "rgba(194, 147, 40, 0.15)", color: "var(--brand-gold-base, #C29328)" }}>
                                        {feature.tag}
                                      </span>
                                    ) : null}
                                  </h6>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="pt-3">
                            <a
                              href="/contact"
                              className="btn w-100 justify-content-center py-3 rounded-pill"
                              style={{ 
                                backgroundColor: "var(--brand-gold-base, #C29328)",
                                color: "#fff",
                                border: "none",
                                transition: "all 0.3s ease"
                              }}
                            >
                              <span className="fw-semibold">Enquire Now</span>
                              <iconify-icon
                                icon="lucide:arrow-up-right"
                                className="ms-2 fs-5"
                              ></iconify-icon>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Testimonial Section */}
        <section className="testimonial py-6 py-lg-10 position-relative overflow-hidden bg-light" style={{ backgroundColor: "#F8F9FA" }}>
          {/* Subtle Background Graphic */}
          <div
            className="position-absolute top-0 end-0 opacity-25"
            style={{ width: "600px", height: "600px", transform: "translate(15%, -15%)", zIndex: 1 }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="d-flex flex-column gap-5 gap-xl-9">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-3 mb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      06
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      Testimonial
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
                          Stories from <br />
                          <span style={{ color: "var(--brand-gold-base, #C29328)" }}>clients</span>
                        </h2>
                        <p className="fs-5 mb-0 text-secondary lh-base">
                          Real experiences, genuine feedback—discover how our
                          creative solutions have transformed brands and
                          elevated businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gap-7 gap-lg-0">
                {[
                  {
                    title: "Exceptional service!",
                    content: "Al Hadi Business Services made the entire company formation process seamless and stress-free. The team was incredibly knowledgeable, guiding me through every step. I highly recommend their services for anyone looking to establish their business in the UAE.",
                    name: "John D",
                    avatarColor: "C29328"
                  },
                  {
                    title: "Al Hadi exceeded my expectations!",
                    content: "They took care of every detail, from licensing to documentation, ensuring our business complied with all regulations. The personalized approach and commitment to our success were evident throughout. I'm grateful for their support in making our business dreams a reality.",
                    name: "Emily S",
                    avatarColor: "2A2A2A"
                  },
                  {
                    title: "Al Hadi Business Services truly stands out!",
                    content: "From expert advice on business structures to handling all the paperwork, they provided a comprehensive service. Their professionalism and dedication ensured a smooth and swift company setup. A reliable partner for anyone venturing into the business world.",
                    name: "Ahmed K",
                    avatarColor: "C29328"
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="col-lg-4 col-xl-4 d-flex align-items-stretch mb-7 mb-lg-0">
                    <div
                      className="card w-100 h-100 border-0 rounded-4 shadow-lg"
                      style={{ backgroundColor: "#151515", borderTop: "4px solid var(--brand-gold-base, #C29328)" }}
                      data-aos="fade-up"
                      data-aos-delay={100 * (idx + 1)}
                      data-aos-duration="1000"
                    >
                      <div className="card-body p-4 p-md-5 d-flex flex-column gap-4 justify-content-between h-100">
                        <div className="d-flex flex-column gap-4">
                          <h4 className="mb-0 text-white lh-base">{testimonial.title}</h4>
                          <p className="mb-0 text-white-50 lh-base" style={{ fontSize: "0.95rem" }}>
                            {testimonial.content}
                          </p>
                          <div className="hstack gap-2">
                            <ul className="list-unstyled mb-0 hstack gap-1">
                              {[...Array(5)].map((_, i) => (
                                <li key={i}>
                                  <a className="hstack" href="javascript:void(0)">
                                    <iconify-icon
                                      icon="solar:star-bold"
                                      className="fs-6"
                                      style={{ color: "var(--brand-gold-base, #C29328)" }}
                                    ></iconify-icon>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <h6 className="mb-0 text-white fw-medium">5.0</h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-4 border-top border-secondary border-opacity-25 mt-auto">
                          <div className="hstack gap-3">
                            <img
                              src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=${testimonial.avatarColor}&color=fff&size=60`}
                              alt={testimonial.name}
                              className="img-fluid rounded-circle flex-shrink-0"
                              width="50"
                              height="50"
                            />
                            <div>
                              <h5 className="mb-1 fw-bold text-white fs-6">{testimonial.name}</h5>
                              <p className="mb-0 text-white-50" style={{ fontSize: "0.85rem" }}>Client</p>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/testimonial/quete.svg"
                              alt="quete"
                              className="img-fluid flex-shrink-0 opacity-50"
                              width="40"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*  Meet our team Section */}
        {/* <section className="meet-our-team py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">06</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">The team</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Meet our team</h2>
                    <p className="fs-5 mb-0 text-opacity-70">Our team is committed to redefining digital experiences through
                      innovative web solutions while fostering a diverse and collaborative environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-1.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Martha Finley</h4>
                  <p className="mb-0">Creative Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-2.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Floyd Miles</h4>
                  <p className="mb-0">Marketing Strategist</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="300"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-3.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Glenna Snyder</h4>
                  <p className="mb-0">Lead Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="400"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-4.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Albert Flores</h4>
                  <p className="mb-0">UX/UI Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

        {/*  Associated Government Authorities Section */}
        <section className="associated-authorities-section py-6 py-lg-10 bg-white">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-3 mb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      07
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      Authorities
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
                          Associated <br />
                          <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Government Authorities</span>
                        </h2>
                        <p className="fs-5 mb-0 text-secondary lh-base">
                          We work closely with leading government entities in the UAE to ensure seamless and compliant business operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div
                className="mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="marquee w-100 d-flex align-items-center overflow-hidden">
                  <div className="marquee-content d-flex align-items-center gap-8">
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner1.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner2.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner3.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner4.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner5.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner6.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner7.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner8.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner1.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner2.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner3.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner4.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner5.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner6.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner7.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner8.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner1.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner2.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner3.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                    <div className="marquee-tag hstack justify-content-center">
                      <img
                        src="/assets/images/partners/partner4.png"
                        alt="partners"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  FAQ Section - Unique Redesign */}
        <section className="faq-section py-8 py-lg-12 bg-white position-relative overflow-hidden" id="faqs">
          {/* Subtle Background Pattern */}
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ pointerEvents: "none", background: "radial-gradient(circle at 10% 20%, rgba(194, 147, 40, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(194, 147, 40, 0.03) 0%, transparent 40%)" }}></div>
          
          <div className="container position-relative z-2">
            <div className="row g-6 g-xl-10">
              
              {/* Left Column: Sticky Header & CTA */}
              <div className="col-lg-5 col-xl-4 mb-5 mb-lg-0">
                <div 
                  className="position-sticky" 
                  style={{ top: "120px" }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="d-flex flex-column gap-4">
                    {/* Unique Badge */}
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                        08
                      </span>
                      <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                      <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                        Knowledge Base
                      </span>
                    </div>

                    <h2 className="display-4 fw-bolder text-dark mb-0 lh-sm">
                      Got questions? <br/>
                      <span style={{ color: "var(--brand-gold-base, #C29328)" }}>We've got answers.</span>
                    </h2>
                    
                    <p className="fs-5 text-secondary lh-base mb-4 pe-lg-4">
                      Everything you need to know about our business setup, visa processing, tax compliance, and PRO services in the UAE.
                    </p>

                    {/* Support CTA Block */}
                    <div className="p-4 p-xl-5 rounded-4 mt-2 shadow-sm" style={{ backgroundColor: "#151515" }}>
                      <h5 className="text-white mb-2 fw-semibold">Still have questions?</h5>
                      <p className="text-white-50 mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        Can't find the answer you're looking for? Our team of experts is ready to help you with tailored advice.
                      </p>
                      <a href="/contact" className="btn d-inline-flex align-items-center justify-content-center gap-2 rounded-pill px-4 py-3 fw-bold border-0 transition-all" style={{ backgroundColor: "var(--brand-gold-base, #C29328)", color: "#fff", boxShadow: "0 4px 14px rgba(194, 147, 40, 0.3)" }}>
                        Contact Support
                        <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Accordion */}
              <div className="col-lg-7 col-xl-8">
                <div
                  className="accordion faq-accordion d-flex flex-column gap-4"
                  id="faqAccordion"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {/* FAQ Items */}
                  <div className="accordion-item bg-white rounded-4 border border-secondary border-opacity-10 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed p-4 p-md-5 fs-5 fw-bold bg-transparent text-dark shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        What services does AL HADI BUSINESS SERVICES offer?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-4 px-md-5 pb-4 pb-md-5 pt-0 fs-5 text-secondary lh-base">
                        We provide complete business setup solutions, including Mainland, Free Zone, and Offshore company formation, trade license issuance, PRO & document clearing services, visa processing, VAT & Corporate Tax services, and trademark registration.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-white rounded-4 border border-secondary border-opacity-10 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed p-4 p-md-5 fs-5 fw-bold bg-transparent text-dark shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="false"
                        aria-controls="faq2"
                      >
                        Can you assist with UAE Family Visas?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-4 px-md-5 pb-4 pb-md-5 pt-0 fs-5 text-secondary lh-base">
                        Yes, we provide comprehensive UAE Family Visa services for residents, investors, and business owners. We handle everything from document preparation to application submission, Emirates ID processing, and residence visa issuance.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-white rounded-4 border border-secondary border-opacity-10 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed p-4 p-md-5 fs-5 fw-bold bg-transparent text-dark shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        What are the benefits of setting up a Free Zone company?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-4 px-md-5 pb-4 pb-md-5 pt-0 fs-5 text-secondary lh-base">
                        Establishing a Free Zone company offers 100% foreign ownership, full repatriation of capital and profits, fast company registration, flexible office solutions, and investor/employee visa eligibility in a tax-friendly environment.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-white rounded-4 border border-secondary border-opacity-10 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed p-4 p-md-5 fs-5 fw-bold bg-transparent text-dark shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Do I need to register for Corporate Tax and VAT?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-4 px-md-5 pb-4 pb-md-5 pt-0 fs-5 text-secondary lh-base">
                        Depending on your business's taxable supplies and structure, VAT or Corporate Tax registration may be mandatory. Our expert tax professionals provide full assistance with Corporate Tax Registration, VAT Registration, filing, and advisory services.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-white rounded-4 border border-secondary border-opacity-10 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed p-4 p-md-5 fs-5 fw-bold bg-transparent text-dark shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        Who is eligible for a UAE Golden Visa?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-4 px-md-5 pb-4 pb-md-5 pt-0 fs-5 text-secondary lh-base">
                        The UAE Golden Visa is available to eligible property investors, business investors, entrepreneurs, skilled professionals, exceptional talents, and outstanding students. It offers long-term, renewable residency without requiring a local sponsor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/*  Recent news Section */}
        <section className="recent-news-section py-6 py-lg-10 bg-light" style={{ backgroundColor: "#F8F9FA" }}>
          <style>{`
            .article-card-img img {
              transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            }
            .article-card:hover .article-card-img img {
              transform: scale(1.08);
            }
            .article-title {
              transition: color 0.3s ease;
            }
            .article-card:hover .article-title {
              color: var(--brand-gold-base, #C29328) !important;
            }
            .article-link-icon {
              transition: transform 0.3s ease;
            }
            .article-card:hover .article-link-icon {
              transform: translateX(5px);
            }
          `}</style>
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-7">
              {/* Header */}
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-3 mb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      09
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      Resources
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
                          Recent <br />
                          <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Insights</span>
                        </h2>
                        <p className="fs-5 mb-0 text-secondary lh-base">
                          Stay informed with the latest updates on UAE business regulations, corporate tax changes, company formation trends, and expert insights from AL HADI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className="row gy-5">
                {/* Article 1 */}
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card border-0 bg-transparent h-100 article-card"
                    style={{ cursor: "pointer" }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="article-card-img position-relative overflow-hidden rounded-4 d-block shadow-sm"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src="/assets/images/blogs/corporate_tax_uae.png"
                        alt="Corporate Tax"
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                         <span className="badge bg-white text-dark shadow-sm px-3 py-2 fw-semibold rounded-pill">Taxation</span>
                      </div>
                    </a>
                    <div className="card-body px-0 pt-4 pb-0 d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <iconify-icon icon="lucide:calendar" width="16" className="text-secondary"></iconify-icon>
                        <p className="mb-0 text-secondary fs-7 fw-medium text-uppercase" style={{ letterSpacing: "1px" }}>Oct 15, 2024</p>
                      </div>
                      <a href="/blog-detail" className="text-decoration-none mb-4">
                        <h4 className="mb-0 text-dark fw-bold article-title lh-base">
                          UAE Corporate Tax: What Your Business Needs to Know
                        </h4>
                      </a>
                      <a href="/blog-detail" className="mt-auto d-inline-flex align-items-center gap-2 text-dark fw-bold text-decoration-none">
                        Read Article
                        <iconify-icon icon="lucide:arrow-right" width="18" className="article-link-icon"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card border-0 bg-transparent h-100 article-card"
                    style={{ cursor: "pointer" }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="article-card-img position-relative overflow-hidden rounded-4 d-block shadow-sm"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src="/assets/images/blogs/business_setup_uae.png"
                        alt="Business Setup"
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                         <span className="badge bg-white text-dark shadow-sm px-3 py-2 fw-semibold rounded-pill">Business Setup</span>
                      </div>
                    </a>
                    <div className="card-body px-0 pt-4 pb-0 d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <iconify-icon icon="lucide:calendar" width="16" className="text-secondary"></iconify-icon>
                        <p className="mb-0 text-secondary fs-7 fw-medium text-uppercase" style={{ letterSpacing: "1px" }}>Nov 02, 2024</p>
                      </div>
                      <a href="/blog-detail" className="text-decoration-none mb-4">
                        <h4 className="mb-0 text-dark fw-bold article-title lh-base">
                          Top Free Zones for Startups in Dubai
                        </h4>
                      </a>
                      <a href="/blog-detail" className="mt-auto d-inline-flex align-items-center gap-2 text-dark fw-bold text-decoration-none">
                        Read Article
                        <iconify-icon icon="lucide:arrow-right" width="18" className="article-link-icon"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="col-md-6 col-lg-4">
                  <div
                    className="card border-0 bg-transparent h-100 article-card"
                    style={{ cursor: "pointer" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="article-card-img position-relative overflow-hidden rounded-4 d-block shadow-sm"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src="/assets/images/blogs/golden_visa_uae.png"
                        alt="Golden Visa"
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                         <span className="badge bg-white text-dark shadow-sm px-3 py-2 fw-semibold rounded-pill">Visas</span>
                      </div>
                    </a>
                    <div className="card-body px-0 pt-4 pb-0 d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <iconify-icon icon="lucide:calendar" width="16" className="text-secondary"></iconify-icon>
                        <p className="mb-0 text-secondary fs-7 fw-medium text-uppercase" style={{ letterSpacing: "1px" }}>Dec 10, 2024</p>
                      </div>
                      <a href="/blog-detail" className="text-decoration-none mb-4">
                        <h4 className="mb-0 text-dark fw-bold article-title lh-base">
                          A Complete Guide to the UAE Golden Visa
                        </h4>
                      </a>
                      <a href="/blog-detail" className="mt-auto d-inline-flex align-items-center gap-2 text-dark fw-bold text-decoration-none">
                        Read Article
                        <iconify-icon icon="lucide:arrow-right" width="18" className="article-link-icon"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/*  Get in touch Section */}
        <section className="contact-section py-6 py-lg-10 bg-white position-relative" id="contact">
          <style>{`
            .premium-input {
              background-color: #F8F9FA;
              border: 1px solid rgba(0,0,0,0.05);
              border-radius: 12px;
              padding: 16px 20px;
              font-size: 1rem;
              transition: all 0.3s ease;
            }
            .premium-input:focus {
              background-color: #FFFFFF;
              border-color: var(--brand-gold-base, #C29328);
              box-shadow: 0 0 0 4px rgba(194, 147, 40, 0.1);
              outline: none;
            }
            .premium-input::placeholder {
              color: #A0AEC0;
            }
            .contact-info-card {
              background: #151515;
              border-radius: 20px;
              padding: 40px;
              color: white;
              height: 100%;
              position: relative;
              overflow: hidden;
            }
            .contact-info-card::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 250px;
              height: 250px;
              background: radial-gradient(circle, var(--brand-gold-base, #C29328) 0%, transparent 70%);
              opacity: 0.15;
              transform: translate(30%, -30%);
            }
            .info-icon-wrapper {
              width: 48px;
              height: 48px;
              border-radius: 12px;
              background: rgba(255,255,255,0.05);
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--brand-gold-base, #C29328);
              flex-shrink: 0;
            }
          `}</style>
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-8">
              
              {/* Header */}
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-3 mb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="d-flex align-items-center justify-content-center text-white bg-dark rounded-circle fw-bold shadow-sm" style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}>
                      10
                    </span>
                    <div className="bg-dark opacity-25" style={{ width: "40px", height: "2px" }}></div>
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      Contact Us
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
                          Let's Get In <br />
                          <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Touch</span>
                        </h2>
                        <p className="fs-5 mb-0 text-secondary lh-base">
                          Ready to start your business journey in the UAE? Our experts are here to help you every step of the way. Let's collaborate and create something amazing!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row g-5 g-xl-8 mt-2">
                {/* Contact Info */}
                <div className="col-lg-5 col-xl-4">
                  <div className="contact-info-card shadow-lg" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <h3 className="h4 fw-bold mb-4 text-white">Contact Information</h3>
                    <p className="text-white-50 mb-5 fs-6 lh-base">
                      Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="info-icon-wrapper">
                          <iconify-icon icon="lucide:phone" width="20"></iconify-icon>
                        </div>
                        <div>
                          <p className="mb-1 text-white-50 text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>Call Us</p>
                          <p className="mb-0 fw-bold text-white" style={{ fontSize: "1.1rem" }}>+971 4 123 4567</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center gap-3">
                        <div className="info-icon-wrapper">
                          <iconify-icon icon="lucide:mail" width="20"></iconify-icon>
                        </div>
                        <div>
                          <p className="mb-1 text-white-50 text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>Email Us</p>
                          <p className="mb-0 fw-bold text-white" style={{ fontSize: "1.1rem" }}>info@alhadi.ae</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center gap-3">
                        <div className="info-icon-wrapper">
                          <iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
                        </div>
                        <div>
                          <p className="mb-1 text-white-50 text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>Visit Us</p>
                          <p className="mb-0 fw-bold text-white lh-base" style={{ fontSize: "1.05rem" }}>Sheikh Zayed Road,<br/>Dubai, UAE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-7 col-xl-8">
                  <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-10 h-100" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                    <form
                      className="d-flex flex-column gap-4 h-100"
                      onSubmit={handleSubmit}
                    >
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label htmlFor="homeLeadName" className="form-label fw-semibold text-secondary ms-1 mb-2" style={{ fontSize: "0.95rem" }}>Full Name</label>
                          <input
                            type="text"
                            className="form-control premium-input shadow-none"
                            id="homeLeadName"
                            name="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="homeLeadEmail" className="form-label fw-semibold text-secondary ms-1 mb-2" style={{ fontSize: "0.95rem" }}>Email Address</label>
                          <input
                            type="email"
                            className="form-control premium-input shadow-none"
                            id="homeLeadEmail"
                            name="email"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="homeLeadPhone" className="form-label fw-semibold text-secondary ms-1 mb-2" style={{ fontSize: "0.95rem" }}>Phone Number</label>
                          <input
                            type="tel"
                            className="form-control premium-input shadow-none"
                            id="homeLeadPhone"
                            name="phone"
                            placeholder="+971 50 123 4567"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="homeLeadMessage" className="form-label fw-semibold text-secondary ms-1 mb-2" style={{ fontSize: "0.95rem" }}>Your Message</label>
                          <textarea
                            className="form-control premium-input shadow-none"
                            id="homeLeadMessage"
                            name="message"
                            placeholder="Tell us about your business setup needs..."
                            rows={4}
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4">
                        <AnimatedButton
                          type="submit"
                          className="w-100 fs-5 rounded-pill shadow-sm"
                          isLoading={isSubmitting}
                          text="Send Message"
                          loadingText="Sending..."
                          style={{ height: "60px", backgroundColor: "var(--brand-gold-base, #C29328)", border: "none" }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Toast
        message="Your message has been sent successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* solar icons */}
    </>
  );
}
