"use client";

import Button from "@/components/core/button";
import React from "react";
import { Loader } from "lucide-react";

const StatePreview = () => {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button disabled variant="primary">
        Disabled Button
      </Button>
      <Button
        isLoading={loading}
        onClick={handleLoadingClick}
        variant="primary"
      >
        {loading ? "Loading..." : "Click to Load"}
      </Button>
      <Button
        leftIcon={
          loading ? <Loader className="h-4 w-4 animate-spin" /> : undefined
        }
        onClick={handleLoadingClick}
        variant="secondary"
      >
        Custom Loading
      </Button>
    </div>
  );
};

export default StatePreview;
