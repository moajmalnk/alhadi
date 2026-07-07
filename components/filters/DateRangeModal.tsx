"use client";

import React, { useEffect, useState } from "react";

export type DateRangeModalProps = {
  isOpen: boolean;
  from: string;
  to: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onApply: (from: string, to: string) => void;
  onCancel: () => void;
};

export default function DateRangeModal({
  isOpen,
  from,
  to,
  title = "Custom date range",
  confirmLabel = "Apply range",
  cancelLabel = "Cancel",
  onApply,
  onCancel,
}: DateRangeModalProps) {
  const [fromValue, setFromValue] = useState(from);
  const [toValue, setToValue] = useState(to);
  const [error, setError] = useState("");
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFromValue(from);
      setToValue(to);
      setError("");
      setIsRendered(true);
      const frame = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsAnimating(false);
    const timer = window.setTimeout(() => setIsRendered(false), 200);
    return () => window.clearTimeout(timer);
  }, [isOpen, from, to]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onCancel();
      }
    };

    window.addEventListener("keydown", handleEsc, true);
    return () => window.removeEventListener("keydown", handleEsc, true);
  }, [isOpen, onCancel]);

  if (!isRendered) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fromValue || !toValue) {
      setError("Please select both from and to dates.");
      return;
    }

    if (fromValue > toValue) {
      setError("From date must be on or before the to date.");
      return;
    }

    setError("");
    onApply(fromValue, toValue);
  };

  return (
    <div className="date-range-modal-root" role="presentation">
      <div
        className={`date-range-modal-backdrop ${isAnimating ? "is-open" : ""}`}
        onClick={onCancel}
        aria-hidden="true"
      />
      <div
        className={`date-range-modal-panel ${isAnimating ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="date-range-modal-title"
      >
        <h3 id="date-range-modal-title" className="date-range-modal-title">
          {title}
        </h3>
        <p className="date-range-modal-subtitle">
          Choose a start and end date to filter results.
        </p>

        <form className="date-range-modal-form" onSubmit={handleApply}>
          <div className="date-range-modal-fields">
            <div className="date-range-modal-field">
              <label htmlFor="date-range-from">From</label>
              <input
                id="date-range-from"
                type="date"
                value={fromValue}
                max={toValue || undefined}
                onChange={(e) => {
                  setFromValue(e.target.value);
                  setError("");
                }}
                required
              />
            </div>
            <div className="date-range-modal-field">
              <label htmlFor="date-range-to">To</label>
              <input
                id="date-range-to"
                type="date"
                value={toValue}
                min={fromValue || undefined}
                onChange={(e) => {
                  setToValue(e.target.value);
                  setError("");
                }}
                required
              />
            </div>
          </div>

          {error && <p className="date-range-modal-error">{error}</p>}

          <div className="date-range-modal-actions">
            <button
              type="button"
              className="date-range-modal-btn secondary"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <button type="submit" className="date-range-modal-btn primary">
              {confirmLabel}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .date-range-modal-root {
          position: fixed;
          inset: 0;
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .date-range-modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(17, 17, 17, 0.45);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .date-range-modal-backdrop.is-open {
          opacity: 1;
        }

        .date-range-modal-panel {
          position: relative;
          width: min(420px, 100%);
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
          transform: translateY(8px) scale(0.98);
          opacity: 0;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .date-range-modal-panel.is-open {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .date-range-modal-title {
          font-size: 15px;
          font-weight: 600;
          color: #000;
          margin: 0 0 4px;
          line-height: 1.3;
        }

        .date-range-modal-subtitle {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          margin: 0 0 14px;
          line-height: 1.4;
        }

        .date-range-modal-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        @media (min-width: 480px) {
          .date-range-modal-fields {
            grid-template-columns: 1fr 1fr;
          }
        }

        .date-range-modal-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .date-range-modal-field label {
          font-size: 12px;
          font-weight: 500;
          color: #495057;
        }

        .date-range-modal-field input {
          min-height: 32px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          padding: 5px 8px;
          font-size: 13px;
          color: #000;
          background: #fff;
          outline: none;
        }

        .date-range-modal-field input:focus {
          border-color: #FF6F20;
        }

        .date-range-modal-error {
          margin: 10px 0 0;
          font-size: 12px;
          color: #dc3545;
        }

        .date-range-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 14px;
        }

        .date-range-modal-btn {
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          line-height: 1.4;
          border-radius: 4px;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .date-range-modal-btn.secondary {
          color: #495057;
          background: #fff;
          border-color: #ced4da;
        }

        .date-range-modal-btn.secondary:hover {
          background: #EAF5F9;
          color: #000;
        }

        .date-range-modal-btn.primary {
          color: #fff;
          background: #FF6F20;
          border-color: #FF6F20;
        }

        .date-range-modal-btn.primary:hover {
          background: #FF9A00;
          border-color: #FF9A00;
        }
      `}</style>
    </div>
  );
}
