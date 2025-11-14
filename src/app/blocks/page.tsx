import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

function page() {
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={120} minSize={30} >
          <div className="w-full h-full">
            <iframe src={`/preview`} className="h-full w-full border-0" />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-0" />
        <ResizablePanel defaultSize={0} className="pr-2" />
      </ResizablePanelGroup>
    </div>
  );
}

export default page;
