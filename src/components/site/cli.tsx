"use client";

import React, { useState } from "react";
import CodeCopy from "./code-copy";
import { cn } from "@/lib/utils";

const PM_COMMANDS = {
  npm: "npx",
  pnpm: "pnpm dlx",
  yarn: "yarn dlx",
  bun: "bunx",
} as const;

type PackageManager = keyof typeof PM_COMMANDS;

type CliProps = {
  command: string;
};

export const Cli = ({ command }: CliProps) => {
  const [pm, setPm] = useState<PackageManager>("npm");

  const fullCommand = `${PM_COMMANDS[pm]} shadcn@latest ${command}`;

  return (
    <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg overflow-hidden">
      {/* PM Selector Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-1">
          {/* Terminal dots */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            {(Object.keys(PM_COMMANDS) as PackageManager[]).map((name) => (
              <button
                key={name}
                onClick={() => setPm(name)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700",
                  name === pm
                    ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <CodeCopy
          className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
          code={fullCommand}
        />
      </div>

      {/* Terminal Content */}
      <div className="text-sm text-left font-mono font-medium bg-white dark:bg-zinc-950 px-6 py-5 overflow-x-auto">
        <div className="flex items-center gap-1">
          <span className="text-green-500 dark:text-cyan-400 font-semibold">{PM_COMMANDS[pm]}</span>
          <span className="text-purple-400 dark:text-purple-400 font-semibold">shadcn@latest</span>
          <span className="text-zinc-900 dark:text-zinc-100">{command}</span>
        </div>
      </div>
    </div>
  );
};
