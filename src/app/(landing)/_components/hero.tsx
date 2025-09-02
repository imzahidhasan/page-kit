"use client";

import { motion, scale } from "motion/react";
import { GitHubIcon } from "@/assets/icons/github";
import { ArrowRight, Sparkles } from "lucide-react";
import { TailwindIcon } from "@/assets/icons/tailwind";
import { ReactIcon } from "@/assets/icons/react";
import { MotionIcon } from "@/assets/icons/motion";
import { ShadcnIcon } from "@/assets/icons/shadcn";
import { TypeScriptIcon } from "@/assets/icons/typescript";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative py-10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
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
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
            From Concept to
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Production
          </span>
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
            {" "}
            in Minutes
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Professional{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            React components
          </span>{" "}
          with smooth animations.{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Copy, paste, ship.
          </span>
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
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-semibold rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
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
