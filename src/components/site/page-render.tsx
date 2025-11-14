"use client";
import React, { useState } from "react";
import { Maximize2, X } from "lucide-react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isFullPage, setIsFullPage] = useState(false);

  const toggleFullPage = () => {
    setIsFullPage(!isFullPage);
  };

  return (
    <>
      <div className="border border-gray-500 rounded-lg overflow-hidden min-h-[400px]  w-full relative">
        {/* Full Page Toggle Button */}
        <button
          onClick={toggleFullPage}
          className="absolute top-3 right-3 z-10 p-2 rounded-md bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
          title="Toggle full page preview"
        >
          <Maximize2 size={16} className="text-zinc-700 dark:text-zinc-300" />
        </button>

        <div className="h-full w-full flex justify-center items-center">
          {children}
        </div>
      </div>

      {/* Full Page Modal */}
      {isFullPage && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-950">
          {/* Close Button */}
          <button
            onClick={toggleFullPage}
            className="absolute top-4 right-4 z-10 p-2 rounded-md bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
            title="Exit full page preview"
          >
            <X size={20} className="text-zinc-700 dark:text-zinc-300" />
          </button>

          <div className="h-full w-full overflow-auto">{children}</div>
        </div>
      )}
    </>
  );
};

export default PageRender;
