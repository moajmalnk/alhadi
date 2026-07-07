"use client";

import React from "react";

export type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search…",
  id = "filter-search",
  className = "",
  disabled = false,
}: SearchBarProps) {
  return (
    <div className={`filter-search ${className}`.trim()}>
      <iconify-icon
        icon="lucide:search"
        className="filter-search-icon"
        aria-hidden="true"
      ></iconify-icon>
      <input
        id={id}
        type="search"
        className="filter-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
      />
      {value && !disabled && (
        <button
          type="button"
          className="filter-search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <iconify-icon icon="lucide:x" aria-hidden="true"></iconify-icon>
        </button>
      )}

      <style jsx>{`
        .filter-search {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 0;
          width: 100%;
        }

        .filter-search :global(.filter-search-icon) {
          position: absolute;
          left: 10px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          pointer-events: none;
        }

        .filter-search-input {
          width: 100%;
          min-height: 32px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background: #fff;
          color: #000;
          font-size: 13px;
          line-height: 1.4;
          padding: 5px 28px 5px 30px;
          outline: none;
        }

        .filter-search-input:focus {
          border-color: #FF6F20;
        }

        .filter-search-input:disabled {
          background: #EAF5F9;
          cursor: not-allowed;
        }

        .filter-search-input::-webkit-search-decoration,
        .filter-search-input::-webkit-search-cancel-button {
          display: none;
        }

        .filter-search-clear {
          position: absolute;
          right: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: rgba(0, 0, 0, 0.6);
          padding: 0;
          cursor: pointer;
        }

        .filter-search-clear:hover {
          background: #f1f3f5;
          color: #000;
        }
      `}</style>
    </div>
  );
}
