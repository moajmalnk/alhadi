"use client";

import React, { useEffect, useState } from "react";
import CustomDropdown from "./CustomDropdown";
import AnimatedButton from "./AnimatedButton";
import { createLead } from "@/lib/leads";

const businessOptions = [
  { value: "startup", label: "Startup" },
  { value: "agency", label: "Agency / Studio" },
  { value: "enterprise", label: "Enterprise" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
];

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DemoModal({
  isOpen,
  onClose,
  onSuccess,
}: DemoModalProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName("");
    setPhone("");
    setBusinessType("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    createLead({
      source: "popup",
      name,
      phone,
      businessType,
      message,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      resetForm();
      onClose();
      onSuccess();
    }, 800);
  };

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <>
      <div
        className={`modal-backdrop fade ${isAnimating ? "show" : ""}`}
        style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.7)" }}
        onClick={onClose}
      ></div>
      <div
        className={`modal fade ${isAnimating ? "show d-block" : "d-block"}`}
        tabIndex={-1}
        role="dialog"
        style={{ zIndex: 1055 }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div
            className="modal-content border-0 shadow-lg bg-white"
            style={{ borderRadius: "16px", maxHeight: "85vh" }}
          >
            <div className="modal-header border-0 pb-0 pt-3 px-4 d-flex justify-content-between align-items-center">
              <h5 className="modal-title fw-bold text-dark mb-0 fs-5">
                Free Consultation
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                onClick={onClose}
                aria-label="Close"
                style={{ backgroundSize: "10px" }}
              ></button>
            </div>

            <div className="modal-body px-4 py-3">
              <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                Let&apos;s discuss how we can help your business grow. Fill out
                the details below and we&apos;ll be in touch shortly.
              </p>

              <form
                className="d-flex flex-column gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    className="form-control border-bottom border-dark px-0 bg-transparent shadow-none rounded-0"
                    id="demoName"
                    name="name"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ fontSize: "15px" }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    className="form-control border-bottom border-dark px-0 bg-transparent shadow-none rounded-0"
                    id="demoPhone"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ fontSize: "15px" }}
                  />
                </div>

                <div>
                  <CustomDropdown
                    id="demoBusiness"
                    options={businessOptions}
                    value={businessType}
                    onChange={setBusinessType}
                    placeholder="Select business type"
                    required
                  />
                </div>

                <div>
                  <textarea
                    className="form-control border-bottom border-dark px-0 bg-transparent shadow-none rounded-0"
                    id="demoMessage"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your needs..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ fontSize: "15px" }}
                  ></textarea>
                </div>

                <AnimatedButton
                  type="submit"
                  className="w-100 mt-2"
                  isLoading={isSubmitting}
                  text="Book Consultation"
                  loadingText="Booking..."
                  style={{ height: "60px" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal {
          transition: opacity 0.3s ease-out;
          opacity: 0;
        }
        .modal.show {
          opacity: 1;
        }
        .modal-dialog {
          transition: transform 0.3s ease-out;
          transform: translateY(-20px);
        }
        .modal.show .modal-dialog {
          transform: translateY(0);
        }
        .btn-close {
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .btn-close:hover {
          opacity: 1;
        }
        .form-control:focus,
        .form-select:focus {
          border-color: #FF6F20 !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}
