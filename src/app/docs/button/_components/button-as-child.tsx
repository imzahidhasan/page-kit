import { Button } from "@/registry/ui/button";
import Link from "next/link";

export default function ButtonAsChild() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button asChild>
        <Link href="/docs">Documentation</Link>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Button>
    </div>
  );
}
