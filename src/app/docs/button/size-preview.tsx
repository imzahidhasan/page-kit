"use client";

import Button from "@/components/core/button";

const SizePreview = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm" variant="primary">
        Small 
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
  );
};

export default SizePreview;
