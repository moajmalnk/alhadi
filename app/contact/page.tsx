"use client";

import React, { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Toast from "@/components/Toast";
import { createLead } from "@/lib/leads";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    createLead({
      source: "contact",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    });

    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setShowToast(true);
    }, 800);
  };

  return (
    <>
      {/*  Page Wrapper */}
      <div className="page-wrapper overflow-hidden">
        {/*  Banner Section */}
        <section
          className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/contact-us2.jpg)",
          }}
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
                      Contact us today for professional{" "}
                      <span className="text-primary">
                        business setup and PRO services
                      </span>{" "}
                      in the UAE.
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
                <h1 className="mb-0 fs-16 text-white lh-1">Contact</h1>
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

        {/*  Get in touch Section */}
        <section className="get-in-touch py-5 py-lg-11 py-xl-12">
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
                    <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">
                      10
                    </span>
                    <hr className="border-line bg-white" />
                    <span className="badge text-bg-dark">Contact us</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div className="row">
                    <div className="col-xxl-8">
                      <div
                        className="d-flex flex-column gap-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <h2 className="mb-0">Get in touch</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between gap-7 gap-xl-0">
                <div className="col-xl-3">
                  <p
                    className="mb-0 fs-5"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    Start your UAE business registration with a free expert
                    consultation from Al Hadi Business Services in Dubai. Tell us
                    about your business needs—we’re here to help.
                  </p>
                </div>
                <div className="col-xl-8">
                  <form
                    className="d-flex flex-column gap-7"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control border-bottom border-dark"
                        id="contactLeadName"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control border-bottom border-dark"
                          id="contactLeadEmail"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          className="form-control border-bottom border-dark"
                          id="contactLeadPhone"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        className="form-control border-bottom border-dark"
                        id="contactLeadMessage"
                        name="message"
                        placeholder="Tell us about your business needs"
                        rows={3}
                        required
                      ></textarea>
                    </div>
                    <AnimatedButton
                      type="submit"
                      className="w-100"
                      isLoading={isSubmitting}
                      text="Submit message"
                      loadingText="Sending..."
                      style={{ height: "60px" }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Contact Details Section */}
        <section className="contact-details py-5 py-lg-11 py-xl-12 bg-light-gray">
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
                    <span className="badge text-bg-dark">Reach us</span>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-7">
                  <div
                    className="d-flex flex-column gap-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <h2 className="mb-0">Our contact details</h2>
                    <p className="fs-5 mb-0 text-opacity-70">
                      Prefer to call or email? Reach Al Hadi Business Services
                      directly — we&apos;re ready to help with business setup,
                      PRO services, visas, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-4">
                  <div
                    className="card border-0 shadow-sm h-100"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex gap-4 p-4 p-xl-5">
                      <span className="round-52 flex-shrink-0 rounded-circle bg-dark hstack justify-content-center">
                        <iconify-icon
                          icon="lucide:map-pin"
                          className="fs-7 text-white"
                        ></iconify-icon>
                      </span>
                      <div className="d-flex flex-column gap-2">
                        <h3 className="mb-0 fs-6">Location</h3>
                        <p className="mb-0 text-dark text-opacity-70 lh-base">
                          Shop No: 3, Al Ovaisi Bldg
                          <br />
                          Ground floor, Near Wholesale Plaza Building, Deira,
                          <br />
                          Murshid Bazar, Dubai, UAE
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Al+Ovaisi+Bldg+Murshid+Bazar+Deira+Dubai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-hover hstack gap-2 text-dark fw-medium text-decoration-none align-self-start mt-1"
                        >
                          Get directions
                          <iconify-icon
                            icon="lucide:arrow-up-right"
                            className="fs-6"
                          ></iconify-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="card border-0 shadow-sm h-100"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex gap-4 p-4 p-xl-5">
                      <span className="round-52 flex-shrink-0 rounded-circle bg-dark hstack justify-content-center">
                        <iconify-icon
                          icon="lucide:phone"
                          className="fs-7 text-white"
                        ></iconify-icon>
                      </span>
                      <div className="d-flex flex-column gap-2">
                        <h3 className="mb-0 fs-6">Phone</h3>
                        <a
                          href="tel:+97144312227"
                          className="link-hover text-dark text-decoration-none"
                        >
                          +971-4 431 2227
                        </a>
                        <a
                          href="tel:+971589484494"
                          className="link-hover text-dark text-decoration-none"
                        >
                          +971 58 948 4494
                        </a>
                        <a
                          href="tel:+971524642020"
                          className="link-hover text-dark text-decoration-none"
                        >
                          +971 52 464 2020
                        </a>
                        <a
                          href="tel:+971523709846"
                          className="link-hover text-dark text-decoration-none"
                        >
                          +971 52 370 9846
                        </a>
                        <a
                          href="tel:+971581392020"
                          className="link-hover text-dark text-decoration-none"
                        >
                          +971 58 139 2020
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="card border-0 shadow-sm h-100"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <div className="card-body d-flex gap-4 p-4 p-xl-5">
                      <span className="round-52 flex-shrink-0 rounded-circle bg-dark hstack justify-content-center">
                        <iconify-icon
                          icon="lucide:mail"
                          className="fs-7 text-white"
                        ></iconify-icon>
                      </span>
                      <div className="d-flex flex-column gap-2">
                        <h3 className="mb-0 fs-6">Email</h3>
                        <a
                          href="mailto:info@alhadibusiness.com"
                          className="link-hover text-dark text-decoration-none text-break"
                        >
                          info@alhadibusiness.com
                        </a>
                        <a
                          href="mailto:alhadidxb@gmail.com"
                          className="link-hover text-dark text-decoration-none text-break"
                        >
                          alhadidxb@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Toast
        message="Your message has been sent successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
