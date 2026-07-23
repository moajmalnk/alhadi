"use client";

type Service = {
  slug: string;
  title: string;
  description?: string;
};

const icons: Record<string, string> = {
  "business-setup": "lucide:building-2",
  "free-zone": "lucide:briefcase",
  "pro-document-clearing": "lucide:file-text",
  "family-visa": "lucide:users",
  "vat-registration": "lucide:calculator",
  "trademark-registration": "lucide:shield",
  "golden-visa": "lucide:crown",
  translation: "lucide:languages",
  "virtual-ejari": "lucide:building",
};

const goldPalette = [
  "linear-gradient(135deg, #C29328 0%, #e8c46b 100%)",
  "linear-gradient(135deg, #151515 0%, #2e2e2e 100%)",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const iconBg = goldPalette[index % 2];
  const desc = service.description ?? "";
  const shortDesc = desc.length > 110 ? desc.slice(0, 110) + "…" : desc;
  const numFormatted = String(index + 1).padStart(2, "0");

  return (
    <div
      className="col-md-6"
      data-aos="fade-up"
      data-aos-delay={(index % 2) * 80 + 80}
      data-aos-duration="900"
    >
      <a
        href={`/services/${service.slug}`}
        className="text-decoration-none d-block h-100"
        style={{ color: "inherit" }}
      >
        <div
          className="service-card h-100 d-flex gap-4 align-items-start p-4 p-md-5 rounded-4 position-relative overflow-hidden"
        >
          {/* Ambient Glow Shimmer on Hover */}
          <div className="card-hover-glow" />

          {/* Top-Right Service Index Badge */}
          <span className="card-number-badge font-monospace">
            {numFormatted}
          </span>

          {/* Icon */}
          <div
            className="card-icon-box flex-shrink-0 d-flex align-items-center justify-content-center rounded-3 position-relative z-1"
            style={{ background: iconBg }}
          >
            <iconify-icon
              icon={icons[service.slug] ?? "lucide:layers"}
              width="26"
              className="card-icon"
            ></iconify-icon>
          </div>

          {/* Text & CTA */}
          <div className="d-flex flex-column gap-2 flex-grow-1 position-relative z-1 pe-2">
            <h3 className="card-title mb-0 fw-bold">
              {service.title}
            </h3>
            <p className="card-desc mb-0">
              {shortDesc}
            </p>
            <span className="card-cta d-inline-flex align-items-center gap-1 fw-semibold mt-1">
              Explore Service
              <iconify-icon icon="lucide:arrow-right" width="16" className="card-cta-arrow"></iconify-icon>
            </span>
          </div>

          {/* Right Chevron Circle */}
          <div className="card-chevron-box flex-shrink-0 d-none d-sm-flex align-items-center justify-content-center rounded-circle position-relative z-1">
            <iconify-icon icon="lucide:chevron-right" width="18" className="card-chevron-icon"></iconify-icon>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function ServicesCardGrid({ services }: { services: Service[] }) {
  return (
    <>
      <div className="row g-4">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>

      <style jsx global>{`
        .service-card {
          background-color: #FAF6EC;
          border: 1px solid rgba(194, 147, 40, 0.22);
          transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          cursor: pointer;
        }

        .card-hover-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 90% 10%, rgba(194, 147, 40, 0.2) 0%, transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        .card-number-badge {
          position: absolute;
          top: 16px;
          right: 18px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #A0781D;
          background: rgba(194, 147, 40, 0.1);
          padding: 2px 10px;
          border-radius: 100px;
          transition: all 0.35s ease;
          z-index: 1;
        }

        .card-icon-box {
          width: 60px;
          height: 60px;
          min-width: 60px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.35s ease;
        }

        .card-icon {
          color: #ffffff;
          transition: transform 0.35s ease, color 0.35s ease;
        }

        .card-title {
          font-size: 1.08rem;
          line-height: 1.35;
          color: #1A1A1A;
          transition: color 0.35s ease;
        }

        .card-desc {
          opacity: 0.68;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #333333;
          transition: color 0.35s ease, opacity 0.35s ease;
        }

        .card-cta {
          color: var(--brand-gold-base, #C29328);
          font-size: 0.88rem;
          transition: color 0.35s ease;
        }

        .card-cta-arrow {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-chevron-box {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: transparent;
          align-self: center;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-chevron-icon {
          color: #1A1A1A;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        /* ── HOVER STATES (MOUSE OVER CARD) ── */
        .service-card:hover {
          background-color: #141414 !important;
          border-color: rgba(194, 147, 40, 0.65) !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 0 25px rgba(194, 147, 40, 0.18) !important;
          transform: translateY(-5px) !important;
        }

        .service-card:hover .card-hover-glow {
          opacity: 1;
        }

        .service-card:hover .card-number-badge {
          color: #FFD700;
          background: rgba(194, 147, 40, 0.25);
          border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .service-card:hover .card-icon-box {
          transform: scale(1.08) translateY(-2px);
          background: linear-gradient(135deg, #C29328 0%, #F5D77F 100%) !important;
          box-shadow: 0 8px 25px rgba(194, 147, 40, 0.4);
        }

        .service-card:hover .card-icon {
          color: #0D0D0D;
        }

        .service-card:hover .card-title {
          color: #FFFFFF !important;
        }

        .service-card:hover .card-desc {
          color: #E2E2E2 !important;
          opacity: 0.85 !important;
        }

        .service-card:hover .card-cta {
          color: #F5D77F !important;
        }

        .service-card:hover .card-cta-arrow {
          transform: translateX(5px);
        }

        .service-card:hover .card-chevron-box {
          background: linear-gradient(135deg, #C29328 0%, #F5D77F 100%) !important;
          border-color: transparent !important;
          transform: translateX(3px);
          box-shadow: 0 4px 15px rgba(194, 147, 40, 0.4);
        }

        .service-card:hover .card-chevron-icon {
          color: #0D0D0D !important;
        }
      `}</style>
    </>
  );
}
