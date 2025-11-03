"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PM_COMMANDS = {
  npm: "npx",
  pnpm: "pnpm dlx",
  yarn: "yarn dlx",
  bun: "bunx",
} as const;

type PackageManager = keyof typeof PM_COMMANDS;

type CommandProps = {
  command: string;
};

const Terminal = ({ command }: CommandProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<PackageManager>("npm");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden">
      {/* Tabs */}
      <Tabs.Root
        defaultValue="npm"
        className="w-full"
        onValueChange={(value) => setActiveTab(value as PackageManager)}
      >
        {/* Tab List */}
        <Tabs.List className="flex items-center gap-1 px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
          {(Object.keys(PM_COMMANDS) as PackageManager[]).map((pm) => (
            <Tabs.Trigger
              key={pm}
              value={pm}
              className={cn(
                "relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
                "data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100"
              )}
            >
              {activeTab === pm && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-md"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{pm}</span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tab Content */}
        {(Object.keys(PM_COMMANDS) as PackageManager[]).map((pm) => {
          const fullCommand = `${PM_COMMANDS[pm]} shadcn@latest ${command}`;

          return (
            <Tabs.Content key={pm} value={pm} className="focus:outline-none">
              <div className="relative flex items-start gap-2 px-4 py-4 bg-white dark:bg-zinc-950">
                <div className="font-mono text-sm flex items-start gap-2 flex-1 min-w-0 overflow-x-auto">
                  <span className="text-zinc-400 dark:text-zinc-500 select-none shrink-0">
                    $
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">
                      {PM_COMMANDS[pm]}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold whitespace-nowrap">
                      shadcn@latest
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                      {command}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(fullCommand)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded shrink-0 sticky right-0 bg-white dark:bg-zinc-950"
                  title="Copy to clipboard"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                      >
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  );
};

export default Terminal;
