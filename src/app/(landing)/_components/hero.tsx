"use client";

import { motion } from "motion/react";
import { GitHubIcon } from "@/assets/icons/github";
import { ArrowRight, Sparkles } from "lucide-react";
import { TailwindIcon } from "@/assets/icons/tailwind";
import { ReactIcon } from "@/assets/icons/react";
import { MotionIcon } from "@/assets/icons/motion";

import { TypeScriptIcon } from "@/assets/icons/typescript";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative py-10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-sky-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo and Badge */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-8"
        >
          <div className="mb-6">
            <Image
              src="/images/page-kit-logo.png"
              alt="Page Kit Logo"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-lime-50 dark:from-cyan-950/50 dark:to-lime-950/50 border border-cyan-200/50 dark:border-cyan-800/50"
          >
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Ready-to-Use Component Library
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
            Animated Components.
          </span>
          <br />
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
            Beautiful Blocks.
          </span>
          <br />
          <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
            Delivered Instantly
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Add{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            motion
          </span>{" "}
          and{" "}
          <span className="font-semibold text-lime-600 dark:text-lime-400">
            elegance
          </span>{" "}
          to your app — instantly with{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            PageKit
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="/docs"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Get Started</span>
            <motion.div initial={{ x: 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="https://github.com/imzahidhasan/page-kit"
            target="_blank"
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-300 dark:border-cyan-600 text-cyan-700 dark:text-cyan-300 font-semibold rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300"
          >
            <GitHubIcon className="w-5 h-5 fill-current" />
            <span>Star on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Built with modern technologies
          </span>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
            >
              <ReactIcon className="w-6 h-6 fill-blue-500" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                React
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
            >
              <TypeScriptIcon className="w-6 h-6 fill-blue-600" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                TypeScript
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
            >
              <TailwindIcon className="w-6 h-6 fill-cyan-500" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Tailwind
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
            >
              <MotionIcon className="w-8 h-8 fill-yellow-500" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Motion
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
