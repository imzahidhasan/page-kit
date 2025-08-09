"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

interface MDXContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MDXContentWrapper({
  children,
  className = "",
}: MDXContentWrapperProps) {
  const pathname = usePathname();
  useEffect(() => {
    // Add data attribute to help OnThisPage component identify MDX content
    const contentElement = document.querySelector("main article");
    if (contentElement) {
      contentElement.setAttribute("data-mdx-content", "true");
    }
    // Inject anchor links for headings (h2-h4)
    const selector = "main article h2, main article h3, main article h4";
    const headings = document.querySelectorAll(selector);
    headings.forEach((h) => {
      if (!(h as HTMLElement).dataset.anchorized) {
        (h as HTMLElement).dataset.anchorized = "true";
        const id = h.id;
        if (id) {
          const a = document.createElement("a");
          a.href = `#${id}`;
          a.className = "anchor";
          a.innerText = "#";
          h.appendChild(a);
        }
      }
    });
  }, [pathname, children]);

  return (
    <div
      className={`prose prose-slate prose-lg max-w-none dark:prose-invert 
        prose-headings:scroll-mt-20 
        prose-headings:font-semibold
        prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-8
        prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
        dark:prose-h2:border-slate-800
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
        prose-p:text-slate-700 prose-p:leading-7 prose-p:mb-6
        dark:prose-p:text-slate-300
        prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium
        hover:prose-a:text-blue-700 hover:prose-a:underline
        dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
        prose-code:text-sm prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono
        prose-code:before:content-none prose-code:after:content-none
        dark:prose-code:bg-slate-800 dark:prose-code:text-slate-200
        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-200 prose-pre:rounded-xl prose-pre:p-4
        dark:prose-pre:bg-slate-900 dark:prose-pre:border-slate-800
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
        dark:prose-blockquote:bg-blue-950/20 dark:prose-blockquote:border-blue-400
        prose-ul:my-6 prose-ol:my-6
        prose-li:my-2 prose-li:leading-7
        prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-table:rounded-lg
        prose-th:bg-slate-50 prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-slate-200 prose-th:font-semibold
        prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-slate-200
        dark:prose-table:border-slate-700 dark:prose-th:bg-slate-800 dark:prose-th:border-slate-700
        dark:prose-td:border-slate-700
        ${className}`}
      data-mdx-content="true"
    >
      {children}
    </div>
  );
}
