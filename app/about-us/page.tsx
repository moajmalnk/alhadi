import { seoHead } from "@/lib/seo/seoHead";
import VisionMissionParallax from "@/components/about/VisionMissionParallax";

export const metadata = seoHead({
  title: "About Us",
  description:
    "Learn about Al Hadi Business Services — your trusted partner for UAE business setup, trade licenses, PRO services, visas, and compliance in Dubai.",
  path: "/about-us",
  keywords: [
    "Al Hadi Business Services",
    "about Al Hadi Dubai",
    "UAE business consultants",
  ],
});

const services = [
  "Business Setup",
  "PRO & Document Clearing",
  "Visa Services",
  "Corporate Tax & VAT",
  "Trademark Registration",
  "Golden Visa",
];

export default function AboutUs() {
  return (
    <>


  

  {/*  Page Wrapper */}
  <div className="page-wrapper overflow-hidden">

    {/*  Banner Section */}
    <section className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
      style={{ 
        backgroundImage: 'url(/assets/images/about/about.jpg)',
        height: 'calc(100vh - 112px)',
        minHeight: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
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
              <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <p className="mb-0 text-white fs-5">We simplify business setup and corporate services, helping entrepreneurs and investors establish and grow successful businesses across the UAE.</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-0 fs-16 text-white lh-1">About us</h1>
          </div>
        </div>
      </div>
    </section>

    {/* Who We Are Section */}
    <section className="who-we-are-section py-6 py-lg-11 position-relative overflow-hidden bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column: Text */}
          <div className="col-lg-7 pe-lg-5">
            <div
              className="d-flex flex-column gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              {/* Indicator */}
              <div className="d-flex align-items-center gap-3 mb-1">
                <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                  Who We Are
                </span>
              </div>

              {/* Main Title */}
              <h2 className="display-5 fw-bolder text-dark mb-2 lh-sm" style={{ fontWeight: 800 }}>
                The <span style={{ color: "var(--brand-gold-base, #C29328)" }}>Al Hadi</span> Story
              </h2>

              {/* Combined Paragraphs in Featured Quote Box */}
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm mb-2"
                style={{
                  background: "rgba(194, 147, 40, 0.05)",
                  borderLeft: "4px solid var(--brand-gold-base, #C29328)",
                }}
              >
                <p className="fs-5 mb-4 text-dark lh-base text-opacity-75" style={{ lineHeight: "1.7" }}>
                  Al Hadi Business Services is a team united by a single purpose: helping businesses in the UAE thrive. The foundation of the company was built on passion, compassion, and strong values. Coming from diverse cultures and professional backgrounds, we work together as a compass, guiding our clients through every stage of their business journey.
                </p>
                <p className="fs-5 text-dark lh-base text-opacity-75 mb-0" style={{ lineHeight: "1.7" }}>
                  With the experience of over 10 years supporting UAE businesses, we have built a strong reputation for reliability and expertise. At a time when entrepreneurs were eager to enter the UAE market but struggled to find trusted guidance, Al Hadi stepped in to bridge the gap.
                </p>
              </div>

              <p className="fs-5 text-dark lh-base text-opacity-75 mt-2" style={{ lineHeight: "1.7" }}>
                Our qualified & dedicated professionals are motivated to practice innovative and commercial approaches to meet today's highly challenging business environment. Our services include: <strong className="text-dark fw-bold">Business Setup, PRO & Document Clearing, Visa Services, Corporate Tax & VAT, Trademark Registration, and Golden Visa support.</strong>
              </p>
              <p className="fs-5 text-dark lh-base text-opacity-75 mb-0" style={{ lineHeight: "1.7" }}>
                Trust us to provide accessible, affordable, and expert assistance to businesses all over the world!
              </p>
            </div>
          </div>

          {/* Right Column: Visual Image Showcase */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div
              className="position-relative ps-lg-4"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {/* Main Image Frame */}
              <div className="rounded-4 overflow-hidden shadow-lg position-relative border border-light">
                <img
                  src="/assets/images/about/about-img.jpg"
                  alt="Al Hadi Business Services Consultants"
                  className="img-fluid w-100 object-fit-cover"
                  style={{ minHeight: "450px" }}
                />
                {/* Subtle gradient overlay to enhance badge contrast */}
                <div 
                  className="position-absolute top-0 start-0 w-100" 
                  style={{ height: "40%", background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)" }}
                ></div>
              </div>

              {/* Minimal Floating Experience Badge */}
              <div
                className="position-absolute top-0 end-0 me-3 mt-3 px-4 py-3 rounded-4 shadow-lg bg-white d-flex align-items-center gap-4"
                style={{ zIndex: 3, transform: "translateX(1rem) translateY(-1rem)" }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center rounded-3 px-3 py-2" 
                  style={{ backgroundColor: "rgba(194, 147, 40, 0.1)" }}
                >
                  <span className="fw-bolder display-6 mb-0" style={{ color: "var(--brand-gold-base, #C29328)" }}>10+</span>
                </div>
                <div className="d-flex flex-column pe-3">
                  <span className="fw-bolder text-dark fs-5 lh-sm mb-1">Years Experience</span>
                  <span className="text-secondary fs-6 lh-sm mb-0">UAE Business Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  About Content Section */}
    <section className="about-content py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11 gap-xxl-12">
          <div className="row gx-xl-5">
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7 rounded-4 p-4 p-lg-5 shadow-sm h-100" style={{ backgroundColor: "rgba(194, 147, 40, 0.05)" }} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h2 className="mb-0 fs-13 pb-7 border-bottom"><span className="count" data-target="3">3</span></h2>
                <div className="d-flex flex-column gap-3">
                  <h4 className="mb-0">Company formation pathways</h4>
                  <p className="mb-0">Mainland, Free Zone, and Offshore company setup across the UAE with expert guidance
                    at every step.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7 rounded-4 p-4 p-lg-5 shadow-sm h-100" style={{ backgroundColor: "rgba(194, 147, 40, 0.05)" }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <h2 className="mb-0 fs-13 pb-7 border-bottom"><span className="count" data-target="6">6</span>+</h2>
                <div className="d-flex flex-column gap-3">
                  <h4 className="mb-0">Core business services</h4>
                  <p className="mb-0">Business setup, PRO & document clearing, visas, corporate tax & VAT,
                    trademarks, and Golden Visa support.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7 rounded-4 p-4 p-lg-5 shadow-sm h-100" style={{ backgroundColor: "rgba(194, 147, 40, 0.05)" }} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <h2 className="mb-0 fs-13 pb-7 border-bottom"><span className="count" data-target="15">15</span>+</h2>
                <div className="d-flex flex-column gap-3">
                  <h4 className="mb-0">UAE Free Zones supported</h4>
                  <p className="mb-0">Setup assistance across leading Free Zones including IFZA, DMCC, Meydan, Dubai South,
                    and more.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Our Commitment Section (Redesigned) */}
    <section className="commitment-section py-6 py-lg-10 position-relative overflow-hidden bg-light" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container position-relative z-2">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column gap-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex align-items-center mb-1">
                <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                  Our Commitment
                </span>
              </div>
              <h2 className="display-5 fw-bolder text-dark mb-0 lh-sm" style={{ fontWeight: 800 }}>
                More than <span style={{ color: "var(--brand-gold-base, #C29328)" }}>consultants.</span>
              </h2>
              <div className="d-flex flex-column gap-4">
                <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                  At Al Hadi Business Services, we are your dedicated partners in realizing your business dreams. ‘Al-Hadi’ means deliver guidance in English, and that’s exactly what we do — guide you towards success. Whether you are an aspiring entrepreneur or an established enterprise, our comprehensive suite of services ensures a smooth and efficient setup process.
                </p>
                <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                  Incorporated in 2021, we have swiftly become a trusted name in Dubai, UAE, known for our commitment, expertise, and a handshake approach with each client. We believe in building long-term relationships based on transparency, reliability, and unparalleled corporate support tailored precisely to your unique objectives.
                </p>
              </div>
              
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-10 mt-2">
                <h3 className="mb-3 fs-3 fw-bold">Our Promise</h3>
                <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                  Your success is our celebration. We aspire to create numerous success stories by celebrating every milestone achieved by our clients. By acting as a true extension of your business, we handle the complexities of documentation, legalities, and administration so that you can focus entirely on growth and innovation. Let’s embark on this journey together and turn your vision into a thriving reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision, Mission & Purpose Section (Redesigned from Scratch with Parallax) */}
    <VisionMissionParallax />

    {/*  Services Marquee Section */}
    {/* <section className="services-marquee">
      <div className="marquee w-100 d-flex align-items-center overflow-hidden bg-primary py-4">
        <div className="marquee-content d-flex align-items-center gap-8">
          {Array.from({ length: 4 }).flatMap((_, setIndex) =>
            services.map((service) => (
              <div key={`${setIndex}-${service}`} className="hstack gap-4 flex-shrink-0">
                <h4 className="mb-0">{service}</h4>
                <span className="round-10 bg-dark bg-opacity-10 rounded-circle flex-shrink-0"></span>
              </div>
            ))
          )}
        </div>
      </div> */}
    {/* </section> */}

    {/*  Meet our team Section */}
    {/* <section className="meet-our-team py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">06</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">The team</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Meet our team</h2>
                    <p className="fs-5 mb-0 text-opacity-70">Our team is committed to redefining digital experiences through
                      innovative web solutions while fostering a diverse and collaborative environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-1.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Martha Finley</h4>
                  <p className="mb-0">Creative Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-2.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Floyd Miles</h4>
                  <p className="mb-0">Marketing Strategist</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="300"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-3.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Glenna Snyder</h4>
                  <p className="mb-0">Lead Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="meet-team d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay="400"
                data-aos-duration="1000">
                <div className="meet-team-img position-relative overflow-hidden">
                  <img src="/assets/images/team/team-img-4.jpg" alt="team-img" className="img-fluid w-100" />
                  <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                    <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-twitter.svg" alt="twitter" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-be.svg" alt="be" /></a></li>
                      <li><a href="#!"
                          className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center"><img
                            src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="meet-team-details">
                  <h4 className="mb-0">Albert Flores</h4>
                  <p className="mb-0">UX/UI Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {/*  CTA Section */}
    <section className="about-cta py-6 py-lg-11 py-xl-12 position-relative overflow-hidden bg-white" style={{ backgroundColor: "#ffffff" }}>
      {/* Subtle Background Graphic */}
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
              <div
                className="d-flex align-items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <span className="badge bg-white text-dark border border-secondary border-opacity-10 shadow-sm px-3 py-2 fw-semibold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.85rem", borderRadius: "100px" }}>
                  Get started
                </span>
              </div>
              
              <div
                className="d-flex flex-column gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h2 className="mb-0 display-5 fw-bolder lh-sm text-dark" style={{ fontWeight: 800 }}>
                  Start your business in Dubai with <span style={{ color: "var(--brand-gold-base, #C29328)" }}>confidence</span>
                </h2>
                <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                  Whether you are starting a new company, expanding your business, or managing compliance
                  requirements, Al Hadi Business Services is your trusted partner in Dubai. Contact us today for
                  professional business setup and PRO services in the UAE.
                </p>
              </div>

              <div
                className="d-flex flex-wrap justify-content-center gap-4 pt-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <a href="/services" className="btn">
                  <span className="btn-text">View Services</span>
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  ></iconify-icon>
                </a>
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

  

  


  
  
  
  
  
  {/* solar icons */}
  

    </>
  );
}
