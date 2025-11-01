"use client";
import { cn } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";

const CodeCopy = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    
  };

  return (
    <button
      onClick={copyCode}
      className={cn(
        "absolute top-4 right-5 cursor-pointer z-10 p-2 text-zinc-50",
        className
      )}
    >
      <div
        className={` inset-0 transform transition-all duration-300 ${
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Clipboard className="h-4 w-4 text-gray-700 dark:text-white" />
      </div>
      <div
        className={`absolute inset-0 transform transition-all duration-300 ${
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Check className="h-4 w-4 text-green-500" />
      </div>
    </button>
  );
};

export default CodeCopy;
