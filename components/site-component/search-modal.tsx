"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { X, Search } from "lucide-react";
import { getSearchIndex } from "@/lib/registry-helpers";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Layout style; default is centered dialog, 'sidebar' docks left like a command panel */
  variant?: "center" | "sidebar";
}

interface IndexedItem {
  slug: string;
  title: string;
  description?: string;
  category: string;
  path: string;
  _score?: number;
}

/** Simple subsequence fuzzy score: higher = better */
function fuzzyScore(haystack: string, needle: string): number {
  if (!needle) return 0;
  let hIdx = 0;
  let score = 0;
  let streak = 0;
  const lowerHay = haystack.toLowerCase();
  const lowerNeedle = needle.toLowerCase();
  for (let n = 0; n < lowerNeedle.length; n++) {
    const ch = lowerNeedle[n];
    let found = false;
    while (hIdx < lowerHay.length) {
      if (lowerHay[hIdx] === ch) {
        found = true;
        // reward contiguous matches
        streak += 1;
        score += 5 * streak;
        hIdx++;
        break;
      } else {
        streak = 0;
      }
      hIdx++;
    }
    if (!found) return -1; // subsequence fail
  }
  // shorter matches slightly better
  return score - haystack.length * 0.05;
}

export default function SearchModal({
  isOpen,
  onClose,
  variant = "center",
}: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const items: IndexedItem[] = useMemo(() => getSearchIndex(), []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery("");
      setActive(0);
    }
  }, [isOpen]);

  const filtered: IndexedItem[] = useMemo(() => {
    const q = query.trim();
    if (!q) return items;
    return items
      .map((i) => {
        const hay = [i.title, i.slug, i.description ?? ""].join(" ");
        const sc = fuzzyScore(hay, q);
        return { ...i, _score: sc } as IndexedItem;
      })
      .filter((i) => (i._score ?? -1) >= 0)
      .sort((a, b) => (b._score ?? 0) - (a._score ?? 0));
  }, [items, query]);

  // Reset active index when filtered results change
  useEffect(() => {
    setActive(0);
  }, [filtered.length]);

  const grouped = useMemo(() => {
    const groups: Record<string, IndexedItem[]> = {};
    const displayItems = query ? filtered : items;
    displayItems.forEach((i) => {
      if (!groups[i.category]) groups[i.category] = [];
      groups[i.category].push(i);
    });
    return Object.keys(groups)
      .sort()
      .map((cat) => ({ category: cat, items: groups[cat] }));
  }, [filtered, items, query]);

  // Create a flat array that matches the actual rendering order for keyboard navigation
  const flatItems = useMemo(() => {
    const items: IndexedItem[] = [];
    grouped.forEach((group) => {
      group.items.forEach((item) => {
        items.push(item);
      });
    });
    return items;
  }, [grouped]);

  // Reset active index when flat items change
  useEffect(() => {
    setActive(0);
  }, [flatItems.length]);

  // Scroll active item into view
  useEffect(() => {
    if (!isOpen) return;

    const activeElement = document.querySelector(
      `[data-search-index="${active}"]`
    );
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [active, isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      const maxIndex = Math.max(0, flatItems.length - 1);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, maxIndex));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setActive(maxIndex);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (flatItems.length > 0 && active < flatItems.length) {
          const chosen = flatItems[active];
          if (chosen) {
            window.location.href = chosen.path;
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, active, flatItems, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex bg-black/40 p-4 sm:p-6",
        variant === "center" && "items-center justify-center",
        variant === "sidebar" && "items-start justify-start"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
    >
      <div
        className={cn(
          "flex w-full flex-col overflow-hidden border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900",
          variant === "center" &&
            "max-w-xl max-h-[80vh] min-h-[500px] rounded-lg",
          variant === "sidebar" &&
            "h-full max-w-sm rounded-r-lg animate-slide-in-left"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-gray-200 p-2 dark:border-gray-700">
          <Search className="ml-2 h-4 w-4 text-gray-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Search docs, components..."
            className="w-full bg-transparent p-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100"
            aria-label="Search documentation"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setActive(0);
              }}
              className="rounded p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto min-h-[400px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-400 dark:[&::-webkit-scrollbar-track]:bg-gray-800 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 dark:[&::-webkit-scrollbar-thumb:hover]:bg-gray-500">
          <ul className="p-2 space-y-4">
            {filtered.length === 0 && query && (
              <li className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                No results for <span className="font-medium">{query}</span>
                <div className="mt-2 text-xs">Try different keywords.</div>
              </li>
            )}

            {grouped.map((group) => (
              <li key={group.category} className="space-y-1">
                <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {group.category}
                </div>
                <ul className="space-y-1">
                  {(query
                    ? group.items.filter((i) => filtered.includes(i))
                    : group.items
                  ).map((item) => {
                    const idx = flatItems.indexOf(item);
                    const isActive = idx === active;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={item.path}
                          data-search-index={idx}
                          className={cn(
                            "group block rounded-md px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                              : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                          )}
                          onMouseEnter={() => {
                            if (idx >= 0) setActive(idx);
                          }}
                          onClick={() => {
                            onClose();
                          }}
                        >
                          <div className="font-medium flex items-center gap-2">
                            {item.title}
                            <span className="ml-auto hidden text-[10px] rounded bg-gray-200 px-1.5 py-0.5 font-normal tracking-wide text-gray-600 dark:bg-gray-700 dark:text-gray-300 sm:inline-block">
                              {item.category}
                            </span>
                          </div>
                          {item.description && (
                            <div className="mt-0.5 line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 px-3 py-2 text-[10px] text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <div className="hidden sm:flex items-center gap-4">
            <span>
              <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 dark:border-gray-600 dark:bg-gray-800">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
            <span>
              <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 dark:border-gray-600 dark:bg-gray-800">
                Enter
              </kbd>{" "}
              Open
            </span>
            <span>
              <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 dark:border-gray-600 dark:bg-gray-800">
                Esc
              </kbd>{" "}
              Close
            </span>
          </div>
          <div className="sm:hidden w-full text-center">Esc to close</div>
        </div>
      </div>
    </div>
  );
}
