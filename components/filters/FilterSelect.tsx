"use client";

import React from "react";
import CustomDropdown from "@/components/CustomDropdown";

export type FilterSelectOption = {
  value: string;
  label: string;
};

export type FilterSelectProps = {
  options: FilterSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
};

export default function FilterSelect({
  options,
  value,
  onChange,
  placeholder = "Select…",
  id,
  className = "",
  disabled = false,
}: FilterSelectProps) {
  return (
    <div className={`filter-select ${className}`.trim()}>
      <CustomDropdown
        id={id}
        variant="compact"
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />

      <style jsx>{`
        .filter-select {
          min-width: 150px;
          width: 100%;
        }

        .filter-select :global(.custom-dropdown) {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
