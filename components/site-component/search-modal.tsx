"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { X, Search, History } from "lucide-react";
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
  keywords?: string[];
  path: string;
  _score?: number;
}

const RECENTS_KEY = "pk_recent_searches";

function loadRecents(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function saveRecents(recents: string[]) {
  try {
    localStorage.setItem(RECENTS_KEY, JSON.stringify(recents.slice(0, 8)));
  } catch {
    /* ignore */
  }
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

function highlight(text: string, query: string) {
  if (!query) return text;
  const q = query.trim();
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="bg-yellow-200 dark:bg-yellow-700/50 rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </span>
      {text.slice(idx + q.length)}
    </>
  );
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
  const [recents, setRecents] = useState<string[]>([]);

  // load recents once opened
  useEffect(() => {
    if (isOpen) {
      setRecents(loadRecents());
    }
  }, [isOpen]);

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
        const hay = [
          i.title,
          i.slug,
          i.description ?? "",
          ...(i.keywords ?? []),
        ].join(" ");
        const sc = fuzzyScore(hay, q);
        return { ...i, _score: sc } as IndexedItem;
      })
      .filter((i) => (i._score ?? -1) >= 0)
      .sort((a, b) => (b._score ?? 0) - (a._score ?? 0));
  }, [items, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, IndexedItem[]> = {};
    (query ? filtered : items).forEach((i) => {
      if (!groups[i.category]) groups[i.category] = [];
      groups[i.category].push(i);
    });
    return Object.keys(groups)
      .sort()
      .map((cat) => ({ category: cat, items: groups[cat] }));
  }, [filtered, items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
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
        setActive(filtered.length - 1);
      }
      if (e.key === "Enter") {
        const chosen = filtered[active];
        if (chosen) {
          if (query.trim()) {
            const q = query.trim();
            setRecents((prev) => {
              const next = [q, ...prev.filter((r) => r !== q)].slice(0, 8);
              saveRecents(next);
              return next;
            });
          }
          window.location.href = chosen.path;
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, active, filtered, onClose, query]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex bg-black/40 p-4 sm:p-6",
        variant === "center" && "items-start justify-center",
        variant === "sidebar" && "items-start justify-start"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className={cn(
          "flex w-full flex-col overflow-hidden border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900",
          variant === "center" && "max-w-xl rounded-lg",
          variant === "sidebar" &&
            "h-full max-w-sm rounded-r-lg animate-slide-in-left"
        )}
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
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {query.trim() === "" && recents.length > 0 && (
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-xs font-medium uppercase tracking-wide text-gray-500 flex items-center gap-2">
              <History size={14} /> Recent searches
            </div>
          )}
          {query.trim() === "" && recents.length > 0 && (
            <ul className="p-2 grid grid-cols-2 gap-2">
              {recents.map((r) => (
                <li key={r}>
                  <button
                    className="w-full truncate rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    onClick={() => setQuery(r)}
                  >
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          )}

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
                    const idx = filtered.indexOf(item);
                    const isActive = idx === active;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={item.path}
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
                            if (query.trim()) {
                              const q = query.trim();
                              setRecents((prev) => {
                                const next = [
                                  q,
                                  ...prev.filter((r) => r !== q),
                                ].slice(0, 8);
                                saveRecents(next);
                                return next;
                              });
                            }
                            onClose();
                          }}
                        >
                          <div className="font-medium flex items-center gap-2">
                            {highlight(item.title, query)}
                            <span className="ml-auto hidden text-[10px] rounded bg-gray-200 px-1.5 py-0.5 font-normal tracking-wide text-gray-600 dark:bg-gray-700 dark:text-gray-300 sm:inline-block">
                              {item.category}
                            </span>
                          </div>
                          {item.description && (
                            <div className="mt-0.5 line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                              {highlight(item.description, query)}
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
