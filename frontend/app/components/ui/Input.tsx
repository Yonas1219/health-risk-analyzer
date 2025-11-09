"use client";

import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  infoButton?: {
    onClick: () => void;
  };
}

export default function Input({
  label,
  error,
  infoButton,
  className = "",
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!error) {
      e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.3)";
    }
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.boxShadow = "";
    onBlur?.(e);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {infoButton && (
            <button
              type="button"
              onClick={infoButton.onClick}
              className="w-5 h-5 rounded-full bg-primary-soft text-primary-DEFAULT flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors"
            >
              <span className="text-xs font-bold">ℹ️</span>
            </button>
          )}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-triageCard-border hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
        } ${className}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
