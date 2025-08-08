"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchResult {
  title: string;
  href: string;
  content: string;
  section?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock search results - in a real app, this would come from your search API
const mockSearchResults: SearchResult[] = [
  {
    title: "Button Component",
    href: "/docs/components/button",
    content: "A versatile button component with multiple variants and states.",
    section: "Components",
  },
  {
    title: "Installation Guide",
    href: "/docs/installation",
    content: "Learn how to install Page Kit in your project using npm or yarn.",
    section: "Getting Started",
  },
  {
    title: "Dark Mode Setup",
    href: "/docs/theming/dark-mode",
    content: "Configure dark mode support for your application.",
    section: "Theming",
  },
  {
    title: "Grid System",
    href: "/docs/layout/grid",
    content: "Responsive grid system for building layouts.",
    section: "Layout",
  },
  {
    title: "Accessibility Guidelines",
    href: "/docs/advanced/accessibility",
    content: "Best practices for building accessible components.",
    section: "Advanced",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      // Mock search - in real app, this would be an API call
      const filtered = mockSearchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setSelectedIndex(0);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      window.location.href = results[selectedIndex].href;
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-[10vh]">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl mx-4 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <Search className="text-gray-400 mr-3" size={20} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none text-gray-900 dark:text-gray-100 bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-3"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No results found for &quot;{query}&quot;
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={result.href}
                  onClick={() => {
                    window.location.href = result.href;
                    onClose();
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-2 transition-colors ${
                    index === selectedIndex
                      ? "bg-gray-50 dark:bg-gray-700 border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">
                          {result.title}
                        </h3>
                        {result.section && (
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">
                            {result.section}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {result.content}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Tips */}
        {!query && (
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center justify-between">
              <span>Search through documentation, components, and guides</span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs">
                  ⌘K
                </kbd>
                <span className="text-xs">to search</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
