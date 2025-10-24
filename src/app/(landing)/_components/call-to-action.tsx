"use client";

import { Cli } from "@/components/site/cli";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, BookOpen } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-10">
      {/* CLI Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Get Started in
          </span>{" "}
          <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
            Seconds
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Add production-ready components to your project with a single command.
          <span className="block mt-2 text-base sm:text-lg font-medium bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
            No complex setup. No configuration headaches. Just beautiful
            components.
          </span>
        </p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-lime-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-white dark:bg-zinc-900 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
              <Cli command={`add @pagekit/[component-name]`} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Vibrant animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/40 dark:via-blue-950/40 dark:to-indigo-950/40 rounded-3xl" />

        {/* Enhanced animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/40 to-sky-400/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-400/40 to-emerald-400/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse delay-500" />

        <div className="relative px-8 py-20 text-center backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                Ready to Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers building the next generation of web
              experiences.
            </p>

            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500 mb-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 font-medium">
                ⚡ Lightning-fast integration
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                🎨 Pixel-perfect designs
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                🚀 Production-ready code
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/docs"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BookOpen className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Browse Components</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href="/docs/installation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-800 text-cyan-700 dark:text-cyan-300 font-semibold rounded-full border-2 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Installation Guide</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
