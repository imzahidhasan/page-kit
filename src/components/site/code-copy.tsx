"use client";
import { cn } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
    <motion.button
      onClick={copyCode}
      className={cn(
        "absolute top-4 right-5 z-10 p-2 rounded-md hover:bg-muted",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-4 h-4">
        <AnimatePresence mode="wait">
          {!copied ? (
            <motion.div
              key="clipboard"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Clipboard className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Check className="h-4 w-4 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default CodeCopy;
