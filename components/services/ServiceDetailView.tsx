import type {
  ServiceDetail,
  ServiceDocumentGroup,
  ServiceExtraList,
  ServiceGroupedOffering,
  ServiceOfferingDetail,
  ServiceProcessStep,
} from "../../data/services";

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
    <section className="service-intro py-5 py-lg-11 py-xl-12">
      <div className="container">
        <a
          href="/services"
          className="btn py-2 ps-3 pe-5 mb-7 mb-xl-10"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <span className="btn-text pe-1">Back to Services</span>
          <iconify-icon
            icon="lucide:arrow-up-right"
            className="btn-icon bg-white text-dark round-36 rounded-circle hstack justify-content-center fs-5 shadow-sm"
          ></iconify-icon>
        </a>
        <div
          className="d-flex flex-column gap-4 col-lg-10 col-xl-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <p className="mb-0 text-primary fw-medium">{subtitle}</p>
          <h2 className="mb-0 display-6 fw-bold">{heroText}</h2>
          {intro.map((paragraph) => (
            <p key={paragraph} className="mb-0 fs-5 text-dark text-opacity-75">
              {paragraph}
            </p>
          ))}
        </div>
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
  items: string[];
}) {
  return (
    <section className="service-offerings py-5 py-lg-11 py-xl-12 bg-light-gray">
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
        <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {items.map((item) => (
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
    <section className="service-detailed-offerings py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <SectionHeading badge="Offerings" title={title} />
        <div className="row">
          {offerings.map((offering, index) => (
            <div key={offering.title} className="col-lg-6 mb-5">
              <div
                className="d-flex flex-column gap-3 p-5 bg-white h-100 border"
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100 + 100}
                data-aos-duration="1000"
              >
                <h4 className="mb-0">{offering.title}</h4>
                {offering.description && (
                  <p className="mb-0 text-dark text-opacity-75">{offering.description}</p>
                )}
                {offering.items && <CheckList items={offering.items} />}
              </div>
            </div>
          ))}
        </div>
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
  return (
    <section className="service-what-is py-5 py-lg-11 py-xl-12">
      <div className="container">
        <SectionHeading badge="Overview" title={title} />
        <div
          className="d-flex flex-column gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p className="mb-0 fs-5 text-dark text-opacity-75">{description}</p>
          {items && (
            <div className="row">
              {items.map((item) => (
                <div key={item} className="col-md-6 col-lg-4 mb-3">
                  <div className="hstack gap-2 align-items-start">
                    <iconify-icon
                      icon="lucide:check"
                      className="fs-6 text-primary flex-shrink-0 mt-1"
                    ></iconify-icon>
                    <span className="text-dark">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {footer && (
            <p className="mb-0 fs-5 text-dark text-opacity-75">{footer}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServiceWhoCanApply({
  title,
  intro,
  items,
  footer,
}: {
  title: string;
  intro?: string;
  items: string[];
  footer?: string;
}) {
  return (
    <section className="service-who py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <SectionHeading badge="Eligibility" title={title} />
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
        <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {items.map((item) => (
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
        {footer && (
          <p
            className="fs-5 text-dark text-opacity-75 mt-4 mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  );
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
        <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {items.map((item) => (
            <div key={item} className="col-md-6 mb-4">
              <div className="hstack gap-3 align-items-start">
                <span className="round-36 flex-shrink-0 bg-primary rounded-circle hstack justify-content-center">
                  <iconify-icon
                    icon="lucide:check"
                    className="fs-6 text-dark"
                  ></iconify-icon>
                </span>
                <span className="text-dark fs-5">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
        <SectionHeading badge="Documents" title={title} />
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
        {groups && (
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
                  <CheckList items={group.items} />
                </div>
              </div>
            ))}
          </div>
        )}
        {items && (
          <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {items.map((item) => (
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
        )}
        {footer && (
          <p
            className="fs-5 text-dark text-opacity-75 mt-4 mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {footer}
          </p>
        )}
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
                <span className="round-36 flex-shrink-0 bg-primary rounded-circle hstack justify-content-center fw-medium text-dark">
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
                    className="fs-6 text-dark"
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
  return (
    <section className="service-related py-5 py-lg-11 py-xl-12">
      <div className="container">
        <SectionHeading badge="Related" title="Explore related services" />
        <div className="d-flex flex-wrap gap-4">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/services/${item.slug}`}
              className="btn"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <span className="btn-text">{item.title}</span>
              <iconify-icon
                icon="lucide:arrow-up-right"
                className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
              ></iconify-icon>
            </a>
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
                <a href="/services" className="btn">
                  <span className="btn-text">All Services</span>
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
  );
}

/** Default full layout — use as a starting point; replace with custom composition per page when needed. */
export default function ServiceDetailView({ service }: { service: ServiceDetail }) {
  return (
    <div className="page-wrapper overflow-hidden">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.image}
      />
      <ServiceIntro
        subtitle={service.subtitle}
        heroText={service.heroText}
        intro={service.intro}
      />
      {service.offerings && service.offerings.length > 0 && (
        <ServiceOfferings
          title={service.offeringsTitle || "Our Services"}
          intro={service.offeringsIntro}
          items={service.offerings}
        />
      )}
      {service.detailedOfferings && service.detailedOfferings.length > 0 && (
        <ServiceDetailedOfferings
          title={service.offeringsTitle || "Our Services"}
          offerings={service.detailedOfferings}
        />
      )}
      {service.groupedOfferings && service.groupedOfferings.length > 0 && (
        <ServiceGroupedOfferings
          title={service.offeringsTitle || "Our Services"}
          groups={service.groupedOfferings}
        />
      )}
      {service.whatIs && <ServiceWhatIs {...service.whatIs} />}
      {service.whoCanApply && <ServiceWhoCanApply {...service.whoCanApply} />}
      {service.benefits && <ServiceBenefits {...service.benefits} />}
      {service.documents && <ServiceDocuments {...service.documents} />}
      {service.process && (
        <ServiceProcess title={service.process.title} steps={service.process.steps} />
      )}
      {service.extraLists?.map((list, listIndex) => (
        <ServiceExtraList
          key={list.title}
          list={list}
          altBackground={listIndex % 2 === 0}
        />
      ))}
      {service.whyChoose && (
        <ServiceWhyChoose title={service.whyChoose.title} items={service.whyChoose.items} />
      )}
      {service.related && service.related.length > 0 && (
        <ServiceRelated items={service.related} />
      )}
      <ServiceCta title={service.title} />
    </div>
  );
}
