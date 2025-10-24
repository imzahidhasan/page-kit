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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Get Started in
          </span>{" "}
          <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
            Seconds
          </span>
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          Copy and paste components directly, or use our CLI for seamless
          integration.
        </p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-lg">
            <Cli command={`add button`} />
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
        {/* Colorful animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-sky-100 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-sky-950/30 rounded-3xl" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-sky-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse delay-500" />

        <div className="relative px-8 py-16 text-center backdrop-blur-sm">
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
              <span className="bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers who trust Page Kit for their
              animation needs. Start building beautiful interfaces today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/docs"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                <span>Browse Components</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href="/docs/installation"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-800 text-cyan-700 dark:text-cyan-300 font-semibold rounded-full border-2 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 shadow-md"
              >
                <Download className="w-5 h-5" />
                <span>Installation Guide</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
