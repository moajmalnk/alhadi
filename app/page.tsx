"use client";
import React, { useState } from "react";
import AnimatedButton from "../components/AnimatedButton";
import Toast from "../components/Toast";
import JsonLd from "@/components/seo/JsonLd";
import { createLead } from "@/lib/leads";
import { faqPageJsonLd, homeFaqs } from "@/lib/seo/jsonLd";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
      {/*  Page Wrapper */}
      <div className="page-wrapper overflow-hidden">
        {/*  Banner Section */}
        <section className="banner-section banner-redesign">
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="banner-redesign__panel row g-5 g-xl-0 align-items-center">
              <div className="col-lg-7 col-xl-7">
                <div
                  className="d-flex flex-column gap-5 pe-xl-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="d-flex flex-column gap-3">
                    <p className="banner-redesign__eyebrow mb-0 fw-medium text-uppercase tracking-wider">
                      Start your business in Dubai, UAE with Al Hadi
                    </p>
                    <h1 className="banner-redesign__title mb-0 fw-bolder">
                      #1 Business Setup in UAE
                    </h1>
                    <p className="fs-5 mb-0" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.75)' }}>
                      Top rated business setup consultancy providing reliable experts, fast processing, and company formation in just 48 hours.
                    </p>
                  </div>
                  
                  <ul className="banner-redesign__highlights list-unstyled mb-0">
                    <li>
                      <iconify-icon icon="lucide:check-circle-2" className="me-2" style={{ color: '#ffab00' }}></iconify-icon>
                      Reliable experts
                    </li>
                    <li>
                      <iconify-icon icon="lucide:zap" className="me-2" style={{ color: '#ffab00' }}></iconify-icon>
                      Fast processing
                    </li>
                    <li>
                      <iconify-icon icon="lucide:clock" className="me-2" style={{ color: '#ffab00' }}></iconify-icon>
                      Setup in 48 hrs
                    </li>
                  </ul>
                  
                  <div className="d-flex flex-wrap align-items-center gap-4 gap-xl-5 mt-3">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-column gap-1">
                        <p className="banner-redesign__price-label mb-0">Starting from just</p>
                        <p className="banner-redesign__price mb-0 d-flex align-items-baseline gap-2" style={{ color: '#ffab00' }}>
                          AED <span className="fs-1 fw-bold" style={{ color: '#ffffff' }}>4,444</span>
                        </p>
                      </div>
                      
                      <div>
                        <a href="/contact" className="banner-redesign__cta d-inline-flex align-items-center gap-2">
                          Get Free Consultation
                          <iconify-icon icon="lucide:arrow-right" className="fs-5"></iconify-icon>
                        </a>
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-2 p-3 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', flex: '1', minWidth: '240px', maxWidth: '320px' }}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle flex-shrink-0" style={{ width: '46px', height: '46px' }}>
                          <img src="/assets/images/svgs/icon-google.svg" alt="Google" width="24" height="24" />
                        </div>
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-bold fs-5 lh-1" style={{ color: '#ffffff' }}>4.9</span>
                            <div className="d-flex gap-1" style={{ color: '#ffab00' }}>
                              <iconify-icon icon="ph:star-fill"></iconify-icon>
                              <iconify-icon icon="ph:star-fill"></iconify-icon>
                              <iconify-icon icon="ph:star-fill"></iconify-icon>
                              <iconify-icon icon="ph:star-fill"></iconify-icon>
                              <iconify-icon icon="ph:star-half-fill"></iconify-icon>
                            </div>
                          </div>
                          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                            Rating on Google
                          </span>
                        </div>
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        Based on <strong>500+</strong> reviews from verified clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-xl-5">
                <div
                  className="banner-redesign__form-card ms-lg-4"
                  data-aos="fade-left"
                  data-aos-delay="250"
                  data-aos-duration="1000"
                >
                  <div className="text-center mb-4">
                    <h3 className="banner-redesign__form-title mb-2">
                      Free Consultation
                    </h3>
                    <p className="banner-redesign__form-subtitle mb-0">
                      Fill the form and our experts will contact you.
                    </p>
                  </div>
                  <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      className="form-control banner-redesign__input"
                      placeholder="Name"
                      style={{ backgroundColor: '#f8f9fa', color: '#111111', borderColor: '#d5d9e3' }}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      className="form-control banner-redesign__input"
                      placeholder="Contact Number"
                      style={{ backgroundColor: '#f8f9fa', color: '#111111', borderColor: '#d5d9e3' }}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control banner-redesign__input"
                      placeholder="Email Address"
                      style={{ backgroundColor: '#f8f9fa', color: '#111111', borderColor: '#d5d9e3' }}
                      required
                    />
                    <input
                      type="text"
                      name="message"
                      className="form-control banner-redesign__input"
                      placeholder="What business you want to start?"
                      style={{ backgroundColor: '#f8f9fa', color: '#111111', borderColor: '#d5d9e3' }}
                      required
                    />
                    <AnimatedButton
                      type="submit"
                      className="banner-redesign__submit w-100 mt-2 d-flex justify-content-center align-items-center gap-2"
                      text="Submit Request"
                      isLoading={isSubmitting}
                      loadingText="Submitting..."
                      disabled={isSubmitting}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="introduction-section py-5 py-lg-11 py-xl-12 position-relative overflow-hidden bg-white">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-8 col-xxl-7 pe-xl-10">
                <div className="d-flex flex-column gap-7">
                  <div className="row">
                    <div className="col-xxl-11">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0 display-5 fw-bold">
                          Your Trusted Partner for UAE Business Growth
                        </h2>
                        <div className="d-flex flex-column gap-4">
                          <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                            Start your UAE business registration with a free
                            expert consultation from{" "}
                            <strong className="text-dark">
                              Al Hadi Business Services
                            </strong>
                            . We deliver tailored solutions designed
                            specifically for your business model, ensuring a
                            smooth and hassle-free setup process aligned with
                            your goals.
                          </p>
                          <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                            From securing your business licensing in Dubai to
                            receiving complete support with legal procedures
                            through the Dubai Economic Department, our expert
                            guidance allows you to launch your company with
                            complete confidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
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
              <div className="col-xl-4 col-xxl-4">
                <div className="d-flex flex-column gap-5">
                  {/* Welcome */}
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      01
                    </span>

                    <hr className="border-line flex-grow-1" />

                    <span className="badge text-bg-dark">Welcome</span>
                  </div>

                  {/* Image */}
                  <div
                    className="overflow-hidden shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/images/hero/business-handshake.png"
                      alt=""
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "1.5" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip Section */}
        <section className="trust-strip py-4 bg-dark overflow-hidden">
          <div className="container-fluid px-0">
            <div
              className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-md-between gap-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {[
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
                    borderRight: i < 4 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  }}
                >
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "var(--bs-primary)",
                      minWidth: "22px",
                    }}
                  >
                    <iconify-icon
                      icon="lucide:check"
                      style={{ fontSize: "13px", color: "#fff" }}
                    ></iconify-icon>
                  </span>
                  <span className="text-white fw-medium fs-6 text-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  Our Approach Section */}
        <section className="our-approach py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                    02
                  </span>
                  <hr className="border-line" />
                  <span className="badge text-bg-dark">Our Approach</span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div className="d-flex flex-column gap-7">
                  <div className="row">
                    <div className="col-xxl-11">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0 display-5 fw-bold">Our Approach</h2>
                        <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                          With a handshake approach, we establish a personal
                          connection with each client. Our team of experts and
                          specialized departments work tirelessly to develop
                          tailor-made frameworks for every phase of company
                          formation. This ensures that our clients not only meet
                          but exceed their business goals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="/about-us"
                      className="btn"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
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
          <div
            className="position-absolute bottom-0 start-0 opacity-50"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </section>

        {/*  Services Section */}
        <section
          className="services py-5 py-lg-11 py-xl-12 bg-dark"
          id="services"
        >
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-white hstack justify-content-center fw-medium">
                      03
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-dark bg-white">Services</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0 text-white">What We Do</h2>
                        <p className="fs-5 mb-0 text-white text-opacity-70">
                          Comprehensive business setup and consultancy services
                          tailored for entrepreneurs and investors in the UAE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-tab">
                <div className="row gap-5 gap-xl-0">
                  <div className="col-xl-4">
                    <div
                      className="tab-content h-100"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div
                        className="tab-pane active h-100"
                        id="one"
                        role="tabpanel"
                        aria-labelledby="one-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/Company-Formation.jpg"
                          alt="Business Setup & Company Formation"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div
                        className="tab-pane h-100"
                        id="two"
                        role="tabpanel"
                        aria-labelledby="two-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/pro.webp"
                          alt="PRO & Document Clearing Services"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div
                        className="tab-pane h-100"
                        id="three"
                        role="tabpanel"
                        aria-labelledby="three-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/familyvisa.jpg"
                          alt="Visa Services"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div
                        className="tab-pane h-100"
                        id="four"
                        role="tabpanel"
                        aria-labelledby="four-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/vat2.jpg"
                          alt="Corporate Tax & VAT Services"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div
                        className="tab-pane h-100"
                        id="five"
                        role="tabpanel"
                        aria-labelledby="five-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/Trade-Mark-4.jpg"
                          alt="Trademark Registration"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div
                        className="tab-pane h-100"
                        id="six"
                        role="tabpanel"
                        aria-labelledby="six-tab"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/services/Golden-Visa-3.jpg"
                          alt="Golden Visa Services"
                          className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="d-flex flex-column gap-5">
                      <ul
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                      >
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 active w-100"
                                id="one-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#one"
                                type="button"
                                role="tab"
                                aria-controls="one"
                                aria-selected="true"
                              >
                                Business Setup & Company Formation
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                Start your business in Dubai with expert
                                guidance for Mainland, Free Zone, and Offshore
                                company formation. We help with trade licenses,
                                company registration, legal documentation, and
                                government approvals.
                              </p>
                              <a
                                href="/services/business-setup"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 w-100"
                                id="two-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#two"
                                type="button"
                                role="tab"
                                aria-controls="two"
                                aria-selected="false"
                              >
                                PRO & Document Clearing Services
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                Our professional PRO services ensure smooth
                                processing of government-related documentation
                                including MOHRE, GDRFA, Immigration, Emirates
                                ID, Labour Card, and visa applications.
                              </p>
                              <a
                                href="/services/pro-document-clearing"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 w-100"
                                id="three-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#three"
                                type="button"
                                role="tab"
                                aria-controls="three"
                                aria-selected="false"
                              >
                                Visa Services
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                We provide comprehensive UAE visa services
                                including Investor Visa, Employment Visa, Family
                                Visa, Golden Visa, Visit Visa, Visa Renewal,
                                Visa Cancellation, and Visa Status Change.
                              </p>
                              <a
                                href="/services/family-visa"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 w-100"
                                id="four-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#four"
                                type="button"
                                role="tab"
                                aria-controls="four"
                                aria-selected="false"
                              >
                                Corporate Tax & VAT Services
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                Stay compliant with UAE tax regulations through
                                our Corporate Tax Registration, Corporate Tax
                                Filing, VAT Registration, VAT Filing, and Tax
                                Consultancy services.
                              </p>
                              <a
                                href="/services/vat-registration"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 w-100"
                                id="five-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#five"
                                type="button"
                                role="tab"
                                aria-controls="five"
                                aria-selected="false"
                              >
                                Trademark Registration
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                Protect your business identity with professional
                                trademark search, trademark registration, and
                                intellectual property services across the UAE.
                              </p>
                              <a
                                href="/services/trademark-registration"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item py-4 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                          role="presentation"
                        >
                          <div className="row w-100 align-items-center gx-3">
                            <div className="col-lg-5 col-xxl-5">
                              <button
                                className="nav-link fs-5 text-start text-wrap lh-sm fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 w-100"
                                id="six-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#six"
                                type="button"
                                role="tab"
                                aria-controls="six"
                                aria-selected="false"
                              >
                                Golden Visa Services
                              </button>
                            </div>
                            <div className="col-lg-7 col-xxl-7">
                              <p className="text-white text-opacity-70 mb-2">
                                Our experts assist eligible professionals,
                                investors, entrepreneurs, and skilled
                                individuals in obtaining long-term UAE Golden
                                Visas.
                              </p>
                              <a
                                href="/services/golden-visa"
                                className="text-decoration-none fw-medium"
                                style={{ color: "#FFAB00" }}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div
                        className="d-flex flex-wrap gap-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                      >
                        <a
                          href="/services"
                          className="btn border border-white border-opacity-25"
                        >
                          <span className="btn-text">View All Services</span>
                          <iconify-icon
                            icon="lucide:arrow-up-right"
                            className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                          ></iconify-icon>
                        </a>
                        <a
                          href="/contact"
                          className="btn border border-white border-opacity-25"
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
                </div>
              </div>
            </div>
          </div>
        </section>
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

        {/*  Why choose us Section */}
        <section className="why-choose-us py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="row justify-content-between gap-5 gap-xl-0">
              <div className="col-xl-3 col-xxl-3">
                <div className="d-flex flex-column gap-7">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      04
                    </span>
                    <hr className="border-line" />
                    <span className="badge text-bg-dark">Why choose us</span>
                  </div>
                  <h2
                    className="mb-0"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    Why Choose AL HADI?
                  </h2>
                  <p
                    className="mb-0 fs-5"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    Whether you are starting a new company, expanding your
                    business, or managing compliance, AL HADI is your trusted
                    partner.
                  </p>
                </div>
              </div>
              <div className="col-xl-9 col-xxl-8">
                <div className="row">
                  <div className="col-lg-4 mb-7 mb-lg-0">
                    <div
                      className="card position-relative overflow-hidden bg-primary h-100"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column gap-3 position-relative z-1">
                          <ul className="list-unstyled mb-0 hstack gap-1">
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0 fs-6 text-white">
                            "The team exceeded our expectations with seamless
                            end-to-end business setup."
                          </p>
                        </div>
                        <div className="position-relative z-1">
                          <div className="pb-6 border-bottom">
                            <h2 className="mb-0 text-white  ">99%</h2>
                            <p className="mb-0 text-white ">
                              Client satisfaction
                            </p>
                          </div>
                          <div className="hstack gap-6 pt-6">
                            <img
                              src="/assets/images/profile/avatar-1.png"
                              alt=""
                              className="img-fluid rounded-circle overflow-hidden flex-shrink-0"
                              width="64"
                              height="64"
                            />
                            <div>
                              <h5 className="mb-0 text-white">Wade Warren</h5>
                              <p className="mb-0 text-white">TechStart Dubai</p>
                            </div>
                          </div>
                        </div>
                        <div className="position-absolute bottom-0 end-0">
                          <img
                            src="/assets/images/backgrounds/customer-satisfaction-bg.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-7 mb-lg-0">
                    <div
                      className="d-flex flex-column gap-7"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <div className="position-relative">
                        <img
                          src="/assets/images/services/Company-Formation.jpg"
                          alt="Business Setup & Company Formation"
                          className="img-fluid w-100 object-fit-cover"
                          style={{ aspectRatio: "1.5" }}
                        />
                      </div>

                      <div className="card bg-dark">
                        <div className="card-body d-flex flex-column gap-7">
                          <div>
                            <h2 className="mb-0 text-white">1000+</h2>
                            <p className="mb-0 text-white text-opacity-70">
                              Successful companies formed
                            </p>
                          </div>
                          <ul className="d-flex align-items-center mb-0">
                            <li>
                              <a href="javascript:void(0)">
                                <img
                                  src="/assets/images/profile/user-1.jpg"
                                  width="44"
                                  height="44"
                                  className="rounded-circle border border-2 border-dark"
                                  alt="user-1"
                                />
                              </a>
                            </li>
                            <li className="ms-n2">
                              <a href="javascript:void(0)">
                                <img
                                  src="/assets/images/profile/user-2.jpg"
                                  width="44"
                                  height="44"
                                  className="rounded-circle border border-2 border-dark"
                                  alt="user-2"
                                />
                              </a>
                            </li>
                            <li className="ms-n2">
                              <a href="javascript:void(0)">
                                <img
                                  src="/assets/images/profile/user-3.jpg"
                                  width="44"
                                  height="44"
                                  className="rounded-circle border border-2 border-dark"
                                  alt="user-3"
                                />
                              </a>
                            </li>
                            <li className="ms-n2">
                              <a href="javascript:void(0)">
                                <img
                                  src="/assets/images/profile/user-4.jpg"
                                  width="44"
                                  height="44"
                                  className="rounded-circle border border-2 border-dark"
                                  alt="user-4"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-7 mb-lg-0">
                    <div
                      className="card border h-100 position-relative overflow-hidden"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    >
                      <span className="border rounded-circle round-490 d-block position-absolute top-0 start-50 translate-middle"></span>
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                          <h2 className="mb-0">Fast</h2>
                          <p className="mb-0 text-dark">
                            Processing & Approvals
                          </p>
                        </div>
                        <div className="d-flex flex-column gap-3 z-1 position-relative">
                          <div>
                            <h3
                              className="display-6 fw-bold mb-0 text-dark"
                              style={{ letterSpacing: "-1px" }}
                            >
                              AL HADI.
                            </h3>
                          </div>
                          <p className="mb-0 fs-5 text-dark">
                            We provide transparent pricing, complete government
                            documentation, and ongoing compliance support.
                          </p>
                        </div>
                      </div>
                      <span className="border rounded-circle round-490 d-block position-absolute top-100 start-50 translate-middle"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Testimonial Section */}
        <section className="testimonial pt-5 pt-lg-11 pt-xl-12 pb-4 pb-lg-7 pb-xl-8 bg-light-gray">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-11">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      05
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-bg-dark">Testimonial</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0">Stories from clients</h2>
                        <p className="fs-5 mb-0 text-opacity-70">
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
                <div className="col-lg-4 col-xl-4 d-flex align-items-stretch">
                  <div
                    className="card w-100 h-100"
                    style={{ backgroundColor: "#FFAB00" }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex flex-column gap-4 gap-xl-6 justify-content-between">
                      <div className="d-flex flex-column gap-4">
                        <h4 className="mb-0">Exceptional service!</h4>
                        <p className="mb-0">
                          Al Hadi Business Services made the entire company
                          formation process seamless and stress-free. The team
                          was incredibly knowledgeable, guiding me through every
                          step. I highly recommend their services for anyone
                          looking to establish their business in the UAE.
                        </p>
                      </div>
                      <div className="hstack gap-3">
                        <img
                          src="https://ui-avatars.com/api/?name=John+D&background=212529&color=fff&size=60"
                          alt=""
                          className="img-fluid rounded-circle overflow-hidden flex-shrink-0"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h5 className="mb-1 fw-normal">John D</h5>
                          <p className="mb-0">Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 d-flex align-items-stretch">
                  <div
                    className="card bg-dark w-100 h-100"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex flex-column gap-4 gap-xl-6 justify-content-between">
                      <div className="d-flex flex-column gap-4">
                        <h4 className="mb-0 text-white pe-xl-2">
                          Al Hadi exceeded my expectations!
                        </h4>
                        <p className="mb-0 text-white text-opacity-70">
                          They took care of every detail, from licensing to
                          documentation, ensuring our business complied with all
                          regulations. The personalized approach and commitment
                          to our success were evident throughout. I'm grateful
                          for their support in making our business dreams a
                          reality.
                        </p>
                        <div className="hstack gap-2">
                          <ul className="list-unstyled mb-0 hstack gap-1">
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                            <li>
                              <a className="hstack" href="javascript:void(0)">
                                <iconify-icon
                                  icon="solar:star-bold"
                                  className="fs-6 text-white"
                                ></iconify-icon>
                              </a>
                            </li>
                          </ul>
                          <h6 className="mb-0 text-white fw-medium">5.0</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="hstack gap-3">
                          <img
                            src="https://ui-avatars.com/api/?name=Emily+S&background=ffffff&color=212529&size=60"
                            alt=""
                            className="img-fluid rounded-circle overflow-hidden flex-shrink-0"
                            width="60"
                            height="60"
                          />
                          <div>
                            <h5 className="mb-1 fw-normal text-white">
                              Emily S
                            </h5>
                            <p className="mb-0 text-white text-opacity-70">
                              Client
                            </p>
                          </div>
                        </div>
                        <span>
                          <img
                            src="/assets/images/testimonial/quete.svg"
                            alt="quete"
                            className="img-fluid flex-shrink-0"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 d-flex align-items-stretch">
                  <div
                    className="card w-100 h-100"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex flex-column gap-4 gap-xl-6 justify-content-between">
                      <div className="d-flex flex-column gap-4">
                        <h4 className="mb-0">
                          Al Hadi Business Services truly stands out!
                        </h4>
                        <p className="mb-0">
                          From expert advice on business structures to handling
                          all the paperwork, they provided a comprehensive
                          service. Their professionalism and dedication ensured
                          a smooth and swift company setup. A reliable partner
                          for anyone venturing into the business world.
                        </p>
                      </div>
                      <div className="hstack gap-3">
                        <img
                          src="https://ui-avatars.com/api/?name=Ahmed+K&background=FFAB00&color=fff&size=60"
                          alt=""
                          className="img-fluid rounded-circle overflow-hidden flex-shrink-0"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h5 className="mb-1 fw-normal">Ahmed K</h5>
                          <p className="mb-0">Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        <section className="pricing-section pt-4 pt-lg-7 pt-xl-8 pb-5 pb-lg-11 pb-xl-12 bg-light-gray">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div
                className="d-flex flex-column gap-8"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <p className="fs-5 mb-0 text-center text-dark">
                  Associated Government Authorities
                </p>
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

        {/*  FAQ Section */}
        <section className="faq py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-11">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      08
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-bg-dark">FAQs</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-9">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0">Frequently asked questions</h2>
                        <p className="fs-5 mb-0 text-opacity-70">
                          Find answers to common questions about our business
                          setup, visa processing, tax compliance, and PRO
                          services in the UAE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-xl-8">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fs-8 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What services does AL HADI BUSINESS SERVICES offer?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body pt-0 fs-5 text-dark">
                          We provide complete business setup solutions,
                          including Mainland, Free Zone, and Offshore company
                          formation, trade license issuance, PRO & document
                          clearing services, visa processing, VAT & Corporate
                          Tax services, and trademark registration.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fs-8 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Can you assist with UAE Family Visas?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body pt-0 fs-5 text-dark">
                          Yes, we provide comprehensive UAE Family Visa services
                          for residents, investors, and business owners. We
                          handle everything from document preparation to
                          application submission, Emirates ID processing, and
                          residence visa issuance.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fs-8 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What are the benefits of setting up a Free Zone
                          company?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body pt-0 fs-5 text-dark">
                          Establishing a Free Zone company offers 100% foreign
                          ownership, full repatriation of capital and profits,
                          fast company registration, flexible office solutions,
                          and investor/employee visa eligibility in a
                          tax-friendly environment.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fs-8 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Do I need to register for Corporate Tax and VAT?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body pt-0 fs-5 text-dark">
                          Depending on your business's taxable supplies and
                          structure, VAT or Corporate Tax registration may be
                          mandatory. Our expert tax professionals provide full
                          assistance with Corporate Tax Registration, VAT
                          Registration, filing, and advisory services.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-bottom">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fs-8 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          Who is eligible for a UAE Golden Visa?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body pt-0 fs-5 text-dark">
                          The UAE Golden Visa is available to eligible property
                          investors, business investors, entrepreneurs, skilled
                          professionals, exceptional talents, and outstanding
                          students. It offers long-term, renewable residency
                          without requiring a local sponsor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Recent news Section */}
        <section className="Recent-news bg-light-gray py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-11">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      09
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-bg-dark">Resources</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0">Recent Insights</h2>
                        <p className="fs-5 mb-0 text-opacity-70">
                          Stay informed with the latest updates on UAE business
                          regulations, corporate tax changes, company formation
                          trends, and expert insights from AL HADI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 mb-7 mb-xl-0">
                  <div
                    className="resources d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="resources-img resources-img-first position-relative overflow-hidden d-block"
                    >
                      <img
                        src="/assets/images/resources/resources-1.jpg"
                        alt="resources"
                        className="img-fluid"
                      />
                    </a>
                    <div className="resources-details">
                      <p className="mb-0">Oct 15, 2024</p>
                      <h4 className="mb-0">
                        UAE Corporate Tax: What Your Business Needs to Know
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
                  <div
                    className="resources d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="resources-img position-relative overflow-hidden d-block"
                    >
                      <img
                        src="/assets/images/resources/resources-2.jpg"
                        alt="resources"
                        className="img-fluid"
                      />
                    </a>
                    <div className="resources-details">
                      <p className="mb-0">Nov 02, 2024</p>
                      <h4 className="mb-0">
                        Top Free Zones for Startups in Dubai
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
                  <div
                    className="resources d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <a
                      href="/blog-detail"
                      className="resources-img position-relative overflow-hidden d-block"
                    >
                      <img
                        src="/assets/images/resources/resources-3.jpg"
                        alt="resources"
                        className="img-fluid"
                      />
                    </a>
                    <div className="resources-details">
                      <p className="mb-0">Dec 10, 2024</p>
                      <h4 className="mb-0">
                        A Complete Guide to the UAE Golden Visa
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Get in touch Section */}
        <section className="get-in-touch py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="d-flex flex-column gap-5 gap-xl-10">
              <div className="row gap-7 gap-xl-0">
                <div className="col-xl-4 col-xxl-4">
                  <div
                    className="d-flex align-items-center gap-7 py-2"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      10
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-bg-dark">Contact us</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0">Get in touch</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between gap-7 gap-xl-0">
                <div className="col-xl-3">
                  <p
                    className="mb-0 fs-5"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    Let’s collaborate and create something amazing! Tell me
                    about your project—I’m all ears.
                  </p>
                </div>
                <div className="col-xl-8">
                  <form
                    className="d-flex flex-column gap-7"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control border-bottom border-dark"
                        id="homeLeadName"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control border-bottom border-dark"
                          id="homeLeadEmail"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="tel"
                          className="form-control border-bottom border-dark"
                          id="homeLeadPhone"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        className="form-control border-bottom border-dark"
                        id="homeLeadMessage"
                        name="message"
                        placeholder="Tell us about your project"
                        rows={3}
                        required
                      ></textarea>
                    </div>
                    <AnimatedButton
                      type="submit"
                      className="w-100"
                      isLoading={isSubmitting}
                      text="Submit message"
                      loadingText="Sending..."
                      style={{ height: "60px" }}
                    />
                  </form>
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
