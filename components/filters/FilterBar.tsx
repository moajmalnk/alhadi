"use client";

import React from "react";

export type FilterBarProps = {
  children: React.ReactNode;
  /** Content aligned to the right (e.g. tabs). */
  end?: React.ReactNode;
  /** Show a control to reset active filters. */
  showClear?: boolean;
  onClear?: () => void;
  clearLabel?: string;
  className?: string;
};

/**
 * Responsive layout wrapper for filter controls.
 * Place SearchBar, FilterSelect, DateRangeFilter, etc. as children.
 * Pass tabs or other actions via `end` to align them on the right.
 */
export default function FilterBar({
  children,
  end,
  showClear = false,
  onClear,
  clearLabel = "Clear filters",
  className = "",
}: FilterBarProps) {
  return (
    <div className={`filter-bar ${className}`.trim()}>
      <div className="filter-bar-start">
        {children}
        {showClear && onClear && (
          <button
            type="button"
            className="filter-bar-clear"
            onClick={onClear}
          >
            <iconify-icon icon="lucide:x" aria-hidden="true"></iconify-icon>
            {clearLabel}
          </button>
        )}
      </div>

      {end && <div className="filter-bar-end">{end}</div>}

      <style jsx>{`
        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .filter-bar-start {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          flex: 1 1 280px;
          min-width: 0;
        }

        .filter-bar-start > :global(*) {
          flex: 0 1 auto;
        }

        .filter-bar-start > :global(.filter-search) {
          flex: 1 1 200px;
          min-width: 180px;
          max-width: 320px;
        }

        .filter-bar-start > :global(.filter-select),
        .filter-bar-start > :global(.date-range-filter) {
          flex: 0 1 160px;
          min-width: 140px;
          max-width: 200px;
        }

        .filter-bar-end {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-left: auto;
        }

        .filter-bar-clear {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 32px;
          padding: 5px 10px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background: #fff;
          color: #495057;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.4;
          white-space: nowrap;
          cursor: pointer;
        }

        .filter-bar-clear:hover {
          background: #EAF5F9;
          color: #000;
          border-color: #adb5bd;
        }

        .filter-bar-clear :global(iconify-icon) {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
