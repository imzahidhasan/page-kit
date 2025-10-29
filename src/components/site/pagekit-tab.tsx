"use client";

import { Tabs } from "radix-ui";
import { motion } from "motion/react";
import { useState, ReactNode } from "react";

export interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface PagekitTabProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
  ariaLabel?: string;
}

const PagekitTab = ({
  tabs,
  defaultValue,
  className = "w-full",
  ariaLabel = "Tab options",
}: PagekitTabProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  return (
    <Tabs.Root
      defaultValue={defaultValue || tabs[0]?.value}
      className={className}
      onValueChange={setActiveTab}
    >
      <Tabs.List
        className="inline-flex h-12 items-center justify-start gap-1 rounded-lg bg-muted p-1 text-muted-foreground"
        aria-label={ariaLabel}
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground hover:bg-background/50 hover:text-foreground"
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md bg-background shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="mt-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default PagekitTab;
