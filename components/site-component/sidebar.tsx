"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { getSidebarSections, type DocItem } from "@/lib/registry-helpers";

interface SidebarSection {
  title: string;
  items: DocItem[];
}

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Getting Started",
  ]);

  // Get navigation structure from component registry
  const sidebarSections: SidebarSection[] = getSidebarSections();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const renderSection = (section: SidebarSection) => {
    const isExpanded = expandedItems.includes(section.title);

    return (
      <div key={section.title} className="mb-2">
        <button
          onClick={() => toggleExpanded(section.title)}
          className={`
            flex items-center justify-between w-full px-3 py-2 text-left rounded-lg
            transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800
            font-medium text-slate-900 dark:text-slate-100
          `}
        >
          <span>{section.title}</span>
          {isExpanded ? (
            <ChevronDown size={16} className="text-slate-500" />
          ) : (
            <ChevronRight size={16} className="text-slate-500" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-1 space-y-1">
            {section.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const isCurrentActive = isActive(href);

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`
                    block px-3 py-2 rounded-lg text-sm transition-colors duration-200
                    ${
                      isCurrentActive
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    }
                  `}
                  style={{ paddingLeft: `28px` }}
                  title={item.description}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={className}>
      {/* Simple header */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
          Documentation
        </h2>
      </div>

      <div className="space-y-1">
        {sidebarSections.map((section) => renderSection(section))}
      </div>
    </nav>
  );
}
