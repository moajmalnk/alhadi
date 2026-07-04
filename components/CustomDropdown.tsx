"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  required?: boolean;
  variant?: "default" | "compact";
  disabled?: boolean;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  id,
  required,
  variant = "default",
  disabled = false,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isCompact = variant === "compact";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const triggerClass = isCompact
    ? "form-control d-flex justify-content-between align-items-center"
    : "form-control border-bottom border-dark px-0 bg-transparent shadow-none rounded-0 d-flex justify-content-between align-items-center";

  const triggerStyle: React.CSSProperties = isCompact
    ? {
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "13px",
        padding: "5px 8px",
        minHeight: "30px",
        lineHeight: 1.4,
        borderRadius: "4px",
        backgroundColor: disabled ? "#f8f9fa" : "#fff",
      }
    : {
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "15px",
        padding: "16px 0",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      };

  return (
    <div
      className={`position-relative custom-dropdown ${isCompact ? "custom-dropdown-compact" : ""}`}
      ref={dropdownRef}
      id={id}
    >
      {required && (
        <input
          type="text"
          required
          value={value}
          onChange={() => {}}
          className="position-absolute"
          style={{
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
            top: "50%",
            left: 0,
            zIndex: -1,
          }}
        />
      )}

      <div
        className={triggerClass}
        style={triggerStyle}
        onClick={() => {
          if (!disabled) setIsOpen(!isOpen);
        }}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((open) => !open);
          }
        }}
      >
        <span className={value ? "text-dark" : "text-muted"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <iconify-icon
          icon="lucide:chevron-down"
          className="text-dark"
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            fontSize: isCompact ? "14px" : undefined,
          }}
        ></iconify-icon>
      </div>

      {isOpen && !disabled && (
        <div
          className={`position-absolute w-100 bg-white shadow overflow-hidden ${isCompact ? "rounded" : "rounded-3 mt-2"}`}
          style={{
            zIndex: 1060,
            animation: "dropdownFadeIn 0.2s ease-out forwards",
            border: "1px solid #e9ecef",
            marginTop: isCompact ? "4px" : undefined,
          }}
        >
          <ul className="list-unstyled mb-0 m-0 p-1" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={`px-2 py-1 rounded-1 transition-all dropdown-item ${value === option.value ? "active" : ""}`}
                style={{
                  cursor: "pointer",
                  fontSize: isCompact ? "12px" : "14px",
                }}
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .dropdown-item {
          color: #212529;
        }
        .dropdown-item.active {
          background-color: #f8f9fa !important;
          color: #ffab00 !important;
          font-weight: 700;
        }
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #ffab00 !important;
        }
      `}</style>
    </div>
  );
}
