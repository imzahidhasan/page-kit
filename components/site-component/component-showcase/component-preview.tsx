"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  previewClassName?: string;
  codeClassName?: string;
  language?: string;
  title?: string;
  description?: string;
  showWebpageFrame?: boolean;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  children,
  code,
  className,
  previewClassName,
  codeClassName,
  language = "tsx",
  title,
  description,
  showWebpageFrame = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          {showWebpageFrame ? (
            <div className="relative rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-950 overflow-hidden">
              {/* Browser-like header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                    localhost:3000
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Content area */}
              <div
                className={cn(
                  "p-8 min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900",
                  previewClassName
                )}
              >
                {children}
              </div>
            </div>
          ) : (
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
          )}
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <div
            className={cn(
              "relative rounded-lg border border-gray-200 bg-gray-900 dark:border-gray-700 overflow-hidden component-preview-code",
              codeClassName
            )}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {language === "tsx" ? "component.tsx" : `code.${language}`}
                </span>
              </div>
              <button
                className={cn(
                  "text-sm px-3 py-1 rounded transition-colors",
                  copied
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                )}
                onClick={handleCopy}
              >
                {copied ? (
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Copied!</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Copy</span>
                  </span>
                )}
              </button>
            </div>
            <div className="overflow-x-auto">
              <SyntaxHighlighter
                language={language}
                style={tomorrow}
                customStyle={{
                  background: "transparent",
                  padding: "1rem",
                  margin: 0,
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                }}
                codeTagProps={{
                  style: {
                    background: "transparent",
                    fontFamily:
                      'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                  },
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { ComponentPreview };
