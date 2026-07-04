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
    image: "/assets/images/services/Company-Formation.jpg",
    relatedSlug: "free-zone",
    relatedLabel: "Also explore Free Zone licenses",
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
    image: "/assets/images/services/pro.webp",
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
    image: "/assets/images/services/familyvisa.jpg",
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
    image: "/assets/images/services/vat2.jpg",
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
    image: "/assets/images/services/Trade-Mark-4.jpg",
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
    image: "/assets/images/services/Golden-Visa-3.jpg",
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
          style={{ backgroundImage: "url(/assets/images/backgrounds/services.jpg)" }}
        >
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
                    <p className="mb-0 text-white fs-5 text-opacity-70">
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
                <a href="javascript:void(0)" className="p-1 ps-7 bg-primary rounded-pill">
                  <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                    <iconify-icon
                      icon="lucide:arrow-up-right"
                      className="fs-8 text-dark"
                    ></iconify-icon>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="services-intro py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <hr className="border-line" />
                  <span className="badge text-bg-dark">Our offerings</span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div
                  className="d-flex flex-column gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2 className="mb-0 display-5 fw-bold">
                    Everything your UAE business needs under one roof
                  </h2>
                  <p className="fs-5 mb-0 text-dark text-opacity-75">
                    Whether you are forming a Mainland, Free Zone, or Offshore company,
                    securing visas, or staying tax-compliant, our team handles the paperwork
                    and approvals so you can focus on building momentum — not chasing
                    government processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Showcase Grid */}
        <section className="services-showcase py-5 py-lg-11 py-xl-12 bg-light-gray">
          <div className="container">
            <div className="row">
              {services.map((service, index) => (
                <div key={service.slug} className="col-lg-6 mb-7">
                  <div
                    className="card border-0 h-100 shadow-sm overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 100 + 100}
                    data-aos-duration="1000"
                  >
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <a href={`/services/${service.slug}`} className="d-block h-100">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="img-fluid w-100 h-100 object-fit-cover"
                            style={{ minHeight: "220px" }}
                          />
                        </a>
                      </div>
                      <div className="col-md-7">
                        <div className="card-body d-flex flex-column gap-4 p-5 h-100">
                          <div className="d-flex flex-column gap-3">
                            <h3 className="mb-0 fs-6">
                              <a
                                href={`/services/${service.slug}`}
                                className="text-dark text-decoration-none"
                              >
                                {service.title}
                              </a>
                            </h3>
                            <p className="mb-0 text-dark text-opacity-70">
                              {service.description}
                            </p>
                          </div>
                          <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            {service.offerings.map((item) => (
                              <li key={item} className="hstack gap-2 align-items-start">
                                <iconify-icon
                                  icon="lucide:check"
                                  className="fs-6 text-primary flex-shrink-0 mt-1"
                                ></iconify-icon>
                                <span className="text-dark">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {"relatedSlug" in service && service.relatedSlug && (
                            <a
                              href={`/services/${service.relatedSlug}`}
                              className="text-primary text-decoration-none fw-medium"
                            >
                              {service.relatedLabel}
                            </a>
                          )}
                          <a
                            href={`/services/${service.slug}`}
                            className="btn mt-auto align-self-start"
                          >
                            <span className="btn-text">Learn More</span>
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
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Services */}
        <section className="supporting-services py-5 py-lg-11 py-xl-12">
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
                    <hr className="border-line" />
                    <span className="badge text-bg-dark">Add-ons</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div
                    className="d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <h2 className="mb-0">Extras that keep operations running</h2>
                    <p className="fs-5 mb-0 text-opacity-70">
                      Need certified translations or a Virtual Ejari for licensing and
                      visas? We cover the practical details that often slow setups down.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {supportingServices.map((item, index) => (
                  <div key={item.slug} className="col-md-6 mb-4 mb-md-0">
                    <div
                      className="d-flex flex-column gap-3 p-5 border h-100"
                      data-aos="fade-up"
                      data-aos-delay={(index + 1) * 100}
                      data-aos-duration="1000"
                    >
                      <h4 className="mb-0">
                        <a
                          href={`/services/${item.slug}`}
                          className="text-dark text-decoration-none"
                        >
                          {item.title}
                        </a>
                      </h4>
                      <p className="mb-0 text-dark text-opacity-70">{item.description}</p>
                      <a href={`/services/${item.slug}`} className="btn align-self-start mt-2">
                        <span className="btn-text">Learn More</span>
                        <iconify-icon
                          icon="lucide:arrow-up-right"
                          className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                        ></iconify-icon>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us py-5 py-lg-11 py-xl-12 bg-dark">
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
                    <hr className="border-line bg-white" />
                    <span className="badge text-dark bg-white">The difference</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div
                    className="d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <h2 className="mb-0 text-white">
                      Built for speed, clarity, and follow-through
                    </h2>
                    <p className="fs-5 mb-0 text-white text-opacity-70">
                      You get a dedicated point of contact, clear pricing, and end-to-end
                      handling of government documentation — so nothing falls through the
                      cracks between setup, visas, and renewals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {whyChooseUs.map((item, index) => (
                  <div key={item} className="col-md-6 col-lg-3 mb-4">
                    <div
                      className="d-flex align-items-start gap-3"
                      data-aos="fade-up"
                      data-aos-delay={(index % 4) * 100 + 100}
                      data-aos-duration="1000"
                    >
                      <span className="round-36 flex-shrink-0 bg-primary rounded-circle hstack justify-content-center">
                        <iconify-icon
                          icon="lucide:check"
                          className="fs-6 text-white"
                        ></iconify-icon>
                      </span>
                      <p className="mb-0 text-white fs-5">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <hr className="border-line" />
                  <span className="badge text-bg-dark">Next step</span>
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
                        <h2 className="mb-0 display-5 fw-bold">
                          Ready to pick the right service for your goals?
                        </h2>
                        <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                          Tell us what you need — company formation, visas, tax, or brand
                          protection — and we will map a clear path with timelines and
                          requirements before you commit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-wrap gap-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    {/* <a href="/contact" className="btn">
                      <span className="btn-text">Book a Discovery Call</span>
                      <iconify-icon
                        icon="lucide:arrow-up-right"
                        className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                      ></iconify-icon>
                    </a> */}
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
