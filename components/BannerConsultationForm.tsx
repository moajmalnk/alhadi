"use client";

import React from "react";
import AnimatedButton from "./AnimatedButton";

interface BannerConsultationFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  idPrefix?: string;
}

export default function BannerConsultationForm({
  onSubmit,
  isSubmitting,
  idPrefix = "banner",
}: BannerConsultationFormProps) {
  return (
    <>
      <div className="text-center mb-4">
        <h3 className="banner-redesign__form-title mb-2">Free Consultation</h3>
        <p className="banner-redesign__form-subtitle mb-0">
          Fill the form and our experts will contact you.
        </p>
      </div>
      <form className="d-flex flex-column gap-3" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id={`${idPrefix}-name`}
          className="form-control banner-redesign__input"
          placeholder="Name"
          required
        />
        <input
          type="tel"
          name="phone"
          id={`${idPrefix}-phone`}
          className="form-control banner-redesign__input"
          placeholder="Contact Number"
          required
        />
        <input
          type="email"
          name="email"
          id={`${idPrefix}-email`}
          className="form-control banner-redesign__input"
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="message"
          id={`${idPrefix}-message`}
          className="form-control banner-redesign__input"
          placeholder="What business you want to start?"
          required
        />
        <AnimatedButton
          type="submit"
          className="banner-redesign__submit w-100 mt-2 d-flex justify-content-center align-items-center gap-2"
          text="Submit Request"
          isLoading={isSubmitting}
          loadingText="Submitting..."
          disabled={isSubmitting}
        />
      </form>
    </>
  );
}
