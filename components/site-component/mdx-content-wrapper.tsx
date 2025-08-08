"use client";

import React, { useEffect } from "react";

interface MDXContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MDXContentWrapper({
  children,
  className = "",
}: MDXContentWrapperProps) {
  useEffect(() => {
    // Add data attribute to help OnThisPage component identify MDX content
    const contentElement = document.querySelector("main article");
    if (contentElement) {
      contentElement.setAttribute("data-mdx-content", "true");
    }
  }, []);

  return (
    <div
      className={`prose prose-gray max-w-none dark:prose-invert ${className}`}
      data-mdx-content="true"
    >
      {children}
    </div>
  );
}
