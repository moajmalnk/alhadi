"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="btn p-0 d-flex align-items-center justify-content-center rounded-circle text-white shadow-lg border-0"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "48px",
        height: "48px",
        backgroundColor: "#151515",
        border: "1px solid rgba(194, 147, 40, 0.4)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
        zIndex: 99999,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--brand-gold-base, #C29328)";
        e.currentTarget.style.color = "#000";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#151515";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <iconify-icon icon="lucide:arrow-up" style={{ fontSize: "22px" }}></iconify-icon>
    </button>
  );
}
