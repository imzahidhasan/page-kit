"use client";

import React from "react";
import { Fullscreen, Maximize2 } from "lucide-react";
import Link from "next/link";
import BlockToolbar from "@/components/site/block-toolbar";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-end px-2 py-1">
        <div className="flex items-center space-x-2">
          <BlockToolbar command="login-page-1" />
          <Button variant="outline" size="sm" asChild>
            <Link href="/preview" target="_blank" rel="noopener noreferrer">
              <Fullscreen className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mb-5">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={120} minSize={30}>
            <div className="w-full rounded-lg h-[700px] overflow-auto">
              <iframe src={`/preview`} height="100%" width="100%" />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="w-0" />
          <ResizablePanel defaultSize={0} className="pr-1.5" />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default Page;
