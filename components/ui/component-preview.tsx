"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  previewClassName?: string;
  codeClassName?: string;
  language?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  children,
  code,
  className,
  previewClassName,
  codeClassName,
  language = "tsx",
}) => {
  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          <div
            className={cn(
              "relative rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-950",
              previewClassName
            )}
          >
            <div className="flex items-center justify-center min-h-[200px]">
              {children}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <div
            className={cn(
              "relative rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
              codeClassName
            )}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {language.toUpperCase()}
              </span>
              <button
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  // You can add a toast notification here if needed
                }}
              >
                Copy
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-gray-800 dark:text-gray-200">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { ComponentPreview };
