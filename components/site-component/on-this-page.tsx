"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface OnThisPageProps {
  className?: string;
}

export default function OnThisPage({ className = "" }: OnThisPageProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Function to generate slug from text
  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim()
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  }, []);

  // Function to extract headings from MDX content
  const extractHeadings = useCallback(() => {
    // Look for headings specifically within the main content area
    const contentContainer = document.querySelector(
      "main article, main .prose, main [data-mdx-content], main"
    );
    const headingSelector = "h1, h2, h3, h4, h5, h6";

    const headingElements = contentContainer
      ? contentContainer.querySelectorAll(headingSelector)
      : document.querySelectorAll(headingSelector);

    const headingData: Heading[] = Array.from(headingElements).map(
      (element) => {
        const text = element.textContent || "";
        const level = parseInt(element.tagName.charAt(1));
        let id = element.id;

        // Generate ID if it doesn't exist
        if (!id) {
          id = generateSlug(text);
          // Ensure unique IDs
          let counter = 1;
          let uniqueId = id;
          while (document.getElementById(uniqueId)) {
            uniqueId = `${id}-${counter}`;
            counter++;
          }
          id = uniqueId;
          element.id = id;
        }

        return { id, text, level };
      }
    );

    return headingData;
  }, [generateSlug]);

  // Set up intersection observer
  const setupIntersectionObserver = useCallback(
    (headingElements: Element[]) => {
      if (observerRef.current) observerRef.current.disconnect();
      const observer = new IntersectionObserver(
        (entries) => {
          // Choose the entry nearest top that is intersecting
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );
          if (visible.length) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: "-64px 0px -70% 0px",
          threshold: [0, 0.25, 0.5, 1],
        }
      );
      headingElements.forEach((el) => el.id && observer.observe(el));
      observerRef.current = observer;
    },
    []
  );

  // Main effect to scan for headings and set up observer
  useEffect(() => {
    const run = () => {
      const headingData = extractHeadings();
      setHeadings(headingData);
      if (headingData.length) {
        const container = document.querySelector(
          "main article, main .prose, main [data-mdx-content], main"
        );
        const els = Array.from(
          (container?.querySelectorAll("h1, h2, h3, h4, h5, h6") ||
            []) as NodeListOf<Element>
        );
        setupIntersectionObserver(els);
      }
    };
    // Delay to allow MDX hydration
    const t = setTimeout(run, 30);
    return () => {
      clearTimeout(t);
      observerRef.current?.disconnect();
    };
  }, [extractHeadings, setupIntersectionObserver, pathname]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL hash without triggering navigation
      if (window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  };

  // Filter headings to show only h2-h4 for better UX (optional)
  const displayedHeadings = headings.filter(
    (heading) => heading.level >= 2 && heading.level <= 4
  );

  if (displayedHeadings.length === 0) {
    return null;
  }

  return (
    <nav className={cn(className)} aria-label="On this page navigation">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          On This Page
        </h3>
      </div>

      <ul className="space-y-1">
        {displayedHeadings.map((heading) => {
          const isActive = activeId === heading.id;
          // Adjust padding based on heading level (h2 = base, h3 = +16px, h4 = +32px)
          const paddingLeft = (heading.level - 2) * 16 + 12;

          return (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`
                  block w-full text-left px-2 py-1 text-sm rounded-lg
                  transition-colors duration-200 border-l-2
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                  }
                `}
                style={{ paddingLeft: `${paddingLeft}px` }}
                title={heading.text}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Simple progress indicator */}
      {displayedHeadings.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {displayedHeadings.length} section
            {displayedHeadings.length !== 1 ? "s" : ""}
          </div>
        </div>
      )}
    </nav>
  );
}
