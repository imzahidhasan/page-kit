"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const HelperTextPreview = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Input with Helper Text"
        helperText="This is a hint to help the user with this field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a value"
      />
    </div>
  );
};

export default HelperTextPreview;
