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
}

export default function CustomDropdown({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option", 
  id, 
  required 
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="position-relative custom-dropdown" ref={dropdownRef} id={id}>
      {/* Hidden input for HTML form validation */}
      {required && (
        <input 
          type="text" 
          required 
          value={value} 
          onChange={() => {}} 
          className="position-absolute" 
          style={{ width: '1px', height: '1px', opacity: 0, pointerEvents: 'none', top: '50%', left: 0, zIndex: -1 }} 
        />
      )}
      
      <div 
        className="form-control border-bottom border-dark px-0 bg-transparent shadow-none rounded-0 d-flex justify-content-between align-items-center"
        style={{ cursor: 'pointer', fontSize: '15px', padding: '16px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-dark" : "text-muted"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <iconify-icon 
          icon="lucide:chevron-down" 
          className="text-dark" 
          style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        ></iconify-icon>
      </div>

      {isOpen && (
        <div 
          className="position-absolute w-100 bg-white rounded-3 shadow mt-2 overflow-hidden" 
          style={{ zIndex: 1060, animation: 'dropdownFadeIn 0.2s ease-out forwards', border: '1px solid #f0f0f0' }}
        >
          <ul className="list-unstyled mb-0 m-0 p-2">
            {options.map((option) => (
              <li 
                key={option.value} 
                className={`px-3 py-2 rounded-2 transition-all dropdown-item ${value === option.value ? 'active' : ''}`}
                style={{ cursor: 'pointer', fontSize: '14px' }}
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
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          color: #212529;
        }
        .dropdown-item.active {
          background-color: #f8f9fa !important;
          color: #FFAB00 !important;
          font-weight: 700;
        }
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #FFAB00 !important;
        }
      `}</style>
    </div>
  );
}
