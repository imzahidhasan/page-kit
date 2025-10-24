"use client";

import React from "react";
import { motion } from "motion/react";
import { Copy, Palette, Zap, Code2 } from "lucide-react";

export const Feature = () => {
  const features = [
    {
      icon: Copy,
      title: "Copy & Paste Ready",
      description:
        "Simply copy the component code and paste it into your project. No complex setup required.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Built with performance in mind. Smooth animations that don't compromise on speed.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description:
        "Every component is designed to be easily customized to match your brand and design system.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "TypeScript First",
      description:
        "Written in TypeScript with full type safety and excellent developer experience.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Why Choose
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Page Kit?
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          Designed for developers who want to build beautiful, animated
          interfaces without the complexity.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-6 rounded-2xl bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {feature.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover effect background */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
