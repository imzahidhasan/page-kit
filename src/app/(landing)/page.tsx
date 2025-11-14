import React from "react";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { Feature } from "./_components/feature";
import { CallToAction } from "./_components/call-to-action";
import Header from "@/components/site/header";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Feature />
        <CallToAction />
      </main>
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
