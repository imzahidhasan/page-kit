"use client";
import { Input } from "@/components/core/input";

const FileInputPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="File Upload"
        isFileInput
        accept="image/*,.pdf"
        placeholder="Choose a file"
      />
    </div>
  );
};

export default FileInputPreview;
