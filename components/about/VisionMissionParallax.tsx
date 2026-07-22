"use client";

import React, { useState, useEffect, useRef } from "react";

export default function VisionMissionParallax() {
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

  // Parallax translation factors (they float into position on scroll)
  const card1Offset = (1 - scrollY) * 30;
  const card2Offset = (1 - scrollY) * 60 + 20; // Base layout has +20px staggered down
  const card3Offset = (1 - scrollY) * 90 + 40; // Base layout has +40px staggered down

  return (
    <section ref={sectionRef} className="vision-mission-section py-6 py-lg-10 py-xl-12 position-relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Background graphic block like the home page approach section */}
      <div
        className="position-absolute top-0 end-0 opacity-10"
        style={{ width: "400px", height: "400px", transform: "translate(15%, -15%)", zIndex: 1 }}
      >
        <img
          src="/assets/images/backgrounds/stats-facts-bg.svg"
          alt=""
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="container position-relative z-2">
        <div className="row align-items-center g-5">
          {/* Left Column: Heading & CTA */}
          <div className="col-lg-4">
            <div
              className="d-flex flex-column gap-4"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="d-flex align-items-center gap-3">
                <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                  Our Purpose
                </span>
              </div>
              
              <h2 className="display-5 fw-bolder text-white mb-0 lh-sm" style={{ fontWeight: 800 }}>
                Guided by Vision, <br />
                <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Driven by Mission.</span>
              </h2>
              
              <p className="fs-5 text-white text-opacity-75 lh-base mb-2">
                We combine strategic foresight with tactical execution, ensuring your UAE business setup is smooth, compliant, and positioned for long-term growth.
              </p>

              <div>
                <a href="/contact" className="btn">
                  <span className="btn-text">Book a free consultation</span>
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  ></iconify-icon>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Staggered Theme Cards */}
          <div className="col-lg-8">
            <div className="row g-4 align-items-stretch">
              {/* Card 1: Our Vision (Dark & Gold Border) */}
              <div className="col-md-4">
                <div
                  className="rounded-4 p-4 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden shadow-lg border"
                  style={{
                    backgroundColor: "#151515",
                    borderColor: "rgba(194, 147, 40, 0.3)",
                    minHeight: "320px",
                    transform: `translateY(${card1Offset}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <div>
                    <h4 className="fs-5 fw-bold text-white mb-3">Our Vision</h4>
                    <p className="fs-6 text-white text-opacity-70 lh-base mb-0">
                      To be the most trusted business setup advisory in the UAE, empowering entrepreneurs globally with expert solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Handshake Image Showcase (Middle) */}
              <div className="col-md-4">
                <div
                  className="h-100 position-relative"
                  style={{
                    transform: `translateY(${card2Offset}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <div
                    className="rounded-4 overflow-hidden shadow-lg border h-100"
                    style={{ borderColor: "rgba(194, 147, 40, 0.3)", minHeight: "320px" }}
                  >
                    <img
                      src="/assets/images/about/commitment.jpg"
                      alt="Our commitment to client success"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3: Our Mission (Solid Gold Background) */}
              <div className="col-md-4">
                <div
                  className="rounded-4 p-4 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: "var(--brand-gold-base, #C29328)",
                    minHeight: "320px",
                    transform: `translateY(${card3Offset}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <div className="text-dark">
                    <h4 className="fs-5 fw-bold text-dark mb-3">Our Mission</h4>
                    <p className="fs-6 text-dark text-opacity-90 lh-base mb-0">
                      To simplify business formation through expert guidance, transparent processes, and tailored corporate services that guarantee success.
                    </p>
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
