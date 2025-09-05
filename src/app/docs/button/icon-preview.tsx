"use client";

import Button from "@/components/core/button";
import { ArrowRight, Download, Send, Plus } from "lucide-react";

const IconPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button leftIcon={<ArrowRight className="h-4 w-4" />} variant="primary">
          Left Icon
        </Button>
        <Button
          rightIcon={<ArrowRight className="h-4 w-4" />}
          variant="primary"
        >
          Right Icon
        </Button>
        <Button
          leftIcon={<ArrowRight className="h-4 w-4" />}
          rightIcon={<ArrowRight className="h-4 w-4" />}
          variant="outline"
        >
          Both Icons
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button leftIcon={<Download className="h-4 w-4" />} variant="secondary">
          Download
        </Button>
        <Button rightIcon={<Send className="h-4 w-4" />} variant="outline">
          Send Message
        </Button>
        <Button leftIcon={<Plus className="h-4 w-4" />} variant="ghost">
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default IconPreview;
