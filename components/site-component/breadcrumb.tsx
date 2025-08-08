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
      className={`flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="mx-2 text-gray-400" />
              )}

              {isLast ? (
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {Icon ? <Icon size={16} className="inline mr-1" /> : null}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
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
