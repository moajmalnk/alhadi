"use client";

import React, { useEffect, useRef, useState } from "react";
import DateRangeModal from "@/components/filters/DateRangeModal";
import {
  DATE_RANGE_PRESET_OPTIONS,
  DateRangePreset,
  DateRangeValue,
  createCustomRange,
  createPresetRange,
  getDateRangeLabel,
  toDateInputValue,
} from "@/lib/dateRange";

export type DateRangeFilterProps = {
  value: DateRangeValue;
  onChange: (value: DateRangeValue) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
};

export default function DateRangeFilter({
  value,
  onChange,
  id = "date-range-filter",
  className = "",
  disabled = false,
}: DateRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [draftFrom, setDraftFrom] = useState("");
  const [draftTo, setDraftTo] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openCustomModal = () => {
    const today = toDateInputValue(new Date());
    setDraftFrom(value.preset === "custom" && value.from ? value.from : today);
    setDraftTo(value.preset === "custom" && value.to ? value.to : today);
    setIsOpen(false);
    setCustomModalOpen(true);
  };

  const handlePresetSelect = (preset: DateRangePreset) => {
    if (preset === "custom") {
      openCustomModal();
      return;
    }
    onChange(createPresetRange(preset));
    setIsOpen(false);
  };

  const handleCustomApply = (from: string, to: string) => {
    onChange(createCustomRange(from, to));
    setCustomModalOpen(false);
  };

  return (
    <div
      className={`date-range-filter ${className}`.trim()}
      ref={rootRef}
      id={id}
    >
      <button
        type="button"
        className="date-range-filter-trigger"
        onClick={() => {
          if (!disabled) setIsOpen((open) => !open);
        }}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="date-range-filter-label">{getDateRangeLabel(value)}</span>
        <iconify-icon
          icon="lucide:chevron-down"
          className="date-range-filter-chevron"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        ></iconify-icon>
      </button>

      {isOpen && !disabled && (
        <div className="date-range-filter-menu" role="listbox">
          {DATE_RANGE_PRESET_OPTIONS.map((option) => {
            const isActive =
              option.value === "custom"
                ? value.preset === "custom"
                : value.preset === option.value;

            return (
              <button
                key={option.value}
                type="button"
                className={`date-range-filter-option ${isActive ? "is-active" : ""}`}
                role="option"
                aria-selected={isActive}
                onClick={() => handlePresetSelect(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}

      <DateRangeModal
        isOpen={customModalOpen}
        from={draftFrom}
        to={draftTo}
        onApply={handleCustomApply}
        onCancel={() => setCustomModalOpen(false)}
      />

      <style jsx>{`
        .date-range-filter {
          position: relative;
          min-width: 160px;
          width: 100%;
        }

        .date-range-filter-trigger {
          width: 100%;
          min-height: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background: #fff;
          color: #212529;
          font-size: 13px;
          line-height: 1.4;
          padding: 5px 8px;
          cursor: pointer;
          text-align: left;
        }

        .date-range-filter-trigger:disabled {
          background: #f8f9fa;
          cursor: not-allowed;
        }

        .date-range-filter-trigger:hover:not(:disabled),
        .date-range-filter-trigger:focus-visible {
          border-color: #111;
          outline: none;
        }

        .date-range-filter-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .date-range-filter-trigger :global(.date-range-filter-chevron) {
          flex-shrink: 0;
          font-size: 14px;
          transition: transform 0.2s ease;
        }

        .date-range-filter-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          z-index: 1060;
          background: #fff;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          padding: 4px;
          max-height: 280px;
          overflow-y: auto;
        }

        .date-range-filter-option {
          width: 100%;
          display: block;
          border: 0;
          background: transparent;
          text-align: left;
          font-size: 12px;
          color: #212529;
          padding: 6px 8px;
          border-radius: 3px;
          cursor: pointer;
        }

        .date-range-filter-option:hover,
        .date-range-filter-option.is-active {
          background: #f8f9fa;
          color: #ffab00;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
