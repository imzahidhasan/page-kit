import React from "react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Check, ChevronDown, Copy } from "lucide-react";

const packageManagers = [
  { name: "npm", template: "npx shadcn@latest add @pagekit/" },
  { name: "yarn", template: "yarn shadcn@latest add @pagekit/" },
  { name: "pnpm", template: "pnpm shadcn@latest add @pagekit/" },
  { name: "bun", template: "bun shadcn@latest add @pagekit/" },
];

function BlockToolbar({ command }: { command?: string }) {
  const [selectedPM, setSelectedPM] = React.useState(packageManagers[0]);
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
      <ButtonGroup className="w-full">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="flex-1 min-w-0 h-8 sm:h-9 px-2 sm:px-3"
        >
          <code className="text-[10px] xs:text-xs sm:text-sm truncate max-w-full overflow-hidden">
            {getFullCommand()}
          </code>
          {copied ? (
            <Check className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 flex-shrink-0 text-green-500" />
          ) : (
            <Copy className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 flex-shrink-0" />
          )}
        </Button>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="px-1.5 sm:px-2 h-8 sm:h-9 flex-shrink-0"
            >
              <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {packageManagers.map((pm) => (
              <DropdownMenuItem
                key={pm.name}
                onClick={() => setSelectedPM(pm)}
                className="cursor-pointer"
              >
                {pm.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  );
}

export default BlockToolbar;
