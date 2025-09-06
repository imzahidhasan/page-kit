"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "outline" | "ghost";
  inputSize?: "sm" | "md" | "lg";
  label?: string;
  error?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
  rightButton?: React.ReactNode;
  leftButton?: React.ReactNode;
  hideLabel?: boolean;
  showPasswordToggle?: boolean;
  isFileInput?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      inputSize = "md",
      label,
      error = false,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      containerClassName = "",
      rightButton,
      leftButton,
      hideLabel = false,
      showPasswordToggle = false,
      isFileInput = false,
      disabled = false,
      type = "text",
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    const inputType = showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : isFileInput
      ? "file"
      : type;

    // Base styles for all inputs
    const baseStyles =
      "font-medium rounded-lg transition-all duration-200 focus:outline-none";

    // Size variations
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    // Padding adjustments for icons
    const leftIconPadding = leftIcon || leftButton ? "pl-10" : "";
    const rightIconPadding =
      rightIcon || rightButton || showPasswordToggle ? "pr-12" : "";

    // Variant styles with dark/light mode support
    const variantStyles = {
      default:
        "bg-white border border-zinc-300 focus:border-zinc-900 text-zinc-900 placeholder:text-zinc-500 dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-zinc-100 dark:text-zinc-100 dark:placeholder:text-zinc-400",
      outline:
        "bg-transparent border-2 border-zinc-900 text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-700 dark:border-zinc-100 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:border-zinc-300",
      ghost:
        "border-none bg-zinc-100 text-zinc-900 placeholder:text-zinc-500 focus:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:bg-zinc-700",
    };

    // Error state styles
    const errorStyles =
      "border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400";

    // Disabled state
    const disabledStyles =
      "opacity-50 cursor-not-allowed bg-zinc-100 dark:bg-zinc-800";

    // Full width style
    const widthStyle = fullWidth ? "w-full" : "w-auto";

    // Handle password toggle
    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div
        className={cn("flex flex-col gap-1", widthStyle, containerClassName)}
      >
        {label && !hideLabel && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium text-zinc-900 dark:text-zinc-100",
              error && "text-red-500 dark:text-red-400"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftButton && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center">
              {leftButton}
            </div>
          )}

          {leftIcon && !leftButton && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-zinc-500 dark:text-zinc-400 pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={cn(
              baseStyles,
              sizeStyles[inputSize],
              variantStyles[variant],
              error && errorStyles,
              disabled && disabledStyles,
              leftIconPadding,
              rightIconPadding,
              widthStyle,
              isFileInput &&
                "file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-zinc-900 file:text-white dark:file:bg-zinc-100 dark:file:text-zinc-900 file:rounded-md",
              className
            )}
            aria-invalid={error}
            aria-describedby={helperText ? `${inputId}-helper` : undefined}
            {...props}
          />

          {rightIcon && !rightButton && !showPasswordToggle && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-zinc-500 dark:text-zinc-400 pointer-events-none">
              {rightIcon}
            </div>
          )}

          {rightButton && !showPasswordToggle && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              {rightButton}
            </div>
          )}

          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-zinc-500 dark:text-zinc-400"
              onClick={handlePasswordToggle}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {helperText && (
          <span
            id={`${inputId}-helper`}
            className={cn(
              "text-xs",
              error
                ? "text-red-500 dark:text-red-400"
                : "text-zinc-500 dark:text-zinc-400"
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
