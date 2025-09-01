import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Kit – A Ready to use Component Library",
  description:
    "Page Kit is an open-source, animation-first component library for React and Next.js. Built with Tailwind CSS and Framer Motion.",
  alternates: {
    canonical: "site url",
  },
  openGraph: {
    title: "Page Kit – Animated React Components Library",
    description:
      "An open-source UI library crafted for sleek, animated interfaces. Page Kit offers ready-to-use components built with Tailwind CSS and Framer Motion.",
    url: "site url",
    siteName: "Page Kit",
    images: [
      {
        url: "a image url for og pic",
        width: 1200,
        height: 630,
        alt: "Page Kit Components Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Kit – Animated React Components Library",
    description:
      "Create stunning UIs effortlessly with Page Kit – animated, composable components built with React, Tailwind CSS, and Framer Motion.",
    images: ["a image url for og pic"],
    creator: "@imzahidhasan_",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "your token here",
  },
};
