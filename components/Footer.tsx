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
      <style>{`
        .footer-redesign {
          background: #0A0A0A;
          position: relative;
          overflow: hidden;
        }
        .footer-redesign::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(194, 147, 40, 0.4), transparent);
        }
        .footer-heading {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--brand-gold-base, #C29328);
          border-radius: 2px;
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 4px 0;
        }
        .footer-link:hover {
          color: var(--brand-gold-base, #C29328);
          transform: translateX(4px);
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .footer-contact-item:hover {
          color: rgba(255, 255, 255, 0.85);
        }
        .footer-contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-gold-base, #C29328);
          flex-shrink: 0;
          font-size: 1.1rem;
        }
        .footer-social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.15rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .footer-social-icon:hover {
          background: var(--brand-gold-base, #C29328);
          border-color: var(--brand-gold-base, #C29328);
          color: #FFFFFF;
          transform: translateY(-3px);
        }
        .footer-divider {
          border: none;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0;
        }
        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }
        .footer-bottom-link:hover {
          color: var(--brand-gold-base, #C29328);
        }
        .footer-newsletter-input {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #FFFFFF;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          width: 100%;
        }
        .footer-newsletter-input:focus {
          outline: none;
          border-color: var(--brand-gold-base, #C29328);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(194, 147, 40, 0.1);
        }
        .footer-newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .footer-newsletter-btn {
          background: var(--brand-gold-base, #C29328);
          border: none;
          border-radius: 12px;
          padding: 14px 24px;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .footer-newsletter-btn:hover {
          background: #D4A333;
          transform: translateY(-1px);
        }
      `}</style>

      <footer className="footer-redesign">
        {/* Main Footer Content */}
        <div className="container" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
          <div className="row g-5">
            
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column gap-4 pe-xl-4">
                <Link href="/">
                  <img
                    src="/assets/images/logos/alhadi-business-logo.svg"
                    alt="Al Hadi Business Services"
                    className="img-fluid"
                    style={{ width: "140px" }}
                  />
                </Link>
                <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.95rem", lineHeight: "1.7" }} className="mb-0">
                  Since 2021, Al Hadi Business Services has been at the forefront of providing top-notch business setup, PRO services, and consulting in Dubai, UAE. We simplify your journey to success.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/blog" className="footer-link">Blog</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 col-6">
              <h6 className="footer-heading">Our Services</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><Link href="/services/business-setup" className="footer-link">Business Setup</Link></li>
                <li><Link href="/services/free-zone" className="footer-link">Free Zone License</Link></li>
                <li><Link href="/services/pro-document-clearing" className="footer-link">PRO & Document Clearing</Link></li>
                <li><Link href="/services/vat-registration" className="footer-link">Corporate Tax & VAT</Link></li>
                <li><Link href="/services/golden-visa" className="footer-link">Golden Visa</Link></li>
                <li><Link href="/services/trademark-registration" className="footer-link">Trademark Registration</Link></li>
                <li><Link href="/services/virtual-ejari" className="footer-link">Virtual Ejari</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h6 className="footer-heading">Get In Touch</h6>
              <div className="d-flex flex-column gap-4">
                <a href="mailto:info@alhadibusiness.com" className="footer-contact-item text-decoration-none">
                  <div className="footer-contact-icon">
                    <iconify-icon icon="lucide:mail" width="18"></iconify-icon>
                  </div>
                  <div>
                    <p className="mb-0 text-white fw-medium" style={{ fontSize: "0.95rem" }}>info@alhadibusiness.com</p>
                    <p className="mb-0" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>alhadidxb@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+97144312227" className="footer-contact-item text-decoration-none">
                  <div className="footer-contact-icon">
                    <iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                  </div>
                  <div>
                    <p className="mb-0 text-white fw-medium" style={{ fontSize: "0.95rem" }}>+971-4 431 2227</p>
                    <p className="mb-0" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </a>

                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
                  </div>
                  <div>
                    <p className="mb-0 text-white fw-medium" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                      Shop No: 3, Al Ovaisi Bldg<br />
                      Ground floor, Near Wholesale Plaza,<br />
                      Deira, Murshid Bazar, Dubai UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="container" style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
          <div className="row align-items-center gy-3">
            {/* Social Icons - Left */}
            <div className="col-md-4 order-2 order-md-1">
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a
                  href="https://www.facebook.com/Alhadidxb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="Facebook"
                >
                  <iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
                </a>
                <a
                  href="https://www.instagram.com/alhadi_businessservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="Instagram"
                >
                  <iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/al-hadi-business-services-1085b0230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="LinkedIn"
                >
                  <iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="WhatsApp"
                >
                  <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                </a>
              </div>
            </div>

            {/* Copyright - Center */}
            <div className="col-md-4 order-1 order-md-2 text-center">
              <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.85rem" }}>
                © {new Date().getFullYear()} Al Hadi Business Services. All rights reserved.
              </p>
            </div>

            {/* Legal Links & Admin - Right */}
            <div className="col-md-4 order-3 order-md-3">
              <div className="d-flex gap-4 justify-content-center justify-content-md-end align-items-center">
                <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
                <Link
                  href="/dashboard"
                  className="footer-bottom-link"
                  aria-label="Admin dashboard"
                  title="Admin"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
