"use client";

type Service = {
  slug: string;
  title: string;
  description?: string;
};

const icons: Record<string, string> = {
  "business-setup": "lucide:briefcase",
  "pro-document-clearing": "lucide:file-check",
  "family-visa": "lucide:passport",
  "vat-registration": "lucide:receipt-tax",
  "trademark-registration": "lucide:shield-check",
  "golden-visa": "lucide:star",
  translation: "lucide:languages",
  "virtual-ejari": "lucide:building-2",
};

const goldPalette = [
  "linear-gradient(135deg, #C29328 0%, #e8c46b 100%)",
  "linear-gradient(135deg, #151515 0%, #2e2e2e 100%)",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const iconBg = goldPalette[index % 2];
  const desc = service.description ?? "";
  const shortDesc = desc.length > 110 ? desc.slice(0, 110) + "…" : desc;

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
          className="service-card h-100 d-flex gap-4 align-items-start p-5 rounded-4 position-relative overflow-hidden"
          style={{ 
            backgroundColor: "#FAF6EC", 
            border: "1px solid rgba(194, 147, 40, 0.15)", 
            transition: "box-shadow 0.25s, transform 0.25s" 
          }}
        >
          {/* Gold accent line */}
          <div
            className="position-absolute top-0 start-0"
            style={{
              width: "4px",
              height: "100%",
              background: "var(--brand-gold-base, #C29328)",
              borderRadius: "4px 0 0 4px",
            }}
          />

          {/* Icon */}
          <div
            className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3"
            style={{ width: "60px", height: "60px", background: iconBg, minWidth: "60px" }}
          >
            <iconify-icon
              icon={icons[service.slug] ?? "lucide:layers"}
              width="26"
              style={{ color: "#fff" }}
            ></iconify-icon>
          </div>

          {/* Text */}
          <div className="d-flex flex-column gap-2 flex-grow-1">
            <h3 className="mb-0 fw-bold text-dark" style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>
              {service.title}
            </h3>
            <p className="mb-0 text-dark" style={{ opacity: 0.65, fontSize: "0.92rem", lineHeight: 1.65 }}>
              {shortDesc}
            </p>
            <span
              className="d-inline-flex align-items-center gap-1 fw-semibold mt-1"
              style={{ color: "var(--brand-gold-base, #C29328)", fontSize: "0.88rem" }}
            >
              Explore Service
              <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
            </span>
          </div>

          {/* Chevron */}
          <div
            className="flex-shrink-0 d-none d-sm-flex align-items-center justify-content-center rounded-circle"
            style={{ width: "36px", height: "36px", border: "1px solid rgba(0,0,0,0.10)", minWidth: "36px", alignSelf: "center" }}
          >
            <iconify-icon icon="lucide:chevron-right" width="16" className="text-dark"></iconify-icon>
          </div>
        </div>
      </a>

      <style>{`
        .service-card:hover {
          box-shadow: 0 12px 40px rgba(194,147,40,0.14) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </div>
  );
}

export default function ServicesCardGrid({ services }: { services: Service[] }) {
  return (
    <div className="row g-4">
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}
