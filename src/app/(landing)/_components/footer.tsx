"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-between py-8 text-sm font-medium text-zinc-500 dark:text-zinc-400"
    >
      <div className="flex items-center gap-1 mb-4 md:mb-0">
        <span>© 2025 Page Kit. All rights reserved.</span>
      </div>

      <div className="flex items-center gap-1">
        <span>Built with</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </motion.div>
        <span>by</span>
        <Link
          href="https://github.com/imzahidhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
        >
          Zahid Hasan
        </Link>
      </div>
    </motion.div>
  );
};
