"use client";
import { Input } from "@/components/core/input";

const DisabledInputPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Disabled Input"
        disabled
        value="This input is disabled"
        placeholder="You cannot edit this"
      />
    </div>
  );
};

export default DisabledInputPreview;
