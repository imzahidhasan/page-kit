import { Button } from "@/registry/ui/button";
import { ChevronRight, Settings, Download } from "lucide-react";

export default function ButtonIcon() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button variant="ghost" size="icon">
        <Settings />
      </Button>
      <Button size="icon">
        <Download />
      </Button>
    </div>
  );
}
