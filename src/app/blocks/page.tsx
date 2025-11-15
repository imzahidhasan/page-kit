"use client";

import React from "react";
import {  Maximize2 } from "lucide-react";
import Link from "next/link";
import BlockToolbar from "@/components/site/block-toolbar";
import { Button } from "@/components/ui/button";

function Page() {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-end px-2 py-1 border-b">
        <div className="flex items-center space-x-2">
          <BlockToolbar command="login-page-1" />
          <Button variant="outline" size="icon" asChild>
            <Link href="/preview" target="_blank" rel="noopener noreferrer">
              <Maximize2 className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full">
        <iframe src={`/preview`} className="h-full w-full border-0" />
      </div>
    </div>
  );
}

export default Page;
