"use client";
import { ScrollArea } from "@/components/site/scroll-area";
import { navigation } from "@/navigation/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Sidebar = () => {
  const pathName = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    Object.fromEntries(navigation.map((_, index) => [index, true]))
  );

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <aside className="hidden md:block w-[240px] h-[calc(100dvh-57px)] sticky top-[57px] border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
      <ScrollArea className="h-full w-full">
        <nav className="py-8 px-3">
          <div className="space-y-6">
            {navigation.map((nav, index) => (
              <div key={`${nav.label}-${index}`} className="space-y-2">
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full flex items-center justify-between text-zinc-900 dark:text-zinc-100 font-semibold text-xs uppercase tracking-wider px-3 py-1 text-opacity-80 cursor-default select-none"
                >
                  <span>{nav.label}</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-200 opacity-40",
                      openCategories[index] ? "rotate-0" : "-rotate-90"
                    )}
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {openCategories[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-0.5">
                        {nav.children.map((child) => {
                          const isActive = pathName === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out relative",
                                isActive
                                  ? "text-blue-700 dark:text-blue-300"
                                  : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
                              )}
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="active-indicator"
                                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-500 dark:bg-blue-400 rounded-full z-10"
                                  transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 30,
                                  }}
                                />
                              )}
                              {isActive && (
                                <motion.div
                                  layoutId="active-bg"
                                  className="absolute inset-0 rounded-lg bg-blue-100 dark:bg-blue-950/30 shadow-sm"
                                  transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 30,
                                  }}
                                />
                              )}
                              <div className="absolute inset-0 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              <span className="relative truncate transition-transform duration-200 group-hover:translate-x-0.5">
                                {child.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
