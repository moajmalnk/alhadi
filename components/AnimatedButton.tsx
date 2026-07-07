"use client";
import React from 'react';

interface AnimatedButtonProps {
  text: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  bgColor?: string;
  textColor?: string;
}

export default function AnimatedButton({
  text,
  isLoading = false,
  loadingText = "Processing...",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  style = {},
  bgColor,
  textColor
}: AnimatedButtonProps) {
  return (
    <button
  type={type}
  onClick={onClick}
  disabled={disabled}
  className={`btn position-relative d-inline-flex align-items-center justify-content-center rounded-pill px-4 ${className}`}
  style={{
    ...style,
    ...(bgColor ? { backgroundColor: bgColor, color: textColor ?? "#fff" } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(isLoading ? { pointerEvents: "none", opacity: 0.7 } : {}),
  }}
>
 <span className="w-100 text-center fs-6" style={{ transform: "translateX(-20px)", color: "inherit" }}>
  {isLoading ? loadingText : text}
</span>

  <iconify-icon
    icon={isLoading ? "svg-spinners:ring-resize" : "lucide:arrow-up-right"}
    className="position-absolute end-0 me-2 btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
  />
</button>
  );
}
