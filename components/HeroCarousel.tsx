"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/seo/site";

type HeroSlide = {
  id: number;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    headline: "Start Your UAE Business Registration with Al Hadi",
    description:
      "Complete assistance for Mainland, Free Zone & Offshore company setup in Dubai. From trade licensing to government approvals in 48 hours.",
    primaryCtaText: "Get Free Consultation",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore All Setup Plans",
    secondaryCtaLink: "/services",
    image: "/assets/images/hero/slidetwo.jpg",
  },
  {
    id: 2,
    headline: "UAE Golden Visa, Family Visa & VIP Document Clearing",
    description:
      "End-to-end PRO assistance for 10-year Golden Visas, family sponsorship, corporate tax, VAT & trademark registration in Dubai.",
    primaryCtaText: "Apply for Golden Visa",
    primaryCtaLink: "/services/golden-visa",
    secondaryCtaText: "Family Visa Assistance",
    secondaryCtaLink: "/services/family-visa",
    image: "/assets/images/hero/slidethree.jpg",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Keyboard navigation & Scroll monitoring
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextSlide, prevSlide]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <section
      className="hero-carousel-section position-relative overflow-hidden w-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel"
    >
      {/* Slide Background Images with Semi-Transparent Dark Overlay */}
      <div className="hero-slides-wrapper h-100 w-100 position-relative">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide position-absolute top-0 start-0 w-100 h-100 ${
                isActive ? "is-active" : ""
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <div
                className="hero-slide__bg position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Semi-transparent dark overlay for high contrast text readability */}
              <div className="hero-slide__overlay position-absolute top-0 start-0 w-100 h-100"></div>

              {/* Slide Content */}
              <div className="container h-100 position-relative z-2 d-flex align-items-center py-4">
                <div className="hero-slide__content text-white col-12 col-md-10 col-lg-8 col-xl-7">
                  {/* Main Headline (H1) */}
                  <h1 className="hero-headline fw-bolder mb-3 text-white">
                    {slide.headline}
                  </h1>

                  {/* Body Subtext */}
                  <p className="hero-subtext fs-5 mb-4 text-white-50">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-cta-group d-flex flex-wrap align-items-center gap-3">
                    <Link
                      href={slide.primaryCtaLink}
                      className="btn btn-hero-primary px-4 py-3 rounded-pill fw-bold d-inline-flex align-items-center gap-2 shadow-lg"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <iconify-icon
                        icon="lucide:arrow-right"
                        className="fs-5"
                      ></iconify-icon>
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      className="btn btn-hero-secondary px-4 py-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-2"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: Semi-transparent dark circular arrows on Right Axis */}
      <div className="hero-nav-arrows d-none d-md-flex flex-column gap-3 position-absolute z-3">
        <button
          type="button"
          onClick={prevSlide}
          className="hero-arrow-btn d-flex align-items-center justify-content-center rounded-circle border-0 shadow"
          aria-label="Previous Slide"
        >
          <iconify-icon icon="lucide:chevron-up" width="24" className="text-white"></iconify-icon>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="hero-arrow-btn d-flex align-items-center justify-content-center rounded-circle border-0 shadow"
          aria-label="Next Slide"
        >
          <iconify-icon icon="lucide:chevron-down" width="24" className="text-white"></iconify-icon>
        </button>
      </div>

      {/* Pagination Indicators (Dots) in Bottom-Right Corner */}
      <div className="hero-pagination position-absolute z-3 d-flex align-items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`hero-dot border-0 p-0 transition-all ${
              idx === currentSlide ? "is-active" : ""
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
