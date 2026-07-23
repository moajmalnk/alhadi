import { seoHead } from "@/lib/seo/seoHead";
import ServicesCardGrid from "@/components/services/ServicesCardGrid";
import WhyChooseUsGridParallax from "@/components/services/WhyChooseUsGridParallax";

export const metadata = seoHead({
  title: "Our Services",
  description:
    "Explore Al Hadi Business Setup services in Dubai: company formation, free zone licenses, PRO & document clearing, visas, VAT, trademarks, Golden Visa, translation, and Virtual Ejari.",
  path: "/services",
  keywords: [
    "UAE business services",
    "Dubai company formation",
    "PRO services Dubai",
    "visa services UAE",
  ],
});

const services = [
  {
    slug: "business-setup",
    title: "Business Setup & Company Formation",
    description:
      "Start your business in Dubai with expert guidance for Mainland, Free Zone, and Offshore company formation. We help with trade licenses, company registration, legal documentation, and government approvals.",
    offerings: [
      "Mainland, Free Zone & Offshore formation",
      "Trade license issuance & renewal",
      "Business activity & trade name selection",
      "Corporate bank account assistance",
      "Office & flexi desk solutions",
    ],
    image: "/assets/images/services/business_setup_service.png",
    relatedSlug: "free-zone",
    relatedLabel: "Also explore Free Zone licenses",
  },
  {
    slug: "free-zone",
    title: "Free Zone License Services",
    description:
      "Start your business in leading UAE Free Zones with 100% foreign ownership, tax exemption, and fast registration. We assist in choosing the ideal Free Zone based on your business activity, budget, flexi-desk office, and visa requirements.",
    offerings: [
      "100% Foreign Ownership & Tax Exemption",
      "Flexi-Desk & Virtual Office Solutions",
      "Fast-Track Registration & Licensing",
      "Multi-Year License Options",
      "Corporate Bank Account Opening",
    ],
    image: "/assets/images/services/business_setup_card.png",
  },
  {
    slug: "pro-document-clearing",
    title: "PRO & Document Clearing Services",
    description:
      "Our professional PRO services ensure smooth processing of government-related documentation so you can focus on growing your business.",
    offerings: [
      "MOHRE & GDRFA documentation",
      "Immigration & visa applications",
      "Emirates ID processing",
      "Labour Card services",
      "Government approvals & clearances",
    ],
    image: "/assets/images/services/pro_services_new.png",
  },
  {
    slug: "family-visa",
    title: "Visa Services",
    description:
      "We provide comprehensive UAE visa services for investors, professionals, and families — from application to residence visa issuance.",
    offerings: [
      "Investor & Employment visas",
      "Family visa (spouse, children, parents)",
      "Visit visa assistance",
      "Visa renewal & cancellation",
      "Inside UAE status change",
    ],
    image: "/assets/images/services/visa_services_new.png",
  },
  {
    slug: "vat-registration",
    title: "Corporate Tax & VAT Services",
    description:
      "Stay compliant with UAE tax regulations through our registration, filing, and consultancy services for startups, SMEs, and established companies.",
    offerings: [
      "Corporate Tax registration & filing",
      "VAT registration (mandatory & voluntary)",
      "VAT return filing & refunds",
      "Tax Registration Number (TRN)",
      "Tax advisory & compliance review",
    ],
    image: "/assets/images/services/tax_vat_service_new.png",
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    description:
      "Protect your business identity with professional trademark search, registration, and intellectual property services across the UAE.",
    offerings: [
      "UAE trademark & brand registration",
      "Logo & service mark registration",
      "Trademark renewal & assignment",
      "Portfolio support & record updates",
      "Exclusive legal brand protection",
    ],
    image: "/assets/images/services/trademark_service_new.png",
  },
  {
    slug: "golden-visa",
    title: "Golden Visa Services",
    description:
      "Our experts assist eligible professionals, investors, entrepreneurs, and skilled individuals in obtaining long-term UAE Golden Visas.",
    offerings: [
      "Eligibility assessment",
      "Property & business investor visas",
      "Entrepreneur & skilled professional visas",
      "Family sponsorship assistance",
      "Emirates ID & renewal support",
    ],
    image: "/assets/images/services/golden_visa_service_new.png",
  },
];

const whyChooseUs = [
  "Expert Business Setup Consultants",
  "Transparent & Affordable Pricing",
  "Fast Processing",
  "Complete Government Documentation",
  "Dedicated Relationship Manager",
  "End-to-End Business Support",
  "Personalized Business Setup Solutions",
  "Ongoing Compliance & Renewal Assistance",
];

const supportingServices = [
  {
    slug: "translation",
    title: "Translation Services",
    description:
      "Legal, business, personal, and immigration document translation including contracts, MOA, certificates, and visa documents.",
  },
  {
    slug: "virtual-ejari",
    title: "Virtual Ejari",
    description:
      "Affordable Virtual Ejari solutions for business license and visa requirements through eligible office solutions in Dubai.",
  },
];

export default function Services() {
  return (
    <>
      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section
          className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/services-hero.png)",
            height: "calc(100vh - 112px)",
            minHeight: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <style>{`
            @media (max-width: 991.98px) {
              .banner-inner-section {
                height: calc(100dvh - 64px) !important;
              }
            }
          `}</style>
          <div className="container">
            <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
              <div className="row align-items-center">
                <div className="col-xl-4">
                  <div
                    className="d-flex align-items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <p className="mb-0 text-white fs-5">
                      From licensing to visas and tax compliance — explore the
                      solutions that move your UAE venture forward.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-end gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h1 className="mb-0 fs-16 text-white lh-1">Services</h1>
              </div>
            </div>
          </div>
        </section>


        {/* ── Services Section (Heading + Cards Grid) ── */}
        <section className="py-6 py-lg-11 bg-white">
          <div className="container">
            {/* Header */}
            <div className="row mb-6 mb-lg-8" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-lg-8 col-xl-7">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="badge fw-semibold text-uppercase px-3 py-2"
                    style={{
                      background: "var(--brand-gold-base, #C29328)",
                      color: "#fff",
                      borderRadius: "100px",
                      fontSize: "0.78rem",
                      letterSpacing: "1.2px",
                    }}
                  >
                    Our Offerings
                  </span>
                </div>
                <h2 className="display-5 fw-bolder lh-sm text-dark mb-3" style={{ fontWeight: 800 }}>
                  All Services.{" "}
                  <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                    One Easy Destination.
                  </span>
                </h2>
                <p className="fs-5 mb-0 text-dark" style={{ opacity: 0.7 }}>
                  From licensing to visas and tax compliance — explore the solutions that move your UAE venture forward. Everything handled under one roof.
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <ServicesCardGrid services={[...services, ...supportingServices]} />
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-6 py-lg-10" style={{ background: "#151515" }}>
          <div className="container">
            <div className="row mb-7" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-lg-8 col-xl-7">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="badge fw-semibold text-uppercase px-3 py-2"
                    style={{
                      background: "var(--brand-gold-base, #C29328)",
                      color: "#fff",
                      borderRadius: "100px",
                      fontSize: "0.78rem",
                      letterSpacing: "1.2px",
                    }}
                  >
                    The Difference
                  </span>
                </div>
                <h2 className="display-5 fw-bolder lh-sm text-white mb-3" style={{ fontWeight: 800 }}>
                  Built for speed,{" "}
                  <span style={{ color: "var(--brand-gold-base, #C29328)" }}>
                    clarity &amp; follow-through
                  </span>
                </h2>
                <p className="fs-5 mb-0 text-white" style={{ opacity: 0.6 }}>
                  You get a dedicated point of contact, clear pricing, and end-to-end handling of government documentation — so nothing falls through the cracks.
                </p>
              </div>
            </div>
            <WhyChooseUsGridParallax items={whyChooseUs} />
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="about-cta py-6 py-lg-11 py-xl-12 position-relative overflow-hidden bg-white" style={{ backgroundColor: "#ffffff" }}>
          <div
            className="position-absolute top-0 end-0 opacity-10"
            style={{ width: "350px", height: "350px", transform: "translate(10%, -10%)", zIndex: 1 }}
          >
            <img
              src="/assets/images/backgrounds/stats-facts-bg.svg"
              alt=""
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="container position-relative z-2">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="d-flex flex-column align-items-center text-center gap-5">
                  <div className="d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                      Next step
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h2 className="mb-0 display-5 fw-bolder lh-sm text-dark" style={{ fontWeight: 800 }}>
                      Ready to pick the right service for your{" "}
                      <span style={{ color: "var(--brand-gold-base, #C29328)" }}>goals?</span>
                    </h2>
                    <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                      Tell us what you need — company formation, visas, tax, or brand protection — and we will map a clear path with timelines and requirements before you commit.
                    </p>
                  </div>

                  <div className="d-flex flex-wrap justify-content-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <a href="/contact" className="btn">
                      <span className="btn-text">Contact Us</span>
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


      </div>
    </>
  );
}
