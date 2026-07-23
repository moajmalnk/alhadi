"use client";

import React, { useState, useEffect, useRef } from "react";

interface WhyChooseUsGridParallaxProps {
  items: string[];
}

export default function WhyChooseUsGridParallax({ items }: WhyChooseUsGridParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress increases from 0 (bottom of viewport) to 1 (passed vertical center)
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalDist = windowHeight + rect.height;
        const currentDist = windowHeight - rect.top;
        const rawProgress = currentDist / totalDist; // 0 to 1 over the whole scroll range
        setProgress(Math.min(Math.max(rawProgress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute translation values for each column to create staggered parallax columns
  // Column indices:
  // Col 0: items 0, 4 (Moves slower, subtle parallax)
  // Col 1: items 1, 5 (Moves faster)
  // Col 2: items 2, 6 (Intermediate speed)
  // Col 3: items 3, 7 (Fastest speed)
  const getColOffset = (colIndex: number) => {
    const factors = [15, 60, 30, 75]; // Stagger factor in pixels
    const factor = factors[colIndex % 4];
    // Start at -factor and slide up to +factor as user scrolls
    return (progress - 0.5) * factor * 2;
  };

  return (
    <div ref={containerRef} className="row g-4 pt-4 pb-5">
      {items.map((item, index) => {
        const colIndex = index % 4;
        const offset = getColOffset(colIndex);

        return (
          <div
            key={item}
            className="col-md-6 col-lg-3"
            style={{
              transform: `translateY(${offset}px)`,
              transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div
              className="d-flex align-items-start gap-3 p-4 rounded-3 h-100 why-choose-item-card"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(194, 147, 40, 0.15)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
            >
              <span
                className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "34px",
                  height: "34px",
                  minWidth: "34px",
                  background: "linear-gradient(135deg, var(--brand-gold-base, #C29328) 0%, #e8c46b 100%)",
                  boxShadow: "0 2px 8px rgba(194, 147, 40, 0.3)",
                }}
              >
                <iconify-icon icon="lucide:check" width="15" style={{ color: "#fff" }}></iconify-icon>
              </span>
              <p className="mb-0 text-white fw-medium" style={{ fontSize: "0.98rem", lineHeight: 1.5 }}>
                {item}
              </p>
            </div>
          </div>
        );
      })}

      <style>{`
        .why-choose-item-card:hover {
          background: rgba(255, 255, 255, 0.07) !important;
          border-color: var(--brand-gold-base, #C29328) !important;
          box-shadow: 0 8px 24px rgba(194, 147, 40, 0.12);
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
