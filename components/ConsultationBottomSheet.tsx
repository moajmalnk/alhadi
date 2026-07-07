"use client";

import React, { useEffect, useState } from "react";
import BannerConsultationForm from "./BannerConsultationForm";

interface ConsultationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export default function ConsultationBottomSheet({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
}: ConsultationBottomSheetProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
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
        className={`consultation-sheet__backdrop ${isAnimating ? "consultation-sheet__backdrop--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`consultation-sheet ${isAnimating ? "consultation-sheet--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-sheet-title"
      >
        <div className="consultation-sheet__header">
          <div className="consultation-sheet__handle" aria-hidden="true" />
          <button
            type="button"
            className="consultation-sheet__close btn-close shadow-none"
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="consultation-sheet__content">
          <BannerConsultationForm
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            idPrefix="sheet"
          />
        </div>
      </div>
    </>
  );
}
