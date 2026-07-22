"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function WhyChooseUsParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress from 0 (just entered view) to 1 (fully in view or past)
      if (rect.top < windowHeight) {
        // Progress reaches 1 when the section is at the vertical center of the viewport
        const progress = (windowHeight - rect.top) / (windowHeight / 1.5);
        setScrollY(Math.min(Math.max(progress, 0), 1));
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax translation factors (start pushed down, float up to 0 offset and stop)
  const card1Offset = (1 - scrollY) * 40;
  const card2Offset = (1 - scrollY) * 80;
  const card3Offset = (1 - scrollY) * 120;


  return (
    <section
      ref={sectionRef}
      className="why-choose-us py-6 py-lg-10 position-relative overflow-hidden"
      id="why-choose-us"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="container position-relative z-2">
        <div className="row g-4 g-xl-5 align-items-center">
          {/* Left Column: Title & Section Intro */}
          <div className="col-lg-4 col-xl-3">
            <div className="d-flex flex-column z-3 position-relative">
              {/* Section Badge */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <span
                  className="d-flex align-items-center justify-content-center text-dark bg-white rounded-circle fw-bold shadow-sm"
                  style={{ width: "45px", height: "45px", fontSize: "1.1rem" }}
                >
                  04
                </span>
                <div
                  className="bg-white opacity-25"
                  style={{ width: "40px", height: "2px" }}
                ></div>
                <span
                  className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase"
                  style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}
                >
                  Why Choose Us
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="display-5 fw-bolder text-white mb-3 lh-sm">
                Why Choose <br />
                <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                  AL HADI?
                </span>
              </h2>

              <p className="fs-6 text-white text-opacity-75 lh-base mb-4" style={{ lineHeight: "1.7" }}>
                Whether you are starting a new company, expanding your business, or managing compliance, AL HADI is your trusted partner in the UAE.
              </p>


            </div>
          </div>

          {/* Right Column: 3 Staggered Parallax Feature Cards */}
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              {/* Card 1: Client Testimonial & 99% Satisfaction (Parallax Speed 1) */}
              <div className="col-md-4">
                <div
                  className="rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: "#151515",
                    border: "1px solid rgba(194, 147, 40, 0.3)",
                    transform: `translateY(${card1Offset}px)`,
                    transition: "transform 0.15s ease-out",
                    minHeight: "420px",
                  }}
                >
                  {/* Star Rating */}
                  <div>
                    <div className="d-flex align-items-center gap-1.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <iconify-icon
                          key={i}
                          icon="solar:star-bold"
                          style={{ color: "var(--brand-gold-base, #C29328)", fontSize: "18px" }}
                        ></iconify-icon>
                      ))}
                    </div>

                    <p className="fs-6 text-white lh-base text-opacity-90 mb-4" style={{ lineHeight: "1.6" }}>
                      "The team exceeded our expectations with seamless end-to-end business setup and visa clearance in Dubai."
                    </p>
                  </div>

                  {/* Stat & Client Info */}
                  <div>
                    <div className="pb-3 mb-3 border-bottom border-white border-opacity-10">
                      <h3
                        className="display-4 fw-bolder mb-0"
                        style={{ color: "var(--brand-gold-base, #C29328)" }}
                      >
                        99%
                      </h3>
                      <p className="fs-7 text-white text-opacity-70 mb-0 font-monospace">
                        Client Satisfaction
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="/assets/images/profile/avatar-1.png"
                        alt="Wade Warren"
                        className="rounded-circle overflow-hidden flex-shrink-0"
                        width="48"
                        height="48"
                        style={{ border: "2px solid var(--brand-gold-base, #C29328)" }}
                      />
                      <div>
                        <h6 className="fw-bold text-white mb-0">Wade Warren</h6>
                        <span className="fs-7 text-white text-opacity-60">TechStart Dubai</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Showcase Photo & 1000+ Companies Formed (Parallax Speed 2) */}
              <div className="col-md-4">
                <div
                  className="d-flex flex-column gap-4 h-100 position-relative"
                  style={{
                    transform: `translateY(${card2Offset}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  {/* Top Image Showcase */}
                  <div
                    className="rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25"
                    style={{ height: "190px" }}
                  >
                    <img
                      src="/assets/images/services/Company-Formation.jpg"
                      alt="Business Setup & Company Formation"
                      className="w-100 h-100 object-fit-cover transition-all"
                    />
                  </div>

                  {/* Stat Card */}
                  <div
                    className="rounded-4 p-4 d-flex flex-column justify-content-between flex-grow-1 shadow-lg"
                    style={{
                      backgroundColor: "var(--brand-gold-base, #C29328)",
                      color: "#000",
                    }}
                  >
                    <div className="mb-3">
                      <h3 className="display-4 fw-bolder text-dark mb-1">1000+</h3>
                      <p className="fw-semibold text-dark text-opacity-90 mb-0">
                        Successful companies formed in the UAE
                      </p>
                    </div>

                    {/* Stacked Client Avatars */}
                    <div className="d-flex align-items-center">
                      {["user-1.jpg", "user-2.jpg", "user-3.jpg", "user-4.jpg"].map((userImg, idx) => (
                        <img
                          key={idx}
                          src={`/assets/images/profile/${userImg}`}
                          width="40"
                          height="40"
                          alt={`Client ${idx + 1}`}
                          className="rounded-circle border border-2 border-dark"
                          style={{ marginLeft: idx > 0 ? "-12px" : "0", zIndex: 10 - idx }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Fast 48-Hour Processing & Transparent Pricing (Parallax Speed 3) */}
              <div className="col-md-4">
                <div
                  className="rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: "#151515",
                    border: "1px solid rgba(194, 147, 40, 0.3)",
                    transform: `translateY(${card3Offset}px)`,
                    transition: "transform 0.15s ease-out",
                    minHeight: "420px",
                  }}
                >
                  {/* Geometric Ring Background Overlay */}
                  <span
                    className="border rounded-circle position-absolute top-0 start-50 translate-middle pointer-events-none"
                    style={{
                      width: "320px",
                      height: "320px",
                      borderColor: "rgba(194, 147, 40, 0.15)",
                    }}
                  ></span>

                  {/* Header */}
                  <div>
                    <h3 className="display-5 fw-bolder text-white mb-1">Fast</h3>
                    <p
                      className="fs-6 fw-bold text-uppercase tracking-wider mb-4"
                      style={{ color: "var(--brand-gold-base, #C29328)" }}
                    >
                      Processing & Approvals
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="position-relative z-1">
                    <p className="fs-6 text-white text-opacity-80 lh-base mb-4" style={{ lineHeight: "1.6" }}>
                      We provide transparent pricing, 100% complete government documentation, direct DED & MOHRE clearance, and ongoing compliance support.
                    </p>

                    <div
                      className="p-3 rounded-3"
                      style={{
                        background: "rgba(194, 147, 40, 0.1)"
                      }}
                    >
                      <span className="fw-bold text-white fs-6 d-block">
                        AL HADI GUARANTEE
                      </span>
                      <span className="fs-7 text-white text-opacity-70">
                        Zero hidden charges & 48-Hour DED Trade License issuance.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
