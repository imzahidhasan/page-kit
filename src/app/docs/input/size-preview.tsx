"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const SizePreview = () => {
  const [values, setValues] = useState({
    small: "",
    medium: "",
    large: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Small Input"
        inputSize="sm"
        value={values.small}
        onChange={(e) => setValues({ ...values, small: e.target.value })}
        placeholder="Small sized input"
      />
      <Input
        label="Medium Input (Default)"
        inputSize="md"
        value={values.medium}
        onChange={(e) => setValues({ ...values, medium: e.target.value })}
        placeholder="Medium sized input"
      />
      <Input
        label="Large Input"
        inputSize="lg"
        value={values.large}
        onChange={(e) => setValues({ ...values, large: e.target.value })}
        placeholder="Large sized input"
      />
    </div>
  );
};

export default SizePreview;
