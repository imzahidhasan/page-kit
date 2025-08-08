"use client";

import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    // Extract headings from the document
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingData: Heading[] = Array.from(headingElements).map(
      (element) => ({
        id:
          element.id ||
          element.textContent?.toLowerCase().replace(/\s+/g, "-") ||
          "",
        text: element.textContent || "",
        level: parseInt(element.tagName.charAt(1)),
      })
    );

    // Add IDs to headings if they don't have them
    headingElements.forEach((element, index) => {
      if (!element.id) {
        element.id = headingData[index].id;
      }
    });

    setHeadings(headingData);

    // Set up intersection observer for active heading tracking
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((element) => {
      if (element.id) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (headings.length === 0) {
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
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                const paddingLeft = (heading.level - 1) * 16 + 12;

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
                    >
                      {heading.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
