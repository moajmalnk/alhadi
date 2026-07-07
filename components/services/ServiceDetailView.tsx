/**
 * Shared section building blocks for service detail pages.
 * Each service page composes these explicitly so layouts can diverge freely.
 */
import {
  getServiceBySlug,
  type ServiceDocumentGroup,
  type ServiceExtraList,
  type ServiceGroupedOffering,
  type ServiceOfferingDetail,
  type ServiceOfferingItem,
  type ServiceProcessStep,
} from "../../data/services";

function normalizeOffering(item: string | ServiceOfferingItem): ServiceOfferingItem {
  if (typeof item === "string") {
    return { title: item, icon: "lucide:file-check" };
  }
  return {
    title: item.title,
    description: item.description,
    icon: item.icon || "lucide:file-check",
  };
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
      {items.map((item) => (
        <li key={item} className="hstack gap-2 align-items-start">
          <iconify-icon
            icon="lucide:check"
            className="fs-6 text-primary flex-shrink-0 mt-1"
          ></iconify-icon>
          <span className="text-dark">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  badge,
  title,
  light = false,
}: {
  badge: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="row gap-7 gap-xl-0 mb-5 mb-xl-8">
      <div className="col-xl-4 col-xxl-4">
        <div
          className="d-flex align-items-center gap-7 py-2"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <hr className={`border-line ${light ? "bg-white" : ""}`} />
          <span className={`badge ${light ? "text-dark bg-white" : "text-bg-dark"}`}>
            {badge}
          </span>
        </div>
      </div>
      <div className="col-xl-8 col-xxl-7">
        <h2
          className={`mb-0 ${light ? "text-white" : ""}`}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export function ServiceHero({
  title,
  subtitle,
  backgroundImage = "/assets/images/about/about-us.jpg",
}: {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}) {
  return (
    <section
      className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div
                className="d-flex align-items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <p className="mb-0 text-white fs-5 text-opacity-70">{subtitle}</p>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-end gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h1 className="mb-0 fs-16 text-white lh-1">{title}</h1>
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
  );
}

export function ServiceIntro({
  subtitle,
  heroText,
  intro,
}: {
  subtitle: string;
  heroText: string;
  intro: string[];
}) {
  return (
    <section className="service-intro py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
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
              <span className="badge text-bg-dark">Overview</span>
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
                    <p className="mb-0 text-primary fw-medium">{subtitle}</p>
                    <h2 className="mb-0 display-5 fw-bold">{heroText}</h2>
                    {intro.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="fs-4 mb-0 text-dark lh-base text-opacity-75"
                      >
                        {paragraph}
                      </p>
                    ))}
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
                  <span className="btn-text">Enquire Now</span>
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
  );
}

export function ServiceOfferings({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: (string | ServiceOfferingItem)[];
}) {
  const offerings = items.map(normalizeOffering);
  const isSimpleList = offerings.every((item) => !item.description);

  // Simple string lists use the same card grid as ServiceBenefits
  if (isSimpleList) {
    return (
      <section className="service-offerings py-5 py-lg-11 py-xl-12">
        <div className="container">
          <SectionHeading badge="Offerings" title={title} />
          {intro && (
            <p
              className="fs-5 text-dark text-opacity-75 mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              {intro}
            </p>
          )}
          <div
            className="row row-cols-2 row-cols-lg-5 g-3 g-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {offerings.map((item) => (
              <div key={item.title} className="col">
                <div className="card border h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3 p-lg-4">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{
                        width: "36px",
                        height: "36px",
                        minWidth: "36px",
                        background: "var(--bs-primary)",
                      }}
                    >
                      <iconify-icon
                        icon="lucide:check"
                        style={{ fontSize: "18px", color: "#fff" }}
                      ></iconify-icon>
                    </span>
                    <span className="text-dark fw-medium lh-sm">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="service-offerings py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <SectionHeading badge="Offerings" title={title} />
        {intro && (
          <div className="row mb-5 mb-xl-8">
            <div className="col-xl-8 col-xxl-7 offset-xl-4">
              <p
                className="fs-5 text-dark text-opacity-75 mb-0"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                {intro}
              </p>
            </div>
          </div>
        )}
        <div className="row g-4">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="col-md-6 col-xl-4"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100 + 100}
              data-aos-duration="1000"
            >
              <div className="service-offering-card card border-0 h-100 shadow-sm overflow-hidden">
                <div className="card-body d-flex flex-column gap-4 p-5 position-relative">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <span className="service-offering-card__icon round-52 rounded-circle bg-primary hstack justify-content-center flex-shrink-0">
                      <iconify-icon
                        icon={item.icon}
                        className="fs-5 text-white"
                      ></iconify-icon>
                    </span>
                    <span className="service-offering-card__index text-dark text-opacity-20 fw-bold lh-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="d-flex flex-column gap-2 mt-auto">
                    <h3 className="mb-0 fs-5 fw-bold">{item.title}</h3>
                    {item.description && (
                      <p className="mb-0 text-dark text-opacity-70 lh-base">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="service-offering-card__accent" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailedOfferings({
  title,
  offerings,
}: {
  title: string;
  offerings: ServiceOfferingDetail[];
}) {
  return (
    <section className="service-detailed-offerings py-5 py-lg-11 py-xl-12 bg-dark">
      <div className="container">
        <SectionHeading badge="Offerings" title={title} light />
        <ul
          className="list-unstyled mb-0"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {offerings.map((offering, index) => (
            <li
              key={offering.title}
              className="py-4 border-top border-white border-opacity-10"
            >
              <div className="row align-items-start gx-3 gy-3">
                <div className="col-lg-5 col-xxl-5">
                  <div className="d-flex align-items-start gap-3">
                    <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mb-0 text-white fs-5 fw-bold lh-sm">
                      {offering.title}
                    </h4>
                  </div>
                </div>
                <div className="col-lg-7 col-xxl-7">
                  {offering.description && (
                    <p className="mb-0 text-white text-opacity-70">
                      {offering.description}
                    </p>
                  )}
                  {offering.items && offering.items.length > 0 && (
                    <ul className="list-unstyled d-flex flex-wrap gap-x-4 gap-y-2 mt-3 mb-0">
                      {offering.items.map((item) => (
                        <li key={item} className="hstack gap-2">
                          <iconify-icon
                            icon="lucide:check"
                            className="fs-6 text-white flex-shrink-0"
                          ></iconify-icon>
                          <span className="text-white text-opacity-70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceGroupedOfferings({
  title,
  groups,
}: {
  title: string;
  groups: ServiceGroupedOffering[];
}) {
  return (
    <section className="service-grouped-offerings py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <SectionHeading badge="Offerings" title={title} />
        <div className="row">
          {groups.map((group, index) => (
            <div key={group.title} className="col-lg-6 mb-5">
              <div
                className="d-flex flex-column gap-3 p-5 bg-white h-100 border"
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100 + 100}
                data-aos-duration="1000"
              >
                <h4 className="mb-0">{group.title}</h4>
                {group.intro && (
                  <p className="mb-0 text-dark text-opacity-75">{group.intro}</p>
                )}
                <CheckList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceWhatIs({
  title,
  description,
  items,
  footer,
}: {
  title: string;
  description: string;
  items?: string[];
  footer?: string;
}) {
  const hasItems = Boolean(items?.length);

  return (
    <section className="service-what-is py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
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
              <span className="badge text-bg-dark">Overview</span>
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
                    <h2 className="mb-0 display-5 fw-bold">{title}</h2>
                    <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              {hasItems && (
                <div
                  className={`row row-cols-2 ${benefitsColumnClass(items!.length)} g-3 g-lg-4`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {items!.map((item) => (
                    <div key={item} className="col">
                      <div className="card border h-100">
                        <div className="card-body d-flex flex-column gap-3 p-3 p-lg-4">
                          <span
                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                            style={{
                              width: "36px",
                              height: "36px",
                              minWidth: "36px",
                              background: "var(--bs-primary)",
                            }}
                          >
                            <iconify-icon
                              icon="lucide:check"
                              style={{ fontSize: "18px", color: "#fff" }}
                            ></iconify-icon>
                          </span>
                          <span className="text-dark fw-medium lh-sm">{item}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {footer && (
                <p
                  className="fs-4 mb-0 text-dark lh-base text-opacity-75"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {footer}
                </p>
              )}
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
  );
}

const ELIGIBILITY_ICONS = [
  "lucide:user-check",
  "lucide:briefcase",
  "lucide:building-2",
  "lucide:graduation-cap",
  "lucide:stethoscope",
  "lucide:landmark",
  "lucide:sparkles",
  "lucide:award",
];

function normalizeEligibilityItem(
  item: string | ServiceOfferingItem,
  index: number
): ServiceOfferingItem {
  if (typeof item === "string") {
    return {
      title: item,
      icon: ELIGIBILITY_ICONS[index % ELIGIBILITY_ICONS.length],
    };
  }
  return {
    title: item.title,
    description: item.description,
    icon: item.icon || ELIGIBILITY_ICONS[index % ELIGIBILITY_ICONS.length],
  };
}

export function ServiceWhoCanApply({
  title,
  intro,
  items,
  footer,
}: {
  title: string;
  intro?: string;
  items: (string | ServiceOfferingItem)[];
  footer?: string;
}) {
  const eligibilityItems = items.map(normalizeEligibilityItem);
  const isCompact = eligibilityItems.length <= 4;

  return (
    <section className="service-who py-5 py-lg-11 py-xl-12 bg-dark position-relative overflow-hidden">
      <div
        className="service-who__glow position-absolute top-0 end-0"
        aria-hidden="true"
      />
      <div className="container position-relative">
        <SectionHeading badge="Eligibility" title={title} light />
        {intro && (
          <p
            className="fs-5 text-white text-opacity-70 mb-5 mb-xl-8 col-xl-8 col-xxl-7"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {intro}
          </p>
        )}
        <div className={`row g-4 ${isCompact ? "row-cols-1 row-cols-md-2" : "row-cols-1 row-cols-md-2 row-cols-xl-3"}`}>
          {eligibilityItems.map((item, index) => (
            <div
              key={item.title}
              className="col"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100 + 100}
              data-aos-duration="1000"
            >
              <div className="service-who-card h-100">
                <div className="service-who-card__icon">
                  <iconify-icon icon={item.icon}></iconify-icon>
                </div>
                <div className="service-who-card__body">
                  {/* <span className="service-who-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}
                  <h3 className="service-who-card__title">{item.title}</h3>
                  {item.description && (
                    <p className="service-who-card__desc">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {footer && (
          <div
            className="service-who-note mt-5 mt-xl-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="service-who-note__icon">
              <iconify-icon icon="lucide:info"></iconify-icon>
            </span>
            <p className="mb-0">{footer}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function benefitsColumnClass(count: number): string {
  // Pick a column count that fills complete rows when possible.
  if (count % 3 === 0) return "row-cols-lg-3";
  if (count % 4 === 0) return "row-cols-lg-4";
  if (count % 5 === 0) return "row-cols-lg-5";
  if (count === 7) return "row-cols-lg-4";
  return "row-cols-lg-3";
}

export function ServiceBenefits({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: string[];
}) {
  return (
    <section className="service-benefits py-5 py-lg-11 py-xl-12">
      <div className="container">
        <SectionHeading badge="Benefits" title={title} />
        {intro && (
          <p
            className="fs-5 text-dark text-opacity-75 mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {intro}
          </p>
        )}
        <div
          className={`row row-cols-2 ${benefitsColumnClass(items.length)} g-3 g-lg-4`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {items.map((item) => (
            <div key={item} className="col">
              <div className="card border h-100">
                <div className="card-body d-flex flex-column gap-3 p-3 p-lg-4">
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      minWidth: "36px",
                      background: "var(--bs-primary)",
                    }}
                  >
                    <iconify-icon
                      icon="lucide:check"
                      style={{ fontSize: "18px", color: "#fff" }}
                    ></iconify-icon>
                  </span>
                  <span className="text-dark fw-medium lh-sm">{item}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentIcon({ size = 36 }: { size?: number }) {
  return (
    <span
      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        background: "var(--bs-primary)",
      }}
    >
      <iconify-icon
        icon="lucide:file-text"
        style={{ fontSize: `${size * 0.45}px`, color: "#fff" }}
      ></iconify-icon>
    </span>
  );
}

export function ServiceDocuments({
  title,
  intro,
  groups,
  items,
  footer,
}: {
  title: string;
  intro?: string;
  groups?: ServiceDocumentGroup[];
  items?: string[];
  footer?: string;
}) {
  return (
    <section className="service-documents py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-8">
          <div>
            <SectionHeading badge="Documents" title={title} />
            {intro && (
              <p
                className="fs-5 text-dark text-opacity-75 mb-0"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                {intro}
              </p>
            )}
          </div>

          {groups && (
            <div className="row g-4">
              {groups.map((group, index) => (
                <div key={group.title} className="col-lg-6">
                  <div
                    className="bg-white border h-100 p-4 p-xl-5 d-flex flex-column gap-4"
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 100 + 100}
                    data-aos-duration="1000"
                  >
                    <div className="d-flex align-items-center gap-3 pb-3 border-bottom">
                      <span
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                        style={{
                          width: "44px",
                          height: "44px",
                          minWidth: "44px",
                          background: index % 2 === 0 ? "var(--bs-primary)" : "var(--bs-secondary)",
                        }}
                      >
                        <iconify-icon
                          icon={
                            index % 2 === 0
                              ? "lucide:folder-open"
                              : "lucide:users"
                          }
                          style={{ fontSize: "20px", color: "#fff" }}
                        ></iconify-icon>
                      </span>
                      <div>
                        <h4 className="mb-0">{group.title}</h4>
                        <p className="mb-0 text-dark text-opacity-50 small">
                          {group.items.length} document
                          {group.items.length === 1 ? "" : "s"}
                        </p>
                      </div>
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {group.items.map((item, itemIndex) => (
                        <li
                          key={item}
                          className="d-flex align-items-center gap-3"
                        >
                          <span className="text-primary fw-bold flex-shrink-0" style={{ minWidth: "1.5rem" }}>
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="text-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
              {items.map((item, index) => (
                <div
                  key={item}
                  className="col"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100 + 100}
                  data-aos-duration="1000"
                >
                  <div className="card border h-100 bg-white">
                    <div className="card-body d-flex align-items-center gap-3 p-4">
                      <DocumentIcon />
                      <div className="d-flex flex-column gap-1 min-w-0">
                        <span className="text-primary fw-bold small">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-dark fw-medium lh-sm">{item}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {footer && (
            <div
              className="d-flex align-items-start gap-3 p-4 bg-white border"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              style={{ borderLeft: "4px solid var(--bs-primary)" }}
            >
              <span
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  minWidth: "36px",
                  background: "var(--bs-primary)",
                }}
              >
                <iconify-icon
                  icon="lucide:info"
                  style={{ fontSize: "18px", color: "#fff" }}
                ></iconify-icon>
              </span>
              <p className="mb-0 text-dark text-opacity-75">{footer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({
  title,
  steps,
}: {
  title: string;
  steps: ServiceProcessStep[];
}) {
  return (
    <section className="service-process py-5 py-lg-11 py-xl-12">
      <div className="container">
        <SectionHeading badge="Process" title={title} />
        <div className="row">
          {steps.map((step, index) => (
            <div key={step.title} className="col-lg-6 mb-5">
              <div
                className="d-flex flex-column gap-3 p-5 border h-100"
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100 + 100}
                data-aos-duration="1000"
              >
                <span className="round-36 flex-shrink-0 bg-primary rounded-circle hstack justify-content-center fw-medium text-white">
                  {index + 1}
                </span>
                <h4 className="mb-0">{step.title}</h4>
                <p className="mb-0 text-dark text-opacity-75">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceExtraList({
  list,
  altBackground = false,
}: {
  list: ServiceExtraList;
  altBackground?: boolean;
}) {
  return (
    <section
      className={`service-extra py-5 py-lg-11 py-xl-12 ${altBackground ? "bg-light-gray" : ""}`}
    >
      <div className="container">
        <SectionHeading badge="Details" title={list.title} />
        {list.intro && (
          <p
            className="fs-5 text-dark text-opacity-75 mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {list.intro}
          </p>
        )}
        <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {list.items.map((item) => (
            <div key={item} className="col-md-6 col-lg-4 mb-4">
              <div className="hstack gap-2 align-items-start">
                <iconify-icon
                  icon="lucide:check"
                  className="fs-6 text-primary flex-shrink-0 mt-1"
                ></iconify-icon>
                <span className="text-dark fs-5">{item}</span>
              </div>
            </div>
          ))}
        </div>
        {list.footer && (
          <p
            className="fs-5 text-dark text-opacity-75 mt-4 mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {list.footer}
          </p>
        )}
      </div>
    </section>
  );
}

export function ServiceWhyChoose({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="service-why py-5 py-lg-11 py-xl-12 bg-dark">
      <div className="container">
        <SectionHeading badge="Why us" title={title} light />
        <div className="row">
          {items.map((item, index) => (
            <div key={item} className="col-md-6 col-lg-4 mb-4">
              <div
                className="d-flex align-items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100 + 100}
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
    </section>
  );
}

export function ServiceRelated({
  items,
}: {
  items: { slug: string; title: string }[];
}) {
  const relatedServices = items.map((item) => {
    const service = getServiceBySlug(item.slug);
    return {
      slug: item.slug,
      title: item.title,
      subtitle: service?.subtitle,
      image: service?.image || "/assets/images/services/Company-Formation.jpg",
    };
  });

  return (
    <section className="service-related py-5 py-lg-11 py-xl-12">
      <div className="container">
        <SectionHeading badge="Related" title="Explore related services" />
        <div className="row">
          {relatedServices.map((item, index) => (
            <div key={item.slug} className="col-md-6 mb-5 mb-md-0">
              <div
                className="portfolio d-flex flex-column gap-6 h-100"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                data-aos-duration="1000"
              >
                <div className="portfolio-img position-relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100 object-fit-cover"
                    style={{ aspectRatio: "16/10" }}
                  />
                  <div className="portfolio-overlay">
                    <a
                      href={`/services/${item.slug}`}
                      className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center"
                    >
                      <iconify-icon
                        icon="lucide:arrow-up-right"
                        className="fs-8 text-white"
                      ></iconify-icon>
                    </a>
                  </div>
                </div>
                <div className="portfolio-details d-flex flex-column gap-2">
                  {item.subtitle && (
                    <p className="mb-0 text-dark text-opacity-70">
                      {item.subtitle}
                    </p>
                  )}
                  <h3 className="mb-0">
                    <a
                      href={`/services/${item.slug}`}
                      className="text-dark text-decoration-none"
                    >
                      {item.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCta({
  title,
  heading,
  description,
}: {
  title: string;
  heading?: string;
  description?: string;
}) {
  return (
    <section className="about-cta py-5 py-lg-11 py-xl-12 position-relative overflow-hidden bg-light-gray">
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
              <div
                className="d-flex flex-column gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <h2 className="mb-0 display-5 fw-bold">
                  {heading || `Interested in ${title}?`}
                </h2>
                <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                  {description ||
                    "Share your requirements and our consultants will outline the documents, timeline, and next steps for this service."}
                </p>
              </div>
              <div
                className="d-flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <a href="/contact" className="btn">
                  <span className="btn-text">Book a Discovery Call</span>
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  ></iconify-icon>
                </a>
                {/* <a href="/services" className="btn">
                  <span className="btn-text">All Services</span>
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  ></iconify-icon>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

