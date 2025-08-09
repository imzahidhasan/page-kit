"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: "Getting Started",
    children: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Components",
    children: [
      { title: "Overview", href: "/docs/components" },
      { title: "Button", href: "/docs/button" },
      { title: "Input", href: "/docs/input" },
      { title: "Card", href: "/docs/card" },
      { title: "Modal", href: "/docs/modal" },
    ],
  },
  {
    title: "Layout",
    children: [
      { title: "Grid System", href: "/docs/layout/grid" },
      { title: "Spacing", href: "/docs/layout/spacing" },
      { title: "Breakpoints", href: "/docs/layout/breakpoints" },
    ],
  },
  {
    title: "Theming",
    children: [
      { title: "Colors", href: "/docs/theming/colors" },
      { title: "Typography", href: "/docs/theming/typography" },
      { title: "Dark Mode", href: "/docs/theming/dark-mode" },
    ],
  },
  {
    title: "Advanced",
    children: [
      { title: "Customization", href: "/docs/advanced/customization" },
      { title: "Performance", href: "/docs/advanced/performance" },
      { title: "Accessibility", href: "/docs/advanced/accessibility" },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Getting Started",
  ]);

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

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.title);
    const isCurrentActive = item.href ? isActive(item.href) : false;

    if (hasChildren) {
      return (
        <div key={item.title} className="mb-2">
          <button
            onClick={() => toggleExpanded(item.title)}
            className={`
              flex items-center justify-between w-full px-3 py-2 text-left rounded-lg
              transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800
              ${
                level === 0
                  ? "font-medium text-slate-900 dark:text-slate-100"
                  : "text-slate-700 dark:text-slate-300"
              }
            `}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            <span>{item.title}</span>
            {isExpanded ? (
              <ChevronDown size={16} className="text-slate-500" />
            ) : (
              <ChevronRight size={16} className="text-slate-500" />
            )}
          </button>

          {isExpanded && (
            <div className="mt-1 space-y-1">
              {item.children?.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    if (item.href) {
      return (
        <Link
          key={item.title}
          href={item.href}
          className={`
            block px-3 py-2 rounded-lg text-sm transition-colors duration-200
            ${
              isCurrentActive
                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            }
          `}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          {item.title}
        </Link>
      );
    }

    return null;
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
        {navigationItems.map((item) => renderNavItem(item))}
      </div>
    </nav>
  );
}
