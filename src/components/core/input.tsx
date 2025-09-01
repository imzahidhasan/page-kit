"use client";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

export const Input = ({ 
  variant = "primary", 
  className = "",
  ...props 
}: InputProps) => {
  return (
    <input
      className={cn(
        "px-4 py-2 rounded font-medium transition-colors outline-none",
        variant === "primary" 
          ? "border border-zinc-300 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-50" 
          : "bg-transparent border-2 border-zinc-900 text-zinc-900 dark:border-zinc-50 dark:text-zinc-50",
        className
      )}
      {...props}
    />
  );
};
