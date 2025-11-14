"use client";

import React, { useState, useRef, useEffect } from "react";
import { ThemeSwitcher } from "./theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GitHubStars } from "./github-stars";
import { navigation } from "@/navigation/navigation";

import { AnimatePresence, motion } from "motion/react";
import { SidebarMobile } from "./sidebar-mobile";
import { X, Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

  // Flatten navigation items for easier searching
  const flattenedNavigation = navigation.flatMap((section) =>
    section.children.map((child) => ({
      ...child,
      section: section.label,
    }))
  );

  // Filter navigation items based on search query
  const searchResults = searchQuery.trim()
    ? flattenedNavigation.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navigate to first result using Next.js router
      router.push(searchResults[0].href);
      setShowResults(false);
      setSearchQuery("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        // Don't close mobile search on outside click as it's a full-screen modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile search on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileSearchOpen) {
          setMobileSearchOpen(false);
        }
        if (showResults) {
          setShowResults(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileSearchOpen, showResults]);

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-40 h-full w-4/5 bg-zinc-50 dark:bg-zinc-950 md:hidden"
      >
        <div className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-zinc-800">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="page-kit" width={24} height={24} />
            <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Page Kit
            </span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-zinc-900 dark:text-zinc-100"
          >
            <X className="size-5" />
          </button>
        </div>
        <SidebarMobile onClose={() => setSidebarOpen(false)} />
      </motion.div>

      {/* Mobile Search Modal */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white dark:bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Search Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-4 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800"
              >
                <motion.button
                  onClick={toggleMobileSearch}
                  whileTap={{ scale: 0.95 }}
                  className="text-zinc-600 dark:text-zinc-400"
                >
                  <X className="size-5" />
                </motion.button>
                <div className="flex-1" ref={mobileSearchRef}>
                  <form
                    onSubmit={(e) => {
                      handleSearch(e);
                      setMobileSearchOpen(false);
                    }}
                    className="relative"
                  >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 size-4 transition-colors duration-200" />
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 text-base bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-all duration-200"
                      autoFocus
                    />
                  </form>
                </div>
              </motion.div>

              {/* Mobile Search Results */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex-1 overflow-y-auto"
              >
                <AnimatePresence>
                  {searchQuery.trim() && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="divide-y divide-zinc-200 dark:divide-zinc-800"
                    >
                      {searchResults.map((result, index) => (
                        <motion.div
                          key={`mobile-${result.href}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={result.href}
                            onClick={() => {
                              handleResultClick();
                              setMobileSearchOpen(false);
                            }}
                            className="block px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                                {result.label}
                              </span>
                              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                {result.section}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {searchQuery.trim() && searchResults.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-8 text-center"
                    >
                      <div className="text-zinc-500 dark:text-zinc-400">
                        No results found for &ldquo;{searchQuery}&rdquo;
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {!searchQuery.trim() && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-8 text-center"
                    >
                      <div className="text-zinc-500 dark:text-zinc-400">
                        Start typing to search documentation...
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full sticky top-0 z-20 bg-transparent backdrop-blur-lg border-b border-gray-200 dark:border-zinc-800">
        <header className="mx-auto max-w-[1536px] h-14 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
              {
                <button
                  onClick={toggleSidebar}
                  className="flex flex-col items-start gap-1 md:hidden"
                >
                  <span className="w-5 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                  <span className="w-3 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                  <span className="w-4 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                </button>
              }

              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="page-kit" width={24} height={24} />
                <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  Page Kit
                </span>
              </Link>
            </div>

            <nav className=" hidden md:flex items-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <Link
                className="hover:text-zinc-900 dark:hover:text-zinc-50"
                href="/docs"
              >
                Documentation
              </Link>
              <Link
                className="hover:text-zinc-900 dark:hover:text-zinc-50"
                href="/blocks"
              >
                Blocks
              </Link>
            </nav>
          </div>

          {/* Search Input */}
          <motion.div
            className="hidden md:flex flex-1 justify-center max-w-md mx-8"
            ref={searchRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 size-4 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-all duration-200"
                />
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
                  >
                    {searchResults.map((result, index) => (
                      <motion.div
                        key={`${result.href}-${index}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={result.href}
                          onClick={() => handleResultClick()}
                          className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 transition-colors duration-200"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {result.label}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {result.section}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No Results Message */}
              <AnimatePresence>
                {showResults &&
                  searchQuery.trim() &&
                  searchResults.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg z-50"
                    >
                      <div className="px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400">
                        No results found for &ldquo;{searchQuery}&rdquo;
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </form>
          </motion.div>

          <nav className="flex items-center space-x-2">
            {/* Mobile Search Button */}
            <motion.button
              onClick={toggleMobileSearch}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="size-4 text-zinc-600 dark:text-zinc-400" />
            </motion.button>

            {/* GitHub Link */}
            <Link
              href="https://github.com/imzahidhasan/page-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 px-3 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <GitHubStars repository="imzahidhasan/page-kit" />
            </Link>
            <ThemeSwitcher />
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
