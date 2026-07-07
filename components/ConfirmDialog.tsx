"use client";

import React, { useEffect, useState } from "react";

export type ConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "default";
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const frame = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsAnimating(false);
    const timer = window.setTimeout(() => setIsRendered(false), 200);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isLoading) {
        e.stopPropagation();
        onCancel();
      }
    };

    window.addEventListener("keydown", handleEsc, true);
    return () => window.removeEventListener("keydown", handleEsc, true);
  }, [isOpen, isLoading, onCancel]);

  if (!isRendered) return null;

  const confirmClass =
    variant === "danger" ? "btn-danger" : "btn-dark";

  return (
    <div className="confirm-dialog-root" role="presentation">
      <div
        className={`confirm-dialog-backdrop ${isAnimating ? "is-open" : ""}`}
        onClick={isLoading ? undefined : onCancel}
        aria-hidden="true"
      />
      <div
        className={`confirm-dialog-panel ${isAnimating ? "is-open" : ""}`}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-message"
      >
        <h3 id="confirm-dialog-title" className="confirm-dialog-title">
          {title}
        </h3>
        <p id="confirm-dialog-message" className="confirm-dialog-message">
          {message}
        </p>
        <div className="confirm-dialog-actions">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={`btn ${confirmClass}`}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Please wait…" : confirmLabel}
          </button>
        </div>
      </div>

      <style jsx>{`
        .confirm-dialog-root {
          position: fixed;
          inset: 0;
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .confirm-dialog-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(17, 17, 17, 0.45);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .confirm-dialog-backdrop.is-open {
          opacity: 1;
        }

        .confirm-dialog-panel {
          position: relative;
          width: min(400px, 100%);
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
          transform: translateY(8px) scale(0.98);
          opacity: 0;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .confirm-dialog-panel.is-open {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .confirm-dialog-title {
          font-size: 15px;
          font-weight: 600;
          color: #000;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .confirm-dialog-message {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.6);
          margin: 0 0 16px;
          line-height: 1.45;
        }

        .confirm-dialog-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .confirm-dialog-actions :global(.btn) {
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          line-height: 1.4;
          border-radius: 4px;
        }

        .confirm-dialog-actions :global(.btn-dark) {
          color: #fff !important;
          background-color: #FF6F20 !important;
          border-color: #FF6F20 !important;
        }

        .confirm-dialog-actions :global(.btn-dark:hover),
        .confirm-dialog-actions :global(.btn-dark:focus) {
          color: #fff !important;
          background-color: #FF9A00 !important;
          border-color: #FF9A00 !important;
        }

        .confirm-dialog-actions :global(.btn-danger) {
          color: #fff !important;
          background-color: #dc3545 !important;
          border-color: #dc3545 !important;
        }

        .confirm-dialog-actions :global(.btn-danger:hover),
        .confirm-dialog-actions :global(.btn-danger:focus) {
          color: #fff !important;
          background-color: #bb2d3b !important;
          border-color: #b02a37 !important;
        }

        .confirm-dialog-actions :global(.btn-outline-secondary) {
          color: #495057 !important;
          background-color: #fff !important;
          border-color: #ced4da !important;
        }

        .confirm-dialog-actions :global(.btn-outline-secondary:hover),
        .confirm-dialog-actions :global(.btn-outline-secondary:focus) {
          color: #000 !important;
          background-color: #EAF5F9 !important;
          border-color: #adb5bd !important;
        }
      `}</style>
    </div>
  );
}
