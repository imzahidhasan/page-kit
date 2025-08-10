"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check, Terminal, Play } from "lucide-react";

interface CommandPreviewProps {
  commands: string | string[];
  title?: string;
  description?: string;
  className?: string;
  showLineNumbers?: boolean;
  prompt?: string;
  theme?: "dark" | "light";
  language?: "bash" | "powershell" | "cmd" | "zsh" | "fish";
  allowCopy?: boolean;
  showExecuteButton?: boolean;
  onExecute?: (command: string) => void;
}

const CommandPreview: React.FC<CommandPreviewProps> = ({
  commands,
  title,
  description,
  className,
  showLineNumbers = false,
  prompt = "$",
  theme = "dark",
  language = "bash",
  allowCopy = true,
  showExecuteButton = false,
  onExecute,
}) => {
  const [copied, setCopied] = useState(false);
  const commandArray = Array.isArray(commands) ? commands : [commands];

  const handleCopy = async () => {
    try {
      const commandText = commandArray.join("\n");
      await navigator.clipboard.writeText(commandText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleExecute = (command: string) => {
    if (onExecute) {
      onExecute(command);
    }
  };

  const getShellInfo = () => {
    switch (language) {
      case "powershell":
        return { name: "PowerShell", icon: "PS", color: "text-blue-400" };
      case "cmd":
        return {
          name: "Command Prompt",
          icon: "CMD",
          color: "text-yellow-400",
        };
      case "zsh":
        return { name: "Zsh", icon: "ZSH", color: "text-green-400" };
      case "fish":
        return { name: "Fish", icon: "FISH", color: "text-purple-400" };
      default:
        return { name: "Bash", icon: "BASH", color: "text-green-400" };
    }
  };

  const shellInfo = getShellInfo();

  const isDark = theme === "dark";
  const bgClass = isDark
    ? "bg-gray-900 border-gray-700"
    : "bg-white border-gray-200";
  const headerBgClass = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-gray-50 border-gray-200";
  const promptClass = isDark ? "text-green-400" : "text-green-600";
  const commandClass = isDark ? "text-gray-100" : "text-gray-800";

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

      <div
        className={cn("relative rounded-lg border overflow-hidden", bgClass)}
      >
        {/* Terminal Header */}
        <div
          className={cn(
            "flex items-center justify-between px-4 py-3 border-b",
            headerBgClass
          )}
        >
          <div className="flex items-center space-x-3">
            {/* Traffic Light Buttons */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Shell Info */}
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {shellInfo.name}
              </span>
              <span
                className={cn(
                  "text-xs font-mono px-2 py-1 rounded",
                  shellInfo.color,
                  "bg-opacity-10 bg-current"
                )}
              >
                {shellInfo.icon}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {allowCopy && (
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center space-x-1 px-3 py-1 rounded text-sm transition-colors",
                  copied
                    ? "bg-green-600 text-white"
                    : isDark
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                )}
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          {commandArray.map((command, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <div className="flex items-start space-x-2 group">
                {/* Line Number */}
                {showLineNumbers && (
                  <span className="text-gray-500 dark:text-gray-400 select-none min-w-[2rem] text-right">
                    {index + 1}
                  </span>
                )}

                {/* Prompt */}
                <span className={cn("select-none", promptClass)}>{prompt}</span>

                {/* Command */}
                <div className="flex-1 flex items-center justify-between">
                  <span className={cn("break-all", commandClass)}>
                    {command}
                  </span>

                  {/* Execute Button */}
                  {showExecuteButton && onExecute && (
                    <button
                      onClick={() => handleExecute(command)}
                      className={cn(
                        "ml-2 opacity-0 group-hover:opacity-100 transition-opacity",
                        "flex items-center space-x-1 px-2 py-1 rounded text-xs",
                        isDark
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      )}
                      title="Execute command"
                    >
                      <Play className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CommandPreview };
