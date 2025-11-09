"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "disabled";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "rounded-xl font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 cursor-pointer";

  const sizeClasses = {
    sm: "px-3 sm:px-4 py-2 text-sm sm:text-base",
    md: "px-6 py-3 text-base sm:text-lg",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const variantClasses = {
    primary: disabled
      ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
      : "bg-primary-DEFAULT text-white hover:bg-primary-dark hover:scale-[1.03] active:scale-100",
    secondary: disabled
      ? "bg-gray-300 text-gray-500 border-2 border-gray-300 cursor-not-allowed"
      : "bg-white text-primary-DEFAULT border-2 border-primary-DEFAULT shadow-sm hover:bg-primary-soft hover:scale-[1.03] active:scale-100",
    disabled: "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const isDisabled = disabled || variant === "disabled";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={isDisabled}
      style={
        !isDisabled && variant === "primary"
          ? { backgroundColor: "#10B981" }
          : undefined
      }
      {...props}
    >
      {children}
    </button>
  );
}
