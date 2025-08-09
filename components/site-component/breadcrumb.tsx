"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface BreadcrumbProps {
  className?: string;
}

export default function Breadcrumb({ className = "" }: BreadcrumbProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from the current path
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/", icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      return { label, href };
    }),
  ];

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 rounded-xl px-4 py-2 shadow-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  className="mx-2 text-slate-400 dark:text-slate-500"
                />
              )}

              {isLast ? (
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {Icon ? <Icon size={16} className="inline mr-1" /> : null}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors font-medium"
                >
                  {Icon ? <Icon size={16} className="inline mr-1" /> : null}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
