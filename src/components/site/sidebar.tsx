"use client";
import { ScrollArea } from "@/components/site/scroll-area";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="hidden md:block w-[240px] h-[calc(100dvh-57px)] sticky top-[57px] border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
      <ScrollArea className="h-full w-full">
        <nav className="py-8 px-3">
          <div className="space-y-6">
            {navigation.map((nav, index) => (
              <div key={`${nav.label}-${index}`} className="space-y-2">
                <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs uppercase tracking-wider px-3 py-1 text-opacity-80">
                  {nav.label}
                </h3>
                <div className="space-y-0.5">
                  {nav.children.map((child) => {
                    const isActive = pathName === child.href;

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out relative",
                          isActive
                            ? "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 shadow-sm"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                        )}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-200" />
                        )}
                        <span className="truncate transition-transform duration-200 group-hover:translate-x-0.5">
                          {child.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
