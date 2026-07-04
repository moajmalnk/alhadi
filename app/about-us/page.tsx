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
      style={{ backgroundImage: 'url(/assets/images/about/about-us.jpg)' }}>
      <div className="container">
        <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                {/* <img src="/assets/images/svgs/primary-leaf.svg" alt="" className="img-fluid animate-spin" /> */}
                <p className="mb-0 text-white fs-5 text-opacity-70">We simplify business setup and corporate services, helping entrepreneurs and investors establish and grow successful businesses across the UAE.</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-0 fs-16 text-white lh-1">About us</h1>
            <a href="javascript:void(0)" className="p-1 ps-7 bg-primary rounded-pill">
              <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*  About Content Section */}
    <section className="about-content py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11 gap-xxl-12">
          <div className="row align-items-lg-start gy-4 gy-lg-0">
            <div className="col-lg-4 pe-lg-4">
              <h2 className="fs-13 mb-0 lh-1" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                More than consultants.
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4 gap-lg-5" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <p className="mb-0 fs-5 text-dark">
                  At Al Hadi Business Services, we are your dedicated partners in realizing your business dreams.
                  ‘Al-Hadi’ means deliver guidance in English, and that’s exactly what we do — guide you towards success.
                </p>
                <p className="mb-0 fs-5 text-dark">
                  Incorporated in 2021, we have swiftly become a trusted name in Dubai, UAE, known for our commitment,
                  expertise, and a handshake approach with each client.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-xl-5">
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h2 className="mb-0 fs-13 pb-7 border-bottom"><span className="count" data-target="3">3</span></h2>
                <div className="d-flex flex-column gap-3">
                  <h4 className="mb-0">Company formation pathways</h4>
                  <p className="mb-0">Mainland, Free Zone, and Offshore company setup across the UAE with expert guidance
                    at every step.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <h2 className="mb-0 fs-13 pb-7 border-bottom"><span className="count" data-target="6">6</span>+</h2>
                <div className="d-flex flex-column gap-3">
                  <h4 className="mb-0">Core business services</h4>
                  <p className="mb-0">Business setup, PRO & document clearing, visas, corporate tax & VAT,
                    trademarks, and Golden Visa support.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8 mb-lg-0">
              <div className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
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

    {/*  Our Commitment Section */}
    <section className="testimonial py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="row align-items-center gy-5 gy-lg-0">
          <div className="col-lg-6">
            <div
              className="overflow-hidden shadow-sm"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/about/commitment.jpg"
                alt="Our commitment to client success"
                className="img-fluid w-100 object-fit-cover"
                style={{ aspectRatio: "1.5" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="d-flex flex-column gap-6 ps-lg-8 ps-xl-10"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className="mb-0 display-5 fw-bold">Our Commitment</h2>
              <p className="fs-5 mb-0 text-dark lh-base text-opacity-75">
                Your success is our celebration. We aspire to create numerous success stories by celebrating every
                milestone achieved by our clients. Let’s embark on this journey together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
              {/* <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">
                04
              </span> */}
              <hr className="border-line" />
              <span className="badge text-bg-dark">Get started</span>
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
                      Start your business in Dubai with confidence
                    </h2>
                    <p className="fs-4 mb-0 text-dark lh-base text-opacity-75">
                      Whether you are starting a new company, expanding your business, or managing compliance
                      requirements, Al Hadi Business Services is your trusted partner in Dubai. Contact us today for
                      professional business setup and PRO services in the UAE.
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
