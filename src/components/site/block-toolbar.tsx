import React from "react";
import { Button } from "../ui/button";
import { Check, Terminal } from "lucide-react";

const packageManagers = [
  { name: "npm", template: "npx shadcn add @pagekit/" },
  { name: "yarn", template: "yarn shadcn add @pagekit/" },
  { name: "pnpm", template: "pnpm shadcn add @pagekit/" },
  { name: "bun", template: "bun shadcn add @pagekit/" },
];

function BlockToolbar({ command }: { command?: string }) {
  const [selectedPM] = React.useState(packageManagers[0]);
  const [copied, setCopied] = React.useState(false);

  const getFullCommand = () => {
    if (command) {
      return `${selectedPM.template}${command}`;
    }
    return selectedPM.template;
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(getFullCommand())
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      })
      .catch(() => {
        // Handle error silently
      });
  };

  return (
    <div className="w-full">
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="w-fit gap-1 px-2 shadow-none"
      >
        <Terminal className="h-4 w-4" />
        <span>{getFullCommand()}</span>
        {copied && <Check className="h-4 w-4 text-green-500" />}
      </Button>
    </div>
  );
}

export default BlockToolbar;
