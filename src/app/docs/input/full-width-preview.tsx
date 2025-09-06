"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const FullWidthPreview = () => {
  const [values, setValues] = useState({
    normal: "",
    fullWidth: "",
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <Input
        label="Regular Width Input"
        value={values.normal}
        onChange={(e) => setValues({ ...values, normal: e.target.value })}
        placeholder="Regular width"
      />
      <Input
        label="Full Width Input"
        fullWidth
        value={values.fullWidth}
        onChange={(e) => setValues({ ...values, fullWidth: e.target.value })}
        placeholder="Full width input"
      />
    </div>
  );
};

export default FullWidthPreview;
