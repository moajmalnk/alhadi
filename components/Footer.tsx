"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "97144312227";
const WHATSAPP_MESSAGE =
  "Hello, I would like to inquire about Al Hadi Business Services.";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    }

    setIsAnimating(false);
    const timer = setTimeout(() => {
      setIsRendered(false);
      document.body.style.overflow = "unset";
    }, 300);
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 mb-8 mb-xl-0">
              <div className="d-flex flex-column gap-4 pe-xl-5">
                <Link href="/">
                  <img
                    src="/assets/images/logos/alhadi-business-logo.svg"
                    alt="Al Hadi Business Services"
                    className="img-fluid"
                    style={{ width: "160px" }}
                  />
                </Link>
                <h2 className="mb-0 text-white fs-5">Al Hadi Business Services</h2>
                <p className="mb-0 text-white text-opacity-70">
                  Our journey began in 2021, and since then, we have been at the
                  forefront of providing top-notch business services in Dubai, UAE
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-8 mb-xl-0">
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:info@alhadibusiness.com"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  <iconify-icon icon="lucide:mail" className="fs-7 text-white"></iconify-icon>
                  info@alhadibusiness.com
                </a>
                <a
                  href="mailto:alhadidxb@gmail.com"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  <iconify-icon icon="lucide:mail" className="fs-7 text-white"></iconify-icon>
                  alhadidxb@gmail.com
                </a>
                <a
                  href="tel:+97144312227"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  <iconify-icon icon="lucide:phone" className="fs-7 text-white"></iconify-icon>
                  +971-4 431 2227
                </a>
                <a
                  href="tel:+97144312227"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  <iconify-icon icon="lucide:phone" className="fs-7 text-white"></iconify-icon>
                  +971-4 431 2227
                </a>
                <div className="hstack gap-3 text-white fs-5 align-items-start">
                  <iconify-icon icon="lucide:map-pin" className="fs-7 text-white flex-shrink-0 mt-1"></iconify-icon>
                  <span>
                    Shop No: 3, Al Ovaisi Bldg
                    <br />
                    Ground floor, Near Wholesale Plaza Building, Deira,
                    <br />
                    Murshid Bazar, Dubai UAE
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-8 mb-xl-0">
              <p className="mb-4 text-white">
                Get connected with us
                <br />
                on social networks!
              </p>
              <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a className="link-hover fs-5 text-white" href="#!">Facebook</a></li>
                <li><a className="link-hover fs-5 text-white" href="#!">Instagram</a></li>
                <li><a className="link-hover fs-5 text-white" href="#!">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mb-0 text-white text-opacity-70 text-md-center mt-10">
          2026 Copyright: Al Hadi Business Services
        </p>
      </footer>

      <div className="get-template hstack gap-2">
        <button
          type="button"
          className="btn p-2 round-52 rounded-circle hstack justify-content-center flex-shrink-0"
          id="whatsappBtn"
          aria-label="Chat on WhatsApp"
          onClick={() => setIsModalOpen(true)}
          style={{ backgroundColor: "#25D366" }}
        >
          <iconify-icon icon="mdi:whatsapp" className="fs-7 text-white"></iconify-icon>
        </button>
      </div>

      {isRendered && (
        <>
          <div
            className={`modal-backdrop fade ${isAnimating ? "show" : ""}`}
            style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.7)" }}
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div
            className={`modal fade ${isAnimating ? "show d-block" : "d-block"}`}
            tabIndex={-1}
            role="dialog"
            style={{ zIndex: 1055 }}
            aria-modal="true"
            aria-labelledby="whatsappModalTitle"
          >
            <div
              className="modal-dialog modal-dialog-centered mx-3 mx-sm-auto"
              role="document"
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <div
                className="modal-content border-0 shadow-lg bg-white"
                style={{ borderRadius: "16px" }}
              >
                <div className="modal-header border-0 pb-0 pt-4 px-3 px-sm-4 d-flex justify-content-between align-items-center">
                  <h5
                    id="whatsappModalTitle"
                    className="modal-title fw-bold text-dark mb-0 fs-5"
                  >
                    Open WhatsApp?
                  </h5>
                  <button
                    type="button"
                    className="btn-close shadow-none flex-shrink-0"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close"
                    style={{ backgroundSize: "10px" }}
                  ></button>
                </div>
                <div className="modal-body px-3 px-sm-4 py-3">
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    You will be redirected to WhatsApp to chat with us at +971-4 431 2227.
                  </p>
                </div>
                <div className="modal-footer border-0 pt-0 px-3 px-sm-4 pb-4 d-flex flex-nowrap justify-content-stretch gap-2 w-100">
                  <button
                    type="button"
                    className="btn btn-dark rounded-pill m-0 py-2 flex-fill text-nowrap"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn text-white rounded-pill m-0 py-2 flex-fill text-nowrap"
                    style={{ backgroundColor: "#25D366" }}
                    onClick={openWhatsApp}
                  >
                    Open WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
