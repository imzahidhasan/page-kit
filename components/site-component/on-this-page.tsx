"use client";

import React, { useState, useEffect, useCallback } from "react";

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
    (headingElements: NodeListOf<Element>) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter(
            (entry) => entry.isIntersecting
          );

          if (visibleEntries.length > 0) {
            // Get the first visible heading that's closest to the top
            const sortedEntries = visibleEntries.sort((a, b) => {
              const aTop = a.boundingClientRect.top;
              const bTop = b.boundingClientRect.top;
              return Math.abs(aTop) - Math.abs(bTop);
            });

            setActiveId(sortedEntries[0].target.id);
          }
        },
        {
          rootMargin: "-80px 0px -60% 0px",
          threshold: [0, 0.1, 0.5, 1],
        }
      );

      headingElements.forEach((element) => {
        if (element.id) {
          observer.observe(element);
        }
      });

      return observer;
    },
    []
  );

  // Main effect to scan for headings and set up observer
  useEffect(() => {
    const scanHeadings = () => {
      const headingData = extractHeadings();
      setHeadings(headingData);

      if (headingData.length > 0) {
        // Re-query elements after potential ID assignment
        const contentContainer = document.querySelector(
          "main article, main .prose, main [data-mdx-content], main"
        );
        const headingElements = contentContainer
          ? contentContainer.querySelectorAll("h1, h2, h3, h4, h5, h6")
          : document.querySelectorAll("h1, h2, h3, h4, h5, h6");

        const observer = setupIntersectionObserver(headingElements);
        return observer;
      }
      return null;
    };

    // Initial scan
    let observer = scanHeadings();

    // Set up a MutationObserver to watch for DOM changes (useful for MDX content)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldRescan = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          // Check if any heading elements were added/removed
          const addedHeadings = Array.from(mutation.addedNodes).some(
            (node) =>
              node.nodeType === Node.ELEMENT_NODE &&
              (node as Element).matches("h1, h2, h3, h4, h5, h6")
          );

          const removedHeadings = Array.from(mutation.removedNodes).some(
            (node) =>
              node.nodeType === Node.ELEMENT_NODE &&
              (node as Element).matches("h1, h2, h3, h4, h5, h6")
          );

          if (addedHeadings || removedHeadings) {
            shouldRescan = true;
          }
        }
      });

      if (shouldRescan) {
        // Clean up previous observer
        if (observer) {
          observer.disconnect();
        }
        // Rescan after a short delay to ensure DOM is settled
        setTimeout(() => {
          observer = scanHeadings();
        }, 100);
      }
    });

    // Watch the main content area for changes
    const contentContainer = document.querySelector("main") || document.body;
    mutationObserver.observe(contentContainer, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
      mutationObserver.disconnect();
    };
  }, [extractHeadings, setupIntersectionObserver]);

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
    <aside className={`w-56 flex-shrink-0 ${className}`}>
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
            On This Page
          </h3>
          <nav>
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
                        block w-full text-left px-2 py-1 text-sm rounded-md
                        transition-colors duration-200 border-l-2
                        ${
                          isActive
                            ? "text-blue-600 border-blue-600 bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:bg-blue-900/20"
                            : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
                        }
                      `}
                      style={{ paddingLeft: `${paddingLeft}px` }}
                      title={heading.text}
                    >
                      <span className="line-clamp-2">{heading.text}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Optional: Add a scroll indicator */}
          {displayedHeadings.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {displayedHeadings.length} section
                {displayedHeadings.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
